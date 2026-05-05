import { PGQuestion, ISQuestion, UTQuestion, SubjectQuestionBank } from "@/lib/types";

const pg: PGQuestion[] = [

  // ============================================================
  // BAB 1: BAGAIMANA TUBUH KITA BERGERAK? (Sistem Gerak & Saraf)
  // ============================================================

  {
    id: "ipas-pg-1", type: "PG", number: 1,
    question: "Rangka, sendi, dan otot bekerja sama agar tubuh manusia bisa bergerak. Rangka disebut alat gerak pasif karena ...",
    options: ["Rangka tidak pernah bergerak sama sekali", "Rangka hanya bergerak jika ditarik oleh otot", "Rangka bergerak sendiri tanpa bantuan otot", "Rangka terlalu berat untuk bergerak"],
    correctAnswer: 1,
    materi: "Sistem Gerak – Rangka dan Otot", tujuanPembelajaran: "Menjelaskan peran rangka sebagai alat gerak pasif", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-2", type: "PG", number: 2,
    question: "Sendi yang memungkinkan gerakan ke segala arah seperti pada sendi bahu dan pinggul disebut sendi ...",
    options: ["Sendi engsel", "Sendi putar", "Sendi pelana", "Sendi peluru"],
    correctAnswer: 3,
    materi: "Sistem Gerak – Sendi", tujuanPembelajaran: "Mengidentifikasi jenis-jenis sendi dan fungsinya", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-3", type: "PG", number: 3,
    question: "Perhatikan kelainan tulang berikut:\n• Tulang punggung melengkung ke depan (perut maju)\n• Biasanya terjadi pada wanita hamil atau orang yang sering membawa beban berat di depan\n\nKelainan tulang tersebut disebut ...",
    options: ["Kifosis", "Lordosis", "Skoliosis", "Osteoporosis"],
    correctAnswer: 1,
    materi: "Sistem Gerak – Kelainan Tulang", tujuanPembelajaran: "Membedakan jenis-jenis kelainan pada sistem gerak", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-4", type: "PG", number: 4,
    question: "Seorang siswa sering duduk miring ke satu sisi saat belajar selama bertahun-tahun. Kelainan tulang yang kemungkinan akan dialaminya adalah ...",
    options: ["Lordosis – tulang punggung melengkung ke depan", "Kifosis – tulang punggung melengkung ke belakang", "Skoliosis – tulang punggung melengkung ke samping", "Osteoporosis – tulang menjadi rapuh dan keropos"],
    correctAnswer: 2,
    materi: "Sistem Gerak – Kelainan Tulang", tujuanPembelajaran: "Menganalisis penyebab kelainan tulang berdasarkan kebiasaan", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-5", type: "PG", number: 5,
    question: "Otot jantung memiliki sifat yang berbeda dari otot lurik dan otot polos. Sifat khas otot jantung adalah ...",
    options: ["Bekerja secara sadar dan bisa dikendalikan", "Bekerja di luar kesadaran dan tidak pernah lelah", "Hanya aktif saat kita berolahraga", "Memiliki warna putih dan bergerak lambat"],
    correctAnswer: 1,
    materi: "Sistem Gerak – Otot", tujuanPembelajaran: "Membedakan jenis-jenis otot dan cara kerjanya", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-6", type: "PG", number: 6,
    question: "Ketika tangan seseorang tidak sengaja menyentuh benda panas, ia langsung menarik tangannya sebelum otak memerintahkan. Peristiwa ini disebut gerak ...",
    options: ["Gerak sadar yang dikendalikan otak besar", "Gerak refleks yang dikendalikan sumsum tulang belakang", "Gerak terkoordinasi antara otak dan tangan", "Gerak volunter yang dipelajari sejak bayi"],
    correctAnswer: 1,
    materi: "Sistem Saraf", tujuanPembelajaran: "Membedakan gerak refleks dan gerak sadar", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-7", type: "PG", number: 7,
    question: "Perhatikan tabel berikut:\n| Sendi | Contoh Gerakan |\n|---|---|\n| Sendi engsel | Memutar kepala ke kiri dan kanan |\n| Sendi putar | Menekuk siku dan lutut |\n| Sendi peluru | Menggerakkan bahu dan pinggul bebas |\n| Sendi pelana | Menggerakkan ibu jari |\n\nPasangan sendi dan contoh gerakan yang BENAR adalah ...",
    options: ["Sendi engsel – memutar kepala", "Sendi putar – menekuk siku dan lutut", "Sendi peluru – menggerakkan bahu bebas ke segala arah", "Sendi pelana – menggerakkan seluruh jari tangan"],
    correctAnswer: 2,
    materi: "Sistem Gerak – Sendi", tujuanPembelajaran: "Mencocokkan jenis sendi dengan gerakan yang sesuai", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-8", type: "PG", number: 8,
    question: "Vitamin D sangat penting untuk kesehatan tulang karena ...",
    options: ["Vitamin D membantu kontraksi otot", "Vitamin D membantu penyerapan kalsium untuk membentuk tulang yang kuat", "Vitamin D menggantikan fungsi kalsium dalam tubuh", "Vitamin D diproduksi oleh sumsum tulang belakang"],
    correctAnswer: 1,
    materi: "Sistem Gerak – Kesehatan Tulang", tujuanPembelajaran: "Menjelaskan peran nutrisi terhadap kesehatan sistem gerak", levelKognitif: "C2"
  },

  // ============================================================
  // BAB 2: CERITA TENTANG INDONESIA KITA (Sejarah Indonesia)
  // ============================================================

  {
    id: "ipas-pg-9", type: "PG", number: 9,
    question: "VOC (Vereenigde Oost-Indische Compagnie) didirikan oleh Belanda pada tahun 1602. Salah satu tujuan utama pembentukan VOC adalah ...",
    options: ["Membantu rakyat Nusantara dalam bidang pendidikan", "Menghindari persaingan tidak sehat antar pedagang Belanda dan memonopoli perdagangan rempah", "Menyebarkan agama Kristen di seluruh Nusantara", "Membangun infrastruktur jalan raya di Pulau Jawa"],
    correctAnswer: 1,
    materi: "Sejarah – Kedatangan Bangsa Asing", tujuanPembelajaran: "Menganalisis tujuan pembentukan VOC", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-10", type: "PG", number: 10,
    question: "Perlawanan Pattimura (Thomas Matulessy) di Maluku pada tahun 1817 dipicu oleh ...",
    options: ["Keinginan menyerang Batavia", "Kebijakan Belanda yang memberatkan rakyat: wajib kerja, penyerahan hasil bumi, dan monopoli perdagangan", "Perintah dari Kerajaan Ternate", "Konflik antar suku di Maluku yang dimanfaatkan Belanda"],
    correctAnswer: 1,
    materi: "Sejarah – Perlawanan Rakyat", tujuanPembelajaran: "Menganalisis latar belakang perlawanan Pattimura", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-11", type: "PG", number: 11,
    question: "Sistem Tanam Paksa (Cultuurstelsel) yang diterapkan oleh Gubernur Jenderal Van den Bosch tahun 1830 mewajibkan rakyat Indonesia untuk ...",
    options: ["Membayar pajak dalam bentuk uang kepada Belanda", "Menyerahkan 1/5 lahan atau 66 hari kerja per tahun untuk menanam tanaman ekspor Belanda", "Bekerja sebagai tentara VOC selama 5 tahun", "Menyerahkan 1/3 hasil panen kepada kepala desa"],
    correctAnswer: 1,
    materi: "Sejarah – Penjajahan Belanda", tujuanPembelajaran: "Menjelaskan sistem tanam paksa dan dampaknya", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-12", type: "PG", number: 12,
    question: "Peristiwa Rengasdengklok (16 Agustus 1945) terjadi karena ...",
    options: ["Jepang menyerang Rengasdengklok untuk menangkap Soekarno-Hatta", "Golongan muda mengasingkan Soekarno-Hatta agar segera memproklamasikan kemerdekaan tanpa menunggu PPKI", "Belanda mencoba merebut kembali kekuasaan di Indonesia", "Soekarno-Hatta sendiri yang memilih mengasingkan diri ke Rengasdengklok"],
    correctAnswer: 1,
    materi: "Sejarah – Proklamasi Kemerdekaan", tujuanPembelajaran: "Menjelaskan latar belakang peristiwa Rengasdengklok", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-13", type: "PG", number: 13,
    question: "Proklamasi Kemerdekaan Indonesia dibacakan oleh Ir. Soekarno pada tanggal 17 Agustus 1945 di ...",
    options: ["Lapangan Banteng, Jakarta Pusat", "Jalan Pegangsaan Timur No. 56, Jakarta", "Istana Negara, Jakarta Pusat", "Gedung Volksraad, Batavia"],
    correctAnswer: 1,
    materi: "Sejarah – Proklamasi Kemerdekaan", tujuanPembelajaran: "Menyebutkan tempat dan tanggal proklamasi kemerdekaan", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-14", type: "PG", number: 14,
    question: "Perlawanan rakyat Indonesia sebelum era pergerakan nasional (sebelum 1908) seringkali gagal mengusir penjajah. Faktor UTAMA kegagalan tersebut adalah ...",
    options: ["Rakyat Indonesia tidak bersemangat dalam perjuangan", "Perlawanan bersifat kedaerahan dan mudah dipecah belah dengan politik adu domba (devide et impera)", "Belanda memiliki jumlah prajurit yang jauh lebih banyak dari rakyat Indonesia", "Para pemimpin perlawanan tidak memiliki kemampuan strategi perang"],
    correctAnswer: 1,
    materi: "Sejarah – Perlawanan Rakyat", tujuanPembelajaran: "Menganalisis faktor kegagalan perlawanan bangsa Indonesia", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-15", type: "PG", number: 15,
    question: "Budi Utomo yang didirikan pada 20 Mei 1908 dianggap sebagai awal kebangkitan nasional Indonesia karena ...",
    options: ["Merupakan organisasi perlawanan bersenjata pertama melawan Belanda", "Merupakan organisasi modern pertama yang bersifat nasional dan menggunakan pendidikan sebagai sarana perjuangan", "Berhasil mengusir Belanda dari wilayah Jawa", "Merupakan organisasi keagamaan yang menyatukan seluruh Islam Nusantara"],
    correctAnswer: 1,
    materi: "Sejarah – Pergerakan Nasional", tujuanPembelajaran: "Menjelaskan makna Hari Kebangkitan Nasional", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-16", type: "PG", number: 16,
    question: "Sumpah Pemuda yang diikrarkan pada 28 Oktober 1928 menegaskan tiga hal. Pernyataan yang BENAR tentang isi Sumpah Pemuda adalah ...",
    options: ["Bertumpah darah, berbangsa, dan berbahasa yang satu: Indonesia, Melayu, dan Jawa", "Bertumpah darah satu: tanah air Indonesia; berbangsa satu: bangsa Indonesia; berbahasa satu: bahasa Indonesia", "Merdeka, bersatu, dan berdaulat sebagai bangsa Indonesia", "Bersatu dalam satu agama, satu bahasa, dan satu budaya Jawa"],
    correctAnswer: 1,
    materi: "Sejarah – Sumpah Pemuda", tujuanPembelajaran: "Menyebutkan isi Sumpah Pemuda", levelKognitif: "C1"
  },

  // ============================================================
  // BAB 3: PELESIR KELILING DUNIA (Geografi Dunia)
  // ============================================================

  {
    id: "ipas-pg-17", type: "PG", number: 17,
    question: "Batas alam yang memisahkan Benua Eropa dari Benua Asia di daratan adalah ...",
    options: ["Pegunungan Himalaya", "Pegunungan Alpen", "Pegunungan Ural", "Pegunungan Kaukasus"],
    correctAnswer: 2,
    materi: "Geografi – Benua di Dunia", tujuanPembelajaran: "Mengidentifikasi batas-batas antara benua", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-18", type: "PG", number: 18,
    question: "Benua yang seluruh wilayahnya berada di Belahan Bumi Selatan dan memiliki iklim tropis di utara hingga gurun di tengahnya adalah ...",
    options: ["Asia", "Afrika", "Amerika Selatan", "Australia"],
    correctAnswer: 3,
    materi: "Geografi – Benua di Dunia", tujuanPembelajaran: "Mengidentifikasi karakteristik setiap benua", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-19", type: "PG", number: 19,
    question: "Negara Swiss yang dikelilingi pegunungan Alpen memanfaatkan kondisi geografisnya dengan mengembangkan sektor ...",
    options: ["Pertambangan emas dan nikel berskala besar", "Pariwisata, perbankan, dan industri jam tangan presisi", "Pertanian padi dan perkebunan karet", "Perikanan laut dan ekspor hasil laut"],
    correctAnswer: 1,
    materi: "Geografi – Kondisi Geografis Negara", tujuanPembelajaran: "Menganalisis hubungan kondisi geografis dengan potensi ekonomi suatu negara", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-20", type: "PG", number: 20,
    question: "Berdasarkan letak geografisnya, Indonesia dijuluki sebagai 'negara kepulauan terbesar di dunia'. Keuntungan strategis yang diperoleh Indonesia dari posisi geografis tersebut adalah ...",
    options: ["Indonesia mudah diserang dari berbagai arah laut", "Indonesia menjadi jalur perdagangan internasional dan memiliki keanekaragaman hayati yang sangat kaya", "Indonesia sulit menjalin hubungan dengan negara lain karena terpisah lautan", "Indonesia harus mengeluarkan biaya besar untuk menjaga perbatasan laut"],
    correctAnswer: 1,
    materi: "Geografi – Kondisi Geografis Indonesia", tujuanPembelajaran: "Menganalisis keuntungan posisi geografis Indonesia", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-21", type: "PG", number: 21,
    question: "Perhatikan daftar benua berikut: Asia, Afrika, Amerika, Eropa, Australia, Antartika. Benua TERLUAS dan TERKECIL berturut-turut adalah ...",
    options: ["Afrika dan Australia", "Asia dan Antartika", "Asia dan Australia", "Amerika dan Eropa"],
    correctAnswer: 2,
    materi: "Geografi – Benua di Dunia", tujuanPembelajaran: "Membandingkan ukuran benua-benua di dunia", levelKognitif: "C2"
  },

  // ============================================================
  // BAB 4: INDONESIA DAN MASYARAKAT DUNIA (Hubungan Antarnegara)
  // ============================================================

  {
    id: "ipas-pg-22", type: "PG", number: 22,
    question: "Indonesia mengekspor kelapa sawit ke berbagai negara, sementara mengimpor bahan baku pesawat terbang dari luar negeri. Kegiatan impor dilakukan karena ...",
    options: ["Indonesia tidak mampu memproduksi bahan baku apapun", "Beberapa barang lebih efisien atau murah diproduksi di negara lain karena perbedaan sumber daya", "Indonesia lebih suka produk luar negeri", "Pemerintah melarang produksi bahan baku tertentu di dalam negeri"],
    correctAnswer: 1,
    materi: "Hubungan Antarnegara – Ekspor Impor", tujuanPembelajaran: "Menjelaskan alasan suatu negara melakukan impor", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-23", type: "PG", number: 23,
    question: "Batik, Keris, Angklung, dan Kebaya telah diakui UNESCO sebagai Warisan Budaya Takbenda Indonesia. Pengakuan ini penting karena ...",
    options: ["Indonesia mendapat hadiah uang dari UNESCO", "Pengakuan internasional melindungi warisan budaya dari klaim pihak lain dan mendorong pelestarian", "UNESCO mengambil alih kepemilikan batik dari Indonesia", "Indonesia bisa melarang negara lain memakai batik"],
    correctAnswer: 1,
    materi: "Hubungan Antarnegara – Warisan Budaya", tujuanPembelajaran: "Menjelaskan makna pengakuan UNESCO terhadap budaya Indonesia", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-24", type: "PG", number: 24,
    question: "Globalisasi menyebabkan anak-anak Indonesia semakin familiar dengan budaya asing (Korean pop, makanan cepat saji, game online) dibanding budaya lokal. Dampak NEGATIF globalisasi terhadap budaya ini dapat diatasi dengan ...",
    options: ["Menutup diri dari semua pengaruh asing dan memboikot produk impor", "Menyaring budaya asing yang masuk, memperkuat pendidikan budaya lokal, dan bangga menggunakan produk dalam negeri", "Membiarkan globalisasi berjalan karena dianggap kemajuan yang tidak bisa dihentikan", "Mewajibkan semua anak belajar satu jenis kesenian asing saja"],
    correctAnswer: 1,
    materi: "Hubungan Antarnegara – Globalisasi", tujuanPembelajaran: "Merancang solusi terhadap dampak negatif globalisasi", levelKognitif: "C5"
  },
  {
    id: "ipas-pg-25", type: "PG", number: 25,
    question: "APEC (Asia-Pacific Economic Cooperation) adalah forum kerja sama yang diikuti Indonesia. Tujuan utama APEC adalah ...",
    options: ["Membentuk satu negara besar di kawasan Asia Pasifik", "Meningkatkan pertumbuhan ekonomi dan perdagangan bebas di kawasan Asia Pasifik", "Mengatur masalah keamanan dan pertahanan negara-negara Asia", "Menyatukan mata uang seluruh negara Asia menjadi satu"],
    correctAnswer: 1,
    materi: "Hubungan Antarnegara – Kerja Sama Internasional", tujuanPembelajaran: "Menjelaskan tujuan organisasi kerja sama internasional", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-26", type: "PG", number: 26,
    question: "Evaluasi pernyataan berikut: 'Globalisasi hanya menguntungkan negara maju dan merugikan negara berkembang seperti Indonesia.'\n\nPernyataan ini bersifat ...",
    options: ["Benar sepenuhnya karena globalisasi selalu merugikan negara berkembang", "Tidak tepat sepenuhnya; globalisasi memberi peluang ekspor dan akses teknologi bagi Indonesia, meski ada tantangan persaingan", "Benar, karena Indonesia tidak mampu bersaing di pasar global", "Salah, karena globalisasi menguntungkan semua pihak secara merata"],
    correctAnswer: 1,
    materi: "Hubungan Antarnegara – Globalisasi", tujuanPembelajaran: "Mengevaluasi dampak globalisasi terhadap negara berkembang", levelKognitif: "C5"
  },

  // ============================================================
  // BAB 5: MENJELAJAHI BUMI DAN ANTARIKSA (Tata Surya)
  // ============================================================

  {
    id: "ipas-pg-27", type: "PG", number: 27,
    question: "Rotasi Bumi adalah perputaran Bumi pada porosnya. Akibat langsung dari rotasi Bumi adalah ...",
    options: ["Terjadinya pergantian musim panas dan dingin", "Terjadinya siang dan malam serta perbedaan waktu di berbagai tempat", "Terjadinya gerhana matahari dan gerhana bulan", "Terjadinya pasang surut air laut"],
    correctAnswer: 1,
    materi: "Tata Surya – Rotasi dan Revolusi", tujuanPembelajaran: "Menjelaskan akibat rotasi Bumi", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-28", type: "PG", number: 28,
    question: "Planet Venus dijuluki 'Bintang Kejora' dan memiliki suhu permukaan (~465°C) lebih panas dari Merkurius, meskipun Merkurius lebih dekat ke Matahari. Alasan yang PALING TEPAT adalah ...",
    options: ["Venus lebih besar dari Merkurius sehingga menyerap lebih banyak panas", "Atmosfer tebal Venus mengandung CO₂ yang menyebabkan efek rumah kaca ekstrem sehingga panas terperangkap", "Venus berputar lebih cepat sehingga menghasilkan panas gesekan", "Merkurius memiliki perisai yang memantulkan panas matahari"],
    correctAnswer: 1,
    materi: "Tata Surya – Planet", tujuanPembelajaran: "Menganalisis karakteristik planet-planet dalam tata surya", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-29", type: "PG", number: 29,
    question: "Urutan planet dari yang PALING DEKAT ke Matahari adalah ...",
    options: ["Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus", "Venus, Merkurius, Bumi, Mars, Jupiter, Saturnus, Neptunus, Uranus", "Merkurius, Venus, Mars, Bumi, Jupiter, Saturnus, Uranus, Neptunus", "Bumi, Venus, Merkurius, Mars, Jupiter, Saturnus, Uranus, Neptunus"],
    correctAnswer: 0,
    materi: "Tata Surya – Planet", tujuanPembelajaran: "Menyebutkan urutan planet dari Matahari", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-30", type: "PG", number: 30,
    question: "Planet Saturnus dikenal karena memiliki cincin yang indah. Cincin Saturnus tersebut tersusun dari ...",
    options: ["Awan tebal dari gas hidrogen dan helium", "Jutaan partikel es, batuan, dan debu berbagai ukuran", "Kawah meteor yang mengelilingi planet", "Bulan-bulan kecil yang bergerak sangat cepat"],
    correctAnswer: 1,
    materi: "Tata Surya – Planet", tujuanPembelajaran: "Mendeskripsikan ciri khas planet Saturnus", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-31", type: "PG", number: 31,
    question: "Pluto tidak lagi diklasifikasikan sebagai planet sejak tahun 2006 oleh International Astronomical Union (IAU). Alasan utama perubahan status Pluto menjadi 'planet kurcaci' adalah ...",
    options: ["Pluto terlalu kecil dibanding bulan Bumi", "Pluto tidak memenuhi kriteria planet: belum membersihkan orbitnya dari benda-benda lain di sekitarnya", "Pluto tidak memiliki satelit atau bulan", "Pluto terlalu jauh dari Matahari untuk dikategorikan planet"],
    correctAnswer: 1,
    materi: "Tata Surya – Benda Langit", tujuanPembelajaran: "Menjelaskan mengapa Pluto tidak lagi disebut planet", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-32", type: "PG", number: 32,
    question: "Komet sering disebut 'bintang berekor' ketika mendekati Matahari. Ekor komet selalu mengarah menjauhi Matahari karena ...",
    options: ["Komet bergerak sangat cepat menjauhi Matahari", "Angin surya mendorong gas dan debu komet ke arah yang menjauhi Matahari", "Gravitasi planet-planet besar menarik ekor komet", "Suhu sangat dingin di belakang komet membentuk es menjadi ekor"],
    correctAnswer: 1,
    materi: "Tata Surya – Benda Langit", tujuanPembelajaran: "Menjelaskan karakteristik komet", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-33", type: "PG", number: 33,
    question: "Gerhana Matahari total terjadi ketika ...",
    options: ["Bumi berada di antara Matahari dan Bulan sehingga Bulan masuk ke bayangan Bumi", "Bulan berada tepat di antara Matahari dan Bumi sehingga sinar Matahari terhalang sampai ke Bumi", "Matahari berada di antara Bumi dan Bulan sehingga Bumi gelap", "Bumi dan Bulan berada pada posisi yang sama dari Matahari"],
    correctAnswer: 1,
    materi: "Tata Surya – Gerhana", tujuanPembelajaran: "Menjelaskan proses terjadinya gerhana Matahari", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-34", type: "PG", number: 34,
    question: "Revolusi Bumi mengelilingi Matahari membutuhkan waktu sekitar 365¼ hari. Akibat dari revolusi Bumi adalah ...",
    options: ["Terjadinya siang dan malam secara bergantian setiap 24 jam", "Terjadinya pergantian musim dan pembuatan kalender masehi (1 tahun = 365 hari)", "Terjadinya perbedaan waktu antara kota-kota di Indonesia", "Terjadinya pasang surut air laut setiap hari"],
    correctAnswer: 1,
    materi: "Tata Surya – Rotasi dan Revolusi", tujuanPembelajaran: "Menjelaskan akibat revolusi Bumi", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-35", type: "PG", number: 35,
    question: "Sabuk asteroid terletak di antara orbit planet Mars dan Jupiter. Jika sebuah asteroid terlepas dari sabuknya dan masuk ke atmosfer Bumi, maka ...",
    options: ["Asteroid akan langsung jatuh utuh ke permukaan Bumi", "Sebagian besar asteroid akan terbakar di atmosfer (menjadi meteor/bintang jatuh), hanya yang besar yang jatuh sebagai meteorit", "Asteroid akan ditangkap gravitasi Bulan terlebih dahulu", "Semua asteroid akan memantul kembali ke luar angkasa"],
    correctAnswer: 1,
    materi: "Tata Surya – Benda Langit", tujuanPembelajaran: "Menganalisis apa yang terjadi ketika benda langit memasuki atmosfer Bumi", levelKognitif: "C4"
  },

  // ============================================================
  // BAB 6: GAWAT! BENARKAH ENERGI DI BUMI AKAN HABIS? (Energi)
  // ============================================================

  {
    id: "ipas-pg-36", type: "PG", number: 36,
    question: "Batu bara, minyak bumi, dan gas alam disebut bahan bakar fosil karena ...",
    options: ["Ditemukan di dalam fosil dinosaurus yang berumur jutaan tahun", "Terbentuk dari sisa-sisa organisme hidup (tumbuhan dan hewan) yang terkubur jutaan tahun lalu dan mengalami tekanan tinggi", "Ditambang dari batuan yang berada di bawah gunung berapi", "Dibuat oleh manusia dari bahan-bahan alami secara kimia"],
    correctAnswer: 1,
    materi: "Energi – Tak Terbarukan", tujuanPembelajaran: "Menjelaskan asal usul bahan bakar fosil", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-37", type: "PG", number: 37,
    question: "Indonesia memiliki potensi besar untuk mengembangkan energi panas bumi (geotermal). Sumber energi ini tersedia melimpah di Indonesia karena ...",
    options: ["Indonesia memiliki banyak sungai besar yang mengalir deras", "Indonesia berada di cincin api Pasifik dengan banyak gunung berapi aktif yang menyimpan panas bumi", "Indonesia mendapat sinar matahari sepanjang tahun", "Indonesia memiliki hutan tropis yang luas sebagai sumber biomassa"],
    correctAnswer: 1,
    materi: "Energi – Terbarukan", tujuanPembelajaran: "Menjelaskan potensi energi terbarukan di Indonesia", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-38", type: "PG", number: 38,
    question: "Perhatikan daftar sumber energi:\n(1) Matahari  (2) Angin  (3) Batu bara  (4) Minyak bumi  (5) Air  (6) Gas alam\n\nYang termasuk energi TERBARUKAN adalah ...",
    options: ["(1), (2), (3)", "(1), (2), (5)", "(3), (4), (6)", "(2), (4), (5)"],
    correctAnswer: 1,
    materi: "Energi – Terbarukan vs Tak Terbarukan", tujuanPembelajaran: "Membedakan sumber energi terbarukan dan tak terbarukan", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-39", type: "PG", number: 39,
    question: "Penggunaan panel surya (solar panel) di rumah-rumah dapat mengurangi ketergantungan pada listrik dari PLN yang menggunakan batu bara. Evaluasi pernyataan berikut: 'Panel surya adalah solusi sempurna untuk krisis energi Indonesia.'\n\nPernyataan ini ...",
    options: ["Benar sepenuhnya karena Indonesia mendapat sinar matahari melimpah", "Tidak sepenuhnya benar; panel surya baik tapi masih ada tantangan biaya awal yang tinggi, penyimpanan energi malam hari, dan tidak cocok di semua wilayah", "Salah karena panel surya tidak efektif di iklim tropis", "Benar, karena panel surya sudah bisa menggantikan seluruh kebutuhan energi Indonesia"],
    correctAnswer: 1,
    materi: "Energi – Terbarukan", tujuanPembelajaran: "Mengevaluasi kelebihan dan keterbatasan energi surya", levelKognitif: "C5"
  },

  // ============================================================
  // BAB 7: BUMI KITA TERANCAM BAHAYA (Lingkungan)
  // ============================================================

  {
    id: "ipas-pg-40", type: "PG", number: 40,
    question: "Pembabatan hutan (deforestasi) besar-besaran untuk perkebunan kelapa sawit di Kalimantan menyebabkan berbagai dampak lingkungan. Dampak PALING LANGSUNG yang dirasakan adalah ...",
    options: ["Meningkatnya produksi minyak goreng dalam negeri", "Hilangnya habitat orangutan dan satwa endemik, banjir, erosi, dan peningkatan emisi karbon", "Meningkatnya pariwisata alam di Kalimantan", "Bertambahnya lahan pertanian pangan untuk masyarakat"],
    correctAnswer: 1,
    materi: "Lingkungan – Ancaman dan Dampak", tujuanPembelajaran: "Menganalisis dampak deforestasi terhadap lingkungan", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-41", type: "PG", number: 41,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Deforestation_in_Borneo.jpg/400px-Deforestation_in_Borneo.jpg",
    question: "Perhatikan gambar di atas yang menunjukkan kondisi hutan Kalimantan yang gundul akibat pembabatan. Jika kondisi ini terus berlanjut, dampak yang akan terjadi pada siklus air di wilayah tersebut adalah ...",
    options: ["Air hujan akan lebih banyak meresap ke dalam tanah karena tidak ada pohon yang menghalangi", "Berkurangnya penyerapan air, meningkatnya limpasan air permukaan, sehingga rawan banjir saat hujan dan kekeringan di musim kemarau", "Iklim daerah menjadi lebih sejuk karena tidak ada pohon yang menghalangi angin", "Tidak ada pengaruh terhadap siklus air karena hujan berasal dari awan"],
    correctAnswer: 1,
    materi: "Lingkungan – Siklus Air dan Deforestasi", tujuanPembelajaran: "Menganalisis hubungan deforestasi dengan gangguan siklus air", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-42", type: "PG", number: 42,
    question: "Reboisasi (penanaman kembali hutan) merupakan salah satu upaya pelestarian lingkungan. Manfaat UTAMA reboisasi bagi lingkungan adalah ...",
    options: ["Menghasilkan kayu untuk dijual sehingga menambah pendapatan negara", "Memulihkan ekosistem hutan, mencegah erosi, menjaga ketersediaan air, dan menyerap karbon dioksida dari udara", "Mempercantik tampilan alam sehingga meningkatkan pariwisata", "Menyediakan bahan bakar kayu untuk masyarakat sekitar hutan"],
    correctAnswer: 1,
    materi: "Lingkungan – Pelestarian", tujuanPembelajaran: "Menjelaskan manfaat reboisasi", levelKognitif: "C2"
  },
  {
    id: "ipas-pg-43", type: "PG", number: 43,
    question: "Seorang pengusaha mengajukan izin membuka tambang batu bara di dalam kawasan hutan lindung dengan alasan membuka lapangan kerja bagi masyarakat. Evaluasi keputusan yang paling bijak berdasarkan prinsip pembangunan berkelanjutan adalah ...",
    options: ["Izin harus diberikan karena lapangan kerja lebih penting dari hutan", "Izin tidak layak diberikan; alternatif yang lebih baik adalah mengembangkan ekowisata atau pertanian berkelanjutan yang memberikan manfaat jangka panjang tanpa merusak hutan", "Izin bisa diberikan asalkan pengusaha menanam pohon di tempat lain", "Keputusan diserahkan sepenuhnya kepada masyarakat setempat"],
    correctAnswer: 1,
    materi: "Lingkungan – Pembangunan Berkelanjutan", tujuanPembelajaran: "Mengevaluasi keputusan berdasarkan prinsip pembangunan berkelanjutan", levelKognitif: "C5"
  },
  {
    id: "ipas-pg-44", type: "PG", number: 44,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Water_cycle.png/480px-Water_cycle.png",
    question: "Perhatikan diagram siklus air di atas. Proses penguapan air dari permukaan laut dan danau yang kemudian naik ke atmosfer disebut ...",
    options: ["Presipitasi", "Kondensasi", "Evaporasi", "Infiltrasi"],
    correctAnswer: 2,
    materi: "Lingkungan – Siklus Air", tujuanPembelajaran: "Menjelaskan tahapan dalam siklus air", levelKognitif: "C1"
  },
  {
    id: "ipas-pg-45", type: "PG", number: 45,
    question: "Pencemaran sungai oleh limbah pabrik menyebabkan ikan-ikan mati. Analisis rantai dampak yang paling tepat dari peristiwa ini adalah ...",
    options: ["Limbah pabrik → sungai tercemar → ikan mati → nelayan kehilangan mata pencaharian → kemiskinan meningkat", "Limbah pabrik → ikan mati → sungai tercemar → nelayan pindah daerah → sungai bersih sendiri", "Limbah pabrik → ikan terkontaminasi → ikan berevolusi menjadi kebal racun → ekosistem stabil kembali", "Limbah pabrik → air sungai panas → ikan bermigrasi → nelayan mendapat ikan di tempat baru"],
    correctAnswer: 0,
    materi: "Lingkungan – Pencemaran", tujuanPembelajaran: "Menganalisis rantai dampak pencemaran lingkungan", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-46", type: "PG", number: 46,
    question: "Program 3R (Reduce, Reuse, Recycle) merupakan strategi pengelolaan sampah yang efektif. Contoh penerapan REUSE (menggunakan kembali) dalam kehidupan sehari-hari adalah ...",
    options: ["Memilah sampah plastik untuk didaur ulang menjadi bahan baru", "Menggunakan tas belanja kain yang sama berkali-kali untuk mengurangi kantong plastik sekali pakai", "Mengurangi jumlah pembelian barang yang menghasilkan banyak sampah", "Mengolah sampah organik menjadi pupuk kompos"],
    correctAnswer: 1,
    materi: "Lingkungan – Pengelolaan Sampah", tujuanPembelajaran: "Memberi contoh penerapan 3R dalam kehidupan", levelKognitif: "C3"
  },

  // ============================================================
  // SOAL LINTAS BAB – HOTS (C4-C5)
  // ============================================================

  {
    id: "ipas-pg-47", type: "PG", number: 47,
    question: "Perubahan iklim global menyebabkan suhu Bumi meningkat rata-rata 1,2°C sejak era industri. Dampak yang BUKAN disebabkan oleh perubahan iklim adalah ...",
    options: ["Mencairnya es di kutub yang menaikkan permukaan laut", "Meningkatnya frekuensi bencana cuaca ekstrem (badai, banjir, kekeringan)", "Pergeseran musim yang mengganggu pola tanam pertanian", "Bertambahnya jumlah planet di tata surya akibat panas berlebih"],
    correctAnswer: 3,
    materi: "Lintas Bab – Perubahan Iklim", tujuanPembelajaran: "Menganalisis dampak perubahan iklim global", levelKognitif: "C4"
  },
  {
    id: "ipas-pg-48", type: "PG", number: 48,
    question: "Indonesia merupakan negara dengan jumlah gunung berapi aktif terbanyak di dunia karena berada di 'Cincin Api Pasifik'. Hal ini terjadi karena ...",
    options: ["Indonesia dekat dengan Matahari sehingga panas dalam bumi tinggi", "Indonesia terletak di pertemuan beberapa lempeng tektonik besar yang aktif bergerak", "Indonesia memiliki curah hujan tinggi yang mengaktifkan gunung berapi", "Gunung berapi Indonesia sudah ada sejak terbentuknya Bumi miliaran tahun lalu"],
    correctAnswer: 1,
    materi: "Geografi – Fenomena Alam Indonesia", tujuanPembelajaran: "Menjelaskan penyebab banyaknya gunung berapi di Indonesia", levelKognitif: "C3"
  },
  {
    id: "ipas-pg-49", type: "PG", number: 49,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Digestive_system_diagram_en.svg/220px-Digestive_system_diagram_en.svg.png",
    question: "Meski gambar sistem pencernaan di atas merupakan materi kelas sebelumnya, integrasi IPAS kelas 6 mengkaitkannya dengan sejarah. Dokter Soetomo mendirikan Budi Utomo 1908 dengan misi meningkatkan pendidikan. Kaitannya: pendidikan kesehatan mengajarkan pentingnya menjaga sistem pencernaan dengan makan bergizi. Makanan bergizi yang mendukung sistem gerak (tulang kuat) pada anak usia 6 SD adalah yang mengandung ...",
    options: ["Lemak tinggi dan gula banyak untuk energi cepat", "Kalsium, fosfor, dan vitamin D untuk pembentukan tulang yang kuat", "Hanya protein tinggi karena otot membutuhkan protein", "Vitamin C saja karena berfungsi sebagai antioksidan"],
    correctAnswer: 1,
    materi: "Sistem Gerak – Gizi dan Kesehatan Tulang", tujuanPembelajaran: "Mengaitkan nutrisi dengan kesehatan sistem gerak", levelKognitif: "C3"
  },
];

const is: ISQuestion[] = [
  // BAB 1 – Sistem Gerak & Saraf
  {
    id: "ipas-is-1", type: "IS", number: 50,
    question: "Kelainan tulang punggung yang melengkung ke samping (membentuk huruf S atau C) disebut ...",
    acceptedAnswers: ["skoliosis"],
    modelAnswer: "Skoliosis",
    materi: "Sistem Gerak – Kelainan Tulang", tujuanPembelajaran: "Menyebutkan jenis kelainan tulang", levelKognitif: "C1"
  },
  {
    id: "ipas-is-2", type: "IS", number: 51,
    question: "Saat tanganmu tidak sengaja menyentuh api dan langsung menarik tangan sebelum otak memerintahkan, peristiwa itu disebut gerak ...",
    acceptedAnswers: ["refleks", "gerak refleks"],
    modelAnswer: "Refleks (gerak refleks)",
    materi: "Sistem Saraf", tujuanPembelajaran: "Membedakan gerak refleks dan gerak sadar", levelKognitif: "C2"
  },
  {
    id: "ipas-is-3", type: "IS", number: 52,
    question: "Otot yang cara kerjanya tidak dapat dikendalikan oleh kemauan kita (di luar kesadaran) dan terdapat pada organ-organ dalam seperti usus dan lambung disebut otot ...",
    acceptedAnswers: ["polos", "otot polos"],
    modelAnswer: "Otot polos",
    materi: "Sistem Gerak – Otot", tujuanPembelajaran: "Menyebutkan jenis-jenis otot berdasarkan cara kerjanya", levelKognitif: "C1"
  },

  // BAB 2 – Sejarah Indonesia
  {
    id: "ipas-is-4", type: "IS", number: 53,
    question: "Sistem tanam paksa yang diterapkan Belanda pada tahun 1830 yang mewajibkan rakyat menyerahkan 1/5 tanahnya untuk tanaman ekspor disebut ...",
    acceptedAnswers: ["cultuurstelsel", "tanam paksa", "sistem tanam paksa"],
    modelAnswer: "Cultuurstelsel (Tanam Paksa)",
    materi: "Sejarah – Penjajahan Belanda", tujuanPembelajaran: "Menyebutkan nama kebijakan penjajahan Belanda", levelKognitif: "C1"
  },
  {
    id: "ipas-is-5", type: "IS", number: 54,
    question: "Peristiwa pengasingan Soekarno-Hatta ke luar Jakarta oleh golongan muda sebelum Proklamasi terjadi di kota ...",
    acceptedAnswers: ["rengasdengklok", "rengas dengklok"],
    modelAnswer: "Rengasdengklok",
    materi: "Sejarah – Proklamasi", tujuanPembelajaran: "Menyebutkan tempat peristiwa Rengasdengklok", levelKognitif: "C1"
  },
  {
    id: "ipas-is-6", type: "IS", number: 55,
    question: "Organisasi pergerakan nasional pertama di Indonesia yang didirikan pada 20 Mei 1908 adalah ...",
    acceptedAnswers: ["budi utomo", "budi oetomo"],
    modelAnswer: "Budi Utomo",
    materi: "Sejarah – Pergerakan Nasional", tujuanPembelajaran: "Menyebutkan organisasi pergerakan nasional pertama", levelKognitif: "C1"
  },

  // BAB 3 & 4 – Geografi & Hubungan Antarnegara
  {
    id: "ipas-is-7", type: "IS", number: 56,
    question: "Pegunungan yang menjadi batas alam antara Benua Eropa dan Benua Asia adalah Pegunungan ...",
    acceptedAnswers: ["ural", "pegunungan ural"],
    modelAnswer: "Ural",
    materi: "Geografi – Benua", tujuanPembelajaran: "Menyebutkan batas alam antara Eropa dan Asia", levelKognitif: "C1"
  },
  {
    id: "ipas-is-8", type: "IS", number: 57,
    question: "Kegiatan menjual barang/jasa dari dalam negeri ke luar negeri disebut ..., sedangkan membeli barang dari luar negeri disebut ...",
    acceptedAnswers: ["ekspor dan impor", "ekspor, impor"],
    modelAnswer: "Ekspor (menjual ke luar negeri) dan Impor (membeli dari luar negeri)",
    materi: "Hubungan Antarnegara – Perdagangan", tujuanPembelajaran: "Membedakan kegiatan ekspor dan impor", levelKognitif: "C2"
  },
  {
    id: "ipas-is-9", type: "IS", number: 58,
    question: "Batik dan Angklung telah diakui UNESCO sebagai warisan budaya takbenda Indonesia. Nama lembaga dunia yang memberikan pengakuan tersebut adalah ...",
    acceptedAnswers: ["unesco", "UNESCO"],
    modelAnswer: "UNESCO (United Nations Educational, Scientific and Cultural Organization)",
    materi: "Hubungan Antarnegara – Warisan Budaya", tujuanPembelajaran: "Menyebutkan lembaga internasional yang mengakui warisan budaya", levelKognitif: "C1"
  },

  // BAB 5 – Tata Surya
  {
    id: "ipas-is-10", type: "IS", number: 59,
    question: "Planet terbesar dalam tata surya kita dengan lebih dari 79 satelit adalah planet ...",
    acceptedAnswers: ["jupiter", "yupiter"],
    modelAnswer: "Jupiter",
    materi: "Tata Surya – Planet", tujuanPembelajaran: "Menyebutkan planet terbesar dalam tata surya", levelKognitif: "C1"
  },
  {
    id: "ipas-is-11", type: "IS", number: 60,
    question: "Perputaran Bumi pada porosnya yang menyebabkan terjadinya siang dan malam disebut ...",
    acceptedAnswers: ["rotasi", "rotasi bumi"],
    modelAnswer: "Rotasi Bumi",
    materi: "Tata Surya – Rotasi", tujuanPembelajaran: "Menyebutkan nama gerak rotasi Bumi", levelKognitif: "C1"
  },
  {
    id: "ipas-is-12", type: "IS", number: 61,
    question: "Benda langit yang tersusun dari es, debu, dan batuan, serta memiliki ekor panjang saat mendekati Matahari disebut ...",
    acceptedAnswers: ["komet", "bintang berekor"],
    modelAnswer: "Komet",
    materi: "Tata Surya – Benda Langit", tujuanPembelajaran: "Menyebutkan ciri-ciri komet", levelKognitif: "C1"
  },

  // BAB 6 & 7 – Energi & Lingkungan
  {
    id: "ipas-is-13", type: "IS", number: 62,
    question: "Energi yang berasal dari panas dalam Bumi dan dimanfaatkan dengan cara mengebor ke dalam tanah untuk mengambil uap panasnya disebut energi ...",
    acceptedAnswers: ["panas bumi", "geotermal", "geothermal"],
    modelAnswer: "Panas bumi (Geotermal)",
    materi: "Energi – Terbarukan", tujuanPembelajaran: "Menyebutkan jenis energi terbarukan", levelKognitif: "C1"
  },
  {
    id: "ipas-is-14", type: "IS", number: 63,
    question: "Penanaman kembali pohon-pohon di hutan yang telah gundul disebut ...",
    acceptedAnswers: ["reboisasi", "penghijauan kembali"],
    modelAnswer: "Reboisasi",
    materi: "Lingkungan – Pelestarian", tujuanPembelajaran: "Menyebutkan upaya pelestarian hutan", levelKognitif: "C1"
  },
  {
    id: "ipas-is-15", type: "IS", number: 64,
    question: "Program pengelolaan sampah yang terdiri dari mengurangi (Reduce), memakai ulang (Reuse), dan mendaur ulang (Recycle) disingkat ...",
    acceptedAnswers: ["3r", "3R", "reduce reuse recycle"],
    modelAnswer: "3R (Reduce, Reuse, Recycle)",
    materi: "Lingkungan – Pengelolaan Sampah", tujuanPembelajaran: "Menyebutkan program pengelolaan sampah", levelKognitif: "C1"
  },
];

const ut: UTQuestion[] = [
  // BAB 1 – Sistem Gerak
  {
    id: "ipas-ut-1", type: "UT", number: 65,
    question: "Jelaskan perbedaan antara otot lurik, otot polos, dan otot jantung! Sertakan:\na) Lokasi di tubuh\nb) Cara kerja (sadar/tidak sadar)\nc) Satu contoh penyakit/gangguan yang menyerang masing-masing otot",
    modelAnswer: "Otot Lurik:\na) Lokasi: menempel pada rangka/tulang (lengan, kaki, wajah)\nb) Cara kerja: sadar (dapat dikendalikan kemauan)\nc) Contoh gangguan: kram otot (kontraksi mendadak), atrofi otot (mengecil akibat tidak digunakan)\n\nOtot Polos:\na) Lokasi: organ dalam (lambung, usus, pembuluh darah)\nb) Cara kerja: tidak sadar (bekerja otomatis)\nc) Contoh gangguan: kram perut (lambung dan usus berkontraksi tidak normal)\n\nOtot Jantung:\na) Lokasi: hanya di jantung\nb) Cara kerja: tidak sadar, bekerja terus menerus tanpa lelah\nc) Contoh gangguan: serangan jantung (otot jantung kekurangan pasokan darah)",
    keyPoints: ["Lokasi ketiga otot disebutkan", "Cara kerja (sadar/tidak) dijelaskan", "Contoh gangguan masing-masing disebutkan"],
    materi: "Sistem Gerak – Otot", tujuanPembelajaran: "Membandingkan jenis-jenis otot manusia", levelKognitif: "C4"
  },
  // BAB 2 – Sejarah
  {
    id: "ipas-ut-2", type: "UT", number: 66,
    question: "Perlawanan rakyat Indonesia sebelum 1908 seringkali gagal mengusir penjajah, namun setelah lahirnya organisasi pergerakan nasional, perjuangan mulai berhasil.\n\nAnalisis:\na) Sebutkan 3 faktor utama kegagalan perlawanan rakyat sebelum 1908\nb) Jelaskan bagaimana pergerakan nasional (setelah Budi Utomo 1908) mengubah strategi perjuangan\nc) Pelajaran apa yang bisa diambil dari perjuangan ini untuk kehidupan kita hari ini?",
    modelAnswer: "a) 3 Faktor kegagalan sebelum 1908:\n1. Perlawanan bersifat kedaerahan/lokal, tidak terkoordinasi secara nasional\n2. Belanda menerapkan politik devide et impera (adu domba) untuk memecah belah rakyat\n3. Perbedaan persenjataan sangat jauh: rakyat dengan senjata tradisional vs. Belanda dengan senjata modern\n\nb) Perubahan strategi setelah 1908:\n- Perjuangan beralih dari senjata ke pendidikan, kesadaran nasional, dan organisasi modern\n- Muncul pemimpin nasional yang menyatukan berbagai kelompok melampaui batas suku\n- Sumpah Pemuda 1928 menegaskan identitas nasional: satu tanah air, bangsa, dan bahasa\n\nc) Pelajaran untuk hari ini:\n- Persatuan jauh lebih kuat daripada perjuangan sendiri-sendiri\n- Pendidikan adalah senjata utama untuk kemajuan bangsa\n- Perbedaan latar belakang tidak menghalangi kerja sama demi tujuan bersama",
    keyPoints: ["3 faktor kegagalan disebutkan dengan jelas", "Perubahan strategi pergerakan nasional dijelaskan", "Pelajaran relevan untuk masa kini"],
    materi: "Sejarah – Perlawanan dan Pergerakan Nasional", tujuanPembelajaran: "Menganalisis perubahan strategi perjuangan bangsa Indonesia", levelKognitif: "C4"
  },
  // BAB 3 & 4 – Geografi & Globalisasi
  {
    id: "ipas-ut-3", type: "UT", number: 67,
    question: "Bandingkan kondisi geografis dua negara: Swiss (Eropa – dikitari Pegunungan Alpen) dan Belanda (Eropa – dataran rendah di bawah permukaan laut).\n\nJelaskan:\na) Karakteristik geografis utama masing-masing negara\nb) Bagaimana kondisi geografis memengaruhi mata pencaharian utama penduduk\nc) Apa tantangan utama yang dihadapi masing-masing negara akibat kondisi geografisnya",
    modelAnswer: "Swiss:\na) Geografis: dikelilingi Pegunungan Alpen yang sangat tinggi, tidak memiliki akses langsung ke laut\nb) Mata pencaharian: pariwisata pegunungan (ski, hiking), perbankan internasional, industri jam tangan dan cokelat presisi, peternakan sapi perah\nc) Tantangan: lahan pertanian terbatas karena topografi bergunung-gunung, harus mengimpor banyak bahan pangan\n\nBelanda:\na) Geografis: sebagian besar wilayah di bawah permukaan laut, harus dikelola dengan sistem tanggul (dike) dan pompa air canggih\nb) Mata pencaharian: pertanian intensif (bunga tulip, keju Gouda), perdagangan internasional (Pelabuhan Rotterdam terbesar Eropa), industri pengolahan air\nc) Tantangan: ancaman banjir dan naiknya permukaan laut akibat perubahan iklim",
    keyPoints: ["Karakteristik geografis kedua negara dijelaskan", "Hubungan geografis dengan mata pencaharian dianalisis", "Tantangan masing-masing negara disebutkan"],
    materi: "Geografi – Kondisi Geografis Negara", tujuanPembelajaran: "Menganalisis hubungan geografis dengan kehidupan penduduk", levelKognitif: "C4"
  },
  // BAB 4 – Globalisasi
  {
    id: "ipas-ut-4", type: "UT", number: 68,
    question: "Globalisasi membawa dampak positif sekaligus negatif bagi Indonesia, terutama di bidang budaya.\n\nBuatlah analisis:\na) Sebutkan 2 dampak positif globalisasi di bidang budaya bagi Indonesia\nb) Sebutkan 2 dampak negatif globalisasi di bidang budaya\nc) Bagaimana sikap yang sebaiknya dimiliki generasi muda Indonesia dalam menghadapi globalisasi? Berikan alasanmu!",
    modelAnswer: "a) Dampak positif globalisasi budaya:\n1. Indonesia dapat memperkenalkan budaya lokal (batik, wayang, gamelan) ke dunia internasional melalui internet dan media sosial, meningkatkan citra bangsa\n2. Indonesia mendapat akses ke teknologi dan ilmu pengetahuan dari negara-negara maju yang mempercepat pembangunan\n\nb) Dampak negatif globalisasi budaya:\n1. Generasi muda lebih mengenal budaya asing (K-pop, Hollywood) daripada budaya daerah sendiri, mengancam kelestarian budaya lokal\n2. Masuknya gaya hidup konsumtif dan individualistik dari budaya Barat yang bertentangan dengan nilai gotong royong dan kebersamaan masyarakat Indonesia\n\nc) Sikap yang sebaiknya dimiliki:\nSikap selektif dan adaptif: menerima pengaruh positif globalisasi (teknologi, inovasi, keterbukaan) sambil tetap mempertahankan dan bangga dengan identitas budaya lokal. Prinsip: 'saringlah yang baik, pertahankan yang asli Indonesia.' Caranya: aktif belajar dan mempraktikkan seni budaya daerah, menggunakan produk lokal, dan menjadi duta budaya Indonesia di era digital.",
    keyPoints: ["2 dampak positif globalisasi budaya disebutkan", "2 dampak negatif disebutkan", "Sikap menghadapi globalisasi dijelaskan dengan alasan"],
    materi: "Hubungan Antarnegara – Globalisasi", tujuanPembelajaran: "Mengevaluasi dampak globalisasi dan merumuskan sikap yang tepat", levelKognitif: "C5"
  },
  // BAB 5 – Tata Surya
  {
    id: "ipas-ut-5", type: "UT", number: 69,
    question: "Jelaskan perbedaan antara ROTASI dan REVOLUSI Bumi!\n\nSertakan dalam jawabanmu:\na) Definisi masing-masing\nb) Waktu yang dibutuhkan\nc) Akibat atau dampak yang ditimbulkan dalam kehidupan kita sehari-hari",
    modelAnswer: "Rotasi Bumi:\na) Definisi: perputaran Bumi pada porosnya (sumbu imaginer dari kutub utara ke kutub selatan)\nb) Waktu: ±24 jam (1 hari)\nc) Akibat: (1) Terjadinya siang dan malam bergantian – bagian Bumi yang menghadap Matahari siang, yang membelakangi malam; (2) Perbedaan waktu antara kota-kota di belahan Bumi berbeda (WIB, WITA, WIT di Indonesia)\n\nRevolusi Bumi:\na) Definisi: peredaran Bumi mengelilingi Matahari dalam orbitnya\nb) Waktu: ±365¼ hari (1 tahun)\nc) Akibat: (1) Pergantian musim (di negara empat musim: semi, panas, gugur, dingin); (2) Dasar pembuatan kalender masehi (1 tahun = 365 hari, 4 tahun sekali ada tahun kapur = 366 hari karena ¼ hari dikumpulkan)\n\nIndonesia hanya memiliki dua musim (hujan dan kemarau) karena terletak di garis khatulistiwa.",
    keyPoints: ["Definisi rotasi dan revolusi jelas", "Waktu yang dibutuhkan disebutkan", "Akibat masing-masing minimal 2 dampak"],
    materi: "Tata Surya – Rotasi dan Revolusi", tujuanPembelajaran: "Membedakan rotasi dan revolusi Bumi beserta dampaknya", levelKognitif: "C4"
  },
  // BAB 5 – Tata Surya (HOTS)
  {
    id: "ipas-ut-6", type: "UT", number: 70,
    question: "Perhatikan data planet-planet berikut:\n• Merkurius: terdekat ke Matahari, hampir tidak punya atmosfer, suhu siang +430°C / malam -180°C\n• Venus: nomor 2 dari Matahari, atmosfer tebal CO₂, suhu rata-rata +465°C\n• Mars: nomor 4, atmosfer tipis CO₂, suhu rata-rata -60°C, ada bukti air beku\n\nBerdasarkan data tersebut, analisislah:\na) Mengapa Venus lebih panas dari Merkurius meski Merkurius lebih dekat ke Matahari?\nb) Mengapa suhu Merkurius sangat ekstrem (siang sangat panas, malam sangat dingin)?\nc) Para ilmuwan sedang meneliti apakah Mars bisa dihuni manusia di masa depan. Berdasarkan data di atas, apa tantangan terbesar yang harus diatasi?",
    modelAnswer: "a) Venus lebih panas dari Merkurius karena efek rumah kaca ekstrem: atmosfer Venus yang sangat tebal mengandung 96% CO₂, gas yang sangat efektif memerangkap panas. Panas dari Matahari masuk ke Venus tetapi tidak bisa keluar karena terhalang atmosfer tebal ini. Merkurius yang hampir tidak punya atmosfer tidak bisa menyimpan panas.\n\nb) Suhu Merkurius sangat ekstrem karena hampir tidak memiliki atmosfer yang berfungsi sebagai 'selimut': saat menghadap Matahari, tidak ada apa pun yang memantulkan atau menyerap panas sehingga sangat panas. Saat membelakangi Matahari, tidak ada atmosfer yang menahan panas sehingga langsung sangat dingin.\n\nc) Tantangan terbesar menghuni Mars:\n1. Atmosfer tipis dan kurangnya oksigen – manusia tidak bisa bernapas langsung\n2. Suhu rata-rata -60°C sangat dingin untuk kehidupan manusia normal\n3. Radiasi kosmik tinggi karena tidak ada medan magnet dan atmosfer pelindung\n4. Harus membawa atau memproduksi air dan makanan sendiri (meski ada es di kutub Mars)",
    keyPoints: ["Penjelasan efek rumah kaca Venus benar", "Alasan suhu ekstrem Merkurius karena ketiadaan atmosfer", "Minimal 3 tantangan menghuni Mars disebutkan"],
    materi: "Tata Surya – Karakteristik Planet", tujuanPembelajaran: "Menganalisis karakteristik planet berdasarkan data", levelKognitif: "C4"
  },
  // BAB 6 – Energi
  {
    id: "ipas-ut-7", type: "UT", number: 71,
    question: "Indonesia sangat bergantung pada bahan bakar fosil (batu bara, minyak bumi) untuk pembangkit listrik. Namun, para ahli memperingatkan bahwa cadangan fosil Indonesia semakin menipis dan penggunaannya merusak lingkungan.\n\nBuatlah rencana transisi energi untuk Indonesia:\na) Sebutkan 3 potensi energi terbarukan yang dimiliki Indonesia beserta alasannya\nb) Jelaskan satu tantangan utama dalam peralihan ke energi terbarukan\nc) Apa peran yang bisa kamu lakukan sebagai pelajar SD dalam mendukung transisi energi ini?",
    modelAnswer: "a) 3 Potensi energi terbarukan Indonesia:\n1. Energi panas bumi (geotermal): Indonesia memiliki 40% cadangan panas bumi dunia karena berada di Cincin Api Pasifik dengan 127 gunung berapi aktif\n2. Energi surya (matahari): Indonesia berada di garis khatulistiwa mendapat sinar matahari sepanjang tahun ±12 jam/hari\n3. Energi air (hidro): Indonesia memiliki banyak sungai deras seperti di Kalimantan dan Papua yang cocok untuk PLTA (Pembangkit Listrik Tenaga Air)\n\nb) Tantangan utama:\nBiaya investasi awal yang sangat tinggi untuk membangun infrastruktur energi terbarukan (panel surya, turbin angin, PLTA) sehingga butuh waktu lama untuk balik modal. Selain itu, teknologinya masih harus banyak diimpor dari luar negeri.\n\nc) Peran pelajar SD:\n- Menghemat listrik di rumah: mematikan lampu dan elektronik yang tidak digunakan\n- Menggunakan kendaraan sepeda atau berjalan kaki untuk jarak dekat\n- Mengurangi plastik sekali pakai (produksi plastik membutuhkan energi fosil)\n- Menanam pohon karena pohon menyerap CO₂ hasil pembakaran fosil",
    keyPoints: ["3 potensi energi terbarukan Indonesia dengan alasan", "Tantangan transisi energi dijelaskan", "Peran pelajar SD yang konkret dan realistis"],
    materi: "Energi – Terbarukan", tujuanPembelajaran: "Merancang solusi transisi energi berbasis potensi lokal", levelKognitif: "C5"
  },
  // BAB 7 – Lingkungan
  {
    id: "ipas-ut-8", type: "UT", number: 72,
    question: "Seorang ilmuwan lingkungan menyatakan: 'Manusia adalah ancaman terbesar bagi kelestarian Bumi.'\n\nEvaluasi pernyataan tersebut dengan:\na) Berikan 3 bukti konkret aktivitas manusia yang merusak lingkungan Bumi\nb) Berikan 1 contoh aktivitas manusia yang justru memperbaiki lingkungan\nc) Apakah kamu setuju dengan pernyataan ilmuwan tersebut? Tuliskan argumentasimu!",
    modelAnswer: "a) 3 Bukti aktivitas manusia merusak lingkungan:\n1. Deforestasi masif: pembabatan hutan tropis di Kalimantan dan Sumatera untuk perkebunan sawit menyebabkan hilangnya habitat orangutan, banjir, dan emisi karbon besar\n2. Pencemaran plastik: jutaan ton sampah plastik masuk ke laut setiap tahun, membunuh hewan laut dan memasuki rantai makanan\n3. Pembakaran bahan bakar fosil: emisi CO₂ dan gas rumah kaca dari kendaraan dan industri menyebabkan pemanasan global dan perubahan iklim\n\nb) Aktivitas manusia yang memperbaiki lingkungan:\nProgram reboisasi seperti 'One Man One Tree' di Indonesia dan proyek restorasi terumbu karang di Raja Ampat yang melibatkan komunitas lokal untuk memulihkan ekosistem yang rusak.\n\nc) Argumentasi:\n[Setuju] Saya setuju, karena tidak ada spesies lain di Bumi yang mengubah lingkungan secara masif dan global seperti manusia. Manusia telah menghabiskan sumber daya yang terbentuk jutaan tahun hanya dalam beberapa ratus tahun. Namun, manusia juga satu-satunya spesies yang memiliki kemampuan untuk menyadari kerusakan ini dan mengambil tindakan perbaikan. Maka tantangan terbesar adalah mengubah perilaku dan sistem ekonomi manusia sebelum kerusakan melampaui titik yang tidak bisa dipulihkan.",
    keyPoints: ["3 bukti kerusakan lingkungan oleh manusia", "1 contoh perbaikan lingkungan oleh manusia", "Argumentasi setuju/tidak dengan dasar yang kuat"],
    materi: "Lingkungan – Aktivitas Manusia", tujuanPembelajaran: "Mengevaluasi dampak aktivitas manusia terhadap lingkungan", levelKognitif: "C5"
  },
  // Lintas Bab – HOTS
  {
    id: "ipas-ut-9", type: "UT", number: 73,
    question: "Integrasikan pemahamanmu tentang SEJARAH dan LINGKUNGAN:\n\nPada masa penjajahan Belanda, hutan-hutan di Jawa dibabat besar-besaran untuk perkebunan tebu dan kopi dalam sistem tanam paksa. \n\na) Jelaskan dampak lingkungan yang kemungkinan terjadi saat itu\nb) Apakah ada kaitan antara kerusakan lingkungan era kolonial dengan masalah lingkungan Jakarta (banjir, kekeringan) saat ini? Jelaskan!\nc) Apa yang bisa dipelajari dari sejarah ini untuk kebijakan lingkungan Indonesia ke depan?",
    modelAnswer: "a) Dampak lingkungan masa tanam paksa:\n- Pembabatan hutan Jawa besar-besaran menyebabkan erosi tanah, berkurangnya daerah resapan air, dan kepunahan spesies hewan dan tumbuhan endemik Jawa\n- Perkebunan monokultur (satu jenis tanaman) merusak keanekaragaman hayati tanah\n- Eksploitasi berlebihan menyebabkan lahan pertanian rakyat menjadi kurang subur\n\nb) Kaitan dengan masalah Jakarta masa kini:\nYa, ada kaitan historis. Berkurangnya tutupan hutan di Jawa (termasuk di hulu-hulu sungai yang mengalir ke Jakarta seperti Ciliwung) sejak era kolonial hingga kini terus berlanjut. Tanpa hutan yang cukup di dataran tinggi Bogor-Puncak, air hujan tidak terserap melainkan langsung mengalir ke sungai dalam jumlah besar sehingga banjir di Jakarta sulit dihindari.\n\nc) Pelajaran untuk kebijakan Indonesia:\n- Tidak boleh mengorbankan lingkungan demi keuntungan ekonomi jangka pendek\n- Hutan harus dilindungi sebagai 'infrastruktur alam' yang menopang kehidupan jutaan orang di hilir\n- Kebijakan pembangunan harus berprinsip keberlanjutan: memenuhi kebutuhan generasi sekarang tanpa mengorbankan kemampuan generasi mendatang",
    keyPoints: ["Dampak lingkungan tanam paksa dijelaskan", "Kaitan historis dengan masalah Jakarta sekarang", "Pelajaran untuk kebijakan masa depan"],
    materi: "Lintas Bab – Sejarah dan Lingkungan", tujuanPembelajaran: "Mengintegrasikan pemahaman sejarah dan lingkungan", levelKognitif: "C5"
  },
  {
    id: "ipas-ut-10", type: "UT", number: 74,
    question: "Rancang sebuah proyek sains sederhana untuk membuktikan bahwa CAHAYA MATAHARI (energi surya) dapat digunakan sebagai sumber energi!\n\nProyekmu harus mencakup:\na) Judul proyek dan tujuan\nb) Alat dan bahan yang dibutuhkan (minimal 4)\nc) Langkah-langkah pelaksanaan (minimal 4 langkah)\nd) Hasil yang diharapkan dan hubungannya dengan konsep energi terbarukan",
    modelAnswer: "a) Judul: 'Memasak dengan Kompor Tenaga Surya Sederhana'\nTujuan: Membuktikan bahwa energi matahari dapat diubah menjadi energi panas untuk memanaskan air atau makanan\n\nb) Alat dan bahan:\n1. Kardus bekas berukuran sedang\n2. Kertas aluminium foil\n3. Plastik transparan (wrap atau kantong plastik bening)\n4. Lakban/isolasi hitam\n5. Gelas berisi air\n6. Termometer\n\nc) Langkah-langkah:\n1. Lapisi bagian dalam kardus dengan aluminium foil (sisi mengkilap ke dalam) untuk memantulkan sinar matahari\n2. Buat sudut kemiringan di salah satu sisi kardus untuk mengarahkan cahaya ke titik fokus\n3. Letakkan gelas berisi air di titik fokus pantulan cahaya\n4. Tutup bagian atas dengan plastik transparan untuk memerangkap panas (efek rumah kaca miniatur)\n5. Arahkan kompor ke Matahari dan tunggu 30-60 menit\n6. Ukur suhu air sebelum dan sesudah menggunakan termometer\n\nd) Hasil yang diharapkan:\nSuhu air meningkat secara signifikan (bisa mencapai 60-80°C pada hari cerah). Ini membuktikan bahwa energi surya (cahaya matahari) dapat diubah menjadi energi panas – prinsip yang sama digunakan panel surya dan kolektor surya termal skala besar. Ini relevan dengan konsep energi terbarukan karena matahari adalah sumber energi yang tidak akan habis dalam skala kehidupan manusia.",
    keyPoints: ["Judul dan tujuan proyek jelas", "Minimal 4 alat/bahan disebutkan", "Minimal 4 langkah percobaan", "Hasil dihubungkan dengan konsep energi terbarukan"],
    materi: "Energi – Proyek Sains", tujuanPembelajaran: "Merancang proyek sains untuk membuktikan pemanfaatan energi surya", levelKognitif: "C5"
  },
];

export const ipasBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    // Sesi 1: Dasar – Bab 1, 2, 5 (C1-C2)
    { pg: [0,1,2,4,5,6,7,8,9,10,11,12,14,16,17,18,19,20,27,29,30,33,34,36,38], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    // Sesi 2: Menengah – Bab 1-5 campur (C2-C3)
    { pg: [0,2,3,5,6,8,9,11,12,13,14,15,16,17,18,21,22,23,24,25,27,28,31,32,33], is: [1,2,3,4,5,6,7,8,9,10], ut: [0,1,2,4,5] },
    // Sesi 3: Menengah-Tinggi – Bab 3-7 (C3-C4)
    { pg: [3,4,6,7,9,10,13,14,15,19,20,21,22,23,24,25,28,31,32,35,37,38,40,42,45], is: [2,3,4,5,6,7,8,9,10,11], ut: [1,2,3,4,5] },
    // Sesi 4: Tinggi – semua bab HOTS (C4-C5)
    { pg: [3,4,7,9,10,13,14,15,19,20,22,23,24,25,26,28,31,32,35,37,39,40,41,42,43], is: [3,4,5,6,7,8,9,10,11,12], ut: [2,3,4,5,6] },
    // Sesi 5: Paling Sulit – HOTS + lintas bab (C4-C5 dominan)
    { pg: [3,4,7,10,13,14,15,19,20,22,23,24,25,26,28,31,35,37,38,39,40,42,43,45,46], is: [5,6,7,8,9,10,11,12,13,14], ut: [3,4,5,6,7,8,9] },
  ],
};
