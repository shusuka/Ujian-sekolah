import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Question, SubjectInfo } from "./types";
import { buildQuestionsFromBank } from "./utils";
import { allQuestionBanks } from "@/data/questions";
import { SUBJECTS } from "@/data/subjects";

// Fetch with 5-second timeout, fall back to local data instantly
async function fetchWithTimeout<T>(promise: Promise<T>, ms = 5000): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}

export async function fetchSessionQuestions(
  subjectId: string,
  sessionNumber: number
): Promise<Question[]> {
  try {
    const ref = doc(db, "subjects", subjectId, "sessions", `session_${sessionNumber}`);
    const snap = await fetchWithTimeout(getDoc(ref), 5000);
    if (snap.exists()) {
      const data = snap.data().questions as Question[];
      if (data && data.length > 0) return data;
    }
  } catch (err) {
    console.warn("Firebase fetch failed/timeout, using local data:", err);
  }
  // Instant fallback to local data
  return getLocalQuestions(subjectId, sessionNumber);
}

export function getLocalQuestions(subjectId: string, sessionNumber: number): Question[] {
  const bank = allQuestionBanks[subjectId];
  if (!bank) return [];
  const sessionIdx = Math.min(sessionNumber - 1, bank.sessions.length - 1);
  const session = bank.sessions[sessionIdx];
  return buildQuestionsFromBank(bank, session, subjectId);
}

export async function uploadSubjectSessions(subjectId: string): Promise<void> {
  const bank = allQuestionBanks[subjectId];
  if (!bank) return;
  for (let i = 0; i < bank.sessions.length; i++) {
    const questions = buildQuestionsFromBank(bank, bank.sessions[i], subjectId);
    const ref = doc(db, "subjects", subjectId, "sessions", `session_${i + 1}`);
    await setDoc(ref, { questions, updatedAt: new Date().toISOString() });
    console.log(`✅ Uploaded ${subjectId} session ${i + 1} (${questions.length} questions)`);
  }
}

export async function getAvailableSubjects(): Promise<SubjectInfo[]> {
  return SUBJECTS;
}
