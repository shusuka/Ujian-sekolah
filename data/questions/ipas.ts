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

  // ===== SOAL BERGAMBAR & ANALISIS (C3-C5) =====
  {
    id: "ipas-pg-41", type: "PG", number: 41,
    question: "Perhatikan jaring-jaring makanan berikut:\nRumput → Belalang → Katak → Ular → Elang\nRumput → Tikus → Ular → Elang\nKatak → Elang\n\nJika populasi ular punah dari ekosistem tersebut, dampak yang paling tepat adalah ...",
    options: [
      "Populasi rumput meningkat karena tidak ada yang memakan belalang dan tikus",
      "Populasi tikus dan belalang meningkat tidak terkendali, sementara populasi elang berkurang",
      "Ekosistem tetap seimbang karena masih ada organisme lain yang mengisi peran ular",
      "Populasi elang meningkat karena lebih banyak katak dan tikus tersedia"
    ],
    correctAnswer: 1,
    materi: "Jaring-jaring Makanan", tujuanPembelajaran: "Menganalisis dampak perubahan populasi pada jaring-jaring makanan", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-42", type: "PG", number: 42,
    question: "Perhatikan diagram fotosintesis berikut. Sebuah percobaan menempatkan tanaman di ruangan kedap cahaya selama 7 hari. Pernyataan yang PALING TEPAT menjelaskan kondisi tanaman tersebut adalah ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Photosynthesis_en.svg/400px-Photosynthesis_en.svg.png",
    options: [
      "Tanaman tetap hidup karena masih bisa bernapas menggunakan oksigen dari udara",
      "Tanaman layu dan mati karena proses fotosintesis berhenti sehingga tidak ada glukosa yang dihasilkan",
      "Tanaman tumbuh lebih cepat karena tidak terganggu oleh sinar matahari",
      "Tanaman menghasilkan lebih banyak oksigen di tempat gelap melalui proses lain"
    ],
    correctAnswer: 1,
    materi: "Fotosintesis", tujuanPembelajaran: "Menganalisis pengaruh cahaya terhadap keberlangsungan hidup tumbuhan", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-43", type: "PG", number: 43,
    question: "Perhatikan diagram siklus air berikut. Pembukaan lahan hutan secara besar-besaran di daerah hulu sungai berdampak pada siklus air, yaitu ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Water_cycle.png/480px-Water_cycle.png",
    options: [
      "Evaporasi meningkat drastis karena lebih banyak sinar matahari langsung mengenai tanah",
      "Kondensasi lebih cepat terjadi karena suhu udara meningkat akibat berkurangnya pohon",
      "Infiltrasi berkurang sehingga aliran permukaan (run-off) meningkat dan risiko banjir bertambah",
      "Presipitasi bertambah karena lebih banyak uap air naik dari tanah yang gundul"
    ],
    correctAnswer: 2,
    materi: "Siklus Air dan Ekosistem", tujuanPembelajaran: "Menganalisis pengaruh deforestasi terhadap siklus air", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-44", type: "PG", number: 44,
    question: "Perhatikan posisi benda-benda langit berikut:\n🌞 Matahari — 🌍 Bumi — 🌕 Bulan\n(ketiga benda langit berada dalam satu garis lurus, dengan Bumi di tengah)\n\nFenomena astronomi apa yang sedang terjadi berdasarkan posisi tersebut?",
    options: [
      "Gerhana matahari total karena Bulan menghalangi sinar Matahari",
      "Gerhana matahari sebagian karena posisi tidak sempurna lurus",
      "Gerhana bulan total karena Bumi menghalangi sinar Matahari sampai ke Bulan",
      "Gerhana bulan sebagian karena hanya sebagian Bulan masuk ke bayangan Bumi"
    ],
    correctAnswer: 2,
    materi: "Gerhana", tujuanPembelajaran: "Mengidentifikasi jenis gerhana berdasarkan posisi benda langit", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-45", type: "PG", number: 45,
    question: "Perhatikan gambar sistem pencernaan manusia berikut. Seorang pasien didiagnosis mengalami gangguan pada penyerapan vitamin dan mineral dari makanan. Organ yang PALING MUNGKIN mengalami gangguan pada pasien tersebut adalah ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Digestive_system_diagram_en.svg/220px-Digestive_system_diagram_en.svg.png",
    options: [
      "Lambung, karena di sanalah pencernaan kimiawi makanan berlangsung",
      "Usus halus, karena usus halus adalah tempat utama penyerapan sari makanan, vitamin, dan mineral",
      "Usus besar, karena usus besar menyerap semua nutrisi sebelum dibuang",
      "Hati, karena hati menghasilkan empedu untuk proses pencernaan"
    ],
    correctAnswer: 1,
    materi: "Sistem Pencernaan Manusia", tujuanPembelajaran: "Mengidentifikasi fungsi organ sistem pencernaan", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-46", type: "PG", number: 46,
    question: "Data biomassa dalam suatu ekosistem sawah:\n• Padi: 10.000 kg\n• Tikus: 1.000 kg\n• Ular sawah: 100 kg\n• Elang: 10 kg\n\nPola penurunan biomassa di setiap tingkat trofik ini terjadi karena ...",
    options: [
      "Organisme di tingkat atas lebih boros dalam menggunakan energi",
      "Sebagian besar energi (sekitar 90%) hilang sebagai panas pada setiap perpindahan tingkat trofik",
      "Hewan di tingkat atas memilih untuk tidak memakan seluruh mangsanya",
      "Cuaca dan iklim memengaruhi jumlah organisme di tingkat atas"
    ],
    correctAnswer: 1,
    materi: "Piramida Ekologi dan Aliran Energi", tujuanPembelajaran: "Menganalisis aliran energi dalam piramida ekologi", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-47", type: "PG", number: 47,
    question: "Gas metana (CH₄) dari Tempat Pembuangan Akhir (TPA) sampah berkontribusi pada pemanasan global. Tindakan yang PALING tepat dan berkelanjutan untuk mengatasi masalah ini sambil menghasilkan manfaat ekonomi adalah ...",
    options: [
      "Menutup semua TPA dan memindahkan sampah ke laut dalam",
      "Membakar gas metana di TPA agar langsung terurai menjadi CO₂ yang lebih aman",
      "Mengolah gas metana dari TPA menjadi biogas sebagai bahan bakar alternatif untuk rumah tangga",
      "Menyuntikkan gas metana kembali ke dalam tanah agar tidak mencemari udara"
    ],
    correctAnswer: 2,
    materi: "Energi Terbarukan dan Lingkungan", tujuanPembelajaran: "Mengevaluasi solusi energi berkelanjutan dari limbah organik", levelKognitif: "C5"
  },
  {
    id: "ipas-pg-48", type: "PG", number: 48,
    question: "Pelangi terbentuk setelah hujan ketika cahaya matahari melewati tetesan-tetesan air di udara. Proses fisika yang menyebabkan cahaya putih matahari terurai menjadi spektrum warna merah, jingga, kuning, hijau, biru, nila, ungu pada pelangi adalah ...",
    options: [
      "Refleksi — cahaya dipantulkan oleh permukaan tetesan air ke berbagai arah",
      "Dispersi — cahaya putih dibiaskan dengan sudut berbeda-beda sesuai panjang gelombangnya saat melewati tetesan air",
      "Difraksi — cahaya melentur saat melewati celah sempit antara tetesan air",
      "Polarisasi — tetesan air menyaring warna tertentu dan melewatkan warna lainnya"
    ],
    correctAnswer: 1,
    materi: "Sifat Cahaya — Dispersi", tujuanPembelajaran: "Menjelaskan mekanisme dispersi cahaya pada pelangi", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-49", type: "PG", number: 49,
    question: "Gerhana matahari hanya terjadi saat fase bulan baru, tetapi tidak setiap bulan baru menghasilkan gerhana matahari. Penjelasan ilmiah yang paling tepat adalah ...",
    options: [
      "Ukuran Bulan terlalu kecil dibandingkan Matahari sehingga tidak bisa menghalangi sinar Matahari sepenuhnya",
      "Bidang orbit Bulan mengelilingi Bumi miring sekitar 5° terhadap bidang orbit Bumi mengelilingi Matahari, sehingga bayangan Bulan tidak selalu jatuh ke Bumi",
      "Jarak Bumi ke Matahari selalu berubah setiap bulan sehingga posisi tidak pernah lurus",
      "Rotasi Bumi yang cepat membuat bayangan Bulan bergerak terlalu cepat untuk diamati"
    ],
    correctAnswer: 1,
    materi: "Gerhana dan Orbit", tujuanPembelajaran: "Menganalisis mengapa gerhana tidak terjadi setiap bulan", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-50", type: "PG", number: 50,
    question: "Unta mampu bertahan di gurun yang sangat panas tanpa minum selama berminggu-minggu. Dari adaptasi berikut, manakah yang BERFUNGSI LANGSUNG untuk menghemat dan menyimpan cadangan air dalam tubuh unta?",
    options: [
      "Kaki yang lebar dan tebal untuk berjalan di atas pasir panas tanpa tenggelam",
      "Kemampuan menutup lubang hidung rapat saat badai pasir melanda",
      "Punuk yang berisi lemak — lemak dapat dioksidasi menjadi air metabolik saat dibutuhkan",
      "Bulu tebal di sekitar mata untuk melindungi dari debu dan sinar UV"
    ],
    correctAnswer: 2,
    materi: "Adaptasi Makhluk Hidup", tujuanPembelajaran: "Menganalisis bentuk adaptasi hewan terhadap lingkungan ekstrem", levelKognitif: "C4"
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
  {
    id: "ipas-is-16", type: "IS", number: 41,
    question: "Rena menanam kecambah di dalam kotak kardus yang hanya memiliki satu lubang kecil di salah satu sisinya. Setelah beberapa hari, batang kecambah membengkok ke arah lubang cahaya tersebut. Respons tumbuhan yang bergerak menuju sumber cahaya ini disebut ...",
    acceptedAnswers: ["fototropisme", "fototropi", "gerak fototropisme"],
    modelAnswer: "Fototropisme (gerak tumbuhan menuju sumber cahaya)",
    materi: "Gerak Tumbuhan", tujuanPembelajaran: "Mengidentifikasi jenis gerak tropisme pada tumbuhan", levelKognitif: "C2"
  },
  {
    id: "ipas-is-17", type: "IS", number: 42,
    question: "Dalam rantai makanan: Padi → Tikus → Ular sawah → Elang. Petani membasmi semua ular sawah menggunakan pestisida berlebihan. Hewan yang populasinya akan meningkat tidak terkendali dan merugikan petani adalah ...",
    acceptedAnswers: ["tikus", "tikus sawah"],
    modelAnswer: "Tikus sawah (karena predator alaminya, ular sawah, telah dibasmi)",
    materi: "Jaring-jaring Makanan", tujuanPembelajaran: "Menganalisis dampak perubahan populasi dalam rantai makanan", levelKognitif: "C3"
  },
  {
    id: "ipas-is-18", type: "IS", number: 43,
    question: "Saat banjir merendam sawah dalam waktu lama, tanaman padi banyak yang mati. Hal ini terjadi karena akar padi tidak dapat menyerap ... yang dibutuhkan untuk proses respirasi sel akar.",
    acceptedAnswers: ["oksigen", "o2", "udara"],
    modelAnswer: "Oksigen (O₂) — akar memerlukan oksigen untuk respirasi aerob menghasilkan energi",
    materi: "Respirasi Tumbuhan", tujuanPembelajaran: "Menjelaskan kebutuhan oksigen pada akar tumbuhan", levelKognitif: "C2"
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
  {
    id: "ipas-ut-9", type: "UT", number: 46,
    question: "Di sebuah ekosistem danau, fitoplankton (tumbuhan mikroskopis) berperan sebagai produsen utama. Akibat pembuangan limbah pabrik tekstil, populasi fitoplankton berkurang drastis hingga 90%.\n\nAnalisis dampak yang terjadi terhadap:\na) Populasi ikan kecil yang memakan fitoplankton\nb) Populasi ikan besar pemangsa ikan kecil\nc) Kadar oksigen terlarut dalam air danau\n\nSertakan penjelasan ilmiah untuk setiap poin!",
    modelAnswer: "a) Ikan kecil: Populasinya berkurang drastis karena kehilangan sumber makanan utama (fitoplankton). Ikan kecil kelaparan dan tidak dapat berkembang biak dengan normal.\n\nb) Ikan besar: Juga akan berkurang secara signifikan karena makanannya (ikan kecil) berkurang — ini disebut efek domino/kaskade trofik dalam ekosistem. Ketika satu tingkat trofik terganggu, efeknya menjalar ke tingkat di atasnya.\n\nc) Kadar oksigen: Menurun tajam karena fitoplankton adalah penghasil oksigen utama di perairan melalui fotosintesis. Tanpa fitoplankton, kadar O₂ terlarut turun (hipoksia), sehingga ikan dan organisme air lain mati karena kekurangan oksigen.\n\nKesimpulan: Hilangnya satu organisme produsen dapat menyebabkan keruntuhan seluruh jaring-jaring makanan dalam ekosistem (trophic cascade).",
    keyPoints: [
      "Ikan kecil berkurang karena kehilangan sumber makanan",
      "Ikan besar berkurang karena efek domino/kaskade trofik",
      "Kadar O₂ berkurang karena fitoplankton adalah produsen oksigen melalui fotosintesis",
      "Penjelasan hubungan antar organisme logis dan menggunakan istilah ilmiah"
    ],
    materi: "Ekosistem Perairan dan Pencemaran", tujuanPembelajaran: "Menganalisis dampak gangguan pada ekosistem perairan", levelKognitif: "C4"
  },
  {
    id: "ipas-ut-10", type: "UT", number: 47,
    question: "Indonesia memiliki keanekaragaman hayati terkaya ke-2 di dunia, namun banyak spesies endemik yang terancam punah akibat kerusakan habitat dan perburuan liar.\n\nRancang sebuah program pelestarian untuk salah satu spesies endemik Indonesia yang kamu pilih! Program harus mencakup:\n1. Nama spesies dan status ancaman kepunahannya\n2. Dua penyebab utama ancaman kepunahannya\n3. Satu strategi pelestarian in-situ dan satu strategi ex-situ\n4. Peran yang bisa dilakukan siswa sekolah dalam mendukung pelestarian",
    modelAnswer: "Contoh jawaban: Orangutan Sumatera (Pongo abelii)\n\n1. Status: Kritis (Critically Endangered) — hanya tersisa sekitar 13.000 ekor di alam liar.\n\n2. Penyebab: (a) Deforestasi masif untuk konversi hutan menjadi perkebunan kelapa sawit menghancurkan habitat alami; (b) Perburuan dan perdagangan ilegal anak orangutan sebagai hewan peliharaan.\n\n3. Strategi in-situ: Perluasan dan penguatan perlindungan kawasan Taman Nasional Gunung Leuser — patroli anti-perburuan intensif, koridor ekologi untuk menghubungkan habitat yang terfragmentasi.\nStrategi ex-situ: Program rehabilitasi di pusat penyelamatan orangutan (seperti SOCP) untuk orangutan yang disita dari perdagangan ilegal, lalu dilepasliarkan kembali ke habitat yang dilindungi.\n\n4. Peran siswa: tidak membeli/memelihara satwa liar dilindungi; kampanye di media sosial; memilih produk yang bersertifikat tidak merusak hutan; edukasi keluarga tentang pentingnya pelestarian.",
    keyPoints: [
      "Menyebutkan spesies endemik Indonesia yang terancam punah dengan status ancamannya",
      "Mengidentifikasi 2 penyebab kepunahan yang relevan",
      "Strategi in-situ yang konkret (perlindungan habitat alami)",
      "Strategi ex-situ yang berbeda (penangkaran/rehabilitasi)",
      "Peran siswa yang realistis disebutkan"
    ],
    materi: "Keanekaragaman Hayati dan Konservasi", tujuanPembelajaran: "Merancang program pelestarian spesies endemik Indonesia", levelKognitif: "C5"
  },
];

export const ipasBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    // Sesi 1: Dasar (C1-C2, termasuk 2 soal bergambar)
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,41,43], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    // Sesi 2: Menengah (C2-C3, termasuk 3 soal bergambar)
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,31,32,33,34,42,44,45], is: [1,2,3,4,5,6,7,8,9,13], ut: [1,2,3,4,7] },
    // Sesi 3: Menengah-Tinggi (C3-C4, banyak soal bergambar)
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,31,34,36,37,42,43,44,45,46,47], is: [0,2,4,6,8,12,13,14,15,16], ut: [0,2,4,7,8] },
    // Sesi 4: Tinggi (C3-C5, soal analisis + bergambar)
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,31,36,37,38,41,42,43,45,46,48], is: [2,3,4,5,6,7,8,9,13,17], ut: [2,3,4,5,9] },
    // Sesi 5: Paling Sulit (C4-C5, dominan analisis dan evaluasi)
    { pg: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,33,35,39,41,43,45,46,47,48,49], is: [0,1,3,5,7,11,14,15,16,18], ut: [0,1,6,7,9] },
  ],
};
