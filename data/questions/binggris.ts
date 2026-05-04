import { PGQuestion, ISQuestion, UTQuestion, SubjectQuestionBank } from "@/lib/types";

const pg: PGQuestion[] = [
  // Greetings & Introductions (C1-C2)
  {
    id: "bing-pg-1", type: "PG", number: 1,
    question: "What is the correct greeting when you meet someone in the morning?",
    options: ["Good night", "Good afternoon", "Good morning", "Good evening"],
    correctAnswer: 2,
    materi: "Greetings", tujuanPembelajaran: "Menggunakan salam yang tepat", levelKognitif: "C1"
  },
  {
    id: "bing-pg-2", type: "PG", number: 2,
    question: "What do you say when you meet someone for the first time?",
    options: ["See you later", "Nice to meet you", "Goodbye", "Thank you"],
    correctAnswer: 1,
    materi: "Introductions", tujuanPembelajaran: "Memperkenalkan diri", levelKognitif: "C1"
  },
  {
    id: "bing-pg-3", type: "PG", number: 3,
    question: "How do you respond to 'How are you?'",
    options: ["My name is Budi", "I am ten years old", "I am fine, thank you", "I live in Jakarta"],
    correctAnswer: 2,
    materi: "Greetings", tujuanPembelajaran: "Merespons sapaan", levelKognitif: "C1"
  },
  {
    id: "bing-pg-4", type: "PG", number: 4,
    question: "What do you say when you leave someone?",
    options: ["Hello", "Good morning", "Nice to meet you", "Goodbye"],
    correctAnswer: 3,
    materi: "Greetings", tujuanPembelajaran: "Menggunakan ungkapan perpisahan", levelKognitif: "C1"
  },
  {
    id: "bing-pg-5", type: "PG", number: 5,
    question: "Sinta: 'My name is Sinta. What is your name?' Budi: '...'",
    options: ["I am twelve years old", "I am fine", "My name is Budi", "I live in Bandung"],
    correctAnswer: 2,
    materi: "Introductions", tujuanPembelajaran: "Memperkenalkan diri", levelKognitif: "C2"
  },

  // Days, Months, Time (C1-C2)
  {
    id: "bing-pg-6", type: "PG", number: 6,
    question: "What day comes after Wednesday?",
    options: ["Tuesday", "Thursday", "Friday", "Monday"],
    correctAnswer: 1,
    materi: "Days and Months", tujuanPembelajaran: "Menyebutkan hari dalam seminggu", levelKognitif: "C1"
  },
  {
    id: "bing-pg-7", type: "PG", number: 7,
    question: "How many months are there in a year?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    materi: "Days and Months", tujuanPembelajaran: "Menyebutkan jumlah bulan", levelKognitif: "C1"
  },
  {
    id: "bing-pg-8", type: "PG", number: 8,
    question: "What month comes after July?",
    options: ["June", "September", "August", "October"],
    correctAnswer: 2,
    materi: "Days and Months", tujuanPembelajaran: "Menyebutkan bulan secara berurutan", levelKognitif: "C2"
  },
  {
    id: "bing-pg-9", type: "PG", number: 9,
    question: "The clock shows 07.00. What time is it?",
    options: ["It is seven past one", "It is seven o'clock", "It is one o'clock", "It is half past seven"],
    correctAnswer: 1,
    materi: "Telling Time", tujuanPembelajaran: "Menyebutkan waktu dalam bahasa Inggris", levelKognitif: "C2"
  },
  {
    id: "bing-pg-10", type: "PG", number: 10,
    question: "Hari ini adalah Senin. Dalam Bahasa Inggris, Senin adalah ...",
    options: ["Sunday", "Tuesday", "Monday", "Wednesday"],
    correctAnswer: 2,
    materi: "Days and Months", tujuanPembelajaran: "Menerjemahkan nama hari", levelKognitif: "C1"
  },

  // Numbers and Colors (C1-C2)
  {
    id: "bing-pg-11", type: "PG", number: 11,
    question: "The number 25 in English is ...",
    options: ["Fifteen", "Twenty", "Twenty-five", "Fifty"],
    correctAnswer: 2,
    materi: "Numbers", tujuanPembelajaran: "Menyebutkan bilangan dalam bahasa Inggris", levelKognitif: "C1"
  },
  {
    id: "bing-pg-12", type: "PG", number: 12,
    question: "Warna merah dalam Bahasa Inggris adalah ...",
    options: ["Blue", "Green", "Yellow", "Red"],
    correctAnswer: 3,
    materi: "Colors", tujuanPembelajaran: "Menyebutkan warna dalam bahasa Inggris", levelKognitif: "C1"
  },
  {
    id: "bing-pg-13", type: "PG", number: 13,
    question: "What color is the sky on a clear day?",
    options: ["Green", "Red", "Blue", "Yellow"],
    correctAnswer: 2,
    materi: "Colors", tujuanPembelajaran: "Menggunakan warna dalam konteks", levelKognitif: "C2"
  },

  // Family & Descriptive (C1-C3)
  {
    id: "bing-pg-14", type: "PG", number: 14,
    question: "The father of your father is called your ...",
    options: ["Uncle", "Grandfather", "Brother", "Cousin"],
    correctAnswer: 1,
    materi: "Family Members", tujuanPembelajaran: "Menyebutkan anggota keluarga", levelKognitif: "C1"
  },
  {
    id: "bing-pg-15", type: "PG", number: 15,
    question: "Look at the picture. The girl has ... hair.",
    options: ["Short and curly", "Long and straight", "Bald", "Short and straight"],
    correctAnswer: 1,
    materi: "Describing People", tujuanPembelajaran: "Mendeskripsikan penampilan seseorang", levelKognitif: "C2"
  },
  {
    id: "bing-pg-16", type: "PG", number: 16,
    question: "My mother's sister is my ...",
    options: ["Aunt", "Grandmother", "Cousin", "Sister"],
    correctAnswer: 0,
    materi: "Family Members", tujuanPembelajaran: "Menyebutkan anggota keluarga", levelKognitif: "C2"
  },

  // Professions (C1-C2)
  {
    id: "bing-pg-17", type: "PG", number: 17,
    question: "A person who teaches students at school is called a ...",
    options: ["Doctor", "Police officer", "Teacher", "Pilot"],
    correctAnswer: 2,
    materi: "Professions", tujuanPembelajaran: "Menyebutkan nama profesi", levelKognitif: "C1"
  },
  {
    id: "bing-pg-18", type: "PG", number: 18,
    question: "A person who flies an airplane is called a ...",
    options: ["Driver", "Sailor", "Pilot", "Captain"],
    correctAnswer: 2,
    materi: "Professions", tujuanPembelajaran: "Menyebutkan nama profesi", levelKognitif: "C1"
  },
  {
    id: "bing-pg-19", type: "PG", number: 19,
    question: "What does a doctor do?",
    options: ["Sells food", "Teaches students", "Builds houses", "Treats sick people"],
    correctAnswer: 3,
    materi: "Professions", tujuanPembelajaran: "Mendeskripsikan tugas suatu profesi", levelKognitif: "C2"
  },

  // Things Around Us (C1-C2)
  {
    id: "bing-pg-20", type: "PG", number: 20,
    question: "Which of the following is a school stationery?",
    options: ["Refrigerator", "Pencil", "Table", "Chair"],
    correctAnswer: 1,
    materi: "Things Around Us", tujuanPembelajaran: "Mengidentifikasi benda di sekitar", levelKognitif: "C1"
  },
  {
    id: "bing-pg-21", type: "PG", number: 21,
    question: "We use a ... to write in our notebook.",
    options: ["Ruler", "Scissors", "Pencil", "Eraser"],
    correctAnswer: 2,
    materi: "Things Around Us", tujuanPembelajaran: "Menggunakan kosakata benda sekolah", levelKognitif: "C1"
  },
  {
    id: "bing-pg-22", type: "PG", number: 22,
    question: "What do you use to remove pencil marks on paper?",
    options: ["Pencil", "Ruler", "Eraser", "Sharpener"],
    correctAnswer: 2,
    materi: "Things Around Us", tujuanPembelajaran: "Mengidentifikasi fungsi benda", levelKognitif: "C2"
  },

  // Animals (C1-C2)
  {
    id: "bing-pg-23", type: "PG", number: 23,
    question: "Which animal can fly?",
    options: ["Fish", "Cat", "Bird", "Dog"],
    correctAnswer: 2,
    materi: "Animals", tujuanPembelajaran: "Mengidentifikasi jenis hewan", levelKognitif: "C1"
  },
  {
    id: "bing-pg-24", type: "PG", number: 24,
    question: "A baby cat is called a ...",
    options: ["Puppy", "Kitten", "Cub", "Calf"],
    correctAnswer: 1,
    materi: "Animals", tujuanPembelajaran: "Menyebutkan nama anak hewan", levelKognitif: "C1"
  },
  {
    id: "bing-pg-25", type: "PG", number: 25,
    question: "The elephant is a ... animal.",
    options: ["Small", "Large", "Tiny", "Thin"],
    correctAnswer: 1,
    materi: "Animals", tujuanPembelajaran: "Mendeskripsikan hewan", levelKognitif: "C2"
  },

  // Simple Sentences & Reading (C2-C4)
  {
    id: "bing-pg-26", type: "PG", number: 26,
    question: "Read the sentence: 'Deni goes to school every day.' The subject of the sentence is ...",
    options: ["Goes", "School", "Deni", "Every day"],
    correctAnswer: 2,
    materi: "Simple Sentences", tujuanPembelajaran: "Mengidentifikasi subjek kalimat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-27", type: "PG", number: 27,
    question: "Which sentence is correct?",
    options: ["She are a student", "He go to school", "They is happy", "We are students"],
    correctAnswer: 3,
    materi: "Simple Sentences", tujuanPembelajaran: "Memilih kalimat yang benar", levelKognitif: "C3"
  },
  {
    id: "bing-pg-28", type: "PG", number: 28,
    question: "Andi: 'Can you help me, please?' Rini: '...' (Rini setuju membantu)\nJawaban Rini yang tepat adalah ...",
    options: ["No, I can't", "Sure, I will help you", "I don't know", "Goodbye"],
    correctAnswer: 1,
    materi: "Simple Conversation", tujuanPembelajaran: "Merespons permintaan bantuan", levelKognitif: "C3"
  },
  {
    id: "bing-pg-29", type: "PG", number: 29,
    question: "Read the text:\n'My name is Ratna. I am twelve years old. I live in Surabaya. I have one brother and two sisters.'\nHow many siblings does Ratna have?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 2,
    materi: "Reading Comprehension", tujuanPembelajaran: "Memahami teks deskriptif", levelKognitif: "C2"
  },
  {
    id: "bing-pg-30", type: "PG", number: 30,
    question: "What is the meaning of the word 'beautiful'?",
    options: ["Jelek", "Cantik/Indah", "Kuat", "Pintar"],
    correctAnswer: 1,
    materi: "Vocabulary", tujuanPembelajaran: "Menerjemahkan kosakata", levelKognitif: "C1"
  },
];

const is: ISQuestion[] = [
  {
    id: "bing-is-1", type: "IS", number: 26,
    question: "Translate to English: 'Selamat pagi'",
    acceptedAnswers: ["good morning"],
    modelAnswer: "Good morning",
    materi: "Greetings", tujuanPembelajaran: "Menerjemahkan salam", levelKognitif: "C1"
  },
  {
    id: "bing-is-2", type: "IS", number: 27,
    question: "Translate to English: 'Terima kasih'",
    acceptedAnswers: ["thank you", "thanks"],
    modelAnswer: "Thank you",
    materi: "Expressions", tujuanPembelajaran: "Menerjemahkan ungkapan", levelKognitif: "C1"
  },
  {
    id: "bing-is-3", type: "IS", number: 28,
    question: "What day is before Saturday?",
    acceptedAnswers: ["friday"],
    modelAnswer: "Friday",
    materi: "Days and Months", tujuanPembelajaran: "Menyebutkan hari secara berurutan", levelKognitif: "C1"
  },
  {
    id: "bing-is-4", type: "IS", number: 29,
    question: "Write the English word for the number 50.",
    acceptedAnswers: ["fifty"],
    modelAnswer: "Fifty",
    materi: "Numbers", tujuanPembelajaran: "Menulis bilangan dalam bahasa Inggris", levelKognitif: "C1"
  },
  {
    id: "bing-is-5", type: "IS", number: 30,
    question: "What is the color of grass? (Answer in English)",
    acceptedAnswers: ["green"],
    modelAnswer: "Green",
    materi: "Colors", tujuanPembelajaran: "Mengidentifikasi warna dalam konteks", levelKognitif: "C1"
  },
  {
    id: "bing-is-6", type: "IS", number: 31,
    question: "Translate to English: 'Ayah saya adalah seorang guru.'",
    acceptedAnswers: ["my father is a teacher", "my father is a teacher."],
    modelAnswer: "My father is a teacher.",
    materi: "Family & Professions", tujuanPembelajaran: "Menerjemahkan kalimat sederhana", levelKognitif: "C3"
  },
  {
    id: "bing-is-7", type: "IS", number: 32,
    question: "Complete the sentence: 'A baby dog is called a ___.'",
    acceptedAnswers: ["puppy"],
    modelAnswer: "puppy",
    materi: "Animals", tujuanPembelajaran: "Menyebutkan nama anak hewan", levelKognitif: "C1"
  },
  {
    id: "bing-is-8", type: "IS", number: 33,
    question: "What is the opposite of 'big'?",
    acceptedAnswers: ["small", "little", "tiny"],
    modelAnswer: "Small",
    materi: "Vocabulary", tujuanPembelajaran: "Menggunakan antonim kata sifat", levelKognitif: "C2"
  },
  {
    id: "bing-is-9", type: "IS", number: 34,
    question: "Translate to English: 'Berapa umurmu?'",
    acceptedAnswers: ["how old are you", "how old are you?"],
    modelAnswer: "How old are you?",
    materi: "Personal Information", tujuanPembelajaran: "Menerjemahkan pertanyaan", levelKognitif: "C3"
  },
  {
    id: "bing-is-10", type: "IS", number: 35,
    question: "Fill in the blank: 'She ___ a student.' (menggunakan to be yang tepat)",
    acceptedAnswers: ["is"],
    modelAnswer: "is",
    materi: "Simple Sentences", tujuanPembelajaran: "Menggunakan to be dengan benar", levelKognitif: "C3"
  },
  {
    id: "bing-is-11", type: "IS", number: 36,
    question: "Translate to English: 'Kami pergi ke sekolah setiap hari.'",
    acceptedAnswers: ["we go to school every day", "we go to school everyday"],
    modelAnswer: "We go to school every day.",
    materi: "Simple Sentences", tujuanPembelajaran: "Menerjemahkan kalimat sederhana", levelKognitif: "C3"
  },
  {
    id: "bing-is-12", type: "IS", number: 37,
    question: "The month after April is ...",
    acceptedAnswers: ["may"],
    modelAnswer: "May",
    materi: "Days and Months", tujuanPembelajaran: "Menyebutkan bulan secara berurutan", levelKognitif: "C1"
  },
];

const ut: UTQuestion[] = [
  {
    id: "bing-ut-1", type: "UT", number: 38,
    question: "Write a short self-introduction (at least 4 sentences) in English. Include your name, age, address/city, and hobby.",
    modelAnswer: "My name is [Name]. I am twelve years old. I live in [City]. My hobby is reading books. Nice to meet you.",
    keyPoints: ["Menyebutkan nama", "Menyebutkan usia", "Menyebutkan tempat tinggal", "Menyebutkan hobi", "Tata bahasa dasar benar"],
    materi: "Introductions", tujuanPembelajaran: "Membuat teks perkenalan diri sederhana", levelKognitif: "C4"
  },
  {
    id: "bing-ut-2", type: "UT", number: 39,
    question: "Describe your family in English. Write at least 4 sentences. Include how many members, their names/roles, and one thing about each.",
    modelAnswer: "I have four people in my family. They are my father, my mother, my sister, and me. My father is a teacher. My mother is a housewife. My sister is in grade four.",
    keyPoints: ["Menyebutkan jumlah anggota keluarga", "Menyebutkan peran/hubungan keluarga", "Menggunakan kosakata yang tepat", "Minimal 4 kalimat"],
    materi: "Family Members", tujuanPembelajaran: "Membuat teks deskriptif tentang keluarga", levelKognitif: "C4"
  },
  {
    id: "bing-ut-3", type: "UT", number: 40,
    question: "Bacalah teks berikut dan jawab pertanyaannya dalam Bahasa Inggris!\n\n'Siti is a student. She is eleven years old. She goes to SD Pelita. Her favorite subject is Mathematics. She likes to read books and draw pictures in her free time.'\n\n1. What is her name?\n2. How old is she?\n3. What is her favorite subject?\n4. What does she like to do in her free time?",
    modelAnswer: "1. Her name is Siti. 2. She is eleven years old. 3. Her favorite subject is Mathematics. 4. She likes to read books and draw pictures.",
    keyPoints: ["Menjawab pertanyaan dengan kalimat lengkap", "Jawaban sesuai isi teks", "Tata bahasa sederhana benar", "Menggunakan kata ganti she/her dengan benar"],
    materi: "Reading Comprehension", tujuanPembelajaran: "Menjawab pertanyaan berdasarkan teks deskriptif", levelKognitif: "C2"
  },
  {
    id: "bing-ut-4", type: "UT", number: 41,
    question: "Susunlah kata-kata berikut menjadi kalimat yang benar dalam Bahasa Inggris!\n1. school / every / goes / Budi / to / day\n2. a / My / is / doctor / mother\n3. like / I / very / cats / much",
    modelAnswer: "1. Budi goes to school every day. 2. My mother is a doctor. 3. I like cats very much.",
    keyPoints: ["Susunan kalimat benar (S-V-O)", "Penggunaan huruf kapital di awal kalimat", "Tanda titik di akhir kalimat", "Semua kata digunakan"],
    materi: "Simple Sentences", tujuanPembelajaran: "Menyusun kalimat sederhana dari kata-kata acak", levelKognitif: "C3"
  },
  {
    id: "bing-ut-5", type: "UT", number: 42,
    question: "Tuliskan dialog singkat (minimal 4 kali percakapan bolak-balik) antara dua orang yang sedang saling berkenalan untuk pertama kali. Gunakan Bahasa Inggris yang benar.",
    modelAnswer: "A: Good morning! My name is Andi. What is your name?\nB: Good morning! My name is Rina. Nice to meet you, Andi.\nA: Nice to meet you too, Rina. How old are you?\nB: I am twelve years old. And you?\nA: I am eleven years old. Where do you live?\nB: I live in Surabaya. See you tomorrow!\nA: See you!",
    keyPoints: ["Menggunakan salam yang tepat", "Perkenalan meliputi nama", "Menggunakan 'Nice to meet you'", "Dialog minimal 4 kali bolak-balik", "Bahasa runtut dan logis"],
    materi: "Introductions & Greetings", tujuanPembelajaran: "Membuat dialog perkenalan sederhana", levelKognitif: "C4"
  },
  {
    id: "bing-ut-6", type: "UT", number: 43,
    question: "Terjemahkan paragraf berikut ke dalam Bahasa Inggris!\n\n'Namaku Dinda. Aku berumur 12 tahun. Aku tinggal di Yogyakarta. Aku mempunyai seekor kucing yang berwarna putih. Kesukaanku adalah bermain sepak bola bersama teman-temanku setelah pulang sekolah.'",
    modelAnswer: "My name is Dinda. I am twelve years old. I live in Yogyakarta. I have a white cat. My hobby is playing football with my friends after school.",
    keyPoints: ["Nama diterjemahkan dengan benar", "Usia disebutkan dengan benar", "Tempat tinggal benar", "Deskripsi kucing putih benar", "Hobi dan konteks benar"],
    materi: "Translation", tujuanPembelajaran: "Menerjemahkan teks pendek Indonesia ke Inggris", levelKognitif: "C3"
  },
];

export const binggrisBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    { pg: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], is: [1,2,3,4,5,6,7,8,9,10], ut: [1,2,3,4,5] },
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,1,3,5,7,9,11,13,15,17,19], is: [0,2,4,6,8,10,1,3,5,7], ut: [0,2,4,1,3] },
    { pg: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0,1,2,3,4], is: [2,3,4,5,6,7,8,9,10,11], ut: [2,3,4,5,0] },
    { pg: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,0,2,4,6,8,10,12,14,16,18], is: [0,1,2,3,4,5,6,7,8,11], ut: [0,1,2,3,5] },
  ],
};
