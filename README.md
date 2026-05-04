# 📚 Latihan ASKA SD Pelita | Kelas 6

Aplikasi kuis interaktif berbasis web untuk persiapan Asesmen Sumatif Kelas Akhir (ASKA) SD Kelas 6.

## ✨ Fitur

- **7 Mata Pelajaran**: PAI, Bahasa Inggris, Pancasila, Matematika, IPAS, PLBJ, Bahasa Indonesia
- **3 Tipe Soal**: Pilihan Ganda (PG), Isian Singkat (IS), Uraian Tertulis (UT)
- **5 Variasi Soal** per mapel (agar tidak bosan mengulang)
- **Timer Countdown** dengan peringatan warna kuning & merah
- **Sistem Nilai Otomatis** (PG & IS) + Penilaian Mandiri (UT)
- **Pembahasan Soal** lengkap setelah ujian selesai
- **Fallback Offline**: Soal tetap bisa diakses meski Firebase tidak dikonfigurasi
- **Responsive Design**: Optimal di HP maupun PC/laptop

## 🛠️ Setup & Instalasi

### 1. Clone dan Install

```bash
git clone https://github.com/username/sd-quiz.git
cd sd-quiz
npm install
```

### 2. Konfigurasi Firebase (Opsional)

Tanpa Firebase, aplikasi tetap berjalan menggunakan data lokal.

Jika ingin menggunakan Firebase:

1. Buat project di [Firebase Console](https://console.firebase.google.com)
2. Aktifkan **Firestore Database** (mode production atau test)
3. Copy file konfigurasi:

```bash
cp .env.local.example .env.local
```

4. Isi nilai di `.env.local` dengan konfigurasi Firebase kamu:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 3. Upload Soal ke Firebase (Opsional)

Jalankan seeder untuk upload semua soal (35 sesi × 7 mapel) ke Firestore:

```bash
npx tsx scripts/seed.ts
```

### 4. Jalankan Aplikasi

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🚀 Deploy ke Vercel

### Cara 1: Via GitHub (Direkomendasikan)

1. Push ke GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Buka [vercel.com](https://vercel.com) → Login → **Add New Project**
3. Import repository GitHub kamu
4. Di bagian **Environment Variables**, tambahkan semua variable dari `.env.local`
5. Klik **Deploy** ✅

### Cara 2: Via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

## 📁 Struktur Proyek

```
sd-quiz/
├── app/
│   ├── page.tsx              # Halaman login siswa
│   ├── subjects/page.tsx     # Pilih mata pelajaran
│   ├── quiz/[subject]/       # Halaman ujian
│   └── results/page.tsx      # Hasil & pembahasan
├── components/
│   ├── Timer.tsx             # Timer countdown
│   ├── QuestionCard.tsx      # Kartu soal PG/IS/UT
│   └── QuestionNavigator.tsx # Navigator soal sidebar
├── data/
│   ├── subjects.ts           # Data 7 mata pelajaran
│   └── questions/
│       ├── pai.ts            # Bank soal PAI
│       ├── binggris.ts       # Bank soal Bahasa Inggris
│       ├── pancasila.ts      # Bank soal Pancasila
│       ├── matematika.ts     # Bank soal Matematika
│       ├── ipas.ts           # Bank soal IPAS
│       ├── plbj.ts           # Bank soal PLBJ
│       ├── bindonesia.ts     # Bank soal Bahasa Indonesia
│       └── index.ts          # Barrel export
├── lib/
│   ├── types.ts              # TypeScript interfaces
│   ├── utils.ts              # Helper functions
│   ├── firebase.ts           # Firebase init
│   └── firestore.ts          # Firestore functions
└── scripts/
    └── seed.ts               # Firebase seeder
```

## 📊 Sistem Penilaian

| Tipe Soal | Jumlah | Poin/Soal | Total |
|-----------|--------|-----------|-------|
| Pilihan Ganda (PG) | 25 soal | 2 poin | 50 |
| Isian Singkat (IS) | 10 soal | 3 poin | 30 |
| Uraian Tertulis (UT) | 5 soal | 4 poin | 20 |
| **TOTAL** | **40 soal** | — | **100** |

### Nilai UT (Penilaian Mandiri):
- ✅ **Benar**: 4 poin
- ⚡ **Setengah Benar**: 2 poin
- ❌ **Salah**: 0 poin

### Grade:
| Grade | Rentang | Label |
|-------|---------|-------|
| A | ≥ 90% | Sangat Baik |
| B | 80–89% | Baik |
| C | 70–79% | Cukup |
| D | 60–69% | Kurang |
| E | < 60% | Sangat Kurang |

## 🔒 Aturan Firestore Security

Tambahkan rules berikut di Firestore Console agar soal hanya bisa dibaca:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /subjects/{subject}/sessions/{session} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## 🧑‍💻 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Firebase Firestore**
- **Lucide React** (icons)

## 📝 Lisensi

Dibuat untuk keperluan pendidikan SD Pelita, Jakarta. Silakan digunakan dan dimodifikasi sesuai kebutuhan.
