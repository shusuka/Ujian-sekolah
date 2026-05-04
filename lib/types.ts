export type QuestionType = "PG" | "IS" | "UT";
export type LevelKognitif = "C1" | "C2" | "C3" | "C4" | "C5";

export interface PGQuestion {
  id: string;
  type: "PG";
  number: number;
  question: string;
  imageUrl?: string;          // optional image for the question
  options: string[];
  correctAnswer: number;      // index 0-3
  materi: string;
  subMateri?: string;
  tujuanPembelajaran: string;
  levelKognitif: LevelKognitif;
}

export interface ISQuestion {
  id: string;
  type: "IS";
  number: number;
  question: string;
  imageUrl?: string;
  acceptedAnswers: string[];  // list of accepted keywords (case-insensitive)
  modelAnswer: string;        // shown after submission
  materi: string;
  subMateri?: string;
  tujuanPembelajaran: string;
  levelKognitif: LevelKognitif;
}

export interface UTQuestion {
  id: string;
  type: "UT";
  number: number;
  question: string;
  imageUrl?: string;
  modelAnswer: string;        // shown after submission
  keyPoints: string[];        // keywords used for auto-grading
  materi: string;
  subMateri?: string;
  tujuanPembelajaran: string;
  levelKognitif: LevelKognitif;
}

export type Question = PGQuestion | ISQuestion | UTQuestion;

export interface SessionData {
  pg: number[];
  is: number[];
  ut: number[];
}

export interface SubjectQuestionBank {
  pg: Omit<PGQuestion, "id" | "number" | "type">[];
  is: Omit<ISQuestion, "id" | "number" | "type">[];
  ut: Omit<UTQuestion, "id" | "number" | "type">[];
  sessions: SessionData[];
}

export interface SubjectInfo {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  timeLimit: number; // in minutes
  pgCount: number;
  isCount: number;
  utCount: number;
  description: string;
}

export interface StudentInfo {
  name: string;
  className: string;
  school: string;
}

export interface QuizSession {
  student: StudentInfo;
  subject: SubjectInfo;
  sessionNumber: number; // 1-5
  questions: Question[];
  startTime: Date;
}

export interface AnswerRecord {
  questionId: string;
  questionType: QuestionType;
  studentAnswer: string | null;
  isCorrect: boolean | null;  // null for UT
  pointsEarned: number;
  selfGrade?: "benar" | "setengah" | "salah"; // auto-computed for UT
}

export interface QuizResult {
  student: StudentInfo;
  subject: SubjectInfo;
  sessionNumber: number;
  answers: AnswerRecord[];
  totalScore: number;
  maxScore: number;
  pgScore: number;
  isScore: number;
  utScore: number;
  pgCorrect: number;
  isCorrect: number;
  completedAt: Date;
  timeTaken: number; // seconds
}

// Scoring constants
export const SCORE_PG = 2;       // per correct PG (25 × 2 = 50)
export const SCORE_IS = 3;       // per correct IS (10 × 3 = 30)
export const SCORE_UT = 4;       // full UT  (5 × 4 = 20)
export const SCORE_UT_HALF = 2;  // half UT
