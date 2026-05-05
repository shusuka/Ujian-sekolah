"use client";

import { useState } from "react";
import {
  PGQuestion, ISQuestion, UTQuestion, Question,
  ChartData, ChartDataBar, ChartDataTable, ChartDataTimeline,
} from "@/lib/types";
import { parseTextWithFractions } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  answer: string | null;
  onAnswer: (answer: string) => void;
  isSubmitted: boolean;
  autoGrade?: "benar" | "setengah" | "salah" | null;
}

const typeLabels: Record<string, { label: string; color: string; bg: string }> = {
  PG: { label: "Pilihan Ganda", color: "text-blue-700", bg: "bg-blue-100" },
  IS: { label: "Isian Singkat", color: "text-orange-700", bg: "bg-orange-100" },
  UT: { label: "Uraian Tertulis", color: "text-purple-700", bg: "bg-purple-100" },
};

// ─── RichText: fractions ────────────────────────────────────────────────────
function RichText({ text, className = "" }: { text: string; className?: string }) {
  const segments = parseTextWithFractions(text);
  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.type === "fraction") {
          return (
            <span key={i} className="inline-flex flex-col items-center mx-1 align-middle leading-none" style={{ verticalAlign: "middle" }}>
              <span className="text-xs font-bold border-b border-current px-0.5 leading-tight">{seg.numerator}</span>
              <span className="text-xs font-bold px-0.5 leading-tight">{seg.denominator}</span>
            </span>
          );
        }
        return <span key={i}>{seg.value}</span>;
      })}
    </span>
  );
}

// ─── Markdown table parser ──────────────────────────────────────────────────
type TextBlock = { kind: "text"; lines: string[] };
type TableBlock = { kind: "table"; headers: string[]; rows: string[][] };
type Block = TextBlock | TableBlock;

function isTableSeparator(line: string) {
  return /^\|[\s\-|:]+\|$/.test(line.trim());
}

function parseTableLine(line: string): string[] {
  return line.split("|").slice(1, -1).map((c) => c.trim());
}

function parseBlocks(text: string): Block[] {
  const rawLines = text.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  let currentText: string[] = [];

  while (i < rawLines.length) {
    const line = rawLines[i];
    if (line.trim().startsWith("|")) {
      if (currentText.length) { blocks.push({ kind: "text", lines: currentText }); currentText = []; }
      const tableLines: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith("|")) {
        tableLines.push(rawLines[i]);
        i++;
      }
      const nonSep = tableLines.filter((l) => !isTableSeparator(l));
      if (nonSep.length >= 1) {
        blocks.push({
          kind: "table",
          headers: parseTableLine(nonSep[0]),
          rows: nonSep.slice(1).map(parseTableLine),
        });
      }
    } else {
      currentText.push(line);
      i++;
    }
  }
  if (currentText.length) blocks.push({ kind: "text", lines: currentText });
  return blocks;
}

// ─── QuestionText: newlines + fractions + markdown tables ──────────────────
function InlineTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-2 overflow-x-auto rounded-lg border border-blue-200">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-2.5 py-1.5 text-left font-semibold border-r border-blue-500 last:border-r-0">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-blue-50"}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-2.5 py-1.5 border-r border-gray-200 last:border-r-0 text-gray-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuestionText({ text }: { text: string }) {
  const blocks = parseBlocks(text);
  return (
    <div className="text-gray-800 text-sm leading-relaxed font-medium">
      {blocks.map((block, bi) => {
        if (block.kind === "table") {
          return <InlineTable key={bi} headers={block.headers} rows={block.rows} />;
        }
        return (
          <span key={bi}>
            {block.lines.map((line, li) => (
              <p key={li} className={bi > 0 || li > 0 ? "mt-1" : ""}>
                <RichText text={line} />
              </p>
            ))}
          </span>
        );
      })}
    </div>
  );
}

// ─── QuestionImage ──────────────────────────────────────────────────────────
function QuestionImage({ url }: { url: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) return null;
  return (
    <div className="my-3 flex justify-center">
      <div className="relative max-w-sm w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt="Gambar soal"
          className="w-full h-auto object-contain max-h-72"
          onError={() => setErrored(true)}
        />
      </div>
    </div>
  );
}

// ─── Chart components ───────────────────────────────────────────────────────
const BAR_COLORS = ["#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#14B8A6","#F97316"];

function BarChart({ data }: { data: ChartDataBar }) {
  const max = Math.max(...data.items.map((i) => i.value), 1);
  return (
    <div className="my-3 bg-gray-50 rounded-xl border border-gray-200 p-3">
      {data.title && (
        <div className="text-xs font-semibold text-center text-gray-600 mb-2">{data.title}</div>
      )}
      <div className="flex items-end justify-around gap-1.5" style={{ height: "140px" }}>
        {data.items.map((item, i) => {
          const heightPct = (item.value / max) * 100;
          const color = item.color || BAR_COLORS[i % BAR_COLORS.length];
          return (
            <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
              <div className="text-center font-bold mb-0.5" style={{ color, fontSize: "10px" }}>
                {item.value}{data.unit ? "" : ""}
              </div>
              <div
                className="w-full rounded-t-md transition-all"
                style={{ height: `${heightPct}%`, backgroundColor: color, minHeight: item.value > 0 ? 4 : 0 }}
              />
              <div className="text-center text-gray-600 mt-1 leading-tight px-0.5" style={{ fontSize: "9px" }}>
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
      {data.unit && (
        <div className="text-center text-gray-400 mt-1" style={{ fontSize: "9px" }}>Satuan: {data.unit}</div>
      )}
    </div>
  );
}

function TableChart({ data }: { data: ChartDataTable }) {
  return (
    <div className="my-3 overflow-x-auto rounded-xl border border-indigo-200">
      {data.caption && (
        <div className="bg-indigo-600 text-white text-xs font-semibold text-center py-1.5 px-2">{data.caption}</div>
      )}
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className={data.caption ? "bg-indigo-100" : "bg-indigo-600 text-white"}>
            {data.headers.map((h, i) => (
              <th key={i} className={`px-2.5 py-1.5 text-left font-semibold border-r border-indigo-200 last:border-r-0 ${!data.caption ? "text-white border-indigo-500" : "text-indigo-800"}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-indigo-50"}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-2.5 py-1.5 border-r border-gray-100 last:border-r-0 text-gray-700">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TimelineChart({ data }: { data: ChartDataTimeline }) {
  return (
    <div className="my-3 bg-amber-50 rounded-xl border border-amber-200 p-3">
      <div className="relative pl-5">
        <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-amber-400" />
        {data.events.map((e, i) => (
          <div key={i} className="relative mb-2 last:mb-0">
            <div className="absolute -left-3 top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm" />
            <div>
              <span className="text-xs font-bold text-amber-700">{e.year}</span>
              <span className="text-xs text-gray-700 ml-1.5">{e.event}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionChart({ data }: { data: ChartData }) {
  if (data.type === "bar") return <BarChart data={data as ChartDataBar} />;
  if (data.type === "table") return <TableChart data={data as ChartDataTable} />;
  if (data.type === "timeline") return <TimelineChart data={data as ChartDataTimeline} />;
  return null;
}

// ─── Answer cards ───────────────────────────────────────────────────────────
function PGCard({ question, answer, onAnswer, isSubmitted }: {
  question: PGQuestion; answer: string | null; onAnswer: (a: string) => void; isSubmitted: boolean;
}) {
  const labels = ["A", "B", "C", "D"];
  return (
    <div className="space-y-2.5 mt-4">
      {question.options.map((opt, i) => {
        const isSelected = answer === String(i);
        const isCorrect = isSubmitted && i === question.correctAnswer;
        const isWrong = isSubmitted && isSelected && i !== question.correctAnswer;
        return (
          <button
            key={i}
            onClick={() => !isSubmitted && onAnswer(String(i))}
            disabled={isSubmitted}
            className={`w-full text-left flex items-start gap-3 p-3.5 rounded-xl border-2 transition-all ${
              isCorrect
                ? "bg-green-50 border-green-500 text-green-800"
                : isWrong
                ? "bg-red-50 border-red-400 text-red-800"
                : isSelected
                ? "bg-blue-50 border-blue-500 text-blue-800"
                : "bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
            } ${isSubmitted ? "cursor-default" : "cursor-pointer"}`}
          >
            <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
              isCorrect ? "bg-green-500 text-white"
              : isWrong ? "bg-red-500 text-white"
              : isSelected ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
            }`}>
              {labels[i]}
            </span>
            <span className="flex-1 text-sm leading-relaxed">
              <RichText text={opt} />
            </span>
            {isCorrect && <span className="text-green-600 text-base flex-shrink-0">✓</span>}
            {isWrong && <span className="text-red-600 text-base flex-shrink-0">✗</span>}
          </button>
        );
      })}
    </div>
  );
}

function ISCard({ question, answer, onAnswer, isSubmitted }: {
  question: ISQuestion; answer: string | null; onAnswer: (a: string) => void; isSubmitted: boolean;
}) {
  const isCorrect = isSubmitted && !!answer
    ? question.acceptedAnswers.some(
        (a) => (answer || "").trim().toLowerCase().includes(a.toLowerCase()) ||
          a.toLowerCase().includes((answer || "").trim().toLowerCase())
      )
    : null;

  return (
    <div className="mt-4 space-y-3">
      <input
        type="text"
        value={answer || ""}
        onChange={(e) => !isSubmitted && onAnswer(e.target.value)}
        disabled={isSubmitted}
        placeholder="Tulis jawaban kamu di sini..."
        className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 text-sm transition-all outline-none ${
          isSubmitted
            ? isCorrect
              ? "border-green-500 bg-green-50"
              : "border-red-400 bg-red-50"
            : "border-gray-300 bg-white focus:border-blue-400"
        } ${isSubmitted ? "cursor-default" : ""}`}
      />
      {isSubmitted && (
        <div className={`p-3.5 rounded-xl text-sm ${isCorrect ? "bg-green-50 border border-green-300" : "bg-red-50 border border-red-300"}`}>
          <div className={`font-semibold mb-1 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
            {isCorrect ? "✓ Jawaban Benar!" : "✗ Jawaban Kurang Tepat"}
          </div>
          <div className="text-gray-700">
            <span className="font-medium">Kunci Jawaban:</span>{" "}
            <RichText text={question.modelAnswer} />
          </div>
        </div>
      )}
    </div>
  );
}

function UTCard({ question, answer, onAnswer, isSubmitted, autoGrade }: {
  question: UTQuestion; answer: string | null; onAnswer: (a: string) => void;
  isSubmitted: boolean; autoGrade?: "benar" | "setengah" | "salah" | null;
}) {
  const gradeInfo = isSubmitted && autoGrade ? {
    benar: { label: "✓ Jawaban Dinilai: Benar", cls: "bg-green-50 border-green-300 text-green-800" },
    setengah: { label: "~ Jawaban Dinilai: Sebagian Benar", cls: "bg-yellow-50 border-yellow-300 text-yellow-800" },
    salah: { label: "✗ Jawaban Dinilai: Perlu Diperbaiki", cls: "bg-red-50 border-red-300 text-red-800" },
  }[autoGrade] : null;

  return (
    <div className="mt-4 space-y-3">
      {question.keyPoints.length > 0 && !isSubmitted && (
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-purple-700">
          <div className="font-semibold mb-1">📌 Poin yang harus dijawab:</div>
          <ul className="list-disc list-inside space-y-0.5">
            {question.keyPoints.map((kp, i) => <li key={i}>{kp}</li>)}
          </ul>
        </div>
      )}
      <textarea
        value={answer || ""}
        onChange={(e) => !isSubmitted && onAnswer(e.target.value)}
        disabled={isSubmitted}
        placeholder="Tulis jawaban lengkap kamu di sini..."
        rows={5}
        className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 text-sm transition-all outline-none resize-none ${
          isSubmitted ? "border-gray-300 bg-gray-50 cursor-default" : "border-gray-300 bg-white focus:border-purple-400"
        }`}
      />
      {isSubmitted && (
        <div className="space-y-2">
          {gradeInfo && (
            <div className={`px-4 py-2.5 rounded-xl border text-sm font-semibold ${gradeInfo.cls}`}>
              {gradeInfo.label}
            </div>
          )}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <div className="font-semibold text-purple-800 mb-2 text-sm">📖 Kunci Jawaban:</div>
            <p className="text-gray-700 text-sm whitespace-pre-line">{question.modelAnswer}</p>
            {question.keyPoints.length > 0 && (
              <div className="mt-3 pt-3 border-t border-purple-200">
                <div className="text-xs font-semibold text-purple-700 mb-1.5">Poin yang dinilai:</div>
                <ul className="space-y-1">
                  {question.keyPoints.map((kp, i) => {
                    const hit = answer
                      ? kp.toLowerCase().split(/\s+/).filter(w => w.length > 3)
                          .some(w => (answer || "").toLowerCase().includes(w))
                      : false;
                    return (
                      <li key={i} className={`text-xs flex items-start gap-1.5 ${hit ? "text-green-700" : "text-gray-500"}`}>
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
      )}
    </div>
  );
}

// ─── Main QuestionCard ──────────────────────────────────────────────────────
export default function QuestionCard({ question, answer, onAnswer, isSubmitted, autoGrade }: QuestionCardProps) {
  const meta = typeLabels[question.type];
  const imageUrl = (question as any).imageUrl;
  const chartData = (question as any).chartData as ChartData | undefined;

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
            Soal {question.number}
          </span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${meta.bg} ${meta.color}`}>
            {meta.label}
          </span>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-xs text-gray-400">{question.levelKognitif}</div>
          <div className="text-xs text-gray-400 truncate max-w-36" title={question.materi}>
            {question.materi}
          </div>
        </div>
      </div>

      {/* Question text (with inline table rendering) */}
      <QuestionText text={question.question} />

      {/* Optional image */}
      {imageUrl && <QuestionImage url={imageUrl} />}

      {/* Optional chart / visual data */}
      {chartData && <QuestionChart data={chartData} />}

      {/* Answer area */}
      {question.type === "PG" && (
        <PGCard question={question as PGQuestion} answer={answer} onAnswer={onAnswer} isSubmitted={isSubmitted} />
      )}
      {question.type === "IS" && (
        <ISCard question={question as ISQuestion} answer={answer} onAnswer={onAnswer} isSubmitted={isSubmitted} />
      )}
      {question.type === "UT" && (
        <UTCard question={question as UTQuestion} answer={answer} onAnswer={onAnswer} isSubmitted={isSubmitted} autoGrade={autoGrade} />
      )}
    </div>
  );
}
