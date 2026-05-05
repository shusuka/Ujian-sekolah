"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SUBJECTS } from "@/data/subjects";
import { StudentInfo } from "@/lib/types";
import { Clock, BookOpen, ChevronLeft, Award } from "lucide-react";

export default function SubjectsPage() {
  const router = useRouter();
  const [student, setStudent] = useState<StudentInfo | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("studentInfo");
    if (!stored) { router.replace("/"); return; }
    setStudent(JSON.parse(stored));
  }, [router]);

  const handleSelect = (subjectId: string) => {
    const session = Math.floor(Math.random() * 5) + 1;
    router.push(`/quiz/${subjectId}?session=${session}`);
  };

  if (!student) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-500 text-sm">Memuat...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-4 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => router.push("/")} className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
            <ChevronLeft size={20} />
            <span className="text-sm">Kembali</span>
          </button>
          <div className="text-center">
            <h1 className="font-bold text-base">Pilih Mata Pelajaran</h1>
            <p className="text-blue-200 text-xs">{student.name} · Kelas {student.className}</p>
          </div>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 text-white mb-8 shadow-xl animate-slide-up">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
              👋
            </div>
            <div>
              <h2 className="text-xl font-black">Halo, {student.name}!</h2>
              <p className="text-blue-100 text-sm mt-0.5">
                Selamat datang di latihan ASKA. Pilih mata pelajaran yang ingin kamu latih.
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-blue-200">
                <span className="flex items-center gap-1"><Award size={12} /> Kelas {student.className}</span>
                <span className="flex items-center gap-1"><BookOpen size={12} /> {SUBJECTS.length} Mata Pelajaran</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subject grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUBJECTS.map((subject, i) => (
            <button
              key={subject.id}
              onClick={() => handleSelect(subject.id)}
              className={`text-left p-5 rounded-2xl border-2 ${subject.bgColor} ${subject.borderColor} hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up group`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{subject.icon}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/60 ${subject.color}`}>
                  {subject.shortName}
                </span>
              </div>
              <h3 className={`font-black text-sm mb-1 ${subject.color}`}>{subject.name}</h3>
              <p className="text-gray-500 text-xs mb-3 leading-relaxed">{subject.description}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500 border-t border-white/50 pt-2.5 mt-2.5">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {subject.timeLimit} menit
                </span>
                <span>•</span>
                <span>{subject.pgCount + subject.isCount + subject.utCount} soal</span>
                <span>•</span>
                <span>{subject.pgCount}PG {subject.isCount}IS {subject.utCount}UT</span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
