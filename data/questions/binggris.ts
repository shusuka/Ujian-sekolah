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

  // ===== SOAL TINGKAT KELAS 6 (C2-C5) =====
  {
    id: "bing-pg-31", type: "PG", number: 31,
    question: "Read the text below and answer the question.\n\n'Last Sunday, my family and I visited the National Museum in Jakarta. We left home at 6 a.m. When we arrived, the museum was not open yet, so we waited for thirty minutes outside. Inside, we saw hundreds of ancient artifacts from different regions of Indonesia. The most impressive exhibit was the bronze statue collection.'\n\nWhy did the family have to wait outside the museum?",
    options: [
      "They forgot to buy tickets in advance",
      "They arrived before the museum opened",
      "The museum was too crowded with other visitors",
      "They were waiting for other family members to arrive"
    ],
    correctAnswer: 1,
    materi: "Reading Comprehension – Recount Text", tujuanPembelajaran: "Memahami informasi tersurat dalam teks recount", levelKognitif: "C2"
  },
  {
    id: "bing-pg-32", type: "PG", number: 32,
    question: "Choose the correct simple past tense form:\n'Yesterday, Budi ___ (go) to the library after school to borrow some books.'",
    options: ["goes", "goed", "went", "going"],
    correctAnswer: 2,
    materi: "Simple Past Tense – Irregular Verbs", tujuanPembelajaran: "Menggunakan kata kerja bentuk lampau tidak beraturan dengan benar", levelKognitif: "C2"
  },
  {
    id: "bing-pg-33", type: "PG", number: 33,
    question: "Choose the correct past tense form:\n'She ___ (study) very hard last night for the science test.'",
    options: ["study", "studyed", "studied", "studies"],
    correctAnswer: 2,
    materi: "Simple Past Tense – Regular Verbs", tujuanPembelajaran: "Menggunakan kata kerja beraturan bentuk lampau", levelKognitif: "C2"
  },
  {
    id: "bing-pg-34", type: "PG", number: 34,
    question: "Rara has a toothache and has not seen a doctor yet. What is the BEST advice to give her?",
    options: [
      "You should see a dentist immediately.",
      "You must not eat any food at all.",
      "You can play outside to forget the pain.",
      "You will feel better by tomorrow."
    ],
    correctAnswer: 0,
    materi: "Modal Verbs – Should/Must/Can", tujuanPembelajaran: "Menggunakan modal verb untuk memberi saran", levelKognitif: "C3"
  },
  {
    id: "bing-pg-35", type: "PG", number: 35,
    question: "Read the narrative below.\n\n'Once upon a time, a poor farmer named Pak Tono found 100 gold coins buried in his field. Instead of keeping them all, he donated half to the poor in his village. The village head rewarded his kindness with fertile land, and Pak Tono became the most respected man in the village.'\n\nWhat is the MORAL LESSON of the story?",
    options: [
      "Always plow your fields deeply to find treasure",
      "Kindness and generosity are eventually rewarded",
      "Farmers should hide their wealth from the village head",
      "Gold coins are the most important thing in life"
    ],
    correctAnswer: 1,
    materi: "Reading Comprehension – Narrative Text", tujuanPembelajaran: "Menyimpulkan pesan moral dari teks naratif", levelKognitif: "C4"
  },
  {
    id: "bing-pg-36", type: "PG", number: 36,
    question: "Fill in the blank with the correct superlative form:\n'Mount Everest is the ___ mountain in the world.'",
    options: ["high", "higher", "highest", "more high"],
    correctAnswer: 2,
    materi: "Adjectives – Superlative", tujuanPembelajaran: "Menggunakan bentuk superlatif kata sifat", levelKognitif: "C2"
  },
  {
    id: "bing-pg-37", type: "PG", number: 37,
    question: "Choose the correct passive voice form:\n'The new school library ___ by the mayor last Monday.'",
    options: ["open", "opened", "was opened", "has opened"],
    correctAnswer: 2,
    materi: "Passive Voice – Simple Past", tujuanPembelajaran: "Menggunakan kalimat pasif bentuk lampau", levelKognitif: "C3"
  },
  {
    id: "bing-pg-38", type: "PG", number: 38,
    question: "Read the procedure text.\n\n'How to Make Sweet Tea: First, boil water. Then, put a tea bag in a cup and pour the hot water. Wait three minutes. After that, remove the tea bag and add two spoons of sugar. Stir well.'\n\nWhat should you do BEFORE pouring the hot water into the cup?",
    options: [
      "Add two spoons of sugar to the cup",
      "Stir well until the sugar dissolves",
      "Put a tea bag in the cup",
      "Wait for three minutes"
    ],
    correctAnswer: 2,
    materi: "Reading Comprehension – Procedure Text", tujuanPembelajaran: "Memahami urutan langkah dalam teks prosedur", levelKognitif: "C3"
  },
  {
    id: "bing-pg-39", type: "PG", number: 39,
    question: "Fill in the blank with the correct present perfect form:\n'I ___ never ___ to Bali, but I really want to visit someday.'",
    options: ["have / been", "has / been", "had / gone", "have / went"],
    correctAnswer: 0,
    materi: "Present Perfect Tense", tujuanPembelajaran: "Menggunakan present perfect tense dengan benar", levelKognitif: "C3"
  },
  {
    id: "bing-pg-40", type: "PG", number: 40,
    question: "'The scientist made a significant discovery that changed the world of medicine forever.'\n\nThe word 'significant' in the sentence above is CLOSEST in meaning to ...",
    options: ["small and unimportant", "large and important", "old and forgotten", "new and confusing"],
    correctAnswer: 1,
    materi: "Vocabulary in Context", tujuanPembelajaran: "Memahami arti kata dalam konteks kalimat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-41", type: "PG", number: 41,
    question: "Read the following text.\n\n'Indonesia is home to approximately 17,000 islands and has the world's third-largest tropical rainforest. These forests absorb millions of tons of CO₂ each year, helping slow climate change. They are also home to thousands of unique species. However, large areas are lost every year to logging and farming. Environmental organizations are working hard to find solutions.'\n\nWhat can be INFERRED about Indonesia's rainforests from the text?",
    options: [
      "They are only important for tourism and recreation",
      "They play a crucial role in fighting climate change and protecting biodiversity",
      "They should all be converted to agricultural land for development",
      "Environmental organizations have already fully protected them"
    ],
    correctAnswer: 1,
    materi: "Reading Comprehension – Inference", tujuanPembelajaran: "Menarik kesimpulan/inferensi dari teks informasi", levelKognitif: "C4"
  },
  {
    id: "bing-pg-42", type: "PG", number: 42,
    question: "Choose the correct conjunction to complete the sentence:\n'She had already eaten dinner ___ her father came home.'",
    options: ["after", "when", "before", "while"],
    correctAnswer: 2,
    materi: "Conjunction – Time Clauses", tujuanPembelajaran: "Menggunakan konjungsi waktu yang tepat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-43", type: "PG", number: 43,
    question: "Change to reported speech:\nMr. Ridwan said: 'I will teach geography tomorrow.'\nThe correct reported speech is: Mr. Ridwan said that he ___ teach geography the next day.",
    options: ["will", "would", "shall", "should"],
    correctAnswer: 1,
    materi: "Reported Speech", tujuanPembelajaran: "Mengubah kalimat langsung menjadi kalimat tidak langsung", levelKognitif: "C3"
  },
  {
    id: "bing-pg-44", type: "PG", number: 44,
    question: "Read the paragraph below.\n\n'Indonesia has an incredible variety of traditional foods. Each region has its own unique dishes — West Java has karedok, Central Java has gudeg, East Java is famous for rawon, and Bali offers satay with rich peanut sauce. This diversity of food reflects the rich cultural heritage of Indonesia's many ethnic groups.'\n\nWhat is the MAIN IDEA of this paragraph?",
    options: [
      "Rendang is the most popular dish in Central Java",
      "Indonesia has a wonderfully diverse tradition of regional food",
      "Bali has the best food in all of Indonesia",
      "Traditional Indonesian food is always very spicy"
    ],
    correctAnswer: 1,
    materi: "Reading Comprehension – Main Idea", tujuanPembelajaran: "Mengidentifikasi gagasan utama dalam paragraf", levelKognitif: "C4"
  },
  {
    id: "bing-pg-45", type: "PG", number: 45,
    question: "Choose the sentence that is arranged CORRECTLY as a question:\n'you / last year / visit / Did / Borobudur?'",
    options: [
      "Did you visit Borobudur last year?",
      "Did you visited Borobudur last year?",
      "Do you visit Borobudur last year?",
      "You did visit Borobudur last year?"
    ],
    correctAnswer: 0,
    materi: "Question Formation – Simple Past", tujuanPembelajaran: "Menyusun kalimat tanya dalam simple past tense", levelKognitif: "C3"
  },
  {
    id: "bing-pg-46", type: "PG", number: 46,
    question: "Read the situation:\n'When Adi arrived at school, the classroom was empty and the lights were off. There were no teachers or students anywhere. He checked his phone and realized it was Saturday.'\n\nWhy was the school empty?",
    options: [
      "There was a public holiday that day",
      "All students had gone on a field trip",
      "It was Saturday, so school was not in session",
      "The school was cancelled due to flooding"
    ],
    correctAnswer: 2,
    materi: "Reading Comprehension – Inference from Context", tujuanPembelajaran: "Menyimpulkan informasi tersirat dari konteks teks", levelKognitif: "C4"
  },
  {
    id: "bing-pg-47", type: "PG", number: 47,
    question: "The prefix 'un-' in the word 'unhappy' changes the meaning to ...",
    options: ["very happy", "not happy", "more happy", "less happy"],
    correctAnswer: 1,
    materi: "Vocabulary – Prefix", tujuanPembelajaran: "Memahami makna prefiks dalam pembentukan kata", levelKognitif: "C2"
  },
  {
    id: "bing-pg-48", type: "PG", number: 48,
    question: "A text that begins with 'To make a chocolate cake, you will need: flour, eggs, butter, sugar, and cocoa powder. First, mix all the dry ingredients...' is an example of a ___ text.",
    options: ["recount", "narrative", "procedure", "descriptive"],
    correctAnswer: 2,
    materi: "Text Types", tujuanPembelajaran: "Mengidentifikasi jenis teks berdasarkan ciri-cirinya", levelKognitif: "C3"
  },
  {
    id: "bing-pg-49", type: "PG", number: 49,
    question: "Choose the word that has the CLOSEST meaning to 'enormous'.",
    options: ["tiny", "huge", "average", "regular"],
    correctAnswer: 1,
    materi: "Vocabulary – Synonyms", tujuanPembelajaran: "Mengidentifikasi sinonim kata dalam bahasa Inggris", levelKognitif: "C2"
  },
  {
    id: "bing-pg-50", type: "PG", number: 50,
    question: "Complete the conditional sentence:\n'If you ___ harder, you will pass the exam.'",
    options: ["study", "studied", "will study", "studying"],
    correctAnswer: 0,
    materi: "Conditional Sentences – Type 1", tujuanPembelajaran: "Menggunakan conditional sentence type 1 dengan benar", levelKognitif: "C3"
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
  {
    id: "bing-is-13", type: "IS", number: 38,
    question: "Fill in the blank with the correct past tense:\n'Yesterday, all the students ___ (watch) an educational film about volcanoes in the school hall.'",
    acceptedAnswers: ["watched"],
    modelAnswer: "watched",
    materi: "Simple Past Tense", tujuanPembelajaran: "Menggunakan kata kerja beraturan dalam bentuk lampau", levelKognitif: "C2"
  },
  {
    id: "bing-is-14", type: "IS", number: 39,
    question: "Read: 'The ancient temple was built by our ancestors hundreds of years ago.'\n\nWhat does the word 'ancestors' mean in Indonesian?",
    acceptedAnswers: ["nenek moyang", "leluhur", "orang-orang terdahulu"],
    modelAnswer: "Nenek moyang / leluhur (people who lived before us in our family lineage)",
    materi: "Vocabulary in Context", tujuanPembelajaran: "Memahami makna kata dalam konteks kalimat", levelKognitif: "C2"
  },
  {
    id: "bing-is-15", type: "IS", number: 40,
    question: "Fill in the blank: 'The boys in our class always ___ (play) football during recess.' (Use the correct verb form for present tense)",
    acceptedAnswers: ["play"],
    modelAnswer: "play (plural subject = no -s on verb)",
    materi: "Subject-Verb Agreement", tujuanPembelajaran: "Menggunakan kesesuaian subjek dan kata kerja dengan benar", levelKognitif: "C2"
  },
  {
    id: "bing-is-16", type: "IS", number: 41,
    question: "Read: 'Last month, our class visited Ragunan Zoo. We saw elephants, giraffes, and Komodo dragons. Our favourite was the Komodo dragon enclosure because none of us had ever seen one before.'\n\nWhich animal was the class's favourite at the zoo?",
    acceptedAnswers: ["komodo dragon", "the komodo dragon", "komodo"],
    modelAnswer: "The Komodo dragon",
    materi: "Reading Comprehension", tujuanPembelajaran: "Menemukan informasi tersurat dalam teks recount", levelKognitif: "C2"
  },
  {
    id: "bing-is-17", type: "IS", number: 42,
    question: "Find the grammar mistake and correct it:\n'She go to school yesterday by bus.'\n\nThe word that needs to be changed is ___ and it should be ___.",
    acceptedAnswers: ["go / went", "go should be went", "went"],
    modelAnswer: "'go' → 'went' (past tense of irregular verb 'go' is 'went')",
    materi: "Error Correction – Simple Past", tujuanPembelajaran: "Menemukan dan memperbaiki kesalahan tata bahasa", levelKognitif: "C3"
  },
  {
    id: "bing-is-18", type: "IS", number: 43,
    question: "Change the sentence to PASSIVE VOICE:\n'The students clean the classroom every Friday.'\n\nPassive: 'The classroom ___ by the students every Friday.'",
    acceptedAnswers: ["is cleaned", "gets cleaned"],
    modelAnswer: "is cleaned (The classroom is cleaned by the students every Friday.)",
    materi: "Passive Voice – Simple Present", tujuanPembelajaran: "Mengubah kalimat aktif menjadi kalimat pasif", levelKognitif: "C3"
  },
  {
    id: "bing-is-19", type: "IS", number: 44,
    question: "Complete the conditional sentence using the correct form:\n'If it rains tomorrow, we ___ not go to the beach.'",
    acceptedAnswers: ["will", "will not", "won't"],
    modelAnswer: "will (will not / won't go to the beach) — Type 1 Conditional",
    materi: "Conditional Sentences", tujuanPembelajaran: "Melengkapi conditional sentence type 1 dengan benar", levelKognitif: "C3"
  },
  {
    id: "bing-is-20", type: "IS", number: 45,
    question: "What type of text gives step-by-step instructions on how to make or do something, such as 'How to Make Orange Juice'?",
    acceptedAnswers: ["procedure text", "procedure", "procedural text"],
    modelAnswer: "Procedure text (teks prosedur)",
    materi: "Text Types", tujuanPembelajaran: "Mengidentifikasi jenis teks berdasarkan tujuannya", levelKognitif: "C2"
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
  {
    id: "bing-ut-7", type: "UT", number: 44,
    question: "Write a RECOUNT TEXT about something interesting you did last weekend or during your last school holiday.\n\nYour text must include:\n1. An orientation (who, when, and where)\n2. At least 3 events in the correct time order, using past tense verbs\n3. A re-orientation (a sentence saying how you felt)\n\nMinimum: 6 sentences.",
    modelAnswer: "Last Saturday, my family and I went to Ancol Beach in Jakarta.\n\nWe left home early at seven o'clock in the morning. When we arrived, the beach was already crowded with families. First, my sister and I swam in the sea for about an hour. Then, we built a large sandcastle near the shore. After that, we had lunch at a small restaurant and ate fried fish with vegetables. We went home in the late afternoon.\n\nWe felt very happy and a little tired. It was one of the best weekends I have ever had.",
    keyPoints: [
      "Orientation: menyebutkan waktu dan tempat (when/where) yang jelas",
      "Minimal 3 kejadian berurutan menggunakan past tense",
      "Kata kerja lampau digunakan dengan benar (went, left, arrived, swam, built, ate, dll)",
      "Re-orientation: menyatakan perasaan di akhir teks",
      "Teks runtut dan logis"
    ],
    materi: "Writing – Recount Text", tujuanPembelajaran: "Menulis teks recount sederhana menggunakan past tense", levelKognitif: "C4"
  },
  {
    id: "bing-ut-8", type: "UT", number: 45,
    question: "Read the text below, then answer the questions in English.\n\n'The Importance of Reading\n\nReading is one of the most valuable skills a person can develop. When we read regularly, we improve our vocabulary and our ability to express ourselves. Studies show that students who read at least 20 minutes a day perform significantly better in school.\n\nReading also helps us learn about the world without traveling. Through books, we can explore ancient civilizations and understand different cultures. Moreover, reading fiction helps us develop empathy — the ability to understand and share the feelings of others.\n\nHowever, many young people today prefer watching videos to reading. Experts worry that this may affect their critical thinking and writing skills.'\n\nQuestions:\n1. How many minutes should students read per day, according to the text?\n2. What is one benefit of reading fiction mentioned in the text?\n3. What are experts worried about in today's world?\n4. Find one word in the text that means 'very useful or helpful'.",
    modelAnswer: "1. At least 20 minutes a day.\n2. Reading fiction helps us develop empathy — the ability to understand and share the feelings of others.\n3. Experts are worried that young people prefer watching videos, which may affect their critical thinking and writing skills.\n4. 'Valuable' (meaning very useful or helpful).",
    keyPoints: [
      "Jawaban 1 benar: 20 menit sehari",
      "Jawaban 2 benar: menyebut empati / memahami perasaan orang lain",
      "Jawaban 3 benar: penurunan critical thinking dan kemampuan menulis",
      "Jawaban 4: menemukan kata 'valuable' dengan pemahaman yang benar"
    ],
    materi: "Reading Comprehension – Informational Text", tujuanPembelajaran: "Menjawab pertanyaan pemahaman terhadap teks informasi", levelKognitif: "C3"
  },
  {
    id: "bing-ut-9", type: "UT", number: 46,
    question: "Read this situation and write a letter of advice in English:\n\n'Your friend, Tom (12 years old), spends 6 hours every day playing video games and only 30 minutes studying. His exam results are getting worse and his parents are worried.'\n\nWrite a letter to Tom (at least 6 sentences) advising him how to balance his time between studying and playing games. You MUST use at least TWO modal verbs (should, must, can, could, will) in your advice.",
    modelAnswer: "Dear Tom,\n\nI heard that your exam results have been getting worse lately, and I am worried about you as your friend.\n\nI think you should create a daily schedule that balances studying and playing games. You must finish all your homework and study for at least two hours before you start gaming. You could set a timer to limit your gaming to only two hours per day. You should also make sure you sleep at least eight hours each night, because being well-rested helps you concentrate better in class. If you follow these tips, I am sure your grades will improve.\n\nRemember, games will always be there, but your education is more important right now.\n\nYour friend,\n[Name]",
    keyPoints: [
      "Format surat: Dear ... dan penutup (Your friend / Sincerely) digunakan",
      "Minimal 6 kalimat ditulis",
      "Minimal 2 modal verbs digunakan dengan benar (should/must/can/could/will)",
      "Saran yang diberikan logis dan relevan dengan situasi",
      "Tata bahasa umum dapat dipahami"
    ],
    materi: "Writing – Letter of Advice with Modal Verbs", tujuanPembelajaran: "Menulis surat saran menggunakan modal verb", levelKognitif: "C5"
  },
];

export const binggrisBank: SubjectQuestionBank = {
  pg,
  is,
  ut,
  sessions: [
    // Sesi 1: Dasar (kosakata, sapaan, kalimat sederhana)
    { pg: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], is: [0,1,2,3,4,5,6,7,8,9], ut: [0,1,2,3,4] },
    // Sesi 2: Menengah-Bawah (mix kosakata + tata bahasa dasar)
    { pg: [5,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33], is: [1,2,3,4,5,6,7,8,9,10], ut: [1,2,3,4,5] },
    // Sesi 3: Menengah (past tense, reading comprehension, procedure text)
    { pg: [0,2,4,6,8,10,12,14,16,18,20,22,24,30,32,34,36,38,40,42,44,46,48,26,28], is: [0,2,4,6,8,10,12,14,16,18], ut: [0,2,4,6,8] },
    // Sesi 4: Tinggi (C3-C4: tenses, passive, reported speech, inference)
    { pg: [25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49], is: [5,6,7,8,9,12,13,14,15,16], ut: [3,4,5,6,7] },
    // Sesi 5: Paling Sulit (C4-C5: inference, writing tasks, evaluation)
    { pg: [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,1,3,5,7,9], is: [11,12,13,14,15,16,17,18,19,0], ut: [5,6,7,8,9] },
  ],
};
