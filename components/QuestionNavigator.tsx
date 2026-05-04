"use client";

import { Question } from "@/lib/types";

interface QuestionNavigatorProps {
  questions: Question[];
  currentIndex: number;
  answers: (string | null)[];
  onSelect: (index: number) => void;
}

const typeColor: Record<string, string> = {
  PG: "border-blue-300",
  IS: "border-orange-300",
  UT: "border-purple-300",
};

const answeredColor: Record<string, string> = {
  PG: "bg-blue-500 text-white border-blue-500",
  IS: "bg-orange-500 text-white border-orange-500",
  UT: "bg-purple-500 text-white border-purple-500",
};

export default function QuestionNavigator({
  questions,
  currentIndex,
  answers,
  onSelect,
}: QuestionNavigatorProps) {
  const pgQuestions = questions.filter((q) => q.type === "PG");
  const isQuestions = questions.filter((q) => q.type === "IS");
  const utQuestions = questions.filter((q) => q.type === "UT");

  const renderGroup = (group: Question[], label: string, color: string) => (
    <div className="mb-3">
      <div className={`text-xs font-semibold mb-1 ${color}`}>{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {group.map((q) => {
          const idx = questions.indexOf(q);
          const answered = answers[idx] !== null && answers[idx] !== "";
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={q.id}
              onClick={() => onSelect(idx)}
              className={`w-8 h-8 rounded-lg text-xs font-bold border-2 transition-all flex items-center justify-center ${
                isCurrent
                  ? "ring-2 ring-offset-1 ring-gray-800 scale-110 " + (answered ? answeredColor[q.type] : "bg-gray-800 text-white border-gray-800")
                  : answered
                  ? answeredColor[q.type]
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
              title={`Soal ${q.number} (${q.type})`}
            >
              {q.number}
            </button>
          );
        })}
      </div>
    </div>
  );

  const answeredCount = answers.filter((a) => a !== null && a !== "").length;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
      <div className="text-sm font-bold text-gray-700 mb-3">Navigasi Soal</div>
      {renderGroup(pgQuestions, "Pilihan Ganda", "text-blue-600")}
      {isQuestions.length > 0 && renderGroup(isQuestions, "Isian", "text-orange-600")}
      {utQuestions.length > 0 && renderGroup(utQuestions, "Uraian", "text-purple-600")}

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Dijawab</span>
          <span className="font-bold text-gray-700">{answeredCount}/{questions.length}</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-3 space-y-1 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-blue-500 inline-block" />
          <span>PG dijawab</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-orange-500 inline-block" />
          <span>Isian dijawab</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-purple-500 inline-block" />
          <span>Uraian dijawab</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-white border-2 border-gray-200 inline-block" />
          <span>Belum dijawab</span>
        </div>
      </div>
    </div>
  );
}
