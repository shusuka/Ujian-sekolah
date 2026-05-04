import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latihan ASKA SD Pelita | Kelas 6",
  description: "Aplikasi latihan soal Asesmen Sumatif Kelas Akhir (ASKA) untuk siswa Kelas 6 SD Pelita",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {children}
      </body>
    </html>
  );
}
