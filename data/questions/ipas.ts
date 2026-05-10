import { SubjectQuestionBank } from "@/lib/types";

const BASE = "/images/ipas";

export const ipasQuestions: SubjectQuestionBank = {
  pg: [
    // 1 - otot bergaris (gambar image13.png = otot lurik)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: jenis otot pada tubuh manusia]\nJenis otot yang ada pada gambar tersebut merupakan otot .....",
      imageUrl: `${BASE}/image13.png`,
      options: ["Polos", "Lurik", "Jantung", "Sekunder"],
      correctAnswer: 1,
      materi: "Sistem Gerak",
      subMateri: "Jenis Otot",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi jenis-jenis otot pada tubuh manusia",
      levelKognitif: "C2",
    },
    // 2 - sendi bahu (gambar image7.jpg = sendi bahu ball and socket)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: sendi pada tubuh manusia]\nBerdasarkan gambar, sendi tersebut dapat bergerak ke ....",
      imageUrl: `${BASE}/image7.jpg`,
      options: ["Satu arah", "Dua arah", "Semua arah", "Ke segala arah"],
      correctAnswer: 3,
      materi: "Sistem Gerak",
      subMateri: "Jenis Sendi",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi jenis-jenis sendi pada tubuh manusia",
      levelKognitif: "C2",
    },
    // 3 - fungsi rangka
    {
      question: "Baca pernyataan berikut!\n1) Menopang tubuh agar tegak\n2) Menjadi tempat melekatnya otot\n3) Membantu otot dalam menghasilkan gerakan\n4) Menyambungkan tulang yang satu dengan tulang lainnya\n\nSiswa kelas VI mempelajari tentang alat gerak pada manusia. Mereka mengenal bahwa terdapat rangka dalam tubuh manusia. Fungsi rangka tersebut ditunjukkan oleh pernyataan nomor .....",
      options: ["1 dan 2", "1 dan 4", "2 dan 3", "3 dan 4"],
      correctAnswer: 0,
      materi: "Sistem Gerak",
      subMateri: "Fungsi Rangka",
      tujuanPembelajaran: "Siswa dapat menjelaskan fungsi rangka pada tubuh manusia",
      levelKognitif: "C2",
    },
    // 4 - gerak refleks
    {
      question: "Ketika Rani tanpa sengaja menyentuh setrika yang masih panas, ia langsung menarik tangannya tanpa berpikir panjang. Peristiwa tersebut disebut gerak refleks yang dikendalikan oleh .........",
      options: ["Otak", "Sumsum tulang dada", "Sumsum tulang belakang", "Sel-sel saraf"],
      correctAnswer: 2,
      materi: "Sistem Saraf",
      subMateri: "Gerak Refleks",
      tujuanPembelajaran: "Siswa dapat menjelaskan mekanisme gerak refleks",
      levelKognitif: "C2",
    },
    // 5 - fungsi sistem saraf
    {
      question: "Saat membantu gurunya, Andi dan Dira mengangkat kursi bersama-sama. Ketika kursi tersenggol, kaki Andi merasa nyeri. Hal itu dapat terjadi karena sistem saraf memiliki fungsi untuk.....",
      options: ["Menerima rangsangan", "Mengatur organ-organ tubuh", "Mengendalikan rangsangan", "Memberi reaksi terhadap rangsangan"],
      correctAnswer: 0,
      materi: "Sistem Saraf",
      subMateri: "Fungsi Sistem Saraf",
      tujuanPembelajaran: "Siswa dapat menjelaskan fungsi sistem saraf",
      levelKognitif: "C2",
    },
    // 6 - sumsum tulang belakang (gambar image10.jpg + image15.png = anatomi tulang belakang)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: anatomi tulang belakang dengan tanda X]\nBagian yang ditunjuk tanda X pada gambar adalah .....",
      imageUrl: `${BASE}/image10.jpg`,
      options: ["Otak", "Sumsum tulang dada", "Sumsum tulang rusuk", "Sumsum tulang belakang"],
      correctAnswer: 3,
      materi: "Sistem Saraf",
      subMateri: "Anatomi Sistem Saraf",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi bagian-bagian sistem saraf",
      levelKognitif: "C2",
    },
    // 7 - posisi duduk yang benar (gambar image15.png)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: beberapa posisi duduk]\nPosisi duduk yang benar untuk menghindari kelainan tulang belakang ditunjukkan oleh gambar nomor .....",
      imageUrl: `${BASE}/image15.png`,
      options: ["1", "2", "3", "4"],
      correctAnswer: 2,
      materi: "Sistem Gerak",
      subMateri: "Kelainan Tulang",
      tujuanPembelajaran: "Siswa dapat menerapkan cara menjaga kesehatan sistem gerak",
      levelKognitif: "C3",
    },
    // 8 - alzheimer
    {
      question: "Perhatikan ciri-ciri gangguan pada sistem saraf berikut!\n1) Daya ingat semakin menurun.\n2) Saat kambuh tidak mampu memberikan respons terhadap rangsangan.\n3) Mengalami kesulitan mengendalikan gerakan tubuh, tersedak ketika minum, serta sulit berbicara jelas.\n4) Tidak lagi mampu melakukan kegiatan sehari-hari, misalnya membaca, menulis, maupun berbicara.\n\nCiri-ciri penderita alzheimer ditunjukkan oleh angka .....",
      options: ["1) dan 3)", "1) dan 4)", "2) dan 3)", "2) dan 4)"],
      correctAnswer: 1,
      materi: "Sistem Saraf",
      subMateri: "Gangguan Sistem Saraf",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi gangguan pada sistem saraf",
      levelKognitif: "C2",
    },
    // 9 - kalsium
    {
      question: "Setiap pagi Sinta selalu minum segelas susu dan suka makan ikan teri yang kaya akan mineral. Kebiasaan itu baik dilakukan untuk menjaga kesehatan tulang karena kandungan mineral yang paling banyak terdapat pada susu dan ikan teri adalah .....",
      options: ["Natrium", "Karbohidrat", "Kalsium", "Vitamin C"],
      correctAnswer: 2,
      materi: "Sistem Gerak",
      subMateri: "Kesehatan Tulang",
      tujuanPembelajaran: "Siswa dapat menjelaskan cara menjaga kesehatan tulang",
      levelKognitif: "C2",
    },
    // 10 - urutan kedatangan bangsa Eropa
    {
      question: "Perhatikan bangsa-bangsa berikut!\n1. Belanda\n2. Inggris\n3. Portugis\n4. Spanyol\n\nTerdapat beberapa bangsa dari Benua Eropa yang melakukan petualangan, pelayaran, dan penjelajahan samudra hingga sampai ke Indonesia. Urutan kedatangan bangsa-bangsa Eropa tersebut ke Indonesia yang tepat adalah .....",
      options: ["3, 4, 1, 2", "3, 4, 2, 1", "4, 3, 1, 2", "4, 3, 2, 1"],
      correctAnswer: 0,
      materi: "Sejarah Indonesia",
      subMateri: "Kedatangan Bangsa Eropa",
      tujuanPembelajaran: "Siswa dapat mengurutkan kedatangan bangsa Eropa ke Indonesia",
      levelKognitif: "C1",
    },
    // 11 - tokoh/peta (gambar image18.png = peta/tokoh Portugis di Malaka)
    {
      question: "Perhatikan gambar di bawah!\n[Gambar: peta pelayaran bangsa Eropa ke Asia]\nBerdasarkan gambar, bangsa Eropa yang pertama kali datang ke wilayah yang ditunjukkan pada peta adalah .....",
      imageUrl: `${BASE}/image18.png`,
      options: ["Belanda", "Portugis", "Inggris", "Spanyol"],
      correctAnswer: 1,
      materi: "Sejarah Indonesia",
      subMateri: "Kedatangan Bangsa Eropa",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi bangsa Eropa yang pertama datang ke Indonesia",
      levelKognitif: "C2",
    },
    // 12 - arti glory
    {
      question: "Salah satu motif kedatangan bangsa Eropa ke Indonesia adalah glory. Yang dimaksud dengan glory adalah .........",
      options: [
        "Mencari kekayaan berupa emas, perak, dan rempah-rempah",
        "Meraih kekuasaan serta kejayaan",
        "Melaksanakan misi suci dan menyebarkan agama",
        "Menguasai jalur perdagangan rempah-rempah"
      ],
      correctAnswer: 1,
      materi: "Sejarah Indonesia",
      subMateri: "Motif Kedatangan Bangsa Eropa",
      tujuanPembelajaran: "Siswa dapat menjelaskan motif kedatangan bangsa Eropa ke Indonesia",
      levelKognitif: "C1",
    },
    // 13 - perlawanan kedaerahan
    {
      question: "Ciri perlawanan bangsa Indonesia terhadap penjajahan Eropa masih bersifat kedaerahan. Pengaruh ciri perlawanan tersebut bagi bangsa Indonesia adalah .....",
      options: [
        "Mendorong terbentuknya kesatuan dan solidaritas antarwilayah",
        "Menyebabkan perlawanan tidak terkoordinasi dan mudah diserang",
        "Membuat perjuangan lebih efektif karena fokus pada kondisi lokal",
        "Membuat perjuangan kurang efektif karena fokus pada daerah masing-masing"
      ],
      correctAnswer: 1,
      materi: "Sejarah Indonesia",
      subMateri: "Perlawanan terhadap Penjajah",
      tujuanPembelajaran: "Siswa dapat menganalisis dampak sifat perlawanan kedaerahan",
      levelKognitif: "C4",
    },
    // 14 - tokoh Perang Jawa (gambar image14.jpg = Pangeran Diponegoro)
    {
      question: "Perhatikan gambar di bawah!\n[Gambar: tokoh-tokoh pahlawan Indonesia]\nTokoh yang memimpin Perang Jawa melawan Belanda ditunjukkan oleh gambar nomor .....",
      imageUrl: `${BASE}/image14.jpg`,
      options: ["1", "2", "3", "4"],
      correctAnswer: 0,
      materi: "Sejarah Indonesia",
      subMateri: "Perlawanan terhadap Penjajah",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi tokoh-tokoh pahlawan Indonesia",
      levelKognitif: "C1",
    },
    // 15 - romusha (gambar image9.jpg = kerja paksa/romusha)
    {
      question: "Pada masa pendudukan Jepang, banyak rakyat Indonesia dipaksa kerja membangun jalan, rel kereta api, dan jembatan tanpa upah. Sistem kerja paksa ini disebut .....",
      imageUrl: `${BASE}/image9.jpg`,
      options: ["Romusha", "Rodi", "Cultuurstelsel", "Kerja rodi"],
      correctAnswer: 0,
      materi: "Sejarah Indonesia",
      subMateri: "Pendudukan Jepang",
      tujuanPembelajaran: "Siswa dapat menjelaskan sistem kerja paksa pada masa pendudukan Jepang",
      levelKognitif: "C1",
    },
    // 16 - Rengasdengklok (gambar image20.jpg = peristiwa Rengasdengklok)
    {
      question: "Menjelang Proklamasi, Soekarno dan Hatta pernah dibawa ke Rengasdengklok oleh golongan pemuda. Tujuan dari tindakan pemuda tersebut adalah .....",
      imageUrl: `${BASE}/image20.jpg`,
      options: [
        "Menghindari pengaruh-pengaruh dari Belanda",
        "Perbedaan pendapat antara golongan tua dan muda",
        "Ketidakstabilan sosial dan politik di Indonesia",
        "Jepang mengingkari janji memberikan kemerdekaan"
      ],
      correctAnswer: 1,
      materi: "Sejarah Indonesia",
      subMateri: "Proklamasi Kemerdekaan",
      tujuanPembelajaran: "Siswa dapat menjelaskan peristiwa menjelang Proklamasi Kemerdekaan",
      levelKognitif: "C2",
    },
    // 17 - makna kemerdekaan
    {
      question: "Setiap tanggal 17 Agustus, bangsa Indonesia merayakan hari kemerdekaan dengan penuh semangat. Bagi rakyat Indonesia, kemerdekaan memiliki arti .....",
      options: [
        "Kebebasan menjalani kehidupan secara mutlak",
        "Menjadi negara yang paling kuat di Asia",
        "Disegani oleh negara-negara di dunia",
        "Dapat hidup dan beraktivitas tanpa rasa takut dijajah"
      ],
      correctAnswer: 3,
      materi: "Sejarah Indonesia",
      subMateri: "Makna Kemerdekaan",
      tujuanPembelajaran: "Siswa dapat menjelaskan makna kemerdekaan bagi bangsa Indonesia",
      levelKognitif: "C2",
    },
    // 18 - persatuan dan kesatuan
    {
      question: "Di kelas, Bima senang bermain bersama teman-temannya tanpa membeda-bedakan agama, suku, ataupun bahasa daerah. Sikap Bima tersebut mencerminkan upaya .....",
      options: [
        "Menumbuhkan rasa cinta kasih",
        "Menjaga persatuan dan kesatuan",
        "Menjadikan Indonesia sebagai negara maju",
        "Menentang adanya keberagaman"
      ],
      correctAnswer: 1,
      materi: "Sejarah Indonesia",
      subMateri: "Nilai Kebangsaan",
      tujuanPembelajaran: "Siswa dapat menerapkan nilai persatuan dan kesatuan dalam kehidupan sehari-hari",
      levelKognitif: "C3",
    },
    // 19 - Benua Afrika
    {
      question: "Di dunia terdapat beberapa benua dengan kondisi alam yang khas. Salah satunya adalah Benua Afrika yang sebagian besar wilayahnya memiliki karakteristik .....",
      options: [
        "Banyak hutan hujan",
        "Banyak gurun dan cenderung kering",
        "Banyak pegunungan tinggi",
        "Banyak danau besar"
      ],
      correctAnswer: 1,
      materi: "Geografi Dunia",
      subMateri: "Karakteristik Benua Afrika",
      tujuanPembelajaran: "Siswa dapat mendeskripsikan karakteristik benua-benua di dunia",
      levelKognitif: "C2",
    },
    // 20 - Benua Antartika (gambar image20.jpg sudah dipakai, pakai chartData tabel atau teks saja)
    {
      question: "Ada satu benua di dunia yang tidak dimiliki oleh negara mana pun dan hanya dijadikan pusat penelitian bersama. Benua tersebut adalah .....",
      options: ["Benua Eropa", "Benua Antartika", "Benua Australia", "Benua Amerika"],
      correctAnswer: 1,
      materi: "Geografi Dunia",
      subMateri: "Benua-benua di Dunia",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi karakteristik unik Benua Antartika",
      levelKognitif: "C1",
    },
    // 21 - Lempeng Eurasia
    {
      question: "Secara geologi, Benua Eropa dan Benua Asia berada dalam satu lempeng besar yang sama. Nama lempeng tersebut adalah .....",
      options: ["Lempeng Indo-Australia", "Lempeng Eurasia", "Lempeng Amerika", "Lempeng Pasifik"],
      correctAnswer: 1,
      materi: "Geografi Dunia",
      subMateri: "Lempeng Tektonik",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi lempeng tektonik utama di dunia",
      levelKognitif: "C1",
    },
    // 22 - alih fungsi hutan
    {
      question: "China memiliki bentang alam yang sangat bervariasi, seperti sungai, pegunungan, persawahan, dataran tinggi, dan hutan. Namun banyak kawasan hutan China telah beralih fungsi menjadi permukiman dan lahan pertanian. Faktor utama yang mendorong alih fungsi hutan tersebut adalah .....",
      options: ["Iklim dan cuaca", "Pergerakan lempeng", "Pertumbuhan penduduk", "Pemanfaatan sumber daya alam"],
      correctAnswer: 2,
      materi: "Geografi Dunia",
      subMateri: "Perubahan Lingkungan",
      tujuanPembelajaran: "Siswa dapat menganalisis faktor-faktor perubahan lingkungan",
      levelKognitif: "C4",
    },
    // 23 - kondisi geografis Indonesia
    {
      question: "Indonesia merupakan negara terluas di Asia Tenggara. Berikut ini salah satu kondisi geografis Indonesia yaitu .....",
      options: [
        "Memiliki banyak gunung merapi yang aktif",
        "Terletak di antara benua Asia dan benua Afrika",
        "Mengalami empat musim dalam setahun",
        "Memiliki banyak kawasan gurun"
      ],
      correctAnswer: 0,
      materi: "Geografi Indonesia",
      subMateri: "Kondisi Geografis Indonesia",
      tujuanPembelajaran: "Siswa dapat mendeskripsikan kondisi geografis Indonesia",
      levelKognitif: "C1",
    },
    // 24 - jalur pegunungan dan rawan gempa
    {
      question: "Jepang dan Indonesia berada di benua Asia. Benua Asia menjadi tempat bertemunya tiga jalur pegunungan besar dunia. Dampak yang ditimbulkan dari kondisi tersebut bagi negara-negara di Asia adalah .....",
      options: ["Rawan gempa", "Memiliki nikel berlimpah", "Tanah menjadi subur", "Memiliki iklim subtropis"],
      correctAnswer: 0,
      materi: "Geografi Dunia",
      subMateri: "Jalur Pegunungan",
      tujuanPembelajaran: "Siswa dapat menganalisis dampak letak geografis terhadap kondisi alam",
      levelKognitif: "C4",
    },
    // 25 - pemanfaatan potensi air
    {
      question: "Sebagian besar negara di Benua Afrika memiliki iklim kering. Di sisi lain, di Afrika banyak sungai besar seperti Sungai Nil dan Sungai Kongo yang membawa banyak air. Bentuk pemanfaatan potensi air untuk mengantisipasi bahaya adalah .....",
      options: [
        "Membangun bendungan untuk membangkitkan tenaga listrik",
        "Memanfaatkan sungai-sungai besar untuk kegiatan transportasi",
        "Mengalirkan air sungai ke lahan budi daya tanaman",
        "Memompa air danau terus-menerus untuk diolah menjadi air minum"
      ],
      correctAnswer: 0,
      materi: "Geografi Dunia",
      subMateri: "Pemanfaatan Sumber Daya Air",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi cara pemanfaatan sumber daya air",
      levelKognitif: "C3",
    },
    // 26 - masjid menara kudus (gambar image6.jpg = masjid menara kudus)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: bangunan bersejarah/wisata di Indonesia]\nGambar tersebut merupakan contoh pemanfaatan kondisi geografis Indonesia di bidang sosial budaya, yaitu .....",
      imageUrl: `${BASE}/image6.jpg`,
      options: [
        "Wisata religi di Masjid Menara Kudus",
        "Air terjun sebagai tempat wisata",
        "Keanekaragaman hayati untuk obat tradisional",
        "Eksploitasi potensi sumber daya alam di daerah"
      ],
      correctAnswer: 0,
      materi: "Geografi Indonesia",
      subMateri: "Potensi Wisata Indonesia",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi potensi wisata Indonesia",
      levelKognitif: "C2",
    },
    // 27 - komoditas unggulan Indonesia
    {
      question: "Komoditas unggulan Indonesia yang banyak diminati oleh negara-negara di dunia yaitu .....",
      options: ["Gandum", "Beras", "Batu bara", "Semen"],
      correctAnswer: 2,
      materi: "Geografi Indonesia",
      subMateri: "Sumber Daya Alam Indonesia",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi komoditas unggulan Indonesia",
      levelKognitif: "C1",
    },
    // 28 - globalisasi komunikasi
    {
      question: "Perkembangan teknologi membuat manusia semakin mudah berhubungan meskipun jarak jauh. Contoh dampak positif globalisasi di bidang komunikasi adalah .....",
      options: [
        "Pak Romli menyampaikan presentasi dengan laptop dan proyektor",
        "Sari membeli baju secara online dari toko luar negeri",
        "Adi menghubungi ibunya di Bali lewat video call",
        "Petani menggunakan traktor modern untuk membajak sawah"
      ],
      correctAnswer: 2,
      materi: "Globalisasi",
      subMateri: "Dampak Globalisasi",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi dampak positif globalisasi di bidang komunikasi",
      levelKognitif: "C2",
    },
    // 29 - teknologi tepat guna (gambar image3.jpg + image11.jpg)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: penggunaan teknologi dalam kehidupan masyarakat]\nDampak perkembangan iptek bagi kehidupan masyarakat berdasarkan gambar adalah .....",
      imageUrl: `${BASE}/image3.jpg`,
      options: [
        "Penggunaan teknologi memudarkan semangat gotong royong",
        "Kemajuan iptek menyebabkan manusia makin individualis",
        "Teknologi tepat guna memudahkan pekerjaan manusia",
        "Hadirnya teknologi menghilangkan kearifan lokal"
      ],
      correctAnswer: 2,
      materi: "Globalisasi",
      subMateri: "Dampak Perkembangan Iptek",
      tujuanPembelajaran: "Siswa dapat menganalisis dampak perkembangan iptek bagi masyarakat",
      levelKognitif: "C4",
    },
    // 30 - pemanfaatan optimal sumber daya
    {
      question: "Indonesia memiliki kekayaan sumber daya alam dan sumber daya manusia yang dapat dimanfaatkan secara optimal. Sumber daya alam berupa tanaman obat sebaiknya dimanfaatkan dengan cara .....",
      options: [
        "Menjual bibit tanaman obat atau tanaman herbal ke negara lain",
        "Menanam tanaman obat dan mengekspornya dalam bentuk mentah",
        "Mengolah tanaman obat menjadi ekstrak, jamu, dan minuman herbal",
        "Menanam tanaman obat dengan mendatangkan tenaga ahli dari luar negeri"
      ],
      correctAnswer: 2,
      materi: "Geografi Indonesia",
      subMateri: "Pemanfaatan Sumber Daya Alam",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi cara pemanfaatan sumber daya alam secara optimal",
      levelKognitif: "C3",
    },
    // 31 - tujuan kerja sama internasional
    {
      question: "Setiap negara tidak bisa berdiri sendiri, sehingga perlu menjalin hubungan dengan negara lain. Tujuan utama dari kerja sama antarnegara adalah .....",
      options: [
        "Meningkatkan persaingan antarnegara",
        "Memenuhi kebutuhan rakyat",
        "Menguasai sumber daya negara lain",
        "Menjalin konflik antarnegara"
      ],
      correctAnswer: 1,
      materi: "Hubungan Internasional",
      subMateri: "Kerja Sama Internasional",
      tujuanPembelajaran: "Siswa dapat menjelaskan tujuan kerja sama internasional",
      levelKognitif: "C2",
    },
    // 32 - nilai hubungan bilateral
    {
      question: "Dalam menjalin hubungan bilateral dengan negara lain, Indonesia selalu menjunjung nilai-nilai .........",
      options: [
        "Kesetaraan dan kekerasan",
        "Dominasi dan tekanan",
        "Eksploitasi dan persaingan",
        "Saling menghormati dan tidak mencampuri urusan dalam negeri"
      ],
      correctAnswer: 3,
      materi: "Hubungan Internasional",
      subMateri: "Prinsip Hubungan Internasional",
      tujuanPembelajaran: "Siswa dapat menjelaskan prinsip hubungan bilateral Indonesia",
      levelKognitif: "C2",
    },
    // 33 - kerja sama pendidikan
    {
      question: "Kerja sama Indonesia dengan negara lain yang bertujuan meningkatkan kualitas pendidikan dan kesejahteraan masyarakat dilakukan dengan cara .....",
      options: [
        "Meminjam dana dari pihak ketiga untuk mengembangkan iptek",
        "Melakukan pertukaran pelajar dan mahasiswa",
        "Membayar tenaga ahli dari negara lain",
        "Membeli peralatan perang terbaru"
      ],
      correctAnswer: 1,
      materi: "Hubungan Internasional",
      subMateri: "Bentuk Kerja Sama Internasional",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi bentuk-bentuk kerja sama internasional di bidang pendidikan",
      levelKognitif: "C2",
    },
    // 34 - angklung UNESCO
    {
      question: "UNESCO menetapkan angklung sebagai warisan budaya dunia asal Indonesia pada 16 November 2010. Pengaruh pengakuan UNESCO terhadap angklung bagi Indonesia adalah .....",
      options: [
        "Menjadikan angklung sebagai alat musik tradisional yang wajib dipelajari di sekolah",
        "Meningkatkan permintaan angklung sebagai suvenir oleh wisatawan",
        "Mendorong generasi muda untuk tidak lagi tertarik pada seni tradisional",
        "Mendorong perajin untuk melestarikan dan mengembangkan produksi angklung"
      ],
      correctAnswer: 3,
      materi: "Hubungan Internasional",
      subMateri: "Pengakuan Budaya Internasional",
      tujuanPembelajaran: "Siswa dapat menganalisis dampak pengakuan internasional terhadap budaya Indonesia",
      levelKognitif: "C4",
    },
    // 35 - pelestarian Borobudur (gambar image12.jpg = Borobudur)
    {
      question: "Amati gambar berikut ini!\n[Gambar: Candi Borobudur]\nBorobudur merupakan salah satu keajaiban dunia yang menjadi kebanggaan Indonesia sekaligus tujuan wisata internasional. Upaya yang paling tepat untuk melestarikan situs Borobudur adalah .....",
      imageUrl: `${BASE}/image12.jpg`,
      options: [
        "Membangun berbagai fasilitas modern di sekitar Borobudur untuk menarik lebih banyak wisatawan",
        "Membiarkan pengunjung mengambil bagian dari candi sebagai kenang-kenangan",
        "Melakukan perawatan berkala serta mengatur jumlah pengunjung supaya situs tidak cepat rusak",
        "Membiarkan Borobudur tanpa pengawasan agar tetap alami"
      ],
      correctAnswer: 2,
      materi: "Hubungan Internasional",
      subMateri: "Pelestarian Warisan Budaya",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi upaya pelestarian warisan budaya",
      levelKognitif: "C3",
    },
  ],
  is: [
    // 36 - otot polos (gambar image2.jpg = gambar otot polos)
    {
      question: "Perhatikan gambar berikut!\n[Gambar: jenis otot dengan bentuk gelendong]\nOtot pada gambar memiliki bentuk memanjang seperti gelendong, dengan ujung meruncing dan hanya satu inti di tengah sel. Otot tersebut disebut otot .....",
      imageUrl: `${BASE}/image2.jpg`,
      acceptedAnswers: ["polos", "otot polos"],
      modelAnswer: "Otot polos",
      materi: "Sistem Gerak",
      subMateri: "Jenis Otot",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi jenis otot berdasarkan ciri-cirinya",
      levelKognitif: "C1",
    },
    // 37 - organ pusat kendali tubuh
    {
      question: "Setiap kali kita berpikir, merasa senang, sedih, atau menggerakkan anggota tubuh, semua itu dikendalikan oleh organ pusat yang ada di dalam tengkorak. Organ tersebut adalah .....",
      acceptedAnswers: ["otak", "otak besar"],
      modelAnswer: "Otak",
      materi: "Sistem Saraf",
      subMateri: "Organ Sistem Saraf",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi organ pusat sistem saraf",
      levelKognitif: "C1",
    },
    // 38 - tujuan Portugis ke Malaka
    {
      question: "Bangsa Portugis merupakan salah satu bangsa Benua Eropa yang datang ke Indonesia. Bangsa Portugis awalnya datang ke Malaka dengan tujuan utama untuk mencari dan menguasai .....",
      acceptedAnswers: ["rempah", "rempah-rempah", "perdagangan", "berdagang"],
      modelAnswer: "Rempah-rempah (perdagangan rempah-rempah)",
      materi: "Sejarah Indonesia",
      subMateri: "Kedatangan Bangsa Eropa",
      tujuanPembelajaran: "Siswa dapat menjelaskan tujuan kedatangan bangsa Portugis ke Indonesia",
      levelKognitif: "C1",
    },
    // 39 - taktik gerilya Diponegoro (gambar image17.jpg = Perang Diponegoro)
    {
      question: "Perang Jawa bermula dari perlawanan Pangeran Diponegoro terhadap Belanda. Dalam peperangan ini pasukan Diponegoro menggunakan taktik .....",
      imageUrl: `${BASE}/image17.jpg`,
      acceptedAnswers: ["gerilya", "perang gerilya", "serangan gerilya"],
      modelAnswer: "Taktik gerilya (perang gerilya)",
      materi: "Sejarah Indonesia",
      subMateri: "Perlawanan terhadap Penjajah",
      tujuanPembelajaran: "Siswa dapat menjelaskan strategi perlawanan Pangeran Diponegoro",
      levelKognitif: "C1",
    },
    // 40 - lempeng Eurasia
    {
      question: "Benua Eropa berada di daratan yang sama dengan Benua Asia. Karenanya, lempeng tempat Benua Eropa dan Asia ini dinamakan lempeng .....",
      acceptedAnswers: ["eurasia", "lempeng eurasia"],
      modelAnswer: "Lempeng Eurasia",
      materi: "Geografi Dunia",
      subMateri: "Lempeng Tektonik",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi nama lempeng tektonik utama",
      levelKognitif: "C1",
    },
    // 41 - Belanda (gambar image19.jpg = kincir angin/Belanda)
    {
      question: "Perhatikan gambar di bawah!\n[Gambar: ikon khas negara Eropa]\nGambar tersebut merupakan ikon khas dari negara penjajah Indonesia yang juga membangun sistem tanam paksa (cultuurstelsel). Negara tersebut adalah .....",
      imageUrl: `${BASE}/image19.jpg`,
      acceptedAnswers: ["belanda", "nederland", "dutch"],
      modelAnswer: "Belanda",
      materi: "Sejarah Indonesia",
      subMateri: "Penjajahan Belanda",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi negara-negara penjajah Indonesia",
      levelKognitif: "C1",
    },
    // 42 - hutan Kalimantan = Indonesia
    {
      question: "Saat mengikuti pelajaran IPS, guru menjelaskan bahwa hutan tropis terluas kedua di dunia berada di Kalimantan. Hutan Kalimantan sebagian besar berada di wilayah negara .....",
      acceptedAnswers: ["indonesia", "negara indonesia"],
      modelAnswer: "Indonesia",
      materi: "Geografi Indonesia",
      subMateri: "Kekayaan Alam Indonesia",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi letak hutan tropis terbesar",
      levelKognitif: "C1",
    },
    // 43 - bidang komunikasi
    {
      question: "Globalisasi memudahkan masyarakat menjalin interaksi sosial melalui berbagai aplikasi media sosial seperti WhatsApp, Instagram, dan TikTok. Kemudahan tersebut merupakan dampak globalisasi di bidang .....",
      acceptedAnswers: ["komunikasi", "bidang komunikasi", "teknologi komunikasi"],
      modelAnswer: "Komunikasi",
      materi: "Globalisasi",
      subMateri: "Dampak Globalisasi",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi dampak globalisasi di berbagai bidang",
      levelKognitif: "C2",
    },
    // 44 - AFTA
    {
      question: "Untuk meningkatkan pertumbuhan ekonomi di kawasan Asia Tenggara, Indonesia bersama negara-negara ASEAN sepakat membentuk kawasan perdagangan bebas. Kawasan perdagangan bebas tersebut dikenal dengan nama .....",
      acceptedAnswers: ["afta", "asean free trade area", "kawasan perdagangan bebas asean"],
      modelAnswer: "AFTA (ASEAN Free Trade Area)",
      materi: "Hubungan Internasional",
      subMateri: "Organisasi Internasional",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi organisasi kerja sama internasional di bidang ekonomi",
      levelKognitif: "C1",
    },
    // 45 - UNESCO
    {
      question: "Banyak peninggalan bersejarah dan budaya yang dilindungi oleh organisasi internasional di bawah naungan PBB. Lembaga yang bertugas melindungi warisan budaya dan ilmu pengetahuan dunia adalah .....",
      acceptedAnswers: ["unesco", "united nations educational scientific and cultural organization"],
      modelAnswer: "UNESCO",
      materi: "Hubungan Internasional",
      subMateri: "Organisasi Internasional",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi lembaga internasional di bawah PBB",
      levelKognitif: "C1",
    },
  ],
  ut: [
    // 46 - osteoporosis
    {
      question: "Seorang lansia datang ke rumah sakit karena sering merasa nyeri tulang dan mudah patah tulang meski hanya terjatuh ringan. Dokter mendiagnosis pasien tersebut mengalami osteoporosis.\na) Jelaskan penyebab osteoporosis!\nb) Jelaskan dampak osteoporosis bagi penderitanya!",
      modelAnswer: "a) Penyebab osteoporosis: kekurangan kalsium dan vitamin D, penurunan hormon (estrogen pada wanita lansia), penuaan, kurang olahraga, pola makan tidak bergizi.\nb) Dampak: tulang keropos dan mudah patah, nyeri tulang, postur membungkuk, penurunan mobilitas dan kualitas hidup.",
      keyPoints: [
        "kekurangan kalsium",
        "vitamin D",
        "penurunan hormon",
        "tulang keropos mudah patah",
        "nyeri tulang"
      ],
      materi: "Sistem Gerak",
      subMateri: "Gangguan Sistem Gerak",
      tujuanPembelajaran: "Siswa dapat menganalisis penyebab dan dampak gangguan pada sistem gerak",
      levelKognitif: "C4",
    },
    // 47 - makna proklamasi
    {
      question: "Kemerdekaan yang diproklamasikan pada 17 Agustus 1945 bukan hanya untuk dikenang, tetapi juga harus dijaga dalam kehidupan sehari-hari. Tuliskan tiga upaya yang dapat dilakukan pelajar untuk mempertahankan makna Proklamasi Kemerdekaan dalam kehidupan sehari-hari!",
      modelAnswer: "1. Menjaga persatuan dan toleransi antarwarga (tidak memecah belah karena perbedaan suku/agama).\n2. Menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari.\n3. Giat belajar dan berprestasi untuk membangun bangsa.",
      keyPoints: [
        "persatuan toleransi",
        "Pancasila",
        "belajar berprestasi",
        "cinta tanah air",
        "kedaulatan negara"
      ],
      materi: "Sejarah Indonesia",
      subMateri: "Makna Kemerdekaan",
      tujuanPembelajaran: "Siswa dapat mengevaluasi upaya mempertahankan makna kemerdekaan",
      levelKognitif: "C5",
    },
    // 48 - Benua Antartika
    {
      question: "Jika kamu melihat peta dunia, Benua Antartika tampak luas dan tertutup salju tebal sepanjang tahun. Mengapa benua ini tidak memiliki penduduk tetap? Jelaskan minimal dua alasan!",
      modelAnswer: "1. Kondisi iklim sangat ekstrem (suhu sangat rendah bisa mencapai -80°C) sehingga tidak mendukung kehidupan manusia secara permanen.\n2. Tidak ada tanah subur untuk bercocok tanam sehingga tidak ada sumber pangan yang memadai.\n3. Antartika diatur perjanjian internasional sebagai kawasan penelitian bersama, bukan pemukiman.",
      keyPoints: [
        "iklim ekstrem suhu rendah",
        "tidak ada tanah subur",
        "tidak ada sumber pangan",
        "perjanjian internasional penelitian"
      ],
      materi: "Geografi Dunia",
      subMateri: "Benua Antartika",
      tujuanPembelajaran: "Siswa dapat menganalisis alasan Benua Antartika tidak berpenduduk tetap",
      levelKognitif: "C4",
    },
    // 49 - dampak globalisasi
    {
      question: "Di era globalisasi saat ini, banyak hal dalam kehidupan masyarakat berubah, baik di bidang teknologi, komunikasi, maupun budaya. Tuliskan tiga contoh nyata pengaruh globalisasi dalam kehidupan sehari-hari di sekitarmu!",
      modelAnswer: "1. Komunikasi: menelepon/video call keluarga di tempat jauh melalui WhatsApp atau Zoom.\n2. Hiburan/budaya: menonton film dari negara lain melalui platform streaming seperti Netflix.\n3. Perdagangan: membeli produk dari luar negeri melalui marketplace online.",
      keyPoints: [
        "komunikasi jarak jauh video call",
        "hiburan streaming film luar negeri",
        "belanja online marketplace",
        "pendidikan kursus online",
        "makanan budaya asing"
      ],
      materi: "Globalisasi",
      subMateri: "Dampak Globalisasi",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi dampak nyata globalisasi dalam kehidupan sehari-hari",
      levelKognitif: "C3",
    },
    // 50 - budaya benda
    {
      question: "Indonesia kaya akan budaya, baik berupa tradisi, kesenian, maupun hasil karya manusia. Tuliskan tiga contoh budaya benda (artefak budaya) yang dapat kamu temukan di sekitarmu!",
      modelAnswer: "1. Batik – kain tradisional bercorak khas Indonesia yang diakui UNESCO.\n2. Wayang kulit – boneka tradisional untuk pertunjukan seni.\n3. Angklung/Gamelan – alat musik tradisional Indonesia.",
      keyPoints: [
        "batik",
        "wayang",
        "angklung gamelan",
        "keris",
        "rumah adat",
        "tenun"
      ],
      materi: "Hubungan Internasional",
      subMateri: "Warisan Budaya Indonesia",
      tujuanPembelajaran: "Siswa dapat mengidentifikasi contoh budaya benda di Indonesia",
      levelKognitif: "C1",
    },
  ],
  sessions: [
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,0,1,2,3,4], is: [5,6,7,8,9,0,1,2,3,4], ut: [1,2,3,4,0] },
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,0,1,2,3,4,5,6,7,8,9], is: [0,2,4,6,8,1,3,5,7,9], ut: [2,3,4,0,1] },
    { pg: [20,21,22,23,24,15,16,17,18,19,10,11,12,13,14,5,6,7,8,9,0,1,2,3,4], is: [9,8,7,6,5,4,3,2,1,0], ut: [3,4,0,1,2] },
    { pg: [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], is: [4,3,2,1,0,9,8,7,6,5], ut: [4,0,1,2,3] },
  ],
};
