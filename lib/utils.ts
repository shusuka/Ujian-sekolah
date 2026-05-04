import { Question, ISQuestion, UTQuestion, AnswerRecord, SCORE_PG, SCORE_IS, SCORE_UT, SCORE_UT_HALF } from "./types";

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function gradeISAnswer(question: ISQuestion, studentAnswer: string): boolean {
  if (!studentAnswer || studentAnswer.trim() === "") return false;
  const normalized = studentAnswer.trim().toLowerCase();
  return question.acceptedAnswers.some((accepted) =>
    normalized.includes(accepted.toLowerCase()) ||
    accepted.toLowerCase().includes(normalized)
  );
}

// Auto-grade UT based on keyword matching against keyPoints
export function gradeUTAnswer(question: UTQuestion, studentAnswer: string): "benar" | "setengah" | "salah" {
  if (!studentAnswer || studentAnswer.trim().length < 5) return "salah";
  const normalized = studentAnswer.trim().toLowerCase();

  const points = question.keyPoints;
  if (points.length === 0) {
    // Fallback: match words from modelAnswer
    const words = question.modelAnswer.toLowerCase().split(/\s+/).filter(w => w.length > 4);
    const matched = words.filter(w => normalized.includes(w)).length;
    const ratio = matched / Math.max(words.length, 1);
    if (ratio >= 0.5) return "benar";
    if (ratio >= 0.25) return "setengah";
    return "salah";
  }

  const matched = points.filter(kp => {
    const kpWords = kp.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    return kpWords.some(w => normalized.includes(w));
  }).length;

  const ratio = matched / points.length;
  if (ratio >= 0.6) return "benar";
  if (ratio >= 0.3) return "setengah";
  return "salah";
}

export function calculateScore(answers: AnswerRecord[]): {
  total: number;
  maxTotal: number;
  pg: number;
  is: number;
  ut: number;
  pgCorrect: number;
  isCorrect: number;
} {
  let pg = 0, is = 0, ut = 0, pgCorrect = 0, isCorrect = 0;
  const maxPg = answers.filter((a) => a.questionType === "PG").length * SCORE_PG;
  const maxIs = answers.filter((a) => a.questionType === "IS").length * SCORE_IS;
  const maxUt = answers.filter((a) => a.questionType === "UT").length * SCORE_UT;

  for (const ans of answers) {
    if (ans.questionType === "PG") {
      if (ans.isCorrect) { pg += SCORE_PG; pgCorrect++; }
    } else if (ans.questionType === "IS") {
      if (ans.isCorrect) { is += SCORE_IS; isCorrect++; }
    } else if (ans.questionType === "UT") {
      if (ans.selfGrade === "benar") ut += SCORE_UT;
      else if (ans.selfGrade === "setengah") ut += SCORE_UT_HALF;
    }
  }

  return {
    total: pg + is + ut,
    maxTotal: maxPg + maxIs + maxUt,
    pg, is, ut, pgCorrect, isCorrect,
  };
}

export function getScoreGrade(score: number, max: number): {
  letter: string;
  label: string;
  color: string;
} {
  if (max === 0) return { letter: "-", label: "Tidak ada soal", color: "text-gray-500" };
  const pct = (score / max) * 100;
  if (pct >= 90) return { letter: "A", label: "Sangat Baik", color: "text-green-600" };
  if (pct >= 80) return { letter: "B", label: "Baik", color: "text-blue-600" };
  if (pct >= 70) return { letter: "C", label: "Cukup", color: "text-yellow-600" };
  if (pct >= 60) return { letter: "D", label: "Kurang", color: "text-orange-600" };
  return { letter: "E", label: "Sangat Kurang", color: "text-red-600" };
}

export function buildQuestionsFromBank(
  bank: { pg: any[]; is: any[]; ut: any[] },
  session: { pg: number[]; is: number[]; ut: number[] },
  subjectId: string
): Question[] {
  const questions: Question[] = [];
  let num = 1;

  for (const idx of session.pg) {
    const q = bank.pg[idx];
    if (!q) continue;
    questions.push({ ...q, id: `${subjectId}_pg_${idx}`, type: "PG", number: num++ });
  }
  for (const idx of session.is) {
    const q = bank.is[idx];
    if (!q) continue;
    questions.push({ ...q, id: `${subjectId}_is_${idx}`, type: "IS", number: num++ });
  }
  for (const idx of session.ut) {
    const q = bank.ut[idx];
    if (!q) continue;
    questions.push({ ...q, id: `${subjectId}_ut_${idx}`, type: "UT", number: num++ });
  }
  return questions;
}

export function getQuestionTypeLabel(type: string): string {
  if (type === "PG") return "Pilihan Ganda";
  if (type === "IS") return "Isian";
  return "Uraian";
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Render text that may contain fraction notation like [1/2] or (3/4)
// Returns segments: { text: string, isFraction?: boolean, num?: string, den?: string }
export type TextSegment =
  | { type: "text"; value: string }
  | { type: "fraction"; numerator: string; denominator: string };

export function parseTextWithFractions(text: string): TextSegment[] {
  // Match patterns like [1/2], (3/4), or standalone fractions like 1/2 surrounded by spaces
  const fractionRegex = /\[(\d+)\s*\/\s*(\d+)\]|\((\d+)\s*\/\s*(\d+)\)/g;
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  let match;

  while ((match = fractionRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    const num = match[1] || match[3];
    const den = match[2] || match[4];
    segments.push({ type: "fraction", numerator: num, denominator: den });
    lastIndex = fractionRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ type: "text", value: text }];
}
