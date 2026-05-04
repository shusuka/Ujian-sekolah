"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Question, StudentInfo, AnswerRecord, SCORE_PG, SCORE_IS, SCORE_UT, SCORE_UT_HALF } from "@/lib/types";
import { getSubjectById } from "@/data/subjects";
import { fetchSessionQuestions } from "@/lib/firestore";
import { gradeISAnswer, gradeUTAnswer } from "@/lib/utils";
import Timer from "@/components/Timer";
import QuestionNavigator from "@/components/QuestionNavigator";
import QuestionCard from "@/components/QuestionCard";
import { ChevronLeft, ChevronRight, Send, AlertTriangle, Home } from "lucide-react";

export default function QuizPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const subjectId = params.subject as string;
  const sessionNumber = parseInt(searchParams.get("session") || "1");

  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [autoGrades, setAutoGrades] = useState<("benar" | "setengah" | "salah" | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [startTime] = useState(Date.now());

  const subject = getSubjectById(subjectId);

  useEffect(() => {
    const stored = sessionStorage.getItem("studentInfo");
    if (!stored) { router.replace("/"); return; }
    setStudent(JSON.parse(stored));
  }, [router]);

  useEffect(() => {
    if (!subject) return;
    setIsLoading(true);
    fetchSessionQuestions(subjectId, sessionNumber).then((qs) => {
      setQuestions(qs);
      setAnswers(new Array(qs.length).fill(null));
      setAutoGrades(new Array(qs.length).fill(null));
      setIsLoading(false);
    });
  }, [subjectId, sessionNumber, subject]);

  const handleAnswer = useCallback((answer: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = answer;
      return next;
    });
  }, [currentIndex]);

  const handleTimeUp = useCallback(() => {
    if (!isSubmitted) submitQuiz();
  }, [isSubmitted]); // eslint-disable-line

  const submitQuiz = useCallback(() => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    setShowConfirm(false);

    const computedGrades: ("benar" | "setengah" | "salah" | null)[] = [];

    const answerRecords: AnswerRecord[] = questions.map((q, i) => {
      const studentAnswer = answers[i] || "";
      let isCorrect: boolean | null = null;
      let pointsEarned = 0;
      let selfGrade: "benar" | "setengah" | "salah" | undefined;

      if (q.type === "PG") {
        isCorrect = studentAnswer === String((q as any).correctAnswer);
        pointsEarned = isCorrect ? SCORE_PG : 0;
        computedGrades.push(null);
      } else if (q.type === "IS") {
        isCorrect = gradeISAnswer(q as any, studentAnswer);
        pointsEarned = isCorrect ? SCORE_IS : 0;
        computedGrades.push(null);
      } else {
        // UT — auto-grade with keyword matching
        selfGrade = gradeUTAnswer(q as any, studentAnswer);
        pointsEarned = selfGrade === "benar" ? SCORE_UT : selfGrade === "setengah" ? SCORE_UT_HALF : 0;
        isCorrect = selfGrade === "benar";
        computedGrades.push(selfGrade);
      }

      return {
        questionId: q.id,
        questionType: q.type,
        studentAnswer: studentAnswer || null,
        isCorrect,
        pointsEarned,
        selfGrade,
      };
    });

    setAutoGrades(computedGrades);

    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const result = {
      student,
      subject,
      sessionNumber,
      answers: answerRecords,
      questions,
      timeTaken,
    };
    sessionStorage.setItem("quizResult", JSON.stringify(result));
  }, [isSubmitted, questions, answers, startTime, student, subject, sessionNumber]);

  if (!subject) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-500 text-lg font-bold">Mata pelajaran tidak ditemukan.</p>
        <button onClick={() => router.push("/subjects")} className="mt-4 text-blue-600 underline">Kembali</button>
      </div>
    </div>
  );

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600 font-semibold">Memuat soal...</p>
        <p className="text-gray-400 text-sm mt-1">{subject.name}</p>
        <p className="text-gray-400 text-xs mt-1">Mengambil data dari server...</p>
      </div>
    </div>
  );

  const currentQuestion = questions[currentIndex];
  const answeredCount = answers.filter((a) => a !== null && a !== "").length;

  return (
    <div className="min-h-screen flex flex-col pb-14 lg:pb-0">
      {/* Header */}
      <header className={`${subject.bgColor} border-b-2 ${subject.borderColor} py-3 px-4 shadow-sm`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            {/* Home button */}
            <button
              onClick={() => router.push("/subjects")}
              className="flex-shrink-0 flex items-center gap-1.5 bg-white/70 hover:bg-white px-2.5 py-1.5 rounded-lg text-gray-600 hover:text-gray-800 text-xs font-semibold transition-all border border-gray-200 shadow-sm"
            >
              <Home size={12} />
              <span className="hidden sm:inline">Ganti Mapel</span>
            </button>
            <div className="min-w-0">
              <h1 className={`font-black text-sm ${subject.color} truncate`}>{subject.icon} {subject.shortName}</h1>
              <p className="text-gray-500 text-xs truncate">
                {student?.name} · Sesi {sessionNumber}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-gray-500 hidden sm:block">{answeredCount}/{questions.length}</span>
            {!isSubmitted ? (
              <Timer totalSeconds={subject.timeLimit * 60} onTimeUp={handleTimeUp} isSubmitted={isSubmitted} />
            ) : (
              <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap">✓ Selesai</span>
            )}
          </div>
        </div>
      </header>

      <div className="flex-1 flex max-w-6xl mx-auto w-full px-4 py-4 gap-4">
        {/* Sidebar */}
        <aside className="w-52 flex-shrink-0 hidden lg:block">
          <div className="sticky top-4">
            <QuestionNavigator questions={questions} currentIndex={currentIndex} answers={answers} onSelect={setCurrentIndex} />
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <QuestionCard
            question={currentQuestion}
            answer={answers[currentIndex]}
            onAnswer={handleAnswer}
            isSubmitted={isSubmitted}
            autoGrade={autoGrades[currentIndex]}
          />

          {/* Navigation bar */}
          <div className="flex items-center justify-between bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} /> Sebelumnya
            </button>

            <span className="text-sm text-gray-500 font-medium">{currentIndex + 1} / {questions.length}</span>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((i) => i + 1)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold text-sm ${subject.bgColor} ${subject.color} border-2 ${subject.borderColor} hover:shadow-md transition-all`}
              >
                Selanjutnya <ChevronRight size={16} />
              </button>
            ) : !isSubmitted ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 shadow-md transition-all"
              >
                <Send size={15} /> Kumpulkan
              </button>
            ) : (
              <button
                onClick={() => router.push("/results")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-md transition-all"
              >
                Lihat Nilai →
              </button>
            )}
          </div>

          {/* Submit CTA */}
          {!isSubmitted && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowConfirm(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 shadow-lg shadow-green-200 transition-all"
              >
                <Send size={16} /> Kumpulkan Jawaban
                {answeredCount < questions.length && (
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{questions.length - answeredCount} belum</span>
                )}
              </button>
            </div>
          )}

          {/* After submit CTA */}
          {isSubmitted && (
            <div className="flex justify-center gap-3">
              <button
                onClick={() => router.push("/subjects")}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-all"
              >
                <Home size={16} /> Ganti Mapel
              </button>
              <button
                onClick={() => router.push("/results")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
              >
                🏆 Lihat Nilai Akhir
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile navigator */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-2">
        <div className="flex gap-1.5 overflow-x-auto">
          {questions.map((q, i) => {
            const answered = answers[i] !== null && answers[i] !== "";
            const colors: Record<string, string> = {
              PG: answered ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-400 border-blue-200",
              IS: answered ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-400 border-orange-200",
              UT: answered ? "bg-purple-500 text-white" : "bg-purple-50 text-purple-400 border-purple-200",
            };
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(i)}
                className={`w-8 h-8 rounded-lg text-xs font-bold border flex-shrink-0 flex items-center justify-center ${colors[q.type]} ${i === currentIndex ? "ring-2 ring-gray-800 scale-110" : ""}`}
              >
                {q.number}
              </button>
            );
          })}
        </div>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-bounce-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-black text-gray-800">Kumpulkan Jawaban?</h3>
              <p className="text-gray-500 text-sm mt-2">
                Sudah menjawab <strong className="text-gray-700">{answeredCount}</strong> dari{" "}
                <strong className="text-gray-700">{questions.length}</strong> soal.
              </p>
              {answeredCount < questions.length && (
                <p className="text-orange-600 text-xs mt-1">⚠️ {questions.length - answeredCount} soal belum diisi (dihitung salah)</p>
              )}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50">
                Kembali
              </button>
              <button onClick={submitQuiz} className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 shadow-lg">
                Ya, Kumpulkan!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
