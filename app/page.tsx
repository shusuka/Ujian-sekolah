"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Star, Trophy, Clock, ChevronRight, GraduationCap } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [className, setClassName] = useState("6A");
  const [school, setSchool] = useState("SD Pelita");
  const [error, setError] = useState("");

  const handleStart = () => {
    if (!name.trim()) {
      setError("Harap masukkan nama kamu!");
      return;
    }
    const student = { name: name.trim(), className, school: school.trim() || "SD Pelita" };
    sessionStorage.setItem("studentInfo", JSON.stringify(student));
    router.push("/subjects");
  };

  const classes = ["6A", "6B", "6C", "6D", "6E", "6F"];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <GraduationCap size={22} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">SD Pelita</h1>
            <p className="text-blue-200 text-xs">Latihan ASKA Kelas 6 · Tahun Ajaran 2025/2026</p>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-10 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Star size={14} /> ASKA 2025/2026
            </div>
            <h2 className="text-4xl font-black text-gray-800 mb-3">
              Latihan Soal<br />
              <span className="text-blue-600">Asesmen Sumatif</span>
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Persiapkan dirimu untuk ujian ASKA dengan latihan soal interaktif.
              Setiap sesi memiliki soal yang berbeda!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Feature cards */}
            <div className="space-y-4 animate-slide-up">
              {[
                { icon: <BookOpen size={20} />, color: "bg-blue-500", title: "7 Mata Pelajaran", desc: "PAI, B.Inggris, Pancasila, Matematika, IPAS, PLBJ, B.Indonesia" },
                { icon: <Trophy size={20} />, color: "bg-yellow-500", title: "Nilai Otomatis", desc: "Langsung dapat nilai setelah selesai mengerjakan soal" },
                { icon: <Clock size={20} />, color: "bg-green-500", title: "Timer Ujian", desc: "Seperti ujian sungguhan dengan hitungan waktu mundur" },
                { icon: <Star size={20} />, color: "bg-purple-500", title: "5 Variasi Soal", desc: "Setiap sesi memiliki paket soal yang berbeda-beda" },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`${f.color} text-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{f.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 animate-bounce-in">
              <h3 className="text-xl font-black text-gray-800 mb-6 text-center">
                Masuk ke Ujian
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(""); }}
                    placeholder="Contoh: Ahmad Fauzi"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                    onKeyDown={(e) => e.key === "Enter" && handleStart()}
                  />
                  {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Kelas</label>
                  <select
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-blue-400 bg-white"
                  >
                    {classes.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nama Sekolah</label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                <button
                  onClick={handleStart}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 rounded-xl text-base hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-2"
                >
                  Mulai Latihan
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-gray-400">
        © 2025/2026 SD Pelita · Aplikasi Latihan ASKA Kelas 6
      </footer>
    </div>
  );
}
