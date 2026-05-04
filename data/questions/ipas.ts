import { PGQuestion, ISQuestion, UTQuestion, SubjectQuestionBank } from "@/lib/types";

const pg: PGQuestion[] = [
  // Makhluk Hidup & Lingkungan (C1-C3)
  {
    id: "ipas-pg-1", type: "PG", number: 1,
    question: "Proses masuknya cahaya matahari ke dalam daun untuk menghasilkan makanan pada tumbuhan disebut ...",
    options: ["Respirasi", "Transpirasi", "Fotosintesis", "Evaporasi"],
    correctAnswer: 2,
    materi: "Tumbuhan dan Fotosintesis", tujuanPembelajaran: "Menjelaskan proses fotosintesis", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-2", type: "PG", number: 2,
    question: "Bahan-bahan yang dibutuhkan tumbuhan untuk melakukan fotosintesis adalah ...",
    options: ["Air, karbon dioksida, cahaya matahari", "Oksigen, air, tanah", "Karbon dioksida, oksigen, mineral", "Air, oksigen, glukosa"],
    correctAnswer: 0,
    materi: "Tumbuhan dan Fotosintesis", tujuanPembelajaran: "Mengidentifikasi bahan fotosintesis", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-3", type: "PG", number: 3,
    question: "Hasil dari proses fotosintesis adalah ...",
    options: ["Air dan karbon dioksida", "Glukosa dan oksigen", "Mineral dan air", "Karbon dioksida dan uap air"],
    correctAnswer: 1,
    materi: "Tumbuhan dan Fotosintesis", tujuanPembelajaran: "Menyebutkan hasil fotosintesis", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-4", type: "PG", number: 4,
    question: "Hewan yang memakan tumbuhan disebut ...",
    options: ["Karnivora", "Herbivora", "Omnivora", "Dekomposer"],
    correctAnswer: 1,
    materi: "Rantai Makanan", tujuanPembelajaran: "Mengklasifikasikan jenis konsumen", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-5", type: "PG", number: 5,
    question: "Perhatikan rantai makanan berikut:\nRumput → Belalang → Katak → Ular → Elang\nHewan yang berperan sebagai konsumen tingkat dua adalah ...",
    options: ["Rumput", "Belalang", "Katak", "Ular"],
    correctAnswer: 2,
    materi: "Rantai Makanan", tujuanPembelajaran: "Mengidentifikasi peran dalam rantai makanan", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-6", type: "PG", number: 6,
    question: "Simbiosis antara kupu-kupu dan bunga, di mana kupu-kupu mendapat nektar dan bunga terbantu penyerbukannya, disebut ...",
    options: ["Parasitisme", "Komensalisme", "Mutualisme", "Predasi"],
    correctAnswer: 2,
    materi: "Simbiosis", tujuanPembelajaran: "Mengidentifikasi jenis simbiosis", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-7", type: "PG", number: 7,
    question: "Hubungan antara benalu dan pohon inangnya termasuk simbiosis ...",
    options: ["Mutualisme", "Komensalisme", "Parasitisme", "Netralisme"],
    correctAnswer: 2,
    materi: "Simbiosis", tujuanPembelajaran: "Mengidentifikasi simbiosis parasitisme", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-8", type: "PG", number: 8,
    question: "Berikut ini yang merupakan ciri-ciri makhluk hidup adalah ...",
    options: ["Diam, tidak bergerak, tidak tumbuh", "Bergerak, bernapas, tumbuh, berkembang biak", "Berwarna, keras, tidak memerlukan makanan", "Mengkilap, dingin, tidak bernapas"],
    correctAnswer: 1,
    materi: "Ciri-ciri Makhluk Hidup", tujuanPembelajaran: "Menyebutkan ciri makhluk hidup", levelKognitif: "C1"
  },

  // Tubuh Manusia & Kesehatan (C1-C3)
  {
    id: "ipas-pg-9", type: "PG", number: 9,
    question: "Organ tubuh yang berfungsi memompa darah ke seluruh tubuh adalah ...",
    options: ["Paru-paru", "Jantung", "Ginjal", "Hati"],
    correctAnswer: 1,
    materi: "Sistem Peredaran Darah", tujuanPembelajaran: "Mengidentifikasi fungsi organ tubuh manusia", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-10", type: "PG", number: 10,
    question: "Organ yang berfungsi untuk menyaring darah dan menghasilkan urine adalah ...",
    options: ["Jantung", "Paru-paru", "Ginjal", "Usus"],
    correctAnswer: 2,
    materi: "Sistem Ekskresi", tujuanPembelajaran: "Mengidentifikasi fungsi ginjal", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-11", type: "PG", number: 11,
    question: "Proses masuknya oksigen ke dalam tubuh dan keluarnya karbon dioksida disebut ...",
    options: ["Pencernaan", "Peredaran darah", "Pernapasan", "Ekskresi"],
    correctAnswer: 2,
    materi: "Sistem Pernapasan", tujuanPembelajaran: "Menjelaskan sistem pernapasan manusia", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-12", type: "PG", number: 12,
    question: "Vitamin C banyak terdapat pada buah-buahan seperti jeruk dan bermanfaat untuk ...",
    options: ["Memperkuat tulang", "Membantu pembekuan darah", "Meningkatkan daya tahan tubuh", "Membentuk sel darah merah"],
    correctAnswer: 2,
    materi: "Gizi dan Kesehatan", tujuanPembelajaran: "Menjelaskan manfaat vitamin", levelKognitif: "C2"
  },

  // Materi dan Perubahannya (C1-C3)
  {
    id: "ipas-pg-13", type: "PG", number: 13,
    question: "Perubahan wujud air menjadi es disebut ...",
    options: ["Mencair", "Membeku", "Menguap", "Mengembun"],
    correctAnswer: 1,
    materi: "Perubahan Wujud Zat", tujuanPembelajaran: "Mengidentifikasi perubahan wujud zat", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-14", type: "PG", number: 14,
    question: "Besi yang dibiarkan di udara terbuka lama-kelamaan akan berkarat. Perubahan ini merupakan perubahan ...",
    options: ["Fisika", "Kimia", "Biologi", "Fisika dan kimia"],
    correctAnswer: 1,
    materi: "Perubahan Materi", tujuanPembelajaran: "Membedakan perubahan fisika dan kimia", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-15", type: "PG", number: 15,
    question: "Contoh perubahan fisika adalah ...",
    options: ["Kertas yang dibakar", "Besi berkarat", "Air yang membeku", "Susu yang menjadi basi"],
    correctAnswer: 2,
    materi: "Perubahan Materi", tujuanPembelajaran: "Membedakan perubahan fisika dan kimia", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-16", type: "PG", number: 16,
    question: "Benda yang dapat menghantarkan listrik disebut ...",
    options: ["Isolator", "Konduktor", "Semikonduktor", "Kapasitor"],
    correctAnswer: 1,
    materi: "Listrik", tujuanPembelajaran: "Membedakan konduktor dan isolator", levelKognitif: "C1"
  },

  // Energi & Gaya (C1-C3)
  {
    id: "ipas-pg-17", type: "PG", number: 17,
    question: "Energi yang dihasilkan oleh matahari dan dimanfaatkan oleh panel surya disebut energi ...",
    options: ["Angin", "Air", "Surya/Matahari", "Panas bumi"],
    correctAnswer: 2,
    materi: "Energi Terbarukan", tujuanPembelajaran: "Mengidentifikasi sumber energi terbarukan", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-18", type: "PG", number: 18,
    question: "Gaya yang bekerja pada benda karena tarikan bumi disebut gaya ...",
    options: ["Gesek", "Magnet", "Gravitasi", "Pegas"],
    correctAnswer: 2,
    materi: "Gaya", tujuanPembelajaran: "Menjelaskan gaya gravitasi", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-19", type: "PG", number: 19,
    question: "Saat mendorong meja yang berat di lantai, kamu merasakan hambatan. Hambatan tersebut disebabkan oleh gaya ...",
    options: ["Gravitasi", "Magnet", "Gesek", "Dorong"],
    correctAnswer: 2,
    materi: "Gaya", tujuanPembelajaran: "Menjelaskan gaya gesek", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-20", type: "PG", number: 20,
    question: "Berikut ini yang termasuk sumber energi tak terbarukan adalah ...",
    options: ["Angin", "Matahari", "Batu bara", "Air"],
    correctAnswer: 2,
    materi: "Sumber Energi", tujuanPembelajaran: "Membedakan energi terbarukan dan tak terbarukan", levelKognitif: "C2"
  },

  // Bumi & Alam Semesta (C1-C3)
  {
    id: "ipas-pg-21", type: "PG", number: 21,
    question: "Lapisan terluar bumi yang kita tinggali disebut ...",
    options: ["Inti bumi", "Mantel bumi", "Kerak bumi", "Atmosfer"],
    correctAnswer: 2,
    materi: "Struktur Bumi", tujuanPembelajaran: "Mengidentifikasi lapisan bumi", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-22", type: "PG", number: 22,
    question: "Rotasi bumi menyebabkan terjadinya ...",
    options: ["Pergantian musim", "Siang dan malam", "Pasang surut air laut", "Gerhana matahari"],
    correctAnswer: 1,
    materi: "Rotasi dan Revolusi Bumi", tujuanPembelajaran: "Menjelaskan akibat rotasi bumi", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-23", type: "PG", number: 23,
    question: "Planet yang paling dekat dengan matahari dalam tata surya kita adalah ...",
    options: ["Venus", "Bumi", "Merkurius", "Mars"],
    correctAnswer: 2,
    materi: "Tata Surya", tujuanPembelajaran: "Menyebutkan urutan planet dalam tata surya", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-24", type: "PG", number: 24,
    question: "Gerhana matahari terjadi ketika ...",
    options: ["Bumi berada di antara matahari dan bulan", "Bulan berada di antara matahari dan bumi", "Matahari berada di antara bumi dan bulan", "Bumi mengelilingi matahari"],
    correctAnswer: 1,
    materi: "Gerhana", tujuanPembelajaran: "Menjelaskan terjadinya gerhana matahari", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-25", type: "PG", number: 25,
    question: "Revolusi bumi mengelilingi matahari menyebabkan terjadinya ...",
    options: ["Siang dan malam", "Pergantian musim/tahun", "Gerhana bulan", "Angin dan hujan"],
    correctAnswer: 1,
    materi: "Rotasi dan Revolusi Bumi", tujuanPembelajaran: "Menjelaskan akibat revolusi bumi", levelKognitif: "C2"
  },

  // Teknologi & Lingkungan (C2-C4)
  {
    id: "ipas-pg-26", type: "PG", number: 26,
    question: "Penggunaan plastik secara berlebihan dapat mencemari lingkungan karena plastik ...",
    options: ["Mudah terurai oleh tanah", "Sulit terurai dan tahan lama", "Membuat tanah subur", "Diserap oleh air hujan"],
    correctAnswer: 1,
    materi: "Pencemaran Lingkungan", tujuanPembelajaran: "Mengidentifikasi dampak pencemaran plastik", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-27", type: "PG", number: 27,
    question: "Kegiatan berikut yang dapat membantu menjaga kelestarian lingkungan adalah ...",
    options: ["Membakar sampah sembarangan", "Menebang pohon di hutan", "Menanam pohon kembali (reboisasi)", "Membuang limbah ke sungai"],
    correctAnswer: 2,
    materi: "Pelestarian Lingkungan", tujuanPembelajaran: "Menganalisis cara menjaga lingkungan", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-28", type: "PG", number: 28,
    question: "Teknologi yang memanfaatkan energi angin untuk menghasilkan listrik adalah ...",
    options: ["Panel surya", "Kincir angin/turbin angin", "PLTA", "Generator diesel"],
    correctAnswer: 1,
    materi: "Teknologi Energi", tujuanPembelajaran: "Mengidentifikasi teknologi energi terbarukan", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-29", type: "PG", number: 29,
    question: "Berikut ini yang termasuk teknologi sederhana dalam kehidupan sehari-hari adalah ...",
    options: ["Roket", "Satelit", "Katrol untuk mengangkat beban", "Kapal selam"],
    correctAnswer: 2,
    materi: "Teknologi Sederhana", tujuanPembelajaran: "Mengidentifikasi teknologi sederhana", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-30", type: "PG", number: 30,
    question: "Pemanasan global (global warming) disebabkan oleh meningkatnya kadar gas ... di atmosfer.",
    options: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"],
    correctAnswer: 2,
    materi: "Perubahan Iklim", tujuanPembelajaran: "Menjelaskan penyebab pemanasan global", levelKognitif: "C2"
  },

  // Siklus Air (C1-C3)
  {
    id: "ipas-pg-31", type: "PG", number: 31,
    question: "Urutan tahapan siklus air yang benar adalah ...",
    options: [
      "Evaporasi → Kondensasi → Presipitasi → Infiltrasi",
      "Presipitasi → Evaporasi → Kondensasi → Infiltrasi",
      "Infiltrasi → Presipitasi → Kondensasi → Evaporasi",
      "Kondensasi → Evaporasi → Infiltrasi → Presipitasi"
    ],
    correctAnswer: 0,
    materi: "Siklus Air", tujuanPembelajaran: "Mengurutkan tahapan siklus air", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-32", type: "PG", number: 32,
    question: "Sebuah daerah mengalami pembangunan gedung dengan permukaan beton yang luas. Akibatnya air hujan tidak dapat meresap ke dalam tanah. Dampak jangka panjang yang paling mungkin terjadi adalah ...",
    options: [
      "Kualitas air tanah menjadi lebih baik",
      "Cadangan air tanah sebagai sumber air bersih akan berkurang",
      "Sumur-sumur warga akan menjadi lebih dalam",
      "Jumlah air hujan akan semakin meningkat"
    ],
    correctAnswer: 1,
    materi: "Siklus Air dan Lingkungan", tujuanPembelajaran: "Menganalisis dampak alih fungsi lahan terhadap siklus air", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-33", type: "PG", number: 33,
    question: "Proses berubahnya air menjadi uap air karena panas matahari dalam siklus air disebut ...",
    options: ["Kondensasi", "Presipitasi", "Infiltrasi", "Evaporasi"],
    correctAnswer: 3,
    materi: "Siklus Air", tujuanPembelajaran: "Menyebutkan nama proses dalam siklus air", levelKognitif: "C1"
  },

  // Sifat Cahaya (C1-C3)
  {
    id: "ipas-pg-34", type: "PG", number: 34,
    question: "Perhatikan gambar berikut.\nSinar senter yang diarahkan ke cermin datar akan memantul. Peristiwa ini membuktikan bahwa cahaya memiliki sifat ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Reflection_angles.svg/320px-Reflection_angles.svg.png",
    options: ["Merambat lurus", "Dapat dipantulkan", "Dapat dibiaskan", "Menembus benda bening"],
    correctAnswer: 1,
    materi: "Sifat Cahaya", tujuanPembelajaran: "Mengidentifikasi sifat-sifat cahaya", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-35", type: "PG", number: 35,
    question: "Ketika sinar matahari melewati kaca bening, cahaya dapat menembus kaca tersebut. Sifat cahaya yang ditunjukkan oleh peristiwa tersebut adalah ...",
    options: ["Cahaya merambat lurus", "Cahaya dapat dipantulkan", "Cahaya menembus benda bening", "Cahaya dapat dibiaskan"],
    correctAnswer: 2,
    materi: "Sifat Cahaya", tujuanPembelajaran: "Mengidentifikasi sifat-sifat cahaya", levelKognitif: "C2"
  },

  // Zona Waktu Indonesia (C2-C3)
  {
    id: "ipas-pg-36", type: "PG", number: 36,
    question: "Pertandingan final sepak bola dimulai pukul 20.30 WIB di Jakarta. Jika teman Andi yang berada di Papua (WIT) ingin menonton siaran langsung pertandingan tersebut, ia harus menonton pada pukul ...",
    options: ["18.30 WIT", "19.30 WIT", "21.30 WIT", "22.30 WIT"],
    correctAnswer: 3,
    materi: "Zona Waktu Indonesia", tujuanPembelajaran: "Menghitung perbedaan zona waktu Indonesia", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-37", type: "PG", number: 37,
    question: "Indonesia dibagi menjadi tiga zona waktu. Kota Makassar berada di zona waktu ...",
    options: ["WIB (Waktu Indonesia Barat)", "WITA (Waktu Indonesia Tengah)", "WIT (Waktu Indonesia Timur)", "GMT (Greenwich Mean Time)"],
    correctAnswer: 1,
    materi: "Zona Waktu Indonesia", tujuanPembelajaran: "Mengidentifikasi zona waktu di Indonesia", levelKognitif: "C1"
  },

  // Geografi Indonesia (C1-C2)
  {
    id: "ipas-pg-38", type: "PG", number: 38,
    question: "Perhatikan peta Indonesia berikut.\nSamudera yang terletak di sebelah timur wilayah Indonesia adalah Samudera ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Indonesia_%28orthographic_projection%29.svg/320px-Indonesia_%28orthographic_projection%29.svg.png",
    options: ["Samudera Hindia", "Samudera Atlantik", "Samudera Pasifik", "Samudera Arktik"],
    correctAnswer: 2,
    materi: "Geografi Indonesia", tujuanPembelajaran: "Mengidentifikasi letak geografis Indonesia", levelKognitif: "C1"
  },

  // Tata Surya - lanjutan (C2-C3)
  {
    id: "ipas-pg-39", type: "PG", number: 39,
    question: "Perhatikan tabel berikut:\n| No | Nama Planet | Ciri-ciri |\n|---|---|---|\n| 1 | Mars | Planet terbesar di Tata Surya |\n| 2 | Jupiter | Satu-satunya planet yang ada kehidupan |\n| 3 | Bumi | Memiliki cincin yang terlihat jelas |\n| 4 | Saturnus | Disebut Planet Merah |\n\nPasangan nama planet dan ciri-cirinya yang TEPAT adalah ...",
    options: ["1-A, 2-B, 3-C, 4-D", "1-D, 2-A, 3-B, 4-C", "1-B, 2-D, 3-A, 4-C", "1-D, 2-C, 3-A, 4-B"],
    correctAnswer: 1,
    materi: "Tata Surya", tujuanPembelajaran: "Mencocokkan planet dengan ciri-cirinya", levelKognitif: "C3"
  },

  // Akibat Rotasi Bumi (C2)
  {
    id: "ipas-pg-40", type: "PG", number: 40,
    question: "Perhatikan pernyataan berikut:\n1. Terjadinya siang dan malam\n2. Terjadinya pergantian musim\n3. Adanya gerak semu harian Matahari, Bulan, dan bintang\n4. Terjadinya perbedaan lamanya siang dan malam sepanjang tahun\n5. Terjadinya pembelokan arah angin dan arus laut (efek Coriolis)\n\nYang merupakan akibat dari ROTASI BUMI adalah ...",
    options: ["1, 2, dan 3", "1, 3, dan 5", "2, 4, dan 5", "3, 4, dan 5"],
    correctAnswer: 1,
    materi: "Rotasi dan Revolusi Bumi", tujuanPembelajaran: "Mengidentifikasi akibat rotasi bumi", levelKognitif: "C2"
  },
];

const is: ISQuestion[] = [
  {
    id: "ipas-is-1", type: "IS", number: 26,
    question: "Proses pembuatan makanan oleh tumbuhan menggunakan cahaya matahari disebut ...",
    acceptedAnswers: ["fotosintesis"],
    modelAnswer: "Fotosintesis",
    materi: "Tumbuhan", tujuanPembelajaran: "Menyebutkan istilah proses pembuatan makanan tumbuhan", levelKognitif: "C1"
  },
  {
    id: "ipas-is-2", type: "IS", number: 27,
    question: "Hewan yang memakan tumbuhan dan daging disebut hewan ...",
    acceptedAnswers: ["omnivora"],
    modelAnswer: "Omnivora",
    materi: "Klasifikasi Hewan", tujuanPembelajaran: "Mengklasifikasikan jenis hewan berdasarkan makanannya", levelKognitif: "C1"
  },
  {
    id: "ipas-is-3", type: "IS", number: 28,
    question: "Organ yang memompa darah ke seluruh tubuh manusia adalah ...",
    acceptedAnswers: ["jantung"],
    modelAnswer: "Jantung",
    materi: "Organ Tubuh Manusia", tujuanPembelajaran: "Menyebutkan fungsi jantung", levelKognitif: "C1"
  },
  {
    id: "ipas-is-4", type: "IS", number: 29,
    question: "Perubahan wujud dari cair menjadi gas disebut ...",
    acceptedAnswers: ["menguap", "penguapan", "evaporasi"],
    modelAnswer: "Menguap/Penguapan",
    materi: "Perubahan Wujud Zat", tujuanPembelajaran: "Menyebutkan jenis perubahan wujud zat", levelKognitif: "C1"
  },
  {
    id: "ipas-is-5", type: "IS", number: 30,
    question: "Lapisan gas yang menyelimuti bumi dan melindungi dari radiasi matahari disebut ...",
    acceptedAnswers: ["atmosfer"],
    modelAnswer: "Atmosfer",
    materi: "Lapisan Bumi", tujuanPembelajaran: "Menyebutkan nama lapisan pelindung bumi", levelKognitif: "C1"
  },
  {
    id: "ipas-is-6", type: "IS", number: 31,
    question: "Gerakan bumi mengelilingi porosnya sendiri disebut ...",
    acceptedAnswers: ["rotasi", "rotasi bumi"],
    modelAnswer: "Rotasi",
    materi: "Rotasi dan Revolusi Bumi", tujuanPembelajaran: "Membedakan rotasi dan revolusi", levelKognitif: "C1"
  },
  {
    id: "ipas-is-7", type: "IS", number: 32,
    question: "Benda yang tidak dapat menghantarkan listrik disebut ...",
    acceptedAnswers: ["isolator"],
    modelAnswer: "Isolator",
    materi: "Listrik", tujuanPembelajaran: "Membedakan konduktor dan isolator", levelKognitif: "C1"
  },
  {
    id: "ipas-is-8", type: "IS", number: 33,
    question: "Hubungan yang menguntungkan kedua belah pihak disebut simbiosis ...",
    acceptedAnswers: ["mutualisme"],
    modelAnswer: "Mutualisme",
    materi: "Simbiosis", tujuanPembelajaran: "Menyebutkan jenis simbiosis", levelKognitif: "C1"
  },
  {
    id: "ipas-is-9", type: "IS", number: 34,
    question: "Planet terbesar dalam tata surya adalah ...",
    acceptedAnswers: ["jupiter"],
    modelAnswer: "Jupiter",
    materi: "Tata Surya", tujuanPembelajaran: "Menyebutkan nama-nama planet", levelKognitif: "C1"
  },
  {
    id: "ipas-is-10", type: "IS", number: 35,
    question: "Penghijauan kembali lahan yang gundul dengan menanam pohon disebut ...",
    acceptedAnswers: ["reboisasi", "penghijauan"],
    modelAnswer: "Reboisasi",
    materi: "Pelestarian Lingkungan", tujuanPembelajaran: "Menyebutkan istilah upaya pelestarian lingkungan", levelKognitif: "C1"
  },
  {
    id: "ipas-is-11", type: "IS", number: 36,
    question: "Perubahan wujud dari gas menjadi cair disebut ...",
    acceptedAnswers: ["mengembun", "pengembunan", "kondensasi"],
    modelAnswer: "Mengembun/Kondensasi",
    materi: "Perubahan Wujud Zat", tujuanPembelajaran: "Menyebutkan jenis perubahan wujud zat", levelKognitif: "C1"
  },
  {
    id: "ipas-is-12", type: "IS", number: 37,
    question: "Gaya tarik yang dimiliki magnet terhadap benda-benda tertentu disebut gaya ...",
    acceptedAnswers: ["magnet", "magnetis"],
    modelAnswer: "Magnet/Magnetis",
    materi: "Gaya", tujuanPembelajaran: "Menyebutkan jenis-jenis gaya", levelKognitif: "C1"
  },
  {
    id: "ipas-is-13", type: "IS", number: 38,
    question: "Tahapan dalam siklus air di mana uap air berubah menjadi awan atau titik-titik air karena suhu udara mendingin disebut ...",
    acceptedAnswers: ["kondensasi", "pengembunan"],
    modelAnswer: "Kondensasi (pengembunan)",
    materi: "Siklus Air", tujuanPembelajaran: "Menyebutkan nama proses dalam siklus air", levelKognitif: "C1"
  },
  {
    id: "ipas-is-14", type: "IS", number: 39,
    question: "Indonesia dibagi menjadi tiga zona waktu. Zona waktu untuk wilayah Papua dan Maluku yang paling timur adalah ...",
    acceptedAnswers: ["WIT", "waktu indonesia timur"],
    modelAnswer: "WIT (Waktu Indonesia Timur)",
    materi: "Zona Waktu Indonesia", tujuanPembelajaran: "Menyebutkan zona waktu Indonesia", levelKognitif: "C1"
  },
  {
    id: "ipas-is-15", type: "IS", number: 40,
    question: "Fauna endemik Indonesia yang terkenal dan hanya ditemukan di Pulau Komodo, Flores, dan sekitarnya di Nusa Tenggara Timur (NTT) adalah ...",
    acceptedAnswers: ["komodo", "biawak komodo"],
    modelAnswer: "Komodo (Biawak Komodo)",
    materi: "Keanekaragaman Hayati Indonesia", tujuanPembelajaran: "Menyebutkan fauna endemik Indonesia", levelKognitif: "C1"
  },
];

const ut: UTQuestion[] = [
  {
    id: "ipas-ut-1", type: "UT", number: 38,
    question: "Jelaskan proses fotosintesis! Sebutkan bahan-bahan yang diperlukan, tempat terjadinya, dan hasil yang diperoleh!",
    modelAnswer: "Fotosintesis adalah proses pembuatan makanan oleh tumbuhan. Bahan yang dibutuhkan adalah air (H₂O), karbon dioksida (CO₂), dan cahaya matahari. Proses ini terjadi di daun, tepatnya di klorofil (zat hijau daun). Hasil fotosintesis adalah glukosa (gula) sebagai makanan tumbuhan dan oksigen (O₂) yang dilepas ke udara.",
    keyPoints: ["Menyebutkan bahan: air, CO₂, cahaya matahari", "Tempat di daun/klorofil", "Hasil: glukosa dan oksigen", "Penjelasan runtut dan benar"],
    materi: "Fotosintesis", tujuanPembelajaran: "Menjelaskan proses fotosintesis secara lengkap", levelKognitif: "C2"
  },
  {
    id: "ipas-ut-2", type: "UT", number: 39,
    question: "Buatlah sebuah rantai makanan yang terdiri dari minimal 5 organisme! Tuliskan peran setiap organisme (produsen, konsumen I, II, III, atau pengurai)!",
    modelAnswer: "Contoh rantai makanan:\nRumput (Produsen) → Belalang (Konsumen I/Herbivora) → Katak (Konsumen II/Karnivora) → Ular (Konsumen III/Karnivora) → Elang (Konsumen IV/Karnivora)\nSetelah mati, semua organisme diuraikan oleh Jamur/Bakteri (Pengurai/Dekomposer).",
    keyPoints: ["Rantai makanan minimal 5 organisme", "Mencantumkan produsen", "Mencantumkan minimal 3 konsumen", "Menyebutkan peran masing-masing", "Urutan tanda panah benar"],
    materi: "Rantai Makanan", tujuanPembelajaran: "Membuat dan menganalisis rantai makanan", levelKognitif: "C4"
  },
  {
    id: "ipas-ut-3", type: "UT", number: 40,
    question: "Jelaskan perbedaan antara rotasi dan revolusi bumi! Sebutkan masing-masing satu akibat yang ditimbulkan!",
    modelAnswer: "Rotasi bumi adalah gerakan bumi berputar pada porosnya sendiri. Akibat rotasi: terjadinya siang dan malam. Revolusi bumi adalah gerakan bumi mengelilingi matahari dalam satu tahun (365 hari). Akibat revolusi: terjadinya pergantian musim dan perbedaan lamanya siang dan malam di berbagai tempat.",
    keyPoints: ["Definisi rotasi benar", "Akibat rotasi: siang dan malam", "Definisi revolusi benar", "Akibat revolusi: pergantian musim/tahun"],
    materi: "Rotasi dan Revolusi Bumi", tujuanPembelajaran: "Membedakan rotasi dan revolusi beserta akibatnya", levelKognitif: "C2"
  },
  {
    id: "ipas-ut-4", type: "UT", number: 41,
    question: "Apa yang dimaksud dengan pemanasan global? Sebutkan 2 penyebab dan 2 dampaknya bagi kehidupan di bumi!",
    modelAnswer: "Pemanasan global adalah meningkatnya suhu rata-rata permukaan bumi secara bertahap akibat meningkatnya konsentrasi gas rumah kaca di atmosfer.\nPenyebab: (1) Pembakaran bahan bakar fosil (minyak, batu bara) yang menghasilkan CO₂; (2) Penebangan hutan yang mengurangi penyerap CO₂.\nDampak: (1) Mencairnya es di kutub yang menyebabkan naiknya permukaan laut; (2) Perubahan cuaca ekstrem dan musim tidak menentu.",
    keyPoints: ["Definisi pemanasan global benar", "Menyebutkan 2 penyebab yang tepat", "Menyebutkan 2 dampak yang tepat", "Penjelasan logis dan berkaitan"],
    materi: "Perubahan Iklim", tujuanPembelajaran: "Menganalisis penyebab dan dampak pemanasan global", levelKognitif: "C4"
  },
  {
    id: "ipas-ut-5", type: "UT", number: 42,
    question: "Jelaskan perbedaan antara perubahan fisika dan perubahan kimia! Berikan 2 contoh masing-masing!",
    modelAnswer: "Perubahan fisika adalah perubahan zat yang tidak menghasilkan zat baru, dan bersifat sementara (dapat kembali ke wujud semula). Contoh: air membeku menjadi es, kertas dipotong-potong.\nPerubahan kimia adalah perubahan zat yang menghasilkan zat baru dengan sifat berbeda, dan bersifat permanen (tidak dapat kembali). Contoh: kertas dibakar menjadi abu, besi berkarat.",
    keyPoints: ["Definisi perubahan fisika benar", "2 contoh perubahan fisika", "Definisi perubahan kimia benar", "2 contoh perubahan kimia"],
    materi: "Perubahan Materi", tujuanPembelajaran: "Membedakan perubahan fisika dan kimia disertai contoh", levelKognitif: "C4"
  },
  {
    id: "ipas-ut-6", type: "UT", number: 43,
    question: "Sebutkan dan jelaskan 3 jenis simbiosis! Berikan 1 contoh untuk setiap jenis simbiosis!",
    modelAnswer: "1. Simbiosis Mutualisme: hubungan yang menguntungkan kedua pihak. Contoh: lebah dan bunga (lebah mendapat nektar, bunga terbantu penyerbukan).\n2. Simbiosis Komensalisme: hubungan yang menguntungkan satu pihak tanpa merugikan pihak lain. Contoh: ikan remora dan hiu (remora mendapat sisa makanan hiu, hiu tidak dirugikan).\n3. Simbiosis Parasitisme: hubungan yang menguntungkan satu pihak tetapi merugikan pihak lain. Contoh: benalu dan pohon mangga (benalu mendapat makanan, pohon mangga dirugikan).",
    keyPoints: ["Menyebutkan 3 jenis simbiosis", "Penjelasan mutualisme benar + contoh", "Penjelasan komensalisme benar + contoh", "Penjelasan parasitisme benar + contoh"],
    materi: "Simbiosis", tujuanPembelajaran: "Menjelaskan jenis-jenis simbiosis beserta contohnya", levelKognitif: "C2"
  },
  {
    id: "ipas-ut-7", type: "UT", number: 44,
    question: "Jelaskan proses terjadinya siklus air! Sebutkan minimal 4 tahapan dalam siklus air dan jelaskan masing-masing!",
    modelAnswer: "Siklus air adalah pergerakan air yang terus-menerus di bumi. Tahapannya:\n1. Evaporasi: air di laut, sungai, dan danau menguap menjadi uap air karena panas matahari.\n2. Kondensasi: uap air naik ke atmosfer, mendingin, dan berubah menjadi awan (titik-titik air).\n3. Presipitasi: air dari awan jatuh ke bumi sebagai hujan, salju, atau hujan es.\n4. Infiltrasi: sebagian air hujan meresap ke dalam tanah menjadi air tanah.\n5. Run-off/Aliran permukaan: air mengalir di permukaan tanah menuju sungai dan akhirnya kembali ke laut.",
    keyPoints: ["Definisi siklus air benar", "Evaporasi: penguapan air", "Kondensasi: pembentukan awan", "Presipitasi: hujan turun", "Infiltrasi: meresap ke tanah"],
    materi: "Siklus Air", tujuanPembelajaran: "Menjelaskan proses terjadinya siklus air", levelKognitif: "C2"
  },
  {
    id: "ipas-ut-8", type: "UT", number: 45,
    question: "Jelaskan mengapa membuang sampah ke sungai dan membangun rumah di daerah aliran sungai (DAS) dapat memberikan dampak negatif bagi lingkungan dan masyarakat! Sebutkan minimal 2 dampak negatifnya!",
    modelAnswer: "Membuang sampah ke sungai dan membangun di DAS berdampak buruk karena:\n1. Menyebabkan banjir: sampah menyumbat aliran air sehingga ketika hujan deras, air meluap dan menyebabkan banjir.\n2. Pencemaran air: sampah mencemari air sungai sehingga tidak layak digunakan untuk keperluan sehari-hari.\n3. Kerusakan ekosistem sungai: organisme air seperti ikan dan tumbuhan air mati karena kualitas air menurun.\n4. Erosi tanah: bangunan di pinggir sungai merusak vegetasi yang menahan tanah sehingga terjadi erosi.",
    keyPoints: ["Menyebutkan 2 dampak negatif", "Dampak banjir disebutkan", "Dampak pencemaran air", "Penjelasan logis dan berkaitan"],
    materi: "Pelestarian Lingkungan", tujuanPembelajaran: "Menganalisis dampak kerusakan lingkungan sungai", levelKognitif: "C4"
  },
];

export const ipasBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,31,32,33,34,35], is: [1,2,3,4,5,6,7,8,9,13], ut: [1,2,3,4,7] },
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,31,33,34,35,36,37,38,39,40,30], is: [0,2,4,6,8,12,13,14,1,3], ut: [0,2,4,7,8] },
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,31,32,36,37,38,39,40,25,26,27], is: [2,3,4,5,6,7,8,9,13,14], ut: [2,3,4,5,7] },
    { pg: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,33,34,35,36,37,38,39,40,30,31], is: [0,1,3,5,7,11,12,13,14,4], ut: [0,1,6,7,8] },
  ],
};
