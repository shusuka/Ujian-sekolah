import { PGQuestion, ISQuestion, UTQuestion, SubjectQuestionBank } from "@/lib/types";

const pg: PGQuestion[] = [
  // Kebudayaan Betawi (C1-C2)
  {
    id: "plbj-pg-1", type: "PG", number: 1,
    question: "Perhatikan gambar boneka raksasa khas Betawi di atas. Kesenian boneka raksasa tersebut yang berasal dari daerah ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ondel-ondel2.jpg/320px-Ondel-ondel2.jpg",
    options: ["Jawa Barat", "Banten", "DKI Jakarta (Betawi)", "Jawa Tengah"],
    correctAnswer: 2,
    materi: "Kebudayaan Betawi", tujuanPembelajaran: "Mengidentifikasi kesenian khas Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-2", type: "PG", number: 2,
    question: "Tari Topeng Betawi merupakan salah satu kesenian tradisional yang berasal dari ...",
    options: ["Suku Sunda", "Suku Betawi", "Suku Jawa", "Suku Bali"],
    correctAnswer: 1,
    materi: "Kebudayaan Betawi", tujuanPembelajaran: "Mengidentifikasi tari tradisional Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-3", type: "PG", number: 3,
    question: "Perhatikan gambar makanan khas Betawi di atas. Makanan tersebut terbuat dari ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kerak_telor.jpg/320px-Kerak_telor.jpg",
    options: ["Tepung beras, telur bebek, dan kelapa parut", "Tepung terigu, telur ayam, dan gula", "Singkong, telur, dan bumbu rempah", "Ketan, telur puyuh, dan santan"],
    correctAnswer: 0,
    materi: "Kuliner Betawi", tujuanPembelajaran: "Menyebutkan bahan makanan khas Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-4", type: "PG", number: 4,
    question: "Alat musik Betawi yang dimainkan dengan cara dipukul dan berbentuk seperti drum adalah ...",
    options: ["Gambang", "Tehyan", "Tanjidor", "Kendang"],
    correctAnswer: 3,
    materi: "Kebudayaan Betawi", tujuanPembelajaran: "Mengidentifikasi alat musik Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-5", type: "PG", number: 5,
    question: "Pakaian adat pengantin pria Betawi disebut ...",
    options: ["Baju Sadariah", "Baju Pangsi", "Baju Jas Tutup", "Baju Bodo"],
    correctAnswer: 0,
    materi: "Pakaian Adat Betawi", tujuanPembelajaran: "Menyebutkan nama pakaian adat Betawi", levelKognitif: "C1"
  },

  // Lingkungan Jakarta (C1-C3)
  {
    id: "plbj-pg-6", type: "PG", number: 6,
    question: "DKI Jakarta terdiri dari berapa kota administrasi?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    materi: "Geografi Jakarta", tujuanPembelajaran: "Menyebutkan wilayah administrasi DKI Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-7", type: "PG", number: 7,
    question: "Kota administrasi yang terletak di bagian barat DKI Jakarta adalah ...",
    options: ["Jakarta Timur", "Jakarta Utara", "Jakarta Barat", "Jakarta Pusat"],
    correctAnswer: 2,
    materi: "Geografi Jakarta", tujuanPembelajaran: "Menyebutkan nama kota administrasi Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-8", type: "PG", number: 8,
    question: "Sungai terpanjang yang melintas di wilayah DKI Jakarta adalah Sungai ...",
    options: ["Cisadane", "Ciliwung", "Citarum", "Bekasi"],
    correctAnswer: 1,
    materi: "Geografi Jakarta", tujuanPembelajaran: "Menyebutkan sungai-sungai di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-9", type: "PG", number: 9,
    question: "Perhatikan gambar monumen terkenal di Jakarta di atas. Monumen Nasional (Monas) tersebut terletak di kota administrasi ...",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Monas_2013_01.jpg/320px-Monas_2013_01.jpg",
    options: ["Jakarta Selatan", "Jakarta Barat", "Jakarta Pusat", "Jakarta Utara"],
    correctAnswer: 2,
    materi: "Tempat Bersejarah Jakarta", tujuanPembelajaran: "Mengidentifikasi lokasi tempat bersejarah di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-10", type: "PG", number: 10,
    question: "Hari jadi Kota Jakarta diperingati setiap tanggal ...",
    options: ["17 Agustus", "22 Juni", "1 Januari", "28 Oktober"],
    correctAnswer: 1,
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menyebutkan hari jadi Kota Jakarta", levelKognitif: "C1"
  },

  // Permainan Tradisional (C1-C3)
  {
    id: "plbj-pg-11", type: "PG", number: 11,
    question: "Permainan tradisional yang dimainkan dengan cara melempar gacuk ke kotak-kotak di tanah disebut ...",
    options: ["Congklak", "Engklek", "Galah asin", "Bentengan"],
    correctAnswer: 1,
    materi: "Permainan Tradisional", tujuanPembelajaran: "Mengidentifikasi permainan tradisional Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-12", type: "PG", number: 12,
    question: "Permainan congklak dimainkan menggunakan ...",
    options: ["Bola dan tongkat", "Papan berlubang dan biji-bijian", "Tali dan batu", "Kartu dan dadu"],
    correctAnswer: 1,
    materi: "Permainan Tradisional", tujuanPembelajaran: "Mendeskripsikan cara bermain congklak", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-13", type: "PG", number: 13,
    question: "Manfaat bermain permainan tradisional bagi anak-anak adalah ...",
    options: ["Membuat anak malas belajar", "Melatih kerja sama, kreativitas, dan kebugaran jasmani", "Membuat anak kecanduan bermain", "Hanya membuang-buang waktu"],
    correctAnswer: 1,
    materi: "Permainan Tradisional", tujuanPembelajaran: "Menganalisis manfaat permainan tradisional", levelKognitif: "C3"
  },
  {
    id: "plbj-pg-14", type: "PG", number: 14,
    question: "Permainan petak umpet dalam Bahasa Betawi dikenal dengan sebutan ...",
    options: ["Petak jongkok", "Pris-prisan", "Sembunyi-sembunyian", "Ucing sumput"],
    correctAnswer: 1,
    materi: "Permainan Tradisional", tujuanPembelajaran: "Menyebutkan nama permainan tradisional Betawi", levelKognitif: "C1"
  },

  // Lingkungan Hidup & Kebersihan (C1-C3)
  {
    id: "plbj-pg-15", type: "PG", number: 15,
    question: "Kegiatan memilah sampah organik dan anorganik bertujuan untuk ...",
    options: ["Membuat rumah lebih kotor", "Memudahkan pengelolaan dan daur ulang sampah", "Mengurangi kegiatan membersihkan rumah", "Membuat tempat sampah cepat penuh"],
    correctAnswer: 1,
    materi: "Pengelolaan Lingkungan", tujuanPembelajaran: "Menjelaskan pentingnya pemilahan sampah", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-16", type: "PG", number: 16,
    question: "Banjir di Jakarta sering terjadi karena salah satu faktor utama yaitu ...",
    options: ["Kurangnya gedung bertingkat", "Sungai yang meluap akibat sampah dan hujan lebat", "Terlalu banyak pohon di kota", "Jalan yang terlalu lebar"],
    correctAnswer: 1,
    materi: "Lingkungan Jakarta", tujuanPembelajaran: "Mengidentifikasi penyebab banjir di Jakarta", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-17", type: "PG", number: 17,
    question: "Cara yang tepat untuk mengurangi genangan banjir di permukiman adalah ...",
    options: ["Menutup seluruh tanah dengan beton", "Membuat lubang biopori untuk resapan air", "Membuang sampah ke sungai", "Menebang pohon-pohon di sekitar rumah"],
    correctAnswer: 1,
    materi: "Lingkungan Jakarta", tujuanPembelajaran: "Mengusulkan cara mengurangi banjir", levelKognitif: "C3"
  },

  // Transportasi Jakarta (C1-C3)
  {
    id: "plbj-pg-18", type: "PG", number: 18,
    question: "Alat transportasi umum berbasis rel yang melayani rute di dalam kota Jakarta dan sekitarnya disebut ...",
    options: ["Busway", "MRT (Mass Rapid Transit)", "Ojek online", "Bajaj"],
    correctAnswer: 1,
    materi: "Transportasi Jakarta", tujuanPembelajaran: "Mengidentifikasi jenis transportasi umum di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-19", type: "PG", number: 19,
    question: "Manfaat menggunakan transportasi umum dibanding kendaraan pribadi adalah ...",
    options: ["Lebih cepat dan mahal", "Mengurangi kemacetan dan polusi udara", "Lebih nyaman dan mahal", "Memperbanyak kendaraan di jalan"],
    correctAnswer: 1,
    materi: "Transportasi Jakarta", tujuanPembelajaran: "Menjelaskan manfaat transportasi umum", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-20", type: "PG", number: 20,
    question: "Kendaraan tradisional Betawi yang berbentuk becak bermotor kecil berwarna oranye disebut ...",
    options: ["Delman", "Bajaj", "Bemo", "Oplet"],
    correctAnswer: 1,
    materi: "Transportasi Betawi", tujuanPembelajaran: "Menyebutkan kendaraan tradisional Betawi", levelKognitif: "C1"
  },

  // Tokoh & Sejarah Jakarta (C1-C3)
  {
    id: "plbj-pg-21", type: "PG", number: 21,
    question: "Perhatikan garis waktu perubahan nama Kota Jakarta berikut. Urutan nama kota Jakarta dari masa ke masa yang BENAR adalah ...",
    chartData: {
      type: "timeline" as const,
      events: [
        { year: "Abad 12", event: "SUNDA KELAPA – Pelabuhan penting Kerajaan Sunda" },
        { year: "1527", event: "JAYAKARTA – Fatahillah kalahkan Portugis (artinya: kota kemenangan)" },
        { year: "1619", event: "BATAVIA – VOC Belanda (Jan Pieterszoon Coen)" },
        { year: "1942", event: "JAKARTA – Jepang ambil alih (5 Maret 1942)" },
        { year: "1945–skrg", event: "JAKARTA – Ibu Kota Republik Indonesia Merdeka" },
      ],
    },
    options: ["Sunda Kelapa", "Batavia", "Jayakarta", "Semua jawaban benar (berurutan)"],
    correctAnswer: 3,
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menyebutkan nama-nama kota Jakarta dari masa ke masa", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-22", type: "PG", number: 22,
    question: "Gubernur DKI Jakarta yang berhasil memimpin Jakarta dari tahun 2017 hingga 2022 dan dikenal dengan program OK OCE adalah ...",
    options: ["Basuki Tjahaja Purnama (Ahok)", "Anies Baswedan", "Sutiyoso", "Fauzi Bowo"],
    correctAnswer: 1,
    materi: "Tokoh Jakarta", tujuanPembelajaran: "Mengenal tokoh-tokoh pemimpin Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-23", type: "PG", number: 23,
    question: "Pelabuhan bersejarah di Jakarta yang dulunya merupakan pusat perdagangan penting disebut Pelabuhan ...",
    options: ["Tanjung Priok", "Sunda Kelapa", "Merak", "Muara Baru"],
    correctAnswer: 1,
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Mengidentifikasi tempat bersejarah di Jakarta", levelKognitif: "C1"
  },

  // Kearifan Lokal & Nilai Budaya (C2-C4)
  {
    id: "plbj-pg-24", type: "PG", number: 24,
    question: "Perhatikan tabel kekayaan budaya Betawi berikut. Nilai kebersamaan dan gotong royong dalam masyarakat Betawi tercermin dalam kegiatan ...",
    chartData: {
      type: "table" as const,
      caption: "Kekayaan Budaya Betawi",
      headers: ["Kategori", "Contoh"],
      rows: [
        ["Kesenian", "Ondel-ondel, Tari Topeng, Lenong, Gambang Kromong, Tanjidor"],
        ["Kuliner", "Kerak Telor, Soto Betawi, Kue Rangi, Bir Pletok"],
        ["Pakaian Adat", "Baju Sadariah (pria), Kebaya Encim (wanita)"],
        ["Rumah Adat", "Rumah Kebaya / Bapang (ciri: teras lebar)"],
        ["Tradisi", "Palang Pintu (pernikahan), Lebaran Betawi, Sunatan"],
        ["Nilai Sosial", "Gotong royong, kerja bakti, kekeluargaan"],
      ],
    },
    options: ["Berdagang sendiri-sendiri", "Kerja bakti membersihkan lingkungan bersama", "Berlomba mendapatkan keuntungan", "Menyimpan harta untuk diri sendiri"],
    correctAnswer: 1,
    materi: "Nilai Budaya Betawi", tujuanPembelajaran: "Mengidentifikasi nilai kebersamaan dalam budaya Betawi", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-25", type: "PG", number: 25,
    question: "Rumah adat Betawi yang memiliki ciri khas teras lebar dan atap berbentuk sengkuap/pelana disebut ...",
    options: ["Rumah Joglo", "Rumah Kebaya/Bapang", "Rumah Limas", "Rumah Panggung"],
    correctAnswer: 1,
    materi: "Rumah Adat Betawi", tujuanPembelajaran: "Mengidentifikasi ciri-ciri rumah adat Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-26", type: "PG", number: 26,
    question: "Tumbuhan yang banyak terdapat di lingkungan Jakarta dan sering digunakan sebagai penghijauan kota adalah ...",
    options: ["Pohon pinus", "Pohon trembesi (ki hujan)", "Pohon cemara", "Pohon kurma"],
    correctAnswer: 1,
    materi: "Flora Jakarta", tujuanPembelajaran: "Mengidentifikasi tumbuhan yang ada di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-27", type: "PG", number: 27,
    question: "Kawasan Kota Tua Jakarta merupakan tempat bersejarah yang menyimpan ...",
    options: ["Bangunan modern dan pusat perbelanjaan", "Bangunan peninggalan zaman kolonial Belanda", "Rumah-rumah adat Betawi", "Kebun binatang terbesar di Indonesia"],
    correctAnswer: 1,
    materi: "Tempat Bersejarah Jakarta", tujuanPembelajaran: "Mendeskripsikan kawasan bersejarah di Jakarta", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-28", type: "PG", number: 28,
    question: "Kegiatan yang dapat merusak lingkungan sekitar dan harus dihindari adalah ...",
    options: ["Menanam pohon di pinggir jalan", "Membuang sampah pada tempatnya", "Mencoret-coret tembok fasilitas umum", "Menggunakan air secukupnya"],
    correctAnswer: 2,
    materi: "Kesadaran Lingkungan", tujuanPembelajaran: "Mengidentifikasi tindakan yang merusak lingkungan", levelKognitif: "C2"
  },
  {
    id: "plbj-pg-29", type: "PG", number: 29,
    question: "Festival Palang Pintu adalah tradisi adat Betawi yang dilaksanakan pada acara ...",
    options: ["Pesta panen", "Prosesi pernikahan", "Khitanan", "Peringatan hari kemerdekaan"],
    correctAnswer: 1,
    materi: "Tradisi Betawi", tujuanPembelajaran: "Menjelaskan tradisi adat Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-pg-30", type: "PG", number: 30,
    question: "Sebagai warga Jakarta, sikap yang tepat untuk menjaga kebersihan lingkungan kota adalah ...",
    options: ["Membuang sampah di sembarang tempat karena ada petugas kebersihan", "Membuang sampah pada tempatnya dan ikut kerja bakti", "Membiarkan tetangga yang membuang sampah sembarangan", "Hanya membersihkan halaman rumah sendiri saja"],
    correctAnswer: 1,
    materi: "Kewargaan Jakarta", tujuanPembelajaran: "Menganalisis sikap warga yang baik terhadap lingkungan", levelKognitif: "C3"
  },

  // ===== SOAL TINGKAT LANJUT (C4-C5) =====
  {
    id: "plbj-pg-31", type: "PG", number: 31,
    question: "Fatahillah mengubah nama Sunda Kelapa menjadi Jayakarta pada tahun 1527 setelah mengalahkan Portugis. Makna sejarah dari peristiwa ini adalah ...",
    options: [
      "Portugis membangun kota baru untuk kepentingan dagang",
      "Kemenangan Fatahillah melambangkan perjuangan mempertahankan wilayah dari penjajah asing",
      "Belanda mulai menguasai pelabuhan Sunda Kelapa",
      "Jakarta pertama kali menjadi ibu kota kerajaan Hindu"
    ],
    correctAnswer: 1,
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menganalisis makna sejarah perubahan nama kota Jakarta", levelKognitif: "C4"
  },
  {
    id: "plbj-pg-32", type: "PG", number: 32,
    question: "VOC (Belanda) mendirikan Batavia tahun 1619 dengan cara meratakan Jayakarta. Dampak pendudukan Belanda di Batavia terhadap masyarakat Betawi lokal adalah ...",
    options: [
      "Masyarakat Betawi hidup sejahtera dan bebas",
      "Masyarakat Betawi dipaksa menjadi buruh, tanah dirampas, dan hak-hak mereka dibatasi",
      "Belanda membantu masyarakat Betawi berkembang",
      "Masyarakat Betawi diizinkan memimpin pemerintahan kota"
    ],
    correctAnswer: 1,
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menganalisis dampak penjajahan terhadap masyarakat Betawi", levelKognitif: "C4"
  },
  {
    id: "plbj-pg-33", type: "PG", number: 33,
    question: "Kota Jakarta menghadapi masalah banjir tahunan yang semakin parah. Dari berbagai solusi berikut, yang bersifat JANGKA PANJANG dan paling efektif adalah ...",
    options: [
      "Membagikan pompa air kepada setiap RW saat banjir datang",
      "Menormalisasi sungai, menanam mangrove di pesisir, dan membatasi pembangunan di zona resapan air",
      "Melarang warga tinggal di pinggir sungai tanpa menyediakan hunian pengganti",
      "Menggali lebih banyak sumur di seluruh Jakarta"
    ],
    correctAnswer: 1,
    materi: "Lingkungan Jakarta", tujuanPembelajaran: "Mengevaluasi solusi jangka panjang masalah banjir Jakarta", levelKognitif: "C5"
  },
  {
    id: "plbj-pg-34", type: "PG", number: 34,
    question: "MRT Jakarta (Mass Rapid Transit) mulai beroperasi pada tahun 2019. Analisis dampak positif MRT terhadap kualitas hidup warga Jakarta ...",
    options: [
      "MRT hanya menguntungkan warga kaya yang mampu membeli tiket mahal",
      "MRT mengurangi kemacetan, emisi karbon, dan waktu perjalanan sehingga meningkatkan produktivitas warga",
      "MRT tidak berpengaruh karena kemacetan Jakarta tidak bisa diatasi",
      "MRT merugikan pengemudi ojek dan angkot secara keseluruhan"
    ],
    correctAnswer: 1,
    materi: "Transportasi Jakarta", tujuanPembelajaran: "Menganalisis dampak transportasi massal terhadap kualitas hidup", levelKognitif: "C4"
  },
  {
    id: "plbj-pg-35", type: "PG", number: 35,
    question: "Kesenian Betawi seperti lenong, gambang kromong, dan tanjidor semakin jarang ditampilkan akibat pengaruh budaya modern. Upaya TERBAIK yang dapat dilakukan sekolah untuk melestarikan seni Betawi adalah ...",
    options: [
      "Melarang siswa menikmati musik modern sama sekali",
      "Memasukkan seni Betawi ke dalam kegiatan ekstrakurikuler dan pentas seni sekolah",
      "Hanya menyimpan rekaman seni Betawi di museum tanpa pertunjukan hidup",
      "Membiarkan seni Betawi berkembang sendiri tanpa intervensi sekolah"
    ],
    correctAnswer: 1,
    materi: "Kebudayaan Betawi", tujuanPembelajaran: "Merancang upaya pelestarian kesenian Betawi", levelKognitif: "C5"
  },
  {
    id: "plbj-pg-36", type: "PG", number: 36,
    question: "Polusi udara di Jakarta masuk kategori tidak sehat pada beberapa hari dalam setahun. Hubungan sebab-akibat yang PALING TEPAT antara banyaknya kendaraan bermotor dan polusi udara adalah ...",
    options: [
      "Kendaraan bermotor menghasilkan oksigen yang dibutuhkan tanaman kota",
      "Emisi gas buang kendaraan (CO, CO₂, NOₓ) meningkatkan polusi udara yang berdampak pada kesehatan warga",
      "Semakin banyak kendaraan berarti semakin banyak warga yang sehat karena tidak perlu berjalan",
      "Polusi udara Jakarta disebabkan oleh angin dari luar kota, bukan kendaraan lokal"
    ],
    correctAnswer: 1,
    materi: "Lingkungan Jakarta", tujuanPembelajaran: "Menganalisis hubungan sebab-akibat polusi udara Jakarta", levelKognitif: "C4"
  },
  {
    id: "plbj-pg-37", type: "PG", number: 37,
    question: "Tradisi Betawi 'Lebaran Betawi' diadakan untuk mempererat silaturahmi dan melestarikan budaya. Nilai UTAMA yang tercermin dari tradisi ini adalah ...",
    options: [
      "Nilai ekonomi karena banyak pedagang yang untung",
      "Nilai persatuan, kebersamaan, dan pelestarian identitas budaya Betawi",
      "Nilai persaingan antar suku untuk menunjukkan keunggulan budaya",
      "Nilai formal karena diwajibkan oleh pemerintah DKI"
    ],
    correctAnswer: 1,
    materi: "Tradisi Betawi", tujuanPembelajaran: "Menganalisis nilai yang terkandung dalam tradisi Betawi", levelKognitif: "C4"
  },
  {
    id: "plbj-pg-38", type: "PG", number: 38,
    question: "Jika setiap warga Jakarta membuang sampah pada tempatnya dan memilah sampah organik-anorganik, dampak jangka panjang yang diharapkan adalah ...",
    options: [
      "Sampah menumpuk di TPS karena tidak ada yang mengangkut",
      "Pengurangan volume sampah di TPA, sungai lebih bersih, dan banjir berkurang",
      "Petugas kebersihan kehilangan pekerjaan",
      "Tidak ada dampak signifikan karena sampah Jakarta sudah terlanjur banyak"
    ],
    correctAnswer: 1,
    materi: "Pengelolaan Lingkungan", tujuanPembelajaran: "Menganalisis dampak jangka panjang pengelolaan sampah", levelKognitif: "C4"
  },
  {
    id: "plbj-pg-39", type: "PG", number: 39,
    question: "Kawasan Kota Tua Jakarta menyimpan berbagai bangunan bersejarah era kolonial. Mengapa penting untuk melestarikan kawasan tersebut? Alasan yang PALING TEPAT adalah ...",
    options: [
      "Karena bangunan tua lebih kuat dari bangunan modern",
      "Karena Kota Tua adalah bukti sejarah perjuangan dan identitas kota Jakarta yang tak ternilai, serta aset pariwisata budaya",
      "Karena biaya pembangunan bangunan baru lebih mahal",
      "Karena pemerintah Belanda meminta Jakarta untuk menjaganya"
    ],
    correctAnswer: 1,
    materi: "Tempat Bersejarah Jakarta", tujuanPembelajaran: "Mengevaluasi pentingnya pelestarian kawasan bersejarah", levelKognitif: "C5"
  },
  {
    id: "plbj-pg-40", type: "PG", number: 40,
    question: "Permainan tradisional seperti congklak dan engklek semakin tergeser oleh game digital. Evaluasi dampak hilangnya permainan tradisional bagi anak-anak ...",
    options: [
      "Tidak ada dampak negatif karena game digital lebih mendidik",
      "Anak kehilangan nilai kerja sama, kreativitas fisik, dan warisan budaya yang terkandung dalam permainan tradisional",
      "Anak jadi lebih sehat karena bermain game di dalam ruangan terlindung dari panas",
      "Permainan tradisional tidak memiliki nilai pendidikan apapun"
    ],
    correctAnswer: 1,
    materi: "Permainan Tradisional", tujuanPembelajaran: "Mengevaluasi dampak hilangnya permainan tradisional", levelKognitif: "C5"
  },
];

const is: ISQuestion[] = [
  {
    id: "plbj-is-1", type: "IS", number: 26,
    question: "Kesenian boneka raksasa khas Betawi yang sering ditampilkan dalam berbagai perayaan adalah ...",
    acceptedAnswers: ["ondel-ondel", "ondel ondel"],
    modelAnswer: "Ondel-ondel",
    materi: "Kesenian Betawi", tujuanPembelajaran: "Menyebutkan kesenian khas Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-is-2", type: "IS", number: 27,
    question: "Hari jadi Kota Jakarta diperingati setiap tanggal ... bulan Juni.",
    acceptedAnswers: ["22", "dua puluh dua"],
    modelAnswer: "22",
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menyebutkan hari jadi Kota Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-is-3", type: "IS", number: 28,
    question: "Makanan khas Betawi yang terbuat dari beras, telur bebek, dan kelapa parut yang dimasak di atas bara api adalah ...",
    acceptedAnswers: ["kerak telor", "kerak telur"],
    modelAnswer: "Kerak telor",
    materi: "Kuliner Betawi", tujuanPembelajaran: "Menyebutkan makanan khas Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-is-4", type: "IS", number: 29,
    question: "DKI Jakarta dibagi menjadi ... kota administrasi dan 1 kabupaten administrasi.",
    acceptedAnswers: ["5", "lima"],
    modelAnswer: "5 (lima)",
    materi: "Geografi Jakarta", tujuanPembelajaran: "Menyebutkan jumlah kota administrasi Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-is-5", type: "IS", number: 30,
    question: "Permainan tradisional yang dimainkan dengan cara melompat-lompat di atas kotak-kotak di tanah disebut ...",
    acceptedAnswers: ["engklek"],
    modelAnswer: "Engklek",
    materi: "Permainan Tradisional", tujuanPembelajaran: "Menyebutkan nama permainan tradisional", levelKognitif: "C1"
  },
  {
    id: "plbj-is-6", type: "IS", number: 31,
    question: "Sungai terpanjang yang mengalir melalui wilayah DKI Jakarta adalah Sungai ...",
    acceptedAnswers: ["ciliwung"],
    modelAnswer: "Ciliwung",
    materi: "Geografi Jakarta", tujuanPembelajaran: "Menyebutkan nama sungai di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-is-7", type: "IS", number: 32,
    question: "Kawasan bersejarah di Jakarta yang menyimpan bangunan peninggalan Belanda disebut Kawasan Kota ...",
    acceptedAnswers: ["tua", "kota tua"],
    modelAnswer: "Tua (Kota Tua)",
    materi: "Tempat Bersejarah Jakarta", tujuanPembelajaran: "Menyebutkan tempat bersejarah di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-is-8", type: "IS", number: 33,
    question: "Transportasi massal berbasis rel di Jakarta yang menghubungkan Lebak Bulus hingga Kota disebut ...",
    acceptedAnswers: ["mrt", "mrt jakarta", "mass rapid transit"],
    modelAnswer: "MRT (Mass Rapid Transit)",
    materi: "Transportasi Jakarta", tujuanPembelajaran: "Menyebutkan jenis transportasi umum di Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-is-9", type: "IS", number: 34,
    question: "Nama kota Jakarta pada masa kolonial Belanda adalah ...",
    acceptedAnswers: ["batavia"],
    modelAnswer: "Batavia",
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menyebutkan nama lama Jakarta", levelKognitif: "C1"
  },
  {
    id: "plbj-is-10", type: "IS", number: 35,
    question: "Prosesi adat Betawi dalam pernikahan yang menampilkan seni silat dan pantun disebut tradisi ...",
    acceptedAnswers: ["palang pintu"],
    modelAnswer: "Palang Pintu",
    materi: "Tradisi Betawi", tujuanPembelajaran: "Menyebutkan tradisi pernikahan Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-is-11", type: "IS", number: 36,
    question: "Rumah adat Betawi yang terkenal dengan teras lebarnya disebut Rumah ...",
    acceptedAnswers: ["kebaya", "bapang", "rumah kebaya"],
    modelAnswer: "Kebaya/Bapang",
    materi: "Rumah Adat Betawi", tujuanPembelajaran: "Menyebutkan nama rumah adat Betawi", levelKognitif: "C1"
  },
  {
    id: "plbj-is-12", type: "IS", number: 37,
    question: "Pelabuhan bersejarah di Jakarta yang dulunya bernama Sunda Kelapa kini dikenal sebagai kawasan wisata sejarah di ...",
    acceptedAnswers: ["jakarta utara", "penjaringan", "utara"],
    modelAnswer: "Jakarta Utara (Penjaringan)",
    materi: "Tempat Bersejarah Jakarta", tujuanPembelajaran: "Mengidentifikasi lokasi tempat bersejarah di Jakarta", levelKognitif: "C2"
  },
  // ===== IS TINGKAT LANJUT =====
  {
    id: "plbj-is-13", type: "IS", number: 38,
    question: "Banjir Jakarta semakin parah setiap tahun. Sebutkan SATU tindakan nyata yang bisa kamu lakukan sebagai pelajar SD untuk membantu mengurangi banjir di lingkungan sekitarmu!",
    acceptedAnswers: ["tidak buang sampah sembarangan", "membuang sampah pada tempatnya", "membersihkan saluran air", "menanam pohon", "membuat biopori"],
    modelAnswer: "Tidak membuang sampah sembarangan/ke sungai; atau ikut membersihkan saluran air di lingkungan; atau menanam pohon untuk menambah daerah resapan air.",
    materi: "Lingkungan Jakarta", tujuanPembelajaran: "Merancang tindakan nyata mengurangi banjir Jakarta", levelKognitif: "C4"
  },
  {
    id: "plbj-is-14", type: "IS", number: 39,
    question: "Fatahillah mengalahkan Portugis dan mengganti nama Sunda Kelapa menjadi Jayakarta pada tahun 1527. Apa arti nama 'Jayakarta'?",
    acceptedAnswers: ["kota kemenangan", "kota kemenangan yang agung", "kota yang jaya", "kemenangan besar"],
    modelAnswer: "Jayakarta artinya 'kota kemenangan yang agung' atau 'kota yang jaya/menang'.",
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menjelaskan makna nama Jayakarta", levelKognitif: "C2"
  },
  {
    id: "plbj-is-15", type: "IS", number: 40,
    question: "Permainan tradisional congklak melatih kemampuan berhitung dan strategi. Sebutkan SATU nilai positif lain yang bisa dipelajari dari bermain permainan tradisional bersama teman!",
    acceptedAnswers: ["kerja sama", "sportivitas", "kejujuran", "kesabaran", "menghargai lawan", "gotong royong", "sosial"],
    modelAnswer: "Nilai positif: kerja sama (bermain bersama melatih koordinasi tim), sportivitas (menerima menang dan kalah dengan lapang dada), atau kesabaran dan kejujuran dalam mematuhi aturan permainan.",
    materi: "Permainan Tradisional", tujuanPembelajaran: "Menganalisis nilai yang terkandung dalam permainan tradisional", levelKognitif: "C4"
  },
];

const ut: UTQuestion[] = [
  {
    id: "plbj-ut-1", type: "UT", number: 38,
    question: "Jelaskan apa itu Ondel-ondel! Sebutkan ciri-cirinya, kapan biasanya ditampilkan, dan apa makna atau fungsinya dalam budaya Betawi!",
    modelAnswer: "Ondel-ondel adalah boneka raksasa khas budaya Betawi setinggi sekitar 2,5 meter yang terbuat dari kerangka bambu dan dihiasi dengan pakaian dan topeng berwarna-warni. Biasanya ditampilkan berpasangan (laki-laki dan perempuan) dalam berbagai acara perayaan seperti pernikahan, sunatan, dan hari jadi Jakarta. Dalam budaya Betawi, ondel-ondel dipercaya sebagai penolak bala (pelindung dari hal buruk) dan lambang kegembiraan masyarakat Betawi.",
    keyPoints: ["Menjelaskan bentuk/ciri ondel-ondel", "Menyebutkan bahan pembuatan", "Menyebutkan kapan ditampilkan", "Menjelaskan makna/fungsi dalam budaya Betawi"],
    materi: "Kesenian Betawi", tujuanPembelajaran: "Mendeskripsikan kesenian ondel-ondel secara lengkap", levelKognitif: "C2"
  },
  {
    id: "plbj-ut-2", type: "UT", number: 39,
    question: "Sebutkan 3 permainan tradisional yang biasa dimainkan oleh anak-anak di Jakarta/Betawi! Jelaskan cara bermain salah satu permainan tersebut!",
    modelAnswer: "Tiga permainan tradisional Betawi: (1) Engklek, (2) Congklak, (3) Galah Asin (Gobak Sodor).\nCara bermain Engklek: Buat kotak-kotak di tanah membentuk pola tertentu. Lempar gacuk (pecahan genteng/batu pipih) ke kotak pertama. Melompat dengan satu kaki melewati semua kotak kecuali kotak yang ada gacuk-nya. Di kotak paling ujung, balik badan dan lompat kembali sambil mengambil gacuk. Pemain yang dapat melewati semua kotak tanpa menginjak garis dan tidak jatuh adalah pemenangnya.",
    keyPoints: ["Menyebutkan minimal 3 permainan tradisional", "Menjelaskan cara bermain salah satu dengan benar", "Penjelasan runtut dan mudah dipahami"],
    materi: "Permainan Tradisional", tujuanPembelajaran: "Mendeskripsikan permainan tradisional Betawi", levelKognitif: "C2"
  },
  {
    id: "plbj-ut-3", type: "UT", number: 40,
    question: "Jakarta sering mengalami banjir setiap tahun. Jelaskan minimal 3 penyebab banjir di Jakarta dan 3 upaya yang bisa dilakukan untuk mengurangi banjir!",
    modelAnswer: "Penyebab banjir di Jakarta:\n1. Buang sampah sembarangan ke sungai sehingga aliran air tersumbat\n2. Kurangnya daerah resapan air karena banyak tanah tertutup beton/aspal\n3. Curah hujan tinggi dan kiriman air dari daerah Bogor/Puncak\n\nUpaya mengurangi banjir:\n1. Tidak membuang sampah ke sungai dan membersihkan saluran air secara rutin\n2. Membuat lubang biopori dan taman kota untuk resapan air\n3. Normalisasi/pengerukan sungai agar aliran air lebih lancar",
    keyPoints: ["Menyebutkan minimal 3 penyebab banjir", "Menyebutkan minimal 3 upaya penanggulangan", "Penjelasan logis dan relevan dengan kondisi Jakarta"],
    materi: "Lingkungan Jakarta", tujuanPembelajaran: "Menganalisis penyebab dan solusi banjir di Jakarta", levelKognitif: "C4"
  },
  {
    id: "plbj-ut-4", type: "UT", number: 41,
    question: "Jelaskan sejarah singkat nama Kota Jakarta dari masa ke masa! (mulai dari Sunda Kelapa hingga Jakarta)",
    modelAnswer: "Kota Jakarta telah mengalami beberapa kali pergantian nama:\n1. Sunda Kelapa: Nama awal sebagai pelabuhan kerajaan Sunda yang penting sejak abad ke-12\n2. Jayakarta: Pada tahun 1527, Fatahillah (Panglima Demak) mengalahkan Portugis dan mengganti nama menjadi Jayakarta, artinya 'kota kemenangan yang agung'\n3. Batavia: Pada tahun 1619, VOC Belanda di bawah Jan Pieterszoon Coen menaklukkan Jayakarta dan mengganti namanya menjadi Batavia\n4. Jakarta: Pada tanggal 5 Maret 1942, Jepang mengambil alih dan mengganti nama menjadi Jakarta. Nama ini tetap dipakai hingga sekarang setelah Indonesia merdeka.",
    keyPoints: ["Menyebutkan nama Sunda Kelapa dan artinya", "Menyebutkan Jayakarta dan perubahnya", "Menyebutkan Batavia (era Belanda)", "Menyebutkan Jakarta (era Jepang/kemerdekaan)", "Urutan kronologis benar"],
    materi: "Sejarah Jakarta", tujuanPembelajaran: "Menceritakan sejarah nama Kota Jakarta", levelKognitif: "C2"
  },
  {
    id: "plbj-ut-5", type: "UT", number: 42,
    question: "Sebagai warga Jakarta, apa yang bisa kamu lakukan untuk menjaga kelestarian budaya Betawi? Berikan minimal 4 contoh tindakan nyata yang bisa dilakukan oleh pelajar sekolah dasar!",
    modelAnswer: "Sebagai pelajar, saya bisa menjaga kelestarian budaya Betawi dengan cara:\n1. Mempelajari dan berlatih tari tradisional Betawi seperti Tari Topeng atau Tari Yapong di sekolah\n2. Mengenal dan mencicipi makanan khas Betawi seperti kerak telor, soto Betawi, dan kue rangi\n3. Menyaksikan dan mengapresiasi pertunjukan ondel-ondel atau lenong Betawi di festival budaya\n4. Menggunakan kosakata atau ungkapan Betawi dalam percakapan sehari-hari\n5. Membuat laporan atau karya tentang budaya Betawi untuk tugas sekolah\n6. Mengunjungi museum Betawi atau Taman Mini Indonesia Indah bersama keluarga",
    keyPoints: ["Minimal 4 tindakan konkret disebutkan", "Tindakan relevan dengan usia pelajar SD", "Berkaitan dengan pelestarian budaya Betawi", "Jawaban logis dan dapat dilakukan"],
    materi: "Pelestarian Budaya", tujuanPembelajaran: "Merancang tindakan pelestarian budaya Betawi", levelKognitif: "C4"
  },
  {
    id: "plbj-ut-6", type: "UT", number: 43,
    question: "Ceritakan pengalamanmu atau apa yang kamu ketahui tentang salah satu tradisi atau perayaan khas Betawi! (misalnya: lebaran Betawi, sunatan, atau pernikahan adat Betawi)",
    modelAnswer: "Tradisi pernikahan adat Betawi memiliki prosesi yang kaya budaya. Salah satu prosesi yang paling terkenal adalah Palang Pintu, yaitu tradisi di mana keluarga mempelai pria harus melewati 'palang' yang dijaga oleh jawara (pendekar silat) dari pihak mempelai wanita. Prosesi ini menampilkan seni bela diri (silat Betawi) dan saling berbalas pantun. Selain itu, dalam pernikahan adat Betawi juga ada prosesi Akad Nikah dengan pakaian adat khas yaitu Baju Sadariah untuk pria dan kebaya encim untuk wanita. Mempelai juga menggunakan kembang goyang dan hiasan kepala khas Betawi. Suasana pernikahan sangat meriah dengan iringan musik gambang kromong.",
    keyPoints: ["Menyebutkan nama tradisi/perayaan yang dipilih", "Mendeskripsikan prosesi/kegiatan yang dilakukan", "Menyebutkan unsur budaya Betawi yang ada", "Cerita runtut dan berisi minimal 4-5 kalimat"],
    materi: "Tradisi Betawi", tujuanPembelajaran: "Menceritakan tradisi khas Betawi", levelKognitif: "C2"
  },
  // ===== UT TINGKAT LANJUT =====
  {
    id: "plbj-ut-7", type: "UT", number: 44,
    question: "Jakarta menghadapi masalah kemacetan yang parah setiap hari. Jelaskan:\na) Minimal 3 penyebab kemacetan di Jakarta\nb) Minimal 3 solusi yang bisa diterapkan pemerintah dan warga untuk mengurangi kemacetan\nc) Bagaimana peranmu sebagai pelajar dalam ikut mengurangi kemacetan?",
    modelAnswer: "a) Penyebab kemacetan:\n1. Jumlah kendaraan pribadi yang terus bertambah tidak sebanding dengan luas jalan\n2. Tidak semua warga menggunakan transportasi umum\n3. Banyaknya persimpangan dan lampu merah yang tidak terkoordinasi\n\nb) Solusi:\n1. Pemerintah: memperluas dan meningkatkan kualitas transportasi umum (MRT, LRT, Transjakarta)\n2. Pemerintah: menerapkan kebijakan ganjil-genap dan parkir berbayar untuk mengurangi kendaraan pribadi\n3. Warga: beralih ke transportasi umum atau bersepeda untuk jarak dekat\n\nc) Peran pelajar:\n- Mengajak orang tua menggunakan transportasi umum\n- Jika dekat sekolah, berangkat berjalan kaki atau bersepeda\n- Tidak meminta diantar naik kendaraan pribadi jika bisa naik angkutan umum",
    keyPoints: ["3 penyebab kemacetan disebutkan", "3 solusi (pemerintah & warga) dijelaskan", "Peran pelajar disebutkan secara konkret"],
    materi: "Transportasi Jakarta", tujuanPembelajaran: "Menganalisis penyebab kemacetan dan merumuskan solusi", levelKognitif: "C4"
  },
  {
    id: "plbj-ut-8", type: "UT", number: 45,
    question: "Kebudayaan Betawi adalah warisan leluhur yang harus dijaga bersama. Menurutmu, mengapa penting menjaga kebudayaan Betawi di tengah arus globalisasi? Berikan argumentasimu dan sebutkan minimal 4 bentuk kebudayaan Betawi yang perlu dilestarikan beserta alasannya!",
    modelAnswer: "Pentingnya menjaga kebudayaan Betawi:\nKebudayaan Betawi adalah identitas dan jiwa kota Jakarta. Di tengah globalisasi yang membawa masuk budaya asing dengan cepat, kebudayaan lokal bisa terkikis jika tidak dijaga. Kebudayaan Betawi juga merupakan aset wisata dan kebanggaan bangsa.\n\n4 bentuk kebudayaan Betawi yang perlu dilestarikan:\n1. Ondel-ondel – sebagai simbol ikonik Betawi yang merepresentasikan semangat dan penjaga masyarakat\n2. Tari Topeng Betawi – warisan seni pertunjukan yang mengandung nilai estetika dan cerita moral\n3. Kerak Telor – kuliner khas yang menjadi daya tarik wisata dan simbol kuliner Jakarta\n4. Tradisi Palang Pintu – mengandung nilai silaturahmi, seni silat, dan pantun Betawi yang kaya makna\n\nTanpa pelestarian aktif dari generasi muda, kebudayaan ini bisa punah dan Jakarta kehilangan jati dirinya.",
    keyPoints: ["Argumen pentingnya melestarikan dijelaskan", "4 bentuk kebudayaan Betawi disebutkan", "Alasan pelestarian masing-masing ada", "Dikaitkan dengan konteks globalisasi"],
    materi: "Kebudayaan Betawi", tujuanPembelajaran: "Mengevaluasi pentingnya pelestarian kebudayaan Betawi", levelKognitif: "C5"
  },
];

export const plbjBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], is: [1,2,3,4,5,6,7,8,9,10], ut: [1,2,3,4,5] },
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,32,33,34,35,36,37,38,39], is: [0,2,4,6,8,10,11,12,1,3], ut: [0,2,4,6,1] },
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39], is: [2,3,4,5,6,7,8,9,10,11], ut: [2,3,4,5,6] },
    { pg: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,0,1,2,3,4], is: [5,6,7,8,9,10,11,12,13,14], ut: [4,5,6,7,8] },
  ],
};
