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
    question: "Perhatikan bait puisi berikut:\n'Tanah airku Indonesia\nNegeri elok amat kucinta\nTanah tumpah darahku yang mulia\nYang ku puja sepanjang masa'\n\nPuisi di atas mengungkapkan perasaan ...",
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
    question: "Kalimat fakta adalah kalimat yang ...",
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
    question: "Kata tanya yang digunakan untuk menanyakan cara atau proses adalah ...",
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
    question: "Kalimat 'Matanya bagai bintang di langit malam' menggunakan majas ...",
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
    question: "Tulislah sebuah teks persuasi (mengajak) dengan tema 'Menjaga Kebersihan Lingkungan Sekolah' dalam 2-3 paragraf! Gunakan kata-kata ajakan yang tepat!",
    modelAnswer: "Menjaga Kebersihan Lingkungan Sekolah\n\nSekolah adalah rumah kedua bagi kita semua. Di sinilah kita belajar, bermain, dan menghabiskan sebagian besar waktu kita. Oleh karena itu, marilah kita jaga kebersihan sekolah kita bersama-sama!\n\nAyolah kita mulai dari hal-hal kecil yang mudah dilakukan. Buanglah sampah pada tempatnya, jangan mencoret-coret dinding atau meja, dan bersihkan kelas kita setiap hari. Kita juga dapat membuat jadwal piket yang teratur agar semua murid bergiliran membersihkan kelas.\n\nSekolah yang bersih akan membuat kita nyaman belajar dan terhindar dari penyakit. Ingat, kebersihan adalah tanggung jawab kita bersama. Ayo jadikan sekolah kita tempat yang bersih, sehat, dan menyenangkan!",
    keyPoints: ["Teks berisi ajakan (persuasi)", "Menggunakan kata ajakan (marilah, ayolah, ayo, dsb)", "Tema kebersihan lingkungan sekolah terpenuhi", "2-3 paragraf ditulis", "Alasan/argumen mendukung ajakan ada"],
    materi: "Teks Persuasi", tujuanPembelajaran: "Menulis teks persuasi dengan bahasa yang tepat", levelKognitif: "C5"
  },
];

export const bindonesiaBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], is: [1,2,3,4,5,6,7,8,9,10], ut: [1,2,3,4,5] },
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,1,3,5,7,9,11,13,15,17,19], is: [0,2,4,6,8,10,1,3,5,7], ut: [0,2,4,1,3] },
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4], is: [2,3,4,5,6,7,8,9,10,11], ut: [2,3,4,5,0] },
    { pg: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,0,2,4,6,8,10,12,14,16,18], is: [0,1,3,5,7,9,11,2,4,6], ut: [0,1,2,4,5] },
  ],
};
