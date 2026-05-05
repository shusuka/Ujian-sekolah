"use client";

import { useEffect, useRef, useState } from "react";
import {
  getSessionQuestions,
  saveSessionQuestions,
  uploadQuestionImage,
} from "@/lib/admin-firestore";
import { Question, PGQuestion, ISQuestion, UTQuestion, LevelKognitif } from "@/lib/types";
import { SUBJECTS } from "@/data/subjects";

const ADMIN_PIN = "guru2025";

// ─── helpers ────────────────────────────────────────────────────────────────

function newPG(num: number, subjectId: string): PGQuestion {
  return {
    id: `${subjectId}-pg-${Date.now()}`,
    type: "PG",
    number: num,
    question: "",
    options: ["", "", "", ""],
    correctAnswer: 0,
    materi: "",
    tujuanPembelajaran: "",
    levelKognitif: "C2",
  };
}
function newIS(num: number, subjectId: string): ISQuestion {
  return {
    id: `${subjectId}-is-${Date.now()}`,
    type: "IS",
    number: num,
    question: "",
    acceptedAnswers: [""],
    modelAnswer: "",
    materi: "",
    tujuanPembelajaran: "",
    levelKognitif: "C2",
  };
}
function newUT(num: number, subjectId: string): UTQuestion {
  return {
    id: `${subjectId}-ut-${Date.now()}`,
    type: "UT",
    number: num,
    question: "",
    modelAnswer: "",
    keyPoints: [""],
    materi: "",
    tujuanPembelajaran: "",
    levelKognitif: "C4",
  };
}

const LEVEL_OPTIONS: LevelKognitif[] = ["C1", "C2", "C3", "C4", "C5"];

// ─── sub-components ─────────────────────────────────────────────────────────

function PGEditor({
  q,
  idx,
  subjectId,
  onChange,
  onDelete,
}: {
  q: PGQuestion;
  idx: number;
  subjectId: string;
  onChange: (updated: PGQuestion) => void;
  onDelete: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const set = (patch: Partial<PGQuestion>) => onChange({ ...q, ...patch });
  const setOption = (i: number, val: string) => {
    const opts = [...q.options];
    opts[i] = val;
    set({ options: opts });
  };

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadQuestionImage(file, subjectId, q.id);
      set({ imageUrl: url });
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="border border-blue-200 rounded-2xl p-4 bg-blue-50 space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-blue-700 text-sm">PG #{idx + 1}</span>
        <button onClick={onDelete} className="text-red-400 hover:text-red-600 text-xs px-2 py-1 rounded-lg hover:bg-red-50">
          Hapus
        </button>
      </div>

      {/* Question text */}
      <textarea
        className="w-full border border-blue-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
        rows={3}
        placeholder="Teks soal..."
        value={q.question}
        onChange={(e) => set({ question: e.target.value })}
      />

      {/* Image */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => fileRef.current?.click()}
          className="text-xs bg-white border border-blue-300 text-blue-600 rounded-lg px-3 py-1.5 hover:bg-blue-50"
          disabled={uploading}
        >
          {uploading ? "Mengunggah..." : "📷 Upload Gambar"}
        </button>
        {q.imageUrl && (
          <div className="flex items-center gap-2">
            <img src={q.imageUrl} alt="soal" className="h-12 rounded-lg border" />
            <button onClick={() => set({ imageUrl: undefined })} className="text-red-400 text-xs hover:text-red-600">✕ Hapus</button>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2">
        {q.options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="radio"
              name={`correct-${q.id}`}
              checked={q.correctAnswer === i}
              onChange={() => set({ correctAnswer: i })}
              className="accent-green-500"
            />
            <input
              className="flex-1 border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-300"
              placeholder={`Pilihan ${String.fromCharCode(65 + i)}`}
              value={opt}
              onChange={(e) => setOption(i, e.target.value)}
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500">Pilih radio button = jawaban benar</p>

      {/* Meta */}
      <div className="grid grid-cols-3 gap-2">
        <input className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" placeholder="Materi" value={q.materi} onChange={(e) => set({ materi: e.target.value })} />
        <input className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none col-span-1" placeholder="Tujuan Pembelajaran" value={q.tujuanPembelajaran} onChange={(e) => set({ tujuanPembelajaran: e.target.value })} />
        <select className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" value={q.levelKognitif} onChange={(e) => set({ levelKognitif: e.target.value as LevelKognitif })}>
          {LEVEL_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>
    </div>
  );
}

function ISEditor({
  q,
  idx,
  subjectId,
  onChange,
  onDelete,
}: {
  q: ISQuestion;
  idx: number;
  subjectId: string;
  onChange: (updated: ISQuestion) => void;
  onDelete: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const set = (patch: Partial<ISQuestion>) => onChange({ ...q, ...patch });

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadQuestionImage(file, subjectId, q.id);
      set({ imageUrl: url });
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="border border-green-200 rounded-2xl p-4 bg-green-50 space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-green-700 text-sm">IS #{idx + 1}</span>
        <button onClick={onDelete} className="text-red-400 hover:text-red-600 text-xs px-2 py-1 rounded-lg hover:bg-red-50">Hapus</button>
      </div>
      <textarea
        className="w-full border border-green-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
        rows={3}
        placeholder="Teks soal isian singkat..."
        value={q.question}
        onChange={(e) => set({ question: e.target.value })}
      />

      <div className="flex items-center gap-3">
        <button onClick={() => fileRef.current?.click()} className="text-xs bg-white border border-green-300 text-green-600 rounded-lg px-3 py-1.5 hover:bg-green-50" disabled={uploading}>
          {uploading ? "Mengunggah..." : "📷 Upload Gambar"}
        </button>
        {q.imageUrl && (
          <div className="flex items-center gap-2">
            <img src={q.imageUrl} alt="soal" className="h-12 rounded-lg border" />
            <button onClick={() => set({ imageUrl: undefined })} className="text-red-400 text-xs hover:text-red-600">✕ Hapus</button>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-1">Kata kunci jawaban yang diterima (pisah dengan koma):</p>
        <input
          className="w-full border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-none"
          placeholder="jawaban1, jawaban2, sinonim..."
          value={q.acceptedAnswers.join(", ")}
          onChange={(e) => set({ acceptedAnswers: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
        />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Jawaban model (ditampilkan setelah ujian):</p>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-2 text-sm resize-none bg-white focus:outline-none"
          rows={2}
          placeholder="Penjelasan lengkap jawaban..."
          value={q.modelAnswer}
          onChange={(e) => set({ modelAnswer: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <input className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" placeholder="Materi" value={q.materi} onChange={(e) => set({ materi: e.target.value })} />
        <input className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" placeholder="Tujuan Pembelajaran" value={q.tujuanPembelajaran} onChange={(e) => set({ tujuanPembelajaran: e.target.value })} />
        <select className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" value={q.levelKognitif} onChange={(e) => set({ levelKognitif: e.target.value as LevelKognitif })}>
          {LEVEL_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>
    </div>
  );
}

function UTEditor({
  q,
  idx,
  subjectId,
  onChange,
  onDelete,
}: {
  q: UTQuestion;
  idx: number;
  subjectId: string;
  onChange: (updated: UTQuestion) => void;
  onDelete: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const set = (patch: Partial<UTQuestion>) => onChange({ ...q, ...patch });

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadQuestionImage(file, subjectId, q.id);
      set({ imageUrl: url });
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="border border-purple-200 rounded-2xl p-4 bg-purple-50 space-y-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-purple-700 text-sm">UT #{idx + 1}</span>
        <button onClick={onDelete} className="text-red-400 hover:text-red-600 text-xs px-2 py-1 rounded-lg hover:bg-red-50">Hapus</button>
      </div>
      <textarea
        className="w-full border border-purple-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
        rows={4}
        placeholder="Teks soal uraian tertulis..."
        value={q.question}
        onChange={(e) => set({ question: e.target.value })}
      />

      <div className="flex items-center gap-3">
        <button onClick={() => fileRef.current?.click()} className="text-xs bg-white border border-purple-300 text-purple-600 rounded-lg px-3 py-1.5 hover:bg-purple-50" disabled={uploading}>
          {uploading ? "Mengunggah..." : "📷 Upload Gambar"}
        </button>
        {q.imageUrl && (
          <div className="flex items-center gap-2">
            <img src={q.imageUrl} alt="soal" className="h-12 rounded-lg border" />
            <button onClick={() => set({ imageUrl: undefined })} className="text-red-400 text-xs hover:text-red-600">✕ Hapus</button>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-1">Kata kunci penilaian (pisah dengan koma):</p>
        <input
          className="w-full border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-none"
          placeholder="kata kunci 1, kata kunci 2..."
          value={q.keyPoints.join(", ")}
          onChange={(e) => set({ keyPoints: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
        />
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Jawaban model / kunci jawaban:</p>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-2 text-sm resize-none bg-white focus:outline-none"
          rows={3}
          placeholder="Penjelasan lengkap / jawaban ideal..."
          value={q.modelAnswer}
          onChange={(e) => set({ modelAnswer: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <input className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" placeholder="Materi" value={q.materi} onChange={(e) => set({ materi: e.target.value })} />
        <input className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" placeholder="Tujuan Pembelajaran" value={q.tujuanPembelajaran} onChange={(e) => set({ tujuanPembelajaran: e.target.value })} />
        <select className="border border-gray-200 rounded-lg p-2 text-xs bg-white focus:outline-none" value={q.levelKognitif} onChange={(e) => set({ levelKognitif: e.target.value as LevelKognitif })}>
          {LEVEL_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>
    </div>
  );
}

// ─── main page ───────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [authed, setAuthed] = useState(false);
  const [pinError, setPinError] = useState(false);

  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0].id);
  const [selectedSession, setSelectedSession] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"PG" | "IS" | "UT">("PG");

  useEffect(() => {
    if (authed) loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, selectedSubject, selectedSession]);

  async function loadQuestions() {
    setLoading(true);
    setSaveMsg("");
    try {
      const qs = await getSessionQuestions(selectedSubject, selectedSession);
      setQuestions(qs);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    setSaveMsg("");
    try {
      await saveSessionQuestions(selectedSubject, selectedSession, questions);
      setSaveMsg("✅ Tersimpan ke Firebase!");
    } catch {
      setSaveMsg("❌ Gagal menyimpan, coba lagi.");
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMsg(""), 4000);
    }
  }

  function updateQuestion(idx: number, updated: Question) {
    setQuestions((prev) => prev.map((q, i) => (i === idx ? updated : q)));
  }

  function deleteQuestion(idx: number) {
    if (!confirm("Hapus soal ini?")) return;
    setQuestions((prev) => prev.filter((_, i) => i !== idx));
  }

  function addQuestion(type: "PG" | "IS" | "UT") {
    const pgQ = questions.filter((q) => q.type === "PG");
    const isQ = questions.filter((q) => q.type === "IS");
    const utQ = questions.filter((q) => q.type === "UT");

    let newQ: Question;
    if (type === "PG") newQ = newPG(pgQ.length + 1, selectedSubject);
    else if (type === "IS") newQ = newIS(isQ.length + 1, selectedSubject);
    else newQ = newUT(utQ.length + 1, selectedSubject);

    setQuestions((prev) => [...prev, newQ]);
    setActiveTab(type);
  }

  const pgQuestions = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => q.type === "PG");
  const isQuestions = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => q.type === "IS");
  const utQuestions = questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => q.type === "UT");

  // ── PIN gate ────────────────────────────────────────────────────────────

  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-3">🔐</div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            <p className="text-sm text-gray-500 mt-1">Masukkan PIN untuk melanjutkan</p>
          </div>
          <input
            type="password"
            className={`w-full border-2 ${pinError ? "border-red-400" : "border-gray-200"} rounded-2xl p-3 text-center text-lg tracking-widest focus:outline-none focus:border-blue-400`}
            placeholder="••••••••"
            value={pin}
            onChange={(e) => { setPin(e.target.value); setPinError(false); }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (pin === ADMIN_PIN) setAuthed(true);
                else setPinError(true);
              }
            }}
          />
          {pinError && <p className="text-red-500 text-sm text-center -mt-2">PIN salah, coba lagi.</p>}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl py-3 transition"
            onClick={() => {
              if (pin === ADMIN_PIN) setAuthed(true);
              else setPinError(true);
            }}
          >
            Masuk
          </button>
        </div>
      </div>
    );
  }

  // ── Admin UI ────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🗂️</span>
            <div>
              <h1 className="font-bold text-gray-800">Admin Panel Soal</h1>
              <p className="text-xs text-gray-500">Kelola soal ujian langsung di Firebase</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {saveMsg && (
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${saveMsg.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {saveMsg}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl px-5 py-2 text-sm transition"
            >
              {saving ? "Menyimpan..." : "💾 Simpan ke Firebase"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

        {/* Subject + Session selector */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-4">
          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium">MATA PELAJARAN</p>
            <div className="flex flex-wrap gap-2">
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubject(s.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition border ${selectedSubject === s.id ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"}`}
                >
                  {s.icon} {s.shortName}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium">SESI</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setSelectedSession(n)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition border ${selectedSession === n ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300"}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        {!loading && (
          <div className="grid grid-cols-3 gap-3">
            <div
              className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:shadow-sm transition"
              onClick={() => setActiveTab("PG")}
            >
              <div>
                <p className="text-xs text-blue-500 font-medium">Pilihan Ganda</p>
                <p className="text-2xl font-bold text-blue-700">{pgQuestions.length}</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); addQuestion("PG"); }}
                className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 text-lg font-bold flex items-center justify-center transition"
              >+</button>
            </div>
            <div
              className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:shadow-sm transition"
              onClick={() => setActiveTab("IS")}
            >
              <div>
                <p className="text-xs text-green-500 font-medium">Isian Singkat</p>
                <p className="text-2xl font-bold text-green-700">{isQuestions.length}</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); addQuestion("IS"); }}
                className="w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200 text-lg font-bold flex items-center justify-center transition"
              >+</button>
            </div>
            <div
              className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:shadow-sm transition"
              onClick={() => setActiveTab("UT")}
            >
              <div>
                <p className="text-xs text-purple-500 font-medium">Uraian</p>
                <p className="text-2xl font-bold text-purple-700">{utQuestions.length}</p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); addQuestion("UT"); }}
                className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 text-lg font-bold flex items-center justify-center transition"
              >+</button>
            </div>
          </div>
        )}

        {loading && (
          <div className="text-center py-12 text-gray-400">
            <div className="text-4xl mb-2 animate-spin">⏳</div>
            <p>Memuat soal dari Firebase...</p>
          </div>
        )}

        {/* Tab + question list */}
        {!loading && (
          <div className="space-y-4">
            {/* Tab selector */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("PG")}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition border ${activeTab === "PG" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"}`}
              >
                PG ({pgQuestions.length})
              </button>
              <button
                onClick={() => setActiveTab("IS")}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition border ${activeTab === "IS" ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-600 border-gray-200 hover:border-green-300"}`}
              >
                IS ({isQuestions.length})
              </button>
              <button
                onClick={() => setActiveTab("UT")}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition border ${activeTab === "UT" ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"}`}
              >
                UT ({utQuestions.length})
              </button>
            </div>

            {/* PG questions */}
            {activeTab === "PG" && (
              <div className="space-y-3">
                {pgQuestions.length === 0 && (
                  <div className="text-center py-8 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
                    Belum ada soal PG. Klik + untuk menambah.
                  </div>
                )}
                {pgQuestions.map(({ q, i }, listIdx) => (
                  <PGEditor
                    key={q.id}
                    q={q as PGQuestion}
                    idx={listIdx}
                    subjectId={selectedSubject}
                    onChange={(updated) => updateQuestion(i, updated)}
                    onDelete={() => deleteQuestion(i)}
                  />
                ))}
                <button
                  onClick={() => addQuestion("PG")}
                  className="w-full py-3 border-2 border-dashed border-blue-300 text-blue-500 rounded-2xl text-sm hover:bg-blue-50 transition"
                >
                  + Tambah Soal PG
                </button>
              </div>
            )}

            {/* IS questions */}
            {activeTab === "IS" && (
              <div className="space-y-3">
                {isQuestions.length === 0 && (
                  <div className="text-center py-8 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
                    Belum ada soal IS. Klik + untuk menambah.
                  </div>
                )}
                {isQuestions.map(({ q, i }, listIdx) => (
                  <ISEditor
                    key={q.id}
                    q={q as ISQuestion}
                    idx={listIdx}
                    subjectId={selectedSubject}
                    onChange={(updated) => updateQuestion(i, updated)}
                    onDelete={() => deleteQuestion(i)}
                  />
                ))}
                <button
                  onClick={() => addQuestion("IS")}
                  className="w-full py-3 border-2 border-dashed border-green-300 text-green-500 rounded-2xl text-sm hover:bg-green-50 transition"
                >
                  + Tambah Soal IS
                </button>
              </div>
            )}

            {/* UT questions */}
            {activeTab === "UT" && (
              <div className="space-y-3">
                {utQuestions.length === 0 && (
                  <div className="text-center py-8 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
                    Belum ada soal UT. Klik + untuk menambah.
                  </div>
                )}
                {utQuestions.map(({ q, i }, listIdx) => (
                  <UTEditor
                    key={q.id}
                    q={q as UTQuestion}
                    idx={listIdx}
                    subjectId={selectedSubject}
                    onChange={(updated) => updateQuestion(i, updated)}
                    onDelete={() => deleteQuestion(i)}
                  />
                ))}
                <button
                  onClick={() => addQuestion("UT")}
                  className="w-full py-3 border-2 border-dashed border-purple-300 text-purple-500 rounded-2xl text-sm hover:bg-purple-50 transition"
                >
                  + Tambah Soal UT
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom save button */}
        {!loading && questions.length > 0 && (
          <div className="sticky bottom-4">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Total: <strong className="text-gray-800">{questions.length} soal</strong> di Sesi {selectedSession} — {SUBJECTS.find((s) => s.id === selectedSubject)?.name}
              </p>
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-xl px-6 py-2.5 text-sm transition"
              >
                {saving ? "Menyimpan..." : "💾 Simpan ke Firebase"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
