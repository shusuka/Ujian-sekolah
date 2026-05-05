import { PGQuestion, ISQuestion, UTQuestion, SubjectQuestionBank } from "@/lib/types";

const pg: PGQuestion[] = [
  // Membaca & Memahami Teks (C1-C3)
  {
    id: "bind-pg-1", type: "PG", number: 1,
    question: "Bacalah teks berikut!\n'Setiap pagi, Pak Tani pergi ke sawah. Ia menanam padi dengan tekun. Beberapa bulan kemudian, padi siap dipanen. Pak Tani sangat gembira melihat hasil panennya yang melimpah.'\n\nIde pokok paragraf tersebut adalah ...",
    options: ["Pak Tani sangat gembira", "Kegiatan Pak Tani sebagai petani yang tekun", "Padi siap dipanen beberapa bulan kemudian", "Sawah Pak Tani sangat luas"],
    correctAnswer: 1,
    materi: "Membaca Pemahaman", tujuanPembelajaran: "Menentukan ide pokok paragraf", levelKognitif: "C3"
  },
  {
    id: "bind-pg-2", type: "PG", number: 2,
    question: "Kalimat utama adalah kalimat yang ...",
    options: ["Berisi penjelasan dari ide pokok", "Terletak di tengah paragraf", "Mengandung ide pokok paragraf", "Menggunakan kata-kata sulit"],
    correctAnswer: 2,
    materi: "Struktur Teks", tujuanPembelajaran: "Memahami pengertian kalimat utama", levelKognitif: "C1"
  },
  {
    id: "bind-pg-3", type: "PG", number: 3,
    question: "Bacalah teks berikut!\n'Hutan hujan tropis memiliki keanekaragaman hayati yang sangat tinggi. Di dalamnya hidup ribuan jenis tumbuhan dan hewan. Hutan ini juga berfungsi sebagai paru-paru dunia.'\n\nJenis teks tersebut adalah teks ...",
    options: ["Narasi", "Eksposisi/Informasi", "Persuasi", "Deskripsi"],
    correctAnswer: 1,
    materi: "Jenis Teks", tujuanPembelajaran: "Mengidentifikasi jenis teks", levelKognitif: "C3"
  },
  {
    id: "bind-pg-4", type: "PG", number: 4,
    question: "Bacalah paragraf berikut!\n'Kebersihan adalah pangkal kesehatan. Dengan menjaga kebersihan, kita dapat terhindar dari berbagai penyakit. Oleh karena itu, kita harus rajin membersihkan rumah dan lingkungan sekitar kita.'\n\nParagraf tersebut bertujuan untuk ...",
    options: ["Menceritakan pengalaman seseorang", "Mendeskripsikan suatu tempat", "Mengajak pembaca menjaga kebersihan", "Menjelaskan cara membersihkan rumah"],
    correctAnswer: 2,
    materi: "Tujuan Teks", tujuanPembelajaran: "Menentukan tujuan penulisan teks", levelKognitif: "C3"
  },
  {
    id: "bind-pg-5", type: "PG", number: 5,
    question: "Sinonim kata 'rajin' adalah ...",
    options: ["Malas", "Tekun", "Lambat", "Bodoh"],
    correctAnswer: 1,
    materi: "Kosakata", tujuanPembelajaran: "Memahami sinonim kata", levelKognitif: "C1"
  },

  // Kosakata & Tata Bahasa (C1-C3)
  {
    id: "bind-pg-6", type: "PG", number: 6,
    question: "Antonim kata 'besar' adalah ...",
    options: ["Tinggi", "Lebar", "Kecil", "Panjang"],
    correctAnswer: 2,
    materi: "Kosakata", tujuanPembelajaran: "Memahami antonim kata", levelKognitif: "C1"
  },
  {
    id: "bind-pg-7", type: "PG", number: 7,
    question: "Kalimat yang menggunakan ejaan dan tanda baca yang benar adalah ...",
    options: ["kami pergi ke jakarta kemarin.", "Kami pergi ke Jakarta kemarin.", "Kami pergi ke jakarta Kemarin.", "kami Pergi ke Jakarta kemarin"],
    correctAnswer: 1,
    materi: "Ejaan dan Tanda Baca", tujuanPembelajaran: "Menerapkan ejaan dan tanda baca yang tepat", levelKognitif: "C3"
  },
  {
    id: "bind-pg-8", type: "PG", number: 8,
    question: "Imbuhan 'me-' pada kata 'menulis' berfungsi untuk ...",
    options: ["Menyatakan hasil", "Membentuk kata kerja aktif", "Menyatakan alat", "Membentuk kata benda"],
    correctAnswer: 1,
    materi: "Imbuhan", tujuanPembelajaran: "Mengidentifikasi fungsi imbuhan me-", levelKognitif: "C2"
  },
  {
    id: "bind-pg-9", type: "PG", number: 9,
    question: "Kata berimbuhan yang tepat untuk melengkapi kalimat berikut:\n'Adik sedang ... gambar binatang di buku gambarnya.'\nadalah ...",
    options: ["Melukis", "Menggambar", "Mewarnai", "Menulis"],
    correctAnswer: 1,
    materi: "Imbuhan", tujuanPembelajaran: "Menggunakan kata berimbuhan yang tepat dalam kalimat", levelKognitif: "C3"
  },
  {
    id: "bind-pg-10", type: "PG", number: 10,
    question: "Kalimat berikut yang menggunakan kata penghubung 'karena' dengan benar adalah ...",
    options: ["Ani tidak masuk sekolah karena sedang sakit", "Karena Ani tidak masuk sekolah sakit", "Ani sakit karena tidak masuk sekolah", "Tidak masuk sekolah karena Ani sakit"],
    correctAnswer: 0,
    materi: "Kata Penghubung", tujuanPembelajaran: "Menggunakan kata penghubung dengan tepat", levelKognitif: "C3"
  },

  // Menulis (C2-C5)
  {
    id: "bind-pg-11", type: "PG", number: 11,
    question: "Langkah pertama dalam membuat karangan adalah ...",
    options: ["Menulis paragraf penutup", "Menentukan tema dan membuat kerangka karangan", "Memeriksa ejaan dan tanda baca", "Menulis paragraf pengembang"],
    correctAnswer: 1,
    materi: "Menulis Karangan", tujuanPembelajaran: "Memahami langkah-langkah menulis karangan", levelKognitif: "C2"
  },
  {
    id: "bind-pg-12", type: "PG", number: 12,
    question: "Teks yang menceritakan pengalaman penulis secara berurutan berdasarkan waktu disebut teks ...",
    options: ["Deskripsi", "Eksposisi", "Narasi", "Persuasi"],
    correctAnswer: 2,
    materi: "Jenis Teks", tujuanPembelajaran: "Mengidentifikasi ciri teks narasi", levelKognitif: "C1"
  },
  {
    id: "bind-pg-13", type: "PG", number: 13,
    question: "Penggunaan tanda koma (,) yang tepat terdapat pada kalimat ...",
    options: ["Ibu membeli, sayur buah dan ikan di pasar", "Ibu membeli sayur, buah, dan ikan di pasar", "Ibu membeli sayur buah, dan ikan di pasar", "Ibu membeli sayur, buah dan ikan, di pasar"],
    correctAnswer: 1,
    materi: "Ejaan dan Tanda Baca", tujuanPembelajaran: "Menggunakan tanda koma dengan tepat", levelKognitif: "C3"
  },

  // Puisi & Sastra (C1-C3)
  {
    id: "bind-pg-14", type: "PG", number: 14,
    chartData: {
      type: "table",
      caption: "Struktur Bait Puisi",
      headers: ["Baris", "Teks", "Analisis"],
      rows: [
        ["1", "Tanah airku Indonesia", "Menyebut tanah air secara langsung"],
        ["2", "Negeri elok amat kucinta", "Ungkapan kecintaan terhadap negeri"],
        ["3", "Tanah tumpah darahku yang mulia", "Ungkapan kebanggaan"],
        ["4", "Yang ku puja sepanjang masa", "Cinta yang abadi/selamanya"],
      ],
    },
    question: "Perhatikan bait puisi dan analisisnya di atas:\n'Tanah airku Indonesia\nNegeri elok amat kucinta\nTanah tumpah darahku yang mulia\nYang ku puja sepanjang masa'\n\nPuisi di atas mengungkapkan perasaan ...",
    options: ["Kesedihan akan keadaan alam", "Kecintaan terhadap tanah air", "Kebanggaan atas prestasi bangsa", "Kerinduan akan kampung halaman"],
    correctAnswer: 1,
    materi: "Puisi", tujuanPembelajaran: "Menafsirkan makna puisi", levelKognitif: "C2"
  },
  {
    id: "bind-pg-15", type: "PG", number: 15,
    question: "Rima dalam puisi adalah ...",
    options: ["Persajakan atau kesamaan bunyi pada akhir baris puisi", "Jumlah suku kata dalam setiap baris", "Makna keseluruhan puisi", "Susunan baris dalam setiap bait"],
    correctAnswer: 0,
    materi: "Puisi", tujuanPembelajaran: "Memahami unsur-unsur puisi", levelKognitif: "C1"
  },
  {
    id: "bind-pg-16", type: "PG", number: 16,
    question: "Pantun adalah karya sastra yang memiliki ciri-ciri sebagai berikut, kecuali ...",
    options: ["Terdiri dari 4 baris", "Baris pertama dan kedua disebut sampiran", "Memiliki rima a-a-a-a", "Baris ketiga dan keempat disebut isi"],
    correctAnswer: 2,
    materi: "Pantun", tujuanPembelajaran: "Mengidentifikasi ciri-ciri pantun", levelKognitif: "C2"
  },
  {
    id: "bind-pg-17", type: "PG", number: 17,
    question: "Berikut yang merupakan contoh pantun dengan rima yang benar adalah ...",
    options: [
      "Ada nanas di atas meja\nBuahnya manis rasanya\nBelajarlah dengan giat\nAgar menjadi anak yang hebat",
      "Pergi ke pasar membeli ikan\nIkan dimasak ibu di dapur\nBelajar itu menyenangkan\nJika kita selalu bersyukur",
      "Burung terbang di angkasa\nSambil bernyanyi riang gembira\nBelajar terus jangan menyerah\nRaih mimpi setinggi langit di sana",
      "Matahari bersinar cerah\nMenerangi bumi yang indah\nJadilah anak yang soleh\nAgar hidupmu penuh berkah"
    ],
    correctAnswer: 3,
    materi: "Pantun", tujuanPembelajaran: "Mengidentifikasi pantun berima benar", levelKognitif: "C3"
  },

  // Surat & Pengumuman (C1-C3)
  {
    id: "bind-pg-18", type: "PG", number: 18,
    question: "Bagian surat pribadi yang berisi ucapan syukur dan salam kepada penerima surat disebut bagian ...",
    options: ["Kepala surat", "Isi surat", "Pembuka surat", "Penutup surat"],
    correctAnswer: 2,
    materi: "Surat Pribadi", tujuanPembelajaran: "Mengidentifikasi bagian-bagian surat", levelKognitif: "C1"
  },
  {
    id: "bind-pg-19", type: "PG", number: 19,
    question: "Pengumuman yang baik harus memuat informasi yang ...",
    options: ["Panjang dan terperinci agar lengkap", "Jelas, singkat, padat, dan mudah dipahami", "Menggunakan banyak gambar dan ilustrasi", "Ditulis dengan bahasa yang indah seperti puisi"],
    correctAnswer: 1,
    materi: "Pengumuman", tujuanPembelajaran: "Memahami syarat pengumuman yang baik", levelKognitif: "C2"
  },

  // Laporan & Teks Informasi (C2-C4)
  {
    id: "bind-pg-20", type: "PG", number: 20,
    question: "Bacalah teks laporan berikut!\n'Pada hari Sabtu, 10 Mei 2025, kelas 6A melakukan kunjungan ke Museum Nasional Jakarta. Kami berangkat pukul 07.30 dari sekolah. Di museum, kami melihat berbagai koleksi sejarah dan arkeologi Indonesia. Kunjungan ini sangat bermanfaat untuk menambah pengetahuan kami.'\n\nTeks tersebut termasuk jenis teks ...",
    options: ["Fiksi", "Pengumuman", "Laporan kegiatan", "Pantun"],
    correctAnswer: 2,
    materi: "Jenis Teks", tujuanPembelajaran: "Mengidentifikasi jenis teks laporan", levelKognitif: "C3"
  },
  {
    id: "bind-pg-21", type: "PG", number: 21,
    question: "Ciri-ciri teks deskripsi yang membedakannya dari jenis teks lain adalah ...",
    options: ["Berisi ajakan atau imbauan", "Menceritakan peristiwa secara berurutan", "Menggambarkan objek secara rinci sehingga pembaca seolah melihat langsung", "Berisi penjelasan hubungan sebab dan akibat"],
    correctAnswer: 2,
    materi: "Teks Deskripsi", tujuanPembelajaran: "Mengidentifikasi ciri teks deskripsi", levelKognitif: "C2"
  },
  {
    id: "bind-pg-22", type: "PG", number: 22,
    chartData: {
      type: "table",
      caption: "Perbedaan Fakta dan Opini",
      headers: ["Aspek", "Fakta", "Opini"],
      rows: [
        ["Pengertian", "Pernyataan yang dapat dibuktikan", "Pendapat/perasaan seseorang"],
        ["Ciri bahasa", "Menggunakan data/angka/bukti nyata", "Kata: mungkin, sebaiknya, menurut saya, sepertinya"],
        ["Contoh", "Jakarta adalah ibu kota Indonesia", "Menurut saya, Jakarta sangat macet"],
        ["Sifat", "Objektif (tidak dipengaruhi pendapat)", "Subjektif (dipengaruhi sudut pandang)"],
      ],
    },
    question: "Perhatikan tabel perbedaan fakta dan opini di atas. Kalimat fakta adalah kalimat yang ...",
    options: ["Berisi pendapat atau perasaan seseorang", "Dapat dibuktikan kebenarannya secara nyata", "Mengandung kata-kata seperti 'mungkin' atau 'sebaiknya'", "Merupakan khayalan penulisnya"],
    correctAnswer: 1,
    materi: "Fakta dan Opini", tujuanPembelajaran: "Membedakan kalimat fakta dan opini", levelKognitif: "C2"
  },
  {
    id: "bind-pg-23", type: "PG", number: 23,
    question: "Kalimat berikut yang merupakan kalimat opini adalah ...",
    options: ["Jakarta adalah ibu kota Indonesia", "Pulau Jawa merupakan pulau terpadat di Indonesia", "Buku ini sangat menarik dan sebaiknya dibaca semua orang", "Gunung Semeru adalah gunung tertinggi di Jawa"],
    correctAnswer: 2,
    materi: "Fakta dan Opini", tujuanPembelajaran: "Mengidentifikasi kalimat opini", levelKognitif: "C3"
  },

  // Wawancara & Berbicara (C1-C3)
  {
    id: "bind-pg-24", type: "PG", number: 24,
    question: "Ketika mewawancarai seorang narasumber, yang harus diperhatikan adalah ...",
    options: ["Berbicara sebanyak-banyaknya tanpa memberi kesempatan narasumber", "Mendengarkan dengan seksama dan mencatat informasi penting", "Mengajukan pertanyaan yang tidak berhubungan dengan topik", "Bersikap tidak sopan agar wawancara terasa santai"],
    correctAnswer: 1,
    materi: "Keterampilan Berbicara", tujuanPembelajaran: "Memahami etika wawancara", levelKognitif: "C2"
  },
  {
    id: "bind-pg-25", type: "PG", number: 25,
    chartData: {
      type: "table",
      caption: "Kata Tanya dan Fungsinya (5W + 1H)",
      headers: ["Kata Tanya", "Bahasa Inggris", "Digunakan untuk menanyakan"],
      rows: [
        ["Apa", "What", "Benda, hal, atau peristiwa"],
        ["Siapa", "Who", "Orang / pelaku"],
        ["Di mana", "Where", "Tempat / lokasi"],
        ["Kapan", "When", "Waktu / tanggal"],
        ["Mengapa", "Why", "Alasan / sebab"],
        ["Bagaimana", "How", "Cara / proses / kondisi"],
      ],
    },
    question: "Perhatikan tabel kata tanya di atas. Kata tanya yang digunakan untuk menanyakan cara atau proses adalah ...",
    options: ["Apa", "Siapa", "Bagaimana", "Mengapa"],
    correctAnswer: 2,
    materi: "Kata Tanya", tujuanPembelajaran: "Menggunakan kata tanya yang tepat", levelKognitif: "C1"
  },
  {
    id: "bind-pg-26", type: "PG", number: 26,
    question: "Kata tanya yang digunakan untuk menanyakan alasan adalah ...",
    options: ["Apa", "Kapan", "Di mana", "Mengapa"],
    correctAnswer: 3,
    materi: "Kata Tanya", tujuanPembelajaran: "Menggunakan kata tanya yang tepat", levelKognitif: "C1"
  },

  // Majas & Gaya Bahasa (C1-C3)
  {
    id: "bind-pg-27", type: "PG", number: 27,
    chartData: {
      type: "table",
      caption: "Jenis-Jenis Majas (Gaya Bahasa)",
      headers: ["Majas", "Ciri Khas", "Contoh"],
      rows: [
        ["Simile/Perbandingan", "Membandingkan dg kata 'seperti/bagai/laksana'", "'Matanya bagai bintang di langit malam'"],
        ["Personifikasi", "Benda mati diberi sifat manusia", "'Angin berbisik di telingaku'"],
        ["Hiperbola", "Pernyataan berlebihan", "'Berlari seribu kilometer'"],
        ["Metafora", "Perbandingan langsung tanpa kata pembanding", "'Dia adalah bintang kelasku'"],
      ],
    },
    question: "Perhatikan tabel jenis majas di atas. Kalimat 'Matanya bagai bintang di langit malam' menggunakan majas ...",
    options: ["Hiperbola", "Personifikasi", "Simile/Perbandingan", "Metafora"],
    correctAnswer: 2,
    materi: "Majas", tujuanPembelajaran: "Mengidentifikasi jenis majas", levelKognitif: "C2"
  },
  {
    id: "bind-pg-28", type: "PG", number: 28,
    question: "Kalimat 'Angin berbisik di telingaku' menggunakan majas ...",
    options: ["Simile", "Hiperbola", "Personifikasi", "Metafora"],
    correctAnswer: 2,
    materi: "Majas", tujuanPembelajaran: "Mengidentifikasi majas personifikasi", levelKognitif: "C2"
  },
  {
    id: "bind-pg-29", type: "PG", number: 29,
    question: "Perhatikan kalimat berikut:\n'Setiap hari ia berlari seribu kilometer untuk menjaga kesehatannya.'\nKalimat tersebut menggunakan majas ...",
    options: ["Simile", "Personifikasi", "Metafora", "Hiperbola"],
    correctAnswer: 3,
    materi: "Majas", tujuanPembelajaran: "Mengidentifikasi majas hiperbola", levelKognitif: "C3"
  },
  {
    id: "bind-pg-30", type: "PG", number: 30,
    question: "Paragraf yang baik memiliki ciri-ciri sebagai berikut, kecuali ...",
    options: ["Memiliki satu ide pokok yang jelas", "Kalimat penjelas mendukung kalimat utama", "Menggunakan kata-kata yang baku dan sesuai", "Memuat banyak ide pokok agar lebih informatif"],
    correctAnswer: 3,
    materi: "Menulis Paragraf", tujuanPembelajaran: "Memahami ciri-ciri paragraf yang baik", levelKognitif: "C2"
  },

  // ===== SOAL TINGKAT LANJUT (C3-C5) =====
  {
    id: "bind-pg-31", type: "PG", number: 31,
    question: "Bacalah kutipan cerpen berikut.\n\n'Tidak ada yang terasa berbeda hari itu. Rania berjalan ke sekolah sendirian melewati taman yang sunyi dan jalan yang mulai ramai. Namun di lubuk hatinya, ia tahu bahwa hari ini akan mengubah segalanya.'\n\nUnsur latar (setting) yang terdapat dalam kutipan cerpen tersebut adalah ...",
    options: [
      "Rania — tokoh utama yang berjalan sendirian",
      "Taman yang sunyi dan jalan yang mulai ramai — tempat",
      "Perasaan Rania yang cemas akan perubahan — konflik batin",
      "Tidak ada yang terasa berbeda — tema cerita"
    ],
    correctAnswer: 1,
    materi: "Cerpen – Unsur Intrinsik (Latar)", tujuanPembelajaran: "Mengidentifikasi unsur latar dalam cerpen", levelKognitif: "C3"
  },
  {
    id: "bind-pg-32", type: "PG", number: 32,
    question: "Cerpen yang menggunakan kata ganti 'aku' sebagai tokoh utama yang menceritakan pengalamannya sendiri menggunakan sudut pandang ...",
    options: [
      "Orang ketiga serba tahu",
      "Orang ketiga terbatas",
      "Orang pertama pelaku utama",
      "Orang kedua"
    ],
    correctAnswer: 2,
    materi: "Cerpen – Sudut Pandang", tujuanPembelajaran: "Mengidentifikasi sudut pandang dalam cerpen", levelKognitif: "C2"
  },
  {
    id: "bind-pg-33", type: "PG", number: 33,
    question: "Bagian surat resmi yang memuat tujuan atau topik penulisan surat secara singkat sebelum isi surat dimulai disebut ...",
    options: [
      "Kepala surat (kop surat)",
      "Perihal",
      "Salam pembuka",
      "Lampiran"
    ],
    correctAnswer: 1,
    materi: "Surat Resmi", tujuanPembelajaran: "Mengidentifikasi bagian-bagian surat resmi", levelKognitif: "C2"
  },
  {
    id: "bind-pg-34", type: "PG", number: 34,
    question: "Kalimat 'Ayah membaca koran ketika ibu memasak di dapur' termasuk kalimat majemuk ...",
    options: [
      "Setara (koordinatif) dengan konjungsi 'dan'",
      "Bertingkat (subordinatif) dengan klausa waktu",
      "Rapatan (elliptical)",
      "Setara berlawanan dengan konjungsi 'tetapi'"
    ],
    correctAnswer: 1,
    materi: "Kalimat Majemuk", tujuanPembelajaran: "Mengidentifikasi jenis kalimat majemuk", levelKognitif: "C3"
  },
  {
    id: "bind-pg-35", type: "PG", number: 35,
    question: "Pilihan kata yang BAKU sesuai Kamus Besar Bahasa Indonesia (KBBI) terdapat pada kalimat ...",
    options: [
      "Ia menggunakan jadual yang sangat padat minggu ini",
      "Analisa data tersebut perlu segera diperbaiki",
      "Kita harus aktif dan kreatif dalam proses belajar",
      "Apotik itu terletak tepat di sebelah halte bis kota"
    ],
    correctAnswer: 2,
    materi: "Kata Baku", tujuanPembelajaran: "Menggunakan kata baku sesuai KBBI", levelKognitif: "C2"
  },
  {
    id: "bind-pg-36", type: "PG", number: 36,
    question: "Teks laporan hasil observasi berbeda dari teks deskripsi. Ciri khas teks laporan hasil observasi adalah ...",
    options: [
      "Mendeskripsikan objek secara detail dengan sudut pandang emosional",
      "Bersifat subjektif berdasarkan pengalaman dan perasaan penulis",
      "Bersifat ilmiah dan objektif, menggolongkan objek secara sistematis berdasarkan fakta",
      "Berisi alur cerita yang menggambarkan pengalaman pribadi penulis"
    ],
    correctAnswer: 2,
    materi: "Teks Laporan Hasil Observasi", tujuanPembelajaran: "Membedakan teks laporan observasi dan teks deskripsi", levelKognitif: "C3"
  },
  {
    id: "bind-pg-37", type: "PG", number: 37,
    chartData: {
      type: "table",
      caption: "Unsur Berita: 5W + 1H",
      headers: ["Kata Tanya", "Unsur Berita", "Jawaban dari Judul"],
      rows: [
        ["What (Apa)", "Peristiwa apa?", "Kompetisi Sains Nasional"],
        ["Who (Siapa)", "Siapa pelakunya?", "Pelajar SD di Bandung"],
        ["Where (Di mana)", "Di mana terjadi?", "Jakarta"],
        ["When (Kapan)", "Kapan terjadi?", "Kamis kemarin"],
        ["Why (Mengapa)", "Mengapa terjadi?", "Tidak disebutkan di judul"],
        ["How (Bagaimana)", "Bagaimana prosesnya?", "Tidak disebutkan di judul"],
      ],
    },
    question: "Perhatikan tabel analisis 5W1H di atas untuk judul berita:\n'Pelajar SD di Bandung Juarai Kompetisi Sains Nasional di Jakarta pada Kamis Kemarin'\n\nUnsur WHERE (Di mana) dalam judul berita tersebut adalah ...",
    options: [
      "Pelajar SD — pelaku berita",
      "Kompetisi sains nasional — peristiwa",
      "Jakarta — tempat berlangsungnya kompetisi",
      "Kamis kemarin — waktu kejadian"
    ],
    correctAnswer: 2,
    materi: "Teks Berita – Unsur 5W1H", tujuanPembelajaran: "Mengidentifikasi unsur berita 5W1H", levelKognitif: "C3"
  },
  {
    id: "bind-pg-38", type: "PG", number: 38,
    question: "Konfiks 'per-an' pada kata 'pertemuan', 'pertanian', dan 'perjuangan' umumnya menyatakan makna ...",
    options: [
      "Pelaku yang melakukan perbuatan tersebut",
      "Tempat, proses, atau hasil dari suatu perbuatan",
      "Alat yang digunakan untuk melakukan perbuatan",
      "Cara atau metode melakukan perbuatan"
    ],
    correctAnswer: 1,
    materi: "Morfologi – Konfiks", tujuanPembelajaran: "Menjelaskan makna konfiks per-an", levelKognitif: "C3"
  },
  {
    id: "bind-pg-39", type: "PG", number: 39,
    question: "Perhatikan teks berikut:\n'Penggunaan plastik sekali pakai mengancam ekosistem laut. Jutaan hewan laut mati tiap tahun karena menelan plastik. Sudah saatnya kita beralih ke produk ramah lingkungan. Jadilah bagian dari solusi, bukan masalah!'\n\nBagian yang merupakan AJAKAN/IMBAUAN dalam teks persuasi di atas adalah ...",
    options: [
      "Kalimat 1 — fakta tentang plastik",
      "Kalimat 2 — data korban hewan laut",
      "Kalimat 3 dan 4 — ajakan beralih dan menjadi bagian solusi",
      "Kalimat 2 dan 3 — kombinasi fakta dan ajakan"
    ],
    correctAnswer: 2,
    materi: "Teks Persuasi – Struktur", tujuanPembelajaran: "Mengidentifikasi bagian ajakan dalam teks persuasi", levelKognitif: "C4"
  },
  {
    id: "bind-pg-40", type: "PG", number: 40,
    question: "Bacalah teks ini: 'Kota X adalah kota terbersih di Indonesia berdasarkan survei Komunitas Peduli Lingkungan tahun 2023, yang melibatkan 500 warga dari 10 kota.'\n\nPernyataan yang PALING TEPAT dalam menilai keandalan informasi ini adalah ...",
    options: [
      "Informasi dapat dipercaya sepenuhnya karena ada data survei",
      "Informasi perlu dikritisi karena hanya berdasarkan satu sumber dengan sampel terbatas",
      "Informasi pasti benar karena ditulis dengan angka yang spesifik",
      "Informasi tidak valid karena tidak disertai foto bukti"
    ],
    correctAnswer: 1,
    materi: "Membaca Kritis", tujuanPembelajaran: "Menilai kredibilitas informasi dalam teks", levelKognitif: "C5"
  },
  {
    id: "bind-pg-41", type: "PG", number: 41,
    question: "Pertanyaan wawancara yang PALING EFEKTIF untuk menggali informasi mendalam dari narasumber adalah ...",
    options: [
      "'Kamu setuju, kan, bahwa kegiatan ini berhasil?' — menggiring jawaban",
      "'Apakah kamu suka kegiatan ini?' — hanya dijawab ya/tidak",
      "'Bagaimana dampak kegiatan ini terhadap lingkungan menurut Anda?' — open-ended",
      "'Apa dan bagaimana dan mengapa kegiatan ini dibuat?' — terlalu banyak dalam satu pertanyaan"
    ],
    correctAnswer: 2,
    materi: "Teks Wawancara", tujuanPembelajaran: "Menyusun pertanyaan wawancara yang efektif", levelKognitif: "C3"
  },
  {
    id: "bind-pg-42", type: "PG", number: 42,
    question: "Perhatikan ciri-ciri karya sastra lama berikut:\n(1) Setiap bait terdiri dari 2 baris\n(2) Baris pertama menyatakan syarat/sebab, baris kedua menyatakan akibat/nasihat\n(3) Rima a-a (kedua baris berakhiran sama)\n\nJenis karya sastra yang memiliki ciri-ciri di atas adalah ...",
    options: [
      "Pantun",
      "Syair",
      "Gurindam",
      "Seloka"
    ],
    correctAnswer: 2,
    materi: "Karya Sastra Lama – Gurindam", tujuanPembelajaran: "Membedakan pantun, syair, dan gurindam", levelKognitif: "C2"
  },
  {
    id: "bind-pg-43", type: "PG", number: 43,
    question: "Perhatikan kutipan cerpen:\n'Saat pengumuman juara dibacakan, Arif tidak mendengar namanya disebut. Ia menunduk dan berusaha menahan air mata. Padahal ia sudah berlatih berbulan-bulan untuk lomba ini.'\n\nJenis konflik yang dialami tokoh Arif adalah konflik ...",
    options: [
      "Eksternal — antara Arif dan juri perlombaan",
      "Internal — Arif berjuang menahan kekecewaan dalam dirinya sendiri",
      "Eksternal — antara Arif dan peserta lain yang menang",
      "Tidak ada konflik karena Arif hanya diam"
    ],
    correctAnswer: 1,
    materi: "Cerpen – Konflik", tujuanPembelajaran: "Mengidentifikasi jenis konflik dalam cerpen", levelKognitif: "C4"
  },
  {
    id: "bind-pg-44", type: "PG", number: 44,
    question: "Teks yang berisi penjelasan tentang proses terjadinya suatu fenomena alam atau sosial (seperti: mengapa terjadi gempa bumi, bagaimana terbentuknya pelangi) secara ilmiah disebut teks ...",
    options: [
      "Prosedur",
      "Eksplanasi",
      "Persuasi",
      "Narasi"
    ],
    correctAnswer: 1,
    materi: "Teks Eksplanasi", tujuanPembelajaran: "Mengidentifikasi jenis teks eksplanasi", levelKognitif: "C1"
  },
  {
    id: "bind-pg-45", type: "PG", number: 45,
    question: "Perhatikan dua kalimat ini:\nA: 'Anak itu berlari meninggalkan sekolah.'\nB: 'Seperti kilat, si bocah melesat meninggalkan gedung sekolah yang sudah membosankannya.'\n\nPerbedaan efek kedua kalimat pada pembaca adalah ...",
    options: [
      "Kalimat A lebih efektif karena lebih singkat dan langsung",
      "Kalimat B lebih hidup dan emosional karena menggunakan majas perbandingan dan deskripsi yang detail",
      "Kalimat A lebih baik karena menggunakan bahasa yang baku",
      "Keduanya memiliki efek yang sama karena menyampaikan informasi yang identik"
    ],
    correctAnswer: 1,
    materi: "Gaya Bahasa – Analisis Efek", tujuanPembelajaran: "Menganalisis efek penggunaan gaya bahasa terhadap pembaca", levelKognitif: "C5"
  },
];

const is: ISQuestion[] = [
  {
    id: "bind-is-1", type: "IS", number: 26,
    question: "Kalimat yang mengandung ide pokok suatu paragraf disebut kalimat ...",
    acceptedAnswers: ["utama", "kalimat utama", "topik", "pokok"],
    modelAnswer: "Kalimat utama (kalimat topik)",
    materi: "Struktur Paragraf", tujuanPembelajaran: "Menyebutkan istilah kalimat yang mengandung ide pokok", levelKognitif: "C1"
  },
  {
    id: "bind-is-2", type: "IS", number: 27,
    question: "Lawan kata (antonim) dari kata 'jujur' adalah ...",
    acceptedAnswers: ["bohong", "dusta", "tidak jujur"],
    modelAnswer: "Bohong/Dusta",
    materi: "Kosakata", tujuanPembelajaran: "Menentukan antonim kata", levelKognitif: "C1"
  },
  {
    id: "bind-is-3", type: "IS", number: 28,
    question: "Karya sastra yang terdiri atas 4 baris, dengan 2 baris pertama sebagai sampiran dan 2 baris terakhir sebagai isi disebut ...",
    acceptedAnswers: ["pantun"],
    modelAnswer: "Pantun",
    materi: "Sastra", tujuanPembelajaran: "Menyebutkan nama jenis karya sastra", levelKognitif: "C1"
  },
  {
    id: "bind-is-4", type: "IS", number: 29,
    question: "Imbuhan 'pe-' pada kata 'pelajar' menyatakan makna ...",
    acceptedAnswers: ["orang yang", "pelaku", "orang yang belajar"],
    modelAnswer: "Orang yang (melakukan pekerjaan tersebut) / Pelaku",
    materi: "Imbuhan", tujuanPembelajaran: "Menjelaskan makna imbuhan pe-", levelKognitif: "C2"
  },
  {
    id: "bind-is-5", type: "IS", number: 30,
    question: "Teks yang bertujuan menggambarkan suatu objek secara rinci sehingga pembaca seolah-olah melihat, mendengar, atau merasakan sendiri disebut teks ...",
    acceptedAnswers: ["deskripsi", "teks deskripsi", "deskriptif"],
    modelAnswer: "Teks Deskripsi",
    materi: "Jenis Teks", tujuanPembelajaran: "Menyebutkan nama jenis teks berdasarkan cirinya", levelKognitif: "C1"
  },
  {
    id: "bind-is-6", type: "IS", number: 31,
    question: "Persajakan atau kesamaan bunyi pada akhir baris-baris puisi disebut ...",
    acceptedAnswers: ["rima", "sajak"],
    modelAnswer: "Rima/Sajak",
    materi: "Puisi", tujuanPembelajaran: "Menyebutkan unsur-unsur puisi", levelKognitif: "C1"
  },
  {
    id: "bind-is-7", type: "IS", number: 32,
    question: "Kalimat 'Angin malam berbisik-bisik di telingaku' menggunakan majas ...",
    acceptedAnswers: ["personifikasi"],
    modelAnswer: "Personifikasi",
    materi: "Majas", tujuanPembelajaran: "Mengidentifikasi majas personifikasi", levelKognitif: "C2"
  },
  {
    id: "bind-is-8", type: "IS", number: 33,
    question: "Kata tanya yang digunakan untuk menanyakan waktu adalah ...",
    acceptedAnswers: ["kapan"],
    modelAnswer: "Kapan",
    materi: "Kata Tanya", tujuanPembelajaran: "Menggunakan kata tanya yang tepat", levelKognitif: "C1"
  },
  {
    id: "bind-is-9", type: "IS", number: 34,
    question: "Penulisan huruf kapital yang benar pada nama kota adalah ...\n(Contoh soal: jakarta → ...)",
    acceptedAnswers: ["jakarta", "Jakarta"],
    modelAnswer: "Jakarta (huruf kapital di awal nama kota)",
    materi: "Ejaan", tujuanPembelajaran: "Menerapkan aturan penulisan huruf kapital", levelKognitif: "C1"
  },
  {
    id: "bind-is-10", type: "IS", number: 35,
    question: "Kalimat yang berisi ajakan kepada pembaca untuk melakukan sesuatu biasanya dimulai dengan kata ...",
    acceptedAnswers: ["mari", "ayo", "marilah", "ayolah", "yuk"],
    modelAnswer: "Mari/Ayo/Marilah",
    materi: "Teks Persuasi", tujuanPembelajaran: "Mengidentifikasi kata-kata dalam kalimat ajakan", levelKognitif: "C1"
  },
  {
    id: "bind-is-11", type: "IS", number: 36,
    question: "Gabungan beberapa kalimat yang saling berkaitan dan membentuk satu kesatuan gagasan disebut ...",
    acceptedAnswers: ["paragraf", "alinea"],
    modelAnswer: "Paragraf/Alinea",
    materi: "Struktur Teks", tujuanPembelajaran: "Memahami pengertian paragraf", levelKognitif: "C1"
  },
  {
    id: "bind-is-12", type: "IS", number: 37,
    question: "Sinonim dari kata 'indah' adalah ...",
    acceptedAnswers: ["cantik", "elok", "molek", "permai", "bagus"],
    modelAnswer: "Cantik/Elok/Molek/Bagus",
    materi: "Kosakata", tujuanPembelajaran: "Menentukan sinonim kata", levelKognitif: "C1"
  },
  {
    id: "bind-is-13", type: "IS", number: 38,
    question: "Teks yang bertujuan menjelaskan proses terjadinya suatu peristiwa alam atau sosial, seperti proses terjadinya gempa bumi atau terbentuknya pelangi, secara ilmiah disebut teks ...",
    acceptedAnswers: ["eksplanasi", "teks eksplanasi"],
    modelAnswer: "Teks eksplanasi",
    materi: "Jenis Teks", tujuanPembelajaran: "Menyebutkan nama teks berdasarkan tujuannya", levelKognitif: "C1"
  },
  {
    id: "bind-is-14", type: "IS", number: 39,
    question: "Kalimat 'Hatiku hancur berkeping-keping mendengar kabar sedih itu' menggunakan majas ...",
    acceptedAnswers: ["hiperbola"],
    modelAnswer: "Hiperbola (ungkapan berlebih-lebihan untuk menekankan perasaan)",
    materi: "Majas", tujuanPembelajaran: "Mengidentifikasi majas hiperbola dalam kalimat", levelKognitif: "C2"
  },
  {
    id: "bind-is-15", type: "IS", number: 40,
    question: "Kata 'jadwal', 'apotek', dan 'izin' merupakan contoh penulisan kata yang ...",
    acceptedAnswers: ["baku", "kata baku"],
    modelAnswer: "Kata baku (sesuai KBBI) — bukan jadual, apotik, atau ijin",
    materi: "Kata Baku", tujuanPembelajaran: "Membedakan kata baku dan tidak baku", levelKognitif: "C2"
  },
  {
    id: "bind-is-16", type: "IS", number: 41,
    question: "Identifikasi jenis kalimat: 'Ibu memasak nasi sementara ayah membersihkan halaman rumah.' Kalimat tersebut adalah kalimat majemuk ...",
    acceptedAnswers: ["setara", "koordinatif", "majemuk setara"],
    modelAnswer: "Kalimat majemuk setara — dua kejadian setara yang terjadi bersamaan",
    materi: "Kalimat Majemuk", tujuanPembelajaran: "Mengidentifikasi jenis kalimat majemuk", levelKognitif: "C3"
  },
  {
    id: "bind-is-17", type: "IS", number: 42,
    question: "Dalam alur cerpen, bagian cerita yang menuju titik puncak ketegangan/masalah sebelum mulai diselesaikan disebut bagian ...",
    acceptedAnswers: ["klimaks", "puncak konflik", "puncak"],
    modelAnswer: "Klimaks (puncak konflik)",
    materi: "Alur Cerpen", tujuanPembelajaran: "Menyebutkan tahapan alur dalam cerpen", levelKognitif: "C1"
  },
  {
    id: "bind-is-18", type: "IS", number: 43,
    question: "Penulis cerpen yang menggunakan sudut pandang 'dia' (orang ketiga) dan mengetahui pikiran, perasaan, serta tindakan SEMUA tokoh secara lengkap menggunakan sudut pandang ...",
    acceptedAnswers: ["orang ketiga serba tahu", "serba tahu", "omniscient", "orang ketiga"],
    modelAnswer: "Sudut pandang orang ketiga serba tahu (omniscient narrator)",
    materi: "Cerpen – Sudut Pandang", tujuanPembelajaran: "Mengidentifikasi sudut pandang serba tahu", levelKognitif: "C2"
  },
];

const ut: UTQuestion[] = [
  {
    id: "bind-ut-1", type: "UT", number: 38,
    question: "Bacalah teks berikut dengan saksama!\n\n'Musim hujan telah tiba. Langit berubah mendung setiap sore hari. Air hujan turun membasahi bumi. Petani menyambut musim hujan dengan gembira karena ladang mereka akan mendapat air yang cukup. Namun, warga kota justru was-was karena khawatir terjadi banjir.'\n\nTentukan:\n1. Ide pokok paragraf tersebut!\n2. Tuliskan kalimat utama dalam paragraf tersebut!\n3. Sebutkan 2 kalimat penjelas dalam paragraf tersebut!",
    modelAnswer: "1. Ide pokok: Dampak musim hujan bagi petani dan warga kota (atau: kedatangan musim hujan)\n2. Kalimat utama: 'Musim hujan telah tiba.' (kalimat pertama)\n3. Kalimat penjelas: (a) 'Langit berubah mendung setiap sore hari.' (b) 'Air hujan turun membasahi bumi.' (atau kalimat lainnya selain kalimat utama)",
    keyPoints: ["Ide pokok teridentifikasi dengan benar", "Kalimat utama disebutkan dengan tepat", "2 kalimat penjelas disebutkan dengan tepat", "Pemahaman isi teks benar"],
    materi: "Membaca Pemahaman", tujuanPembelajaran: "Mengidentifikasi ide pokok, kalimat utama, dan penjelas", levelKognitif: "C3"
  },
  {
    id: "bind-ut-2", type: "UT", number: 39,
    question: "Buatlah sebuah paragraf deskripsi (minimal 5 kalimat) yang menggambarkan suasana kelas atau sekolahmu! Gunakan kata-kata yang kaya dan deskriptif sehingga pembaca seolah-olah berada di tempat tersebut!",
    modelAnswer: "Kelasku sangat menyenangkan dan tertata rapi. Dinding kelas dihiasi dengan berbagai pajangan hasil karya siswa yang berwarna-warni. Di depan kelas terdapat papan tulis besar berwarna putih yang selalu bersih. Bangku-bangku siswa tersusun rapi menghadap ke depan. Suara ceria teman-temanku mengisi udara ketika jam istirahat tiba. Jendela-jendela lebar membiarkan cahaya matahari masuk dan menerangi seluruh ruangan.",
    keyPoints: ["Minimal 5 kalimat ditulis", "Penggunaan kata-kata deskriptif yang kaya", "Menggambarkan kelas/sekolah secara rinci", "Pembaca dapat membayangkan tempat yang dideskripsikan", "Penggunaan ejaan dan tanda baca yang benar"],
    materi: "Teks Deskripsi", tujuanPembelajaran: "Menulis teks deskripsi dengan baik", levelKognitif: "C5"
  },
  {
    id: "bind-ut-3", type: "UT", number: 40,
    question: "Buatlah sebuah pantun dengan tema lingkungan hidup! Pastikan pantunmu memenuhi syarat: (1) terdiri dari 4 baris, (2) baris 1-2 adalah sampiran, (3) baris 3-4 adalah isi, (4) memiliki rima a-b-a-b atau a-a-b-b!",
    modelAnswer: "Contoh pantun:\nPergi ke taman memetik bunga (a)\nBunga harum semerbak wangi (b)\nJaga lingkungan agar terjaga (a)\nAgar bumi tetap sehat dan asri (b)\n\natau:\nBurung tekukur hinggap di pagar (a)\nSambil bernyanyi di pagi hari (b)\nJika sampah kita buang sembarang (a)\nHidup kita akan rugi sendiri (b)",
    keyPoints: ["4 baris sesuai struktur pantun", "Baris 1-2 adalah sampiran (tidak berhubungan langsung dengan isi)", "Baris 3-4 adalah isi bertema lingkungan", "Memiliki rima yang sesuai (a-b-a-b atau a-a-b-b)", "Rima akhir baris 1 & 3 sama, baris 2 & 4 sama"],
    materi: "Pantun", tujuanPembelajaran: "Membuat pantun dengan tema lingkungan", levelKognitif: "C5"
  },
  {
    id: "bind-ut-4", type: "UT", number: 41,
    question: "Tulislah sebuah laporan kegiatan singkat tentang salah satu kegiatan yang pernah kamu ikuti di sekolah (misalnya: karyawisata, lomba, kerja bakti, atau upacara). Laporan harus memuat: waktu, tempat, kegiatan yang dilakukan, dan kesimpulan/kesan!",
    modelAnswer: "Laporan Kegiatan Karyawisata\n\nPada hari Jumat, 18 April 2025, kelas 6A SD Pelita mengadakan karyawisata ke Taman Mini Indonesia Indah (TMII) di Jakarta Timur. Kami berangkat dari sekolah pukul 07.00 dan tiba di TMII pukul 08.30.\n\nDi sana, kami mengunjungi berbagai anjungan rumah adat dari seluruh provinsi di Indonesia. Kami juga menonton pertunjukan budaya tradisional yang sangat menarik. Setelah itu, kami makan siang bersama di gazebo yang teduh.\n\nKaryawisata ini sangat bermanfaat bagi kami. Kami dapat belajar tentang keragaman budaya Indonesia secara langsung. Pengalaman ini sangat berkesan dan menambah rasa cinta kami terhadap tanah air.",
    keyPoints: ["Menyebutkan waktu dan tempat kegiatan", "Mendeskripsikan kegiatan yang dilakukan", "Menyebutkan kesimpulan/kesan", "Laporan ditulis secara runtut dan logis", "Menggunakan bahasa yang baku"],
    materi: "Laporan Kegiatan", tujuanPembelajaran: "Menulis laporan kegiatan secara sistematis", levelKognitif: "C5"
  },
  {
    id: "bind-ut-5", type: "UT", number: 42,
    question: "Jelaskan perbedaan antara fakta dan opini! Kemudian, dari kalimat-kalimat di bawah ini, tentukan mana yang termasuk fakta dan mana yang termasuk opini!\n1. Jakarta adalah ibu kota Indonesia.\n2. Menurut saya, makanan Betawi sangat lezat dan sebaiknya dilestarikan.\n3. Gunung Semeru memiliki ketinggian 3.676 meter di atas permukaan laut.\n4. Buku itu tampaknya terlalu sulit untuk anak kelas 6.",
    modelAnswer: "Fakta adalah pernyataan yang dapat dibuktikan kebenarannya secara objektif dengan data atau bukti nyata. Opini adalah pernyataan berupa pendapat, perasaan, atau perkiraan seseorang yang belum tentu dapat dibuktikan.\n\n1. Jakarta adalah ibu kota Indonesia → FAKTA (dapat dibuktikan)\n2. 'Menurut saya, makanan Betawi sangat lezat...' → OPINI (berisi pendapat/penilaian pribadi)\n3. Gunung Semeru memiliki ketinggian 3.676 mdpl → FAKTA (berdasarkan data ukuran)\n4. 'Buku itu tampaknya terlalu sulit...' → OPINI (perkiraan/penilaian subjektif)",
    keyPoints: ["Definisi fakta benar", "Definisi opini benar", "Kalimat 1 dan 3 diidentifikasi sebagai fakta", "Kalimat 2 dan 4 diidentifikasi sebagai opini", "Penjelasan alasan masing-masing"],
    materi: "Fakta dan Opini", tujuanPembelajaran: "Membedakan fakta dan opini dalam teks", levelKognitif: "C4"
  },
  {
    id: "bind-ut-6", type: "UT", number: 43,
    question: "Tulislah sebuah teks persuasi (mengajak) dengan tema 'Menjaga Kebersihan Lingkungan Sekolah' dalam 2-3 paragraf! Gunakan kata-kata ajakan yang tepat, disertai minimal 2 argumen pendukung dan 1 ajakan/imbauan yang jelas!",
    modelAnswer: "Menjaga Kebersihan Lingkungan Sekolah\n\nSekolah adalah rumah kedua bagi kita semua. Di sinilah kita belajar, bermain, dan menghabiskan sebagian besar waktu kita. Oleh karena itu, marilah kita jaga kebersihan sekolah kita bersama-sama!\n\nAyolah kita mulai dari hal-hal kecil yang mudah dilakukan. Buanglah sampah pada tempatnya, jangan mencoret-coret dinding atau meja, dan bersihkan kelas kita setiap hari. Kita juga dapat membuat jadwal piket yang teratur agar semua murid bergiliran membersihkan kelas.\n\nSekolah yang bersih akan membuat kita nyaman belajar dan terhindar dari penyakit. Ingat, kebersihan adalah tanggung jawab kita bersama. Ayo jadikan sekolah kita tempat yang bersih, sehat, dan menyenangkan!",
    keyPoints: ["Teks berisi ajakan (persuasi)", "Menggunakan kata ajakan (marilah, ayolah, ayo, dsb)", "Tema kebersihan lingkungan sekolah terpenuhi", "2-3 paragraf ditulis", "Alasan/argumen mendukung ajakan ada"],
    materi: "Teks Persuasi", tujuanPembelajaran: "Menulis teks persuasi dengan bahasa yang tepat", levelKognitif: "C5"
  },
  {
    id: "bind-ut-7", type: "UT", number: 44,
    question: "Bacalah kutipan cerpen berikut!\n\n'Zahra menatap layar ponsel yang menampilkan nilai ujiannya — 45. Ia menghela napas panjang. Berbulan-bulan ia belajar diam-diam agar bisa membuktikan dirinya kepada teman-teman yang selalu meremehkannya. Namun hasilnya jauh dari harapan. Ia tidak menangis. Ia hanya berpikir: kalau gagal sekali, berarti ia harus mencoba seratus kali.'\n\nJawab pertanyaan berikut:\n1. Siapa tokoh utama dan bagaimana wataknya? Berikan buktinya dari teks!\n2. Apa konflik yang dialami tokoh? (internal/eksternal)\n3. Apa tema cerita berdasarkan kutipan?\n4. Sudut pandang apa yang digunakan penulis?",
    modelAnswer: "1. Tokoh utama: Zahra. Watak: pantang menyerah/gigih — dibuktikan oleh kalimat 'kalau gagal sekali, berarti ia harus mencoba seratus kali.'\n2. Konflik: Internal — Zahra menghadapi kekecewaan mendalam dalam dirinya setelah nilai rendah, meskipun sudah belajar keras. Ia berjuang menata hati untuk tidak menyerah.\n3. Tema: Kegigihan dan semangat pantang menyerah dalam menghadapi kegagalan.\n4. Sudut pandang: Orang ketiga serba tahu — penulis menggunakan 'ia' dan mengetahui pikiran batin Zahra.",
    keyPoints: [
      "Tokoh Zahra disebutkan dengan watak yang tepat dan bukti dari teks",
      "Konflik internal Zahra diidentifikasi dengan benar",
      "Tema pantang menyerah/kegigihan disebutkan",
      "Sudut pandang orang ketiga (serba tahu) disebutkan"
    ],
    materi: "Cerpen – Analisis Unsur Intrinsik", tujuanPembelajaran: "Menganalisis unsur intrinsik cerpen secara terpadu", levelKognitif: "C4"
  },
  {
    id: "bind-ut-8", type: "UT", number: 45,
    question: "Bacalah puisi berikut!\n\nSurat untuk Bumi\nKau beri kami nafas sejuk\nKau beri kami air jernih\nKami balas dengan racun mengepul\nKami balas dengan sampah menggunung\n\nKau menangis diam-diam\nDi balik hujan yang tak biasa\nBanjir, longsor, dan panas yang menyengat\nItulah tangisanmu yang kami abaikan\n\nAnalisis puisi di atas dengan menjawab:\n1. Apa tema puisi tersebut?\n2. Temukan satu majas dalam puisi dan jelaskan efeknya bagi pembaca!\n3. Apa pesan/amanat yang ingin disampaikan penyair?",
    modelAnswer: "1. Tema: Kerusakan lingkungan hidup akibat perilaku manusia yang tidak bertanggung jawab.\n\n2. Majas: 'Kau menangis diam-diam' dan 'itulah tangisanmu' → Majas personifikasi (bumi diberi sifat manusia yang bisa menangis). Efek: Memberikan gambaran yang kuat dan menyentuh hati bahwa bumi sedang 'menderita'. Pembaca lebih tergerak secara emosional untuk peduli pada lingkungan.\n\n3. Pesan/amanat: Manusia harus berhenti merusak alam dan mulai menghargai lingkungan yang telah memberi kehidupan. Jika tidak, bencana alam (banjir, longsor, panas ekstrem) akan terus terjadi sebagai 'balasan' alam atas ulah manusia.",
    keyPoints: [
      "Tema kerusakan lingkungan/alam disebutkan dengan tepat",
      "Majas personifikasi diidentifikasi dengan benar dari teks",
      "Efek majas bagi pembaca dijelaskan dengan logis",
      "Pesan/amanat relevan dengan isi dan tema puisi"
    ],
    materi: "Puisi – Analisis Majas dan Amanat", tujuanPembelajaran: "Menganalisis majas dan pesan dalam puisi", levelKognitif: "C4"
  },
];

export const bindonesiaBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    // Sesi 1: Dasar (ide pokok, kosakata, teks sederhana)
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    // Sesi 2: Menengah-Bawah (teks deskripsi, persuasi, majas, pantun)
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], is: [1,2,3,4,5,6,7,8,9,10], ut: [1,2,3,4,5] },
    // Sesi 3: Menengah (mix lama + baru: teks laporan, cerpen, surat resmi)
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,1,3], is: [0,2,4,6,8,10,12,14,16,17], ut: [0,2,4,6,8] },
    // Sesi 4: Tinggi (analisis teks, kalimat majemuk, kata baku, cerpen)
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39], is: [2,3,4,5,6,7,8,9,12,13], ut: [2,3,4,6,7] },
    // Sesi 5: Paling Sulit (C4-C5: evaluasi teks, analisis cerpen, menulis esai argumentasi)
    { pg: [25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,1,3,5,7,9], is: [11,12,13,14,15,16,17,0,1,2], ut: [5,6,7,8,0] },
  ],
};
