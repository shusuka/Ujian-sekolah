import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";
import { Question } from "./types";

/** Fetch all questions for a specific session from Firestore */
export async function getSessionQuestions(
  subjectId: string,
  sessionNum: number
): Promise<Question[]> {
  const docRef = doc(db, "subjects", subjectId, "sessions", `session_${sessionNum}`);
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    return (snap.data().questions as Question[]) ?? [];
  }
  return [];
}

/** Save all questions for a specific session to Firestore */
export async function saveSessionQuestions(
  subjectId: string,
  sessionNum: number,
  questions: Question[]
): Promise<void> {
  const docRef = doc(db, "subjects", subjectId, "sessions", `session_${sessionNum}`);
  await setDoc(docRef, { questions, updatedAt: new Date().toISOString() });
}

/** Upload an image to Firebase Storage and return the download URL */
export async function uploadQuestionImage(
  file: File,
  subjectId: string,
  questionId: string
): Promise<string> {
  const ext = file.name.split(".").pop() ?? "jpg";
  const storageRef = ref(
    storage,
    `question-images/${subjectId}/${questionId}-${Date.now()}.${ext}`
  );
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}
