"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Question, PGQuestion, ISQuestion, UTQuestion, AnswerRecord, SCORE_PG, SCORE_IS, SCORE_UT, SCORE_UT_HALF } from "@/lib/types";
import { formatTime, getScoreGrade } from "@/lib/utils";
import { getSubjectById } from "@/data/subjects";
import { Trophy, RotateCcw, Home, Clock, CheckCircle, XCircle, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface StoredResult {
  student: { name: string; className: string; school: string };
  subject: { id: string; name: string; icon: string; pgCount: number; isCount: number; utCount: number; timeLimit: number };
  sessionNumber: number;
  answers: AnswerRecord[];
  questions: Question[];
  timeTaken: number;
}

// Renders a single question's full detail in the review
function ReviewDetail({ q, ans }: { q: Question; ans: AnswerRecord | undefined }) {
  const studentAnsRaw = ans?.studentAnswer ?? null;
  const isCorrect = ans?.isCorrect;
  const selfGrade = ans?.selfGrade;
  const imageUrl = (q as any).imageUrl as string | undefined;

  return (
    <div className="p-4 space-y-3 bg-gray-50 border-t border-gray-100 text-sm">
      {/* Full question text */}
      <div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">📋 Soal</div>
        <p className="text-gray-800 whitespace-pre-line leading-relaxed">{q.question}</p>
      </div>

      {/* Optional image */}
      {imageUrl && (
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt="Gambar soal"
            className="max-w-xs w-full rounded-xl border border-gray-200 shadow-sm object-contain max-h-52"
          />
        </div>
      )}

      {/* PG: show all options */}
      {q.type === "PG" && (() => {
        const pgQ = q as PGQuestion;
        const studentIdx = studentAnsRaw !== null ? parseInt(studentAnsRaw) : -1;
        return (
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Pilihan Jawaban</div>
            {pgQ.options.map((opt, oi) => {
              const isCorrectOpt = oi === pgQ.correctAnswer;
              const isStudentPick = oi === studentIdx;
              const isWrongPick = isStudentPick && !isCorrectOpt;
              return (
                <div
                  key={oi}
                  className={`flex items-start gap-2.5 px-3 py-2 rounded-xl border ${
                    isCorrectOpt
                      ? "bg-green-50 border-green-300"
                      : isWrongPick
                      ? "bg-red-50 border-red-300"
                      : "bg-white border-gray-150"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                      isCorrectOpt
                        ? "bg-green-500 text-white"
                        : isWrongPick
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span
                    className={`flex-1 leading-relaxed ${
                      isCorrectOpt ? "text-green-800 font-medium" : isWrongPick ? "text-red-800" : "text-gray-700"
                    }`}
                  >
                    {opt}
                  </span>
                  {isCorrectOpt && <CheckCircle size={15} className="flex-shrink-0 text-green-500 mt-0.5" />}
                  {isWrongPick && <XCircle size={15} className="flex-shrink-0 text-red-500 mt-0.5" />}
                </div>
              );
            })}
            {studentIdx === -1 && (
              <p className="text-xs text-orange-600 italic">⚠️ Tidak dijawab</p>
            )}
          </div>
        );
      })()}

      {/* IS: student answer + model answer */}
      {q.type === "IS" && (() => {
        const isQ = q as ISQuestion;
        return (
          <div className="space-y-2">
            <div
              className={`flex items-start gap-2 px-3 py-2.5 rounded-xl border text-xs ${
                isCorrect ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
              }`}
            >
              {isCorrect
                ? <CheckCircle size={14} className="flex-shrink-0 text-green-500 mt-0.5" />
                : <XCircle size={14} className="flex-shrink-0 text-red-500 mt-0.5" />}
              <div>
                <span className="font-semibold text-gray-600">Jawabanmu: </span>
                <span className={isCorrect ? "text-green-700" : "text-red-700"}>{studentAnsRaw || <em>tidak diisi</em>}</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 px-3 py-2.5 rounded-xl text-xs">
              <span className="font-semibold text-blue-700">✅ Kunci Jawaban: </span>
              <span className="text-blue-900">{isQ.modelAnswer}</span>
            </div>
          </div>
        );
      })()}

      {/* UT: student answer + model answer + key points */}
      {q.type === "UT" && (() => {
        const utQ = q as UTQuestion;
        const gradeColors = {
          benar: "bg-green-50 border-green-300 text-green-800",
          setengah: "bg-yellow-50 border-yellow-300 text-yellow-800",
          salah: "bg-red-50 border-red-300 text-red-800",
        };
        const gradeLabels = {
          benar: "✓ Dinilai: Benar",
          setengah: "~ Dinilai: Sebagian Benar",
          salah: "✗ Dinilai: Perlu Diperbaiki",
        };
        return (
          <div className="space-y-2">
            {selfGrade && (
              <div className={`px-3 py-2 rounded-xl border text-xs font-semibold ${gradeColors[selfGrade]}`}>
                {gradeLabels[selfGrade]}
              </div>
            )}
            <div className="bg-gray-100 px-3 py-2.5 rounded-xl text-xs">
              <div className="font-semibold text-gray-500 mb-1">Jawabanmu:</div>
              <p className="text-gray-700 whitespace-pre-line">{studentAnsRaw || <em className="text-gray-400">tidak diisi</em>}</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 px-3 py-3 rounded-xl text-xs space-y-2">
              <div className="font-semibold text-purple-700">📖 Kunci Jawaban:</div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">{utQ.modelAnswer}</p>
              {utQ.keyPoints.length > 0 && (
                <div className="pt-2 border-t border-purple-200">
                  <div className="font-semibold text-purple-600 mb-1">Poin yang dinilai:</div>
                  <ul className="space-y-1">
                    {utQ.keyPoints.map((kp, ki) => {
                      const hit = studentAnsRaw
                        ? kp.toLowerCase().split(/\s+/).filter(w => w.length > 3)
                            .some(w => (studentAnsRaw || "").toLowerCase().includes(w))
                        : false;
                      return (
                        <li key={ki} className={`flex items-start gap-1.5 ${hit ? "text-green-700" : "text-gray-500"}`}>
                          <span className="flex-shrink-0">{hit ? "✓" : "○"}</span>
                          <span>{kp}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<StoredResult | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult");
    if (!stored) { router.replace("/"); return; }
    setResult(JSON.parse(stored));
  }, [router]);

  if (!result) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const subject = getSubjectById(result.subject.id) || result.subject as any;
  const { answers, questions, student, timeTaken } = result;

  // Calculate scores
  let pgScore = 0, isScore = 0, utScore = 0, pgCorrect = 0, isCorrect = 0;
  for (const a of answers) {
    if (a.questionType === "PG") { if (a.isCorrect) { pgScore += SCORE_PG; pgCorrect++; } }
    else if (a.questionType === "IS") { if (a.isCorrect) { isScore += SCORE_IS; isCorrect++; } }
    else if (a.questionType === "UT") {
      if (a.selfGrade === "benar") utScore += SCORE_UT;
      else if (a.selfGrade === "setengah") utScore += SCORE_UT_HALF;
    }
  }
  const total = pgScore + isScore + utScore;
  const pgCount = answers.filter((a) => a.questionType === "PG").length;
  const isCount = answers.filter((a) => a.questionType === "IS").length;
  const utCount = answers.filter((a) => a.questionType === "UT").length;
  const maxTotal = pgCount * SCORE_PG + isCount * SCORE_IS + utCount * SCORE_UT;
  const grade = getScoreGrade(total, maxTotal);
  const pct = Math.round((total / maxTotal) * 100);

  const circleR = 54;
  const circleC = Math.round(2 * Math.PI * circleR);
  const circleDash = Math.round((pct / 100) * circleC);

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button onClick={() => router.push("/subjects")} className="flex items-center gap-2 text-blue-200 hover:text-white text-sm">
            <Home size={16} /> Beranda
          </button>
          <h1 className="font-bold">Hasil Ujian</h1>
          <button
            onClick={() => router.push(`/quiz/${result.subject.id}?session=${Math.floor(Math.random() * 5) + 1}`)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
          >
            <RotateCcw size={14} /> Ulangi
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6 animate-slide-up">
        {/* Score hero card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Circle score */}
            <div className="relative flex-shrink-0">
              <svg className="w-36 h-36 -rotate-90" viewBox="0 0 128 128">
                <circle cx="64" cy="64" r={circleR} fill="none" stroke="#ffffff15" strokeWidth="10" />
                <circle
                  cx="64" cy="64" r={circleR} fill="none"
                  stroke={pct >= 80 ? "#22c55e" : pct >= 60 ? "#eab308" : "#ef4444"}
                  strokeWidth="10"
                  strokeDasharray={`${circleDash} ${circleC}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black">{total}</span>
                <span className="text-white/50 text-xs">dari {maxTotal}</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="text-white/60 text-sm mb-1">{result.subject.icon} {result.subject.name}</div>
              <h2 className="text-2xl font-black mb-1">{student.name}</h2>
              <div className={`text-5xl font-black mb-2 ${pct >= 80 ? "text-green-400" : pct >= 60 ? "text-yellow-400" : "text-red-400"}`}>
                {pct}%
              </div>
              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${
                pct >= 80 ? "bg-green-500/20 text-green-400" :
                pct >= 60 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
              }`}>
                {grade.letter} · {grade.label}
              </div>
              <div className="flex items-center gap-3 mt-3 text-white/50 text-xs justify-center sm:justify-start">
                <span className="flex items-center gap-1"><Clock size={11} />{formatTime(timeTaken)}</span>
                <span>•</span>
                <span>Sesi {result.sessionNumber}</span>
                <span>•</span>
                <span>Kelas {student.className}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Score breakdown */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Pilihan Ganda", score: pgScore, max: pgCount * SCORE_PG, correct: pgCorrect, total: pgCount, color: "blue", icon: "🔵" },
            { label: "Isian", score: isScore, max: isCount * SCORE_IS, correct: isCorrect, total: isCount, color: "orange", icon: "🟠" },
            { label: "Uraian", score: utScore, max: utCount * SCORE_UT, total: utCount, color: "purple", icon: "🟣" },
          ].map(({ label, score, max, correct, total: tot, color, icon }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-xs text-gray-400 mb-1">{label}</div>
              <div className={`text-2xl font-black text-${color}-600`}>{score}</div>
              <div className="text-xs text-gray-400">dari {max}</div>
              {correct !== undefined && (
                <div className="text-xs text-gray-500 mt-1">{correct}/{tot} benar</div>
              )}
            </div>
          ))}
        </div>

        {/* Review section */}
        {questions && questions.length > 0 && (
          <div>
            <button
              onClick={() => { setShowReview(!showReview); setExpandedQ(null); }}
              className="w-full flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm border border-gray-100 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2"><BookOpen size={17} /> Pembahasan Soal ({questions.length} soal)</span>
              {showReview ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {showReview && (
              <div className="mt-3 space-y-2 animate-fade-in">
                {questions.map((q, i) => {
                  const ans = answers.find((a) => a.questionId === q.id);
                  const isExp = expandedQ === i;
                  const correct = ans?.isCorrect;
                  const selfGrade = ans?.selfGrade;
                  const imageUrl = (q as any).imageUrl as string | undefined;

                  const typeColors: Record<string, { border: string; badge: string; text: string }> = {
                    PG: { border: correct ? "border-green-300" : "border-red-200", badge: "bg-blue-100 text-blue-700", text: "PG" },
                    IS: { border: correct ? "border-green-300" : "border-red-200", badge: "bg-orange-100 text-orange-700", text: "Isian" },
                    UT: {
                      border: selfGrade === "benar" ? "border-green-300" : selfGrade === "setengah" ? "border-yellow-300" : "border-gray-200",
                      badge: "bg-purple-100 text-purple-700",
                      text: "Uraian"
                    },
                  };
                  const tc = typeColors[q.type];

                  return (
                    <div
                      key={q.id}
                      className={`bg-white rounded-xl border-2 overflow-hidden transition-all shadow-sm ${tc.border}`}
                    >
                      {/* Collapsed row — click to expand */}
                      <button
                        className="w-full flex items-center gap-3 p-3.5 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setExpandedQ(isExp ? null : i)}
                      >
                        {/* Number bubble */}
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          q.type === "UT"
                            ? selfGrade === "benar" ? "bg-green-500 text-white"
                            : selfGrade === "setengah" ? "bg-yellow-500 text-white"
                            : "bg-gray-300 text-gray-700"
                            : correct ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        }`}>
                          {q.number}
                        </span>

                        {/* Preview text + image indicator */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${tc.badge}`}>{tc.text}</span>
                            {imageUrl && <span className="text-xs text-gray-400">🖼</span>}
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-1 leading-snug">
                            {q.question.replace(/\n/g, " ")}
                          </p>
                        </div>

                        {/* Status icon */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {q.type !== "UT" && (
                            correct
                              ? <CheckCircle size={17} className="text-green-500" />
                              : <XCircle size={17} className="text-red-500" />
                          )}
                          {q.type === "UT" && (
                            <span className={`text-xs font-bold ${
                              selfGrade === "benar" ? "text-green-600" :
                              selfGrade === "setengah" ? "text-yellow-600" : "text-gray-400"
                            }`}>
                              {selfGrade === "benar" ? "✓" : selfGrade === "setengah" ? "~" : "○"}
                            </span>
                          )}
                          {isExp ? <ChevronUp size={15} className="text-gray-400" /> : <ChevronDown size={15} className="text-gray-400" />}
                        </div>
                      </button>

                      {/* Expanded detail */}
                      {isExp && <ReviewDetail q={q} ans={ans} />}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/subjects")}
            className="flex-1 py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Home size={18} /> Ganti Mapel
          </button>
          <button
            onClick={() => router.push(`/quiz/${result.subject.id}?session=${Math.floor(Math.random() * 5) + 1}`)}
            className="flex-1 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} /> Coba Lagi
          </button>
        </div>
      </main>
    </div>
  );
}
