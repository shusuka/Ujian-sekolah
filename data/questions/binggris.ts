import { PGQuestion, ISQuestion, UTQuestion, SubjectQuestionBank } from "@/lib/types";

const pg: PGQuestion[] = [
  // ===== READING COMPREHENSION – TEKS DESKRIPTIF (C2-C3) =====
  {
    id: "bing-pg-1", type: "PG", number: 1,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Borobudur-Nothwest-view.jpg/400px-Borobudur-Nothwest-view.jpg",
    question: "Look at the photo of Borobudur Temple above, then read the descriptive text below.\n\n'Borobudur Temple is one of the greatest Buddhist monuments in the world. It is located in Magelang, Central Java, Indonesia. Built in the 9th century during the reign of the Syailendra dynasty, the temple consists of nine stacked platforms topped by a central dome. Borobudur is decorated with 2,672 relief panels and 504 Buddha statues. In 1991, it was listed as a UNESCO World Heritage Site and continues to attract millions of visitors from around the world each year.'\n\nAccording to the text, where is Borobudur Temple located?",
    options: [
      "In Yogyakarta, Central Java, Indonesia",
      "In Magelang, Central Java, Indonesia",
      "In Surakarta, Central Java, Indonesia",
      "In Semarang, Central Java, Indonesia"
    ],
    correctAnswer: 1,
    materi: "Reading Comprehension – Descriptive Text", tujuanPembelajaran: "Menemukan informasi tersurat dalam teks deskriptif", levelKognitif: "C2"
  },
  {
    id: "bing-pg-2", type: "PG", number: 2,
    question: "Still referring to the Borobudur text above.\n\nThe word 'decorated' in the sentence 'Borobudur is decorated with 2,672 relief panels and 504 Buddha statues' is closest in meaning to ...",
    options: [
      "damaged and destroyed over time",
      "hidden from visitors behind walls",
      "adorned and beautified with carvings",
      "measured and counted by scientists"
    ],
    correctAnswer: 2,
    materi: "Reading Comprehension – Vocabulary in Context", tujuanPembelajaran: "Memahami arti kata dalam konteks teks deskriptif", levelKognitif: "C2"
  },

  // ===== READING COMPREHENSION – RECOUNT TEXT (C2-C4) =====
  {
    id: "bing-pg-3", type: "PG", number: 3,
    chartData: {
      type: "timeline",
      events: [
        { year: "06.30", event: "Left school in the morning" },
        { year: "08.30", event: "Arrived at TMII (2 hours later)" },
        { year: "Morning", event: "Visited Miniature Park – models of traditional houses" },
        { year: "Mid-day", event: "Watched traditional dance performance" },
        { year: "Afternoon", event: "Had lunch, then explored Science Museum" },
        { year: "Late afternoon", event: "Returned to school — tired but happy" },
      ],
    },
    question: "Read the timeline and recount text below about a field trip to TMII.\n\n'Last month, our class went on a field trip to Taman Mini Indonesia Indah (TMII) in Jakarta. We left school at 6.30 in the morning and arrived two hours later. First, we visited the Miniature Park where we saw scale models of traditional houses from all 38 provinces of Indonesia. Then we watched a colourful traditional dance performance at the central stage. After that, we had lunch and spent the rest of the afternoon exploring the Science Museum. We returned to school in the late afternoon, feeling tired but very happy.'\n\nWhat did the class do FIRST after arriving at TMII?",
    options: [
      "Watched a traditional dance performance at the central stage",
      "Had lunch at a restaurant near the museum",
      "Visited the Miniature Park and saw models of traditional houses",
      "Explored the Science Museum exhibits"
    ],
    correctAnswer: 2,
    materi: "Reading Comprehension – Recount Text", tujuanPembelajaran: "Menemukan informasi tersurat dalam teks recount", levelKognitif: "C2"
  },
  {
    id: "bing-pg-4", type: "PG", number: 4,
    question: "Referring to the TMII recount text above.\n\nHow long did it take for the class to travel from school to TMII?",
    options: ["30 minutes", "1 hour", "2 hours", "3 hours"],
    correctAnswer: 2,
    materi: "Reading Comprehension – Recount Text", tujuanPembelajaran: "Menemukan informasi spesifik dalam teks recount", levelKognitif: "C2"
  },
  {
    id: "bing-pg-5", type: "PG", number: 5,
    question: "Referring to the TMII recount text above.\n\nThe students returned to school feeling 'tired but very happy.' What can be INFERRED from this ending?",
    options: [
      "The trip was too exhausting and the students did not enjoy it",
      "The students could not wait to go home because TMII was boring",
      "Despite being physically tired, the students had a meaningful and enjoyable trip",
      "The students want to stay at TMII and not return to school"
    ],
    correctAnswer: 2,
    materi: "Reading Comprehension – Inference", tujuanPembelajaran: "Menarik kesimpulan dari informasi tersirat dalam teks recount", levelKognitif: "C4"
  },

  // ===== READING COMPREHENSION – PROCEDURE TEXT (C2-C3) =====
  {
    id: "bing-pg-6", type: "PG", number: 6,
    chartData: {
      type: "table",
      caption: "How to Plant a Seed – Step by Step",
      headers: ["Step", "Action", "Key Detail"],
      rows: [
        ["Step 1", "Fill pot with soil", "Almost full"],
        ["Step 2", "Make a hole", "1–2 cm deep, in the centre"],
        ["Step 3", "Place seeds + cover", "One or two seeds, cover gently"],
        ["Step 4", "Water carefully", "Moist, NOT too wet"],
        ["Step 5", "Place in sunny spot", "Near a window, check every day"],
        ["Step 6", "Wait for sprout", "About 1–2 weeks"],
      ],
    },
    question: "Study the step-by-step table above, then read the procedure text.\n\nHow to Plant a Seed\nWhat you need: a small pot, soil, seeds, water.\n\nStep 1: Fill a small pot with soil until it is almost full.\nStep 2: Make a small hole in the centre of the soil, about 1–2 cm deep.\nStep 3: Place one or two seeds into the hole and cover them gently with soil.\nStep 4: Water the seeds carefully — just enough to make the soil moist, not too wet.\nStep 5: Place the pot in a sunny spot near a window and check every day.\nStep 6: In about one to two weeks, the seed will start to sprout.\n\nAccording to the procedure, what should you do BEFORE placing the seeds into the hole?",
    options: [
      "Water the seeds until the soil is soaking wet",
      "Place the pot near a sunny window first",
      "Cover the seeds gently with soil",
      "Make a small hole in the centre of the soil"
    ],
    correctAnswer: 3,
    materi: "Reading Comprehension – Procedure Text", tujuanPembelajaran: "Memahami urutan langkah dalam teks prosedur", levelKognitif: "C2"
  },
  {
    id: "bing-pg-7", type: "PG", number: 7,
    question: "Referring to the 'How to Plant a Seed' procedure text above.\n\nIn Step 4, it says to water the seeds 'just enough to make the soil moist, not too wet.' The word 'moist' in this context means ...",
    options: [
      "completely dry and powdery",
      "slightly damp — not too wet and not too dry",
      "very wet and fully soaked with water",
      "hard and compacted like dried clay"
    ],
    correctAnswer: 1,
    materi: "Reading Comprehension – Vocabulary in Context", tujuanPembelajaran: "Memahami makna kata dalam konteks teks prosedur", levelKognitif: "C2"
  },
  {
    id: "bing-pg-8", type: "PG", number: 8,
    question: "Referring to the 'How to Plant a Seed' text above.\n\nWhat is the MAIN PURPOSE of this text?",
    options: [
      "To describe the different types of seeds and where they are found in nature",
      "To tell an interesting story about a gardener who grows plants",
      "To give step-by-step instructions on how to plant a seed correctly",
      "To persuade readers to buy gardening tools and start a garden"
    ],
    correctAnswer: 2,
    materi: "Text Purpose – Procedure Text", tujuanPembelajaran: "Mengidentifikasi tujuan penulisan teks prosedur", levelKognitif: "C2"
  },

  // ===== GRAMMAR – PRESENT TENSE & PAST TENSE (C2-C3) =====
  {
    id: "bing-pg-9", type: "PG", number: 9,
    question: "Choose the sentence with the CORRECT subject-verb agreement in simple present tense.\n\n(Note: When the subject is he, she, it, or a singular noun, we add -s or -es to the verb.)",
    options: [
      "My sister always go to school by bicycle every morning.",
      "The children plays in the garden after school every day.",
      "Mr. Budi teaches English at our school every Monday and Thursday.",
      "They walks to the library together every Wednesday afternoon."
    ],
    correctAnswer: 2,
    materi: "Grammar – Simple Present Tense (Subject-Verb Agreement)", tujuanPembelajaran: "Menggunakan kesesuaian subjek dan kata kerja dalam simple present tense", levelKognitif: "C3"
  },
  {
    id: "bing-pg-10", type: "PG", number: 10,
    question: "Choose the correct verb form to complete the sentence below.\n\n'Last Tuesday, Deni and his classmates ___ (go) to the National Museum in Jakarta for their annual class trip.'",
    options: ["go", "goed", "going", "went"],
    correctAnswer: 3,
    materi: "Grammar – Simple Past Tense (Irregular Verbs)", tujuanPembelajaran: "Menggunakan kata kerja tidak beraturan dalam simple past tense", levelKognitif: "C2"
  },
  {
    id: "bing-pg-11", type: "PG", number: 11,
    question: "Fill in the blank with the CORRECT past tense form.\n\n'Last night, Sari ___ (study) for three hours before going to bed. She wanted to prepare as well as possible for the science test this morning.'",
    options: ["study", "studyed", "studied", "studies"],
    correctAnswer: 2,
    materi: "Grammar – Simple Past Tense (Regular Verbs)", tujuanPembelajaran: "Menggunakan kata kerja beraturan dalam simple past tense", levelKognitif: "C2"
  },
  {
    id: "bing-pg-12", type: "PG", number: 12,
    question: "Read the description carefully and choose the sentence that best describes the action happening RIGHT NOW.\n\n'It is 3 PM on Tuesday. Reza is sitting at the kitchen table. His exercise books are open in front of him, he has a pencil in his hand, and he is looking down at the page with concentration.'\n\nThe sentence that best describes what Reza is doing at this moment is ...",
    options: [
      "Reza cooked dinner in the kitchen this afternoon.",
      "Reza is doing his homework at the kitchen table.",
      "Reza did his homework yesterday afternoon.",
      "Reza will study after he finishes his dinner."
    ],
    correctAnswer: 1,
    materi: "Grammar – Present Continuous Tense", tujuanPembelajaran: "Menggunakan present continuous tense untuk menggambarkan kegiatan yang sedang berlangsung", levelKognitif: "C3"
  },
  {
    id: "bing-pg-13", type: "PG", number: 13,
    question: "Complete the sentence below using the CORRECT future tense form.\n\n'Our class teacher announced this morning that next month our school ___ (hold) an English speech competition for all sixth-grade students. The winner will represent the school in the district competition.'",
    options: ["held", "hold", "has held", "will hold"],
    correctAnswer: 3,
    materi: "Grammar – Simple Future Tense (will)", tujuanPembelajaran: "Menggunakan will untuk menyatakan rencana di masa depan", levelKognitif: "C2"
  },

  // ===== GRAMMAR – COMPARATIVES & SUPERLATIVES (C2-C3) =====
  {
    id: "bing-pg-14", type: "PG", number: 14,
    question: "Fill in the blank with the CORRECT comparative form.\n\n'According to geological data, Mount Bromo stands at 2,329 metres above sea level, while Mount Rinjani in Lombok reaches 3,726 metres above sea level. This means Mount Rinjani is ___ than Mount Bromo.'",
    options: ["high", "highest", "higher", "more high"],
    correctAnswer: 2,
    materi: "Grammar – Adjectives (Comparative)", tujuanPembelajaran: "Menggunakan bentuk komparatif kata sifat dengan benar", levelKognitif: "C2"
  },
  {
    id: "bing-pg-15", type: "PG", number: 15,
    question: "Fill in the blank with the CORRECT superlative form.\n\n'Geographers have measured many great rivers: the Yangtze (6,300 km), the Amazon (6,400 km), and the Nile (6,650 km). Based on these measurements, the Nile River is ___ river in the world.'",
    options: ["longer", "the longer", "long", "the longest"],
    correctAnswer: 3,
    materi: "Grammar – Adjectives (Superlative)", tujuanPembelajaran: "Menggunakan bentuk superlatif kata sifat dengan benar", levelKognitif: "C2"
  },

  // ===== GRAMMAR – MODAL VERBS (C3) =====
  {
    id: "bing-pg-16", type: "PG", number: 16,
    question: "Read the dialogue and choose the CORRECT modal verb.\n\nDoctor: 'You have a high fever and need rest. You ___ go back to school until you feel completely better. Stay at home, drink plenty of water, and take your medicine regularly.'\n\nWhich modal verb correctly completes the doctor's advice?",
    options: [
      "can freely",
      "should always",
      "must not",
      "might"
    ],
    correctAnswer: 2,
    materi: "Grammar – Modal Verbs (Must not – Prohibition/Warning)", tujuanPembelajaran: "Menggunakan modal verb must not untuk menyatakan larangan atau peringatan", levelKognitif: "C3"
  },
  {
    id: "bing-pg-17", type: "PG", number: 17,
    question: "A student asks their teacher for advice: 'I always get very nervous during presentations and tend to forget what I am supposed to say. How can I improve?'\n\nWhich response gives CORRECT advice using an appropriate modal verb?",
    options: [
      "You must practise your presentation aloud in front of a mirror every evening before the event.",
      "You will nervous every time you practise.",
      "You can to feel better if you just stop worrying about it.",
      "You should practising more to feel more confident."
    ],
    correctAnswer: 0,
    materi: "Grammar – Modal Verbs (Must – Strong Advice)", tujuanPembelajaran: "Menggunakan modal verb untuk memberikan saran yang kuat", levelKognitif: "C3"
  },

  // ===== GRAMMAR – QUESTIONS & PREPOSITIONS (C3) =====
  {
    id: "bing-pg-18", type: "PG", number: 18,
    question: "Read this statement: 'Rina goes to school by bus every morning.'\n\nWhich of the following is the CORRECT yes/no question form of the sentence above?",
    options: [
      "Do Rina go to school by bus every morning?",
      "Does Rina goes to school by bus every morning?",
      "Does Rina go to school by bus every morning?",
      "Is Rina goes to school by bus every morning?"
    ],
    correctAnswer: 2,
    materi: "Grammar – Question Formation (Simple Present)", tujuanPembelajaran: "Membentuk kalimat tanya dalam simple present tense", levelKognitif: "C3"
  },
  {
    id: "bing-pg-19", type: "PG", number: 19,
    question: "Choose the CORRECT prepositions to complete the sentence.\n\n'The class field trip to the botanical garden is scheduled ___ Friday, ___ 7 o'clock ___ the morning. Please arrive at school five minutes early.'",
    options: [
      "in / at / in",
      "on / at / in",
      "at / in / on",
      "on / in / at"
    ],
    correctAnswer: 1,
    materi: "Grammar – Prepositions of Time (in/at/on)", tujuanPembelajaran: "Menggunakan preposisi waktu yang tepat dalam kalimat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-20", type: "PG", number: 20,
    question: "Choose the CORRECT conjunction to connect the two ideas below.\n\n'Andi prepared very well for the examination and felt confident going into the test. ___, he did not achieve the highest score in the class, because many other students had also studied extremely hard.'",
    options: ["Because", "Although", "However", "Therefore"],
    correctAnswer: 2,
    materi: "Grammar – Conjunctions (Contrast: However)", tujuanPembelajaran: "Menggunakan konjungsi yang tepat untuk menghubungkan ide yang bertentangan", levelKognitif: "C3"
  },

  // ===== VOCABULARY IN CONTEXT (C2-C3) =====
  {
    id: "bing-pg-21", type: "PG", number: 21,
    question: "Read the sentence and choose the BEST meaning for the underlined word.\n\n'After weeks of drought, the farmers were overjoyed when the heavy rains finally arrived and their withered crops began to recover.'\n\nThe word 'drought' in the sentence above means ...",
    options: [
      "a long period of very heavy and damaging rainfall",
      "a long period of unusually dry weather with very little or no rain",
      "strong, destructive winds that flatten crops and trees",
      "a type of insect pest that eats and destroys plant leaves"
    ],
    correctAnswer: 1,
    materi: "Vocabulary – Word Meaning in Context", tujuanPembelajaran: "Memahami arti kata dalam konteks kalimat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-22", type: "PG", number: 22,
    question: "Choose the word that is CLOSEST in meaning (synonym) to the word in bold in the sentence below.\n\n'The young scientist made a **remarkable** discovery that will completely change how doctors treat this serious disease in the future.'",
    options: [
      "ordinary and common",
      "old and long forgotten",
      "extraordinary and deeply impressive",
      "dangerous and potentially harmful"
    ],
    correctAnswer: 2,
    materi: "Vocabulary – Synonyms", tujuanPembelajaran: "Mengidentifikasi sinonim kata dalam konteks kalimat", levelKognitif: "C2"
  },
  {
    id: "bing-pg-23", type: "PG", number: 23,
    question: "Choose the word that has the OPPOSITE meaning (antonym) to the word in bold in the sentence below.\n\n'The new school library is a **spacious** and well-lit room where students love to read, study, and borrow books after class.'",
    options: [
      "beautiful and modern in design",
      "noisy and overcrowded with students",
      "narrow and cramped with very little room",
      "expensive and luxuriously decorated"
    ],
    correctAnswer: 2,
    materi: "Vocabulary – Antonyms in Context", tujuanPembelajaran: "Mengidentifikasi antonim kata dalam konteks kalimat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-24", type: "PG", number: 24,
    question: "Study the word forms below:\n• 'She treats others with great respect.' (noun)\n• 'We should respect our teachers and parents.' (verb)\n• 'He is always respectful when speaking to elders.' (adjective)\n\nNow choose the sentence that uses the word 'responsible' CORRECTLY as an ADJECTIVE:",
    options: [
      "She always takes full responsibility for her actions, good or bad.",
      "The sixth-grade students are responsible for keeping their own classroom clean.",
      "We need someone with a great responsibly for leading this important project.",
      "He must responsibly every student who is working in his group project."
    ],
    correctAnswer: 1,
    materi: "Vocabulary – Word Forms (Adjective in Context)", tujuanPembelajaran: "Menggunakan bentuk kata yang tepat (adjective) dalam kalimat", levelKognitif: "C3"
  },

  // ===== FUNCTIONAL LANGUAGE (C3) =====
  {
    id: "bing-pg-25", type: "PG", number: 25,
    question: "Read the dialogue and choose the BEST expression to complete it.\n\nTeacher: 'Class, for our group project on environmental issues, what topic do you think would be most interesting and important to research?'\n\nAisyah: '___, we should choose the topic of plastic waste in the ocean because it is seriously damaging marine life and is entering the food chain that affects human health too.'\n\nThe correct expression to give an opinion is ...",
    options: [
      "In my opinion",
      "On the other hand",
      "As a result",
      "In addition to that"
    ],
    correctAnswer: 0,
    materi: "Functional Language – Expressing Opinions", tujuanPembelajaran: "Menggunakan ekspresi yang tepat untuk mengungkapkan pendapat", levelKognitif: "C3"
  },
  {
    id: "bing-pg-26", type: "PG", number: 26,
    question: "A new student asks for help finding the library:\n\nNew student: 'Excuse me, I'm looking for the school library. Could you tell me how to get there?'\n\nWhich is the MOST appropriate and helpful response?",
    options: [
      "The library? I'm not sure where it is. You should ask someone else.",
      "Sure! Go straight along this corridor, turn left at the science room, and the library is the third door on your right.",
      "Why don't you have a map of the school? Everyone gets one on the first day.",
      "Just walk around and you will find it sooner or later."
    ],
    correctAnswer: 1,
    materi: "Functional Language – Giving Directions", tujuanPembelajaran: "Menggunakan bahasa fungsional untuk memberikan petunjuk arah secara sopan dan jelas", levelKognitif: "C3"
  },

  // ===== TEXT TYPES (C3-C4) =====
  {
    id: "bing-pg-27", type: "PG", number: 27,
    question: "Read the two short texts below and identify their correct TEXT TYPES.\n\nText A: 'Once upon a time, a clever mouse helped a mighty lion escape from a hunter's trap. The lion had laughed when the tiny mouse first offered to help, but he soon felt deeply grateful for the mouse's quick thinking and sharp teeth.'\n\nText B: 'Last Sunday, I visited my grandmother in Bogor. We spent the morning cooking her special rendang recipe together, and I carefully wrote down every step. It was the most delicious meal I have ever tasted in my life.'\n\nThe correct text types for Text A and Text B are respectively ...",
    options: [
      "Procedure text and Descriptive text",
      "Narrative text and Recount text",
      "Report text and Narrative text",
      "Recount text and Procedure text"
    ],
    correctAnswer: 1,
    materi: "Text Types – Narrative and Recount", tujuanPembelajaran: "Mengidentifikasi jenis teks berdasarkan ciri-ciri dan tujuannya", levelKognitif: "C3"
  },
  {
    id: "bing-pg-28", type: "PG", number: 28,
    question: "Read the two messages below and answer the question.\n\nMessage A: 'Dear Mr. Hendra, I am writing to formally inform you that due to a family emergency, I will be unable to attend school tomorrow, Wednesday, 7 May. I kindly request your permission to be absent and will submit all missed work upon my return. Yours sincerely, Rizky'\n\nMessage B: 'Hey Bro, can't come to school tmrw, got a family thing. CU later!! 😊'\n\nWhat is the MAIN DIFFERENCE between Message A and Message B?",
    options: [
      "Message A uses informal, casual language; Message B uses formal, professional language",
      "Message A is formal, using complete and polite language; Message B is informal, using casual and shortened language",
      "Both messages have essentially the same level of formality and politeness",
      "Message A is significantly shorter and easier to read than Message B"
    ],
    correctAnswer: 1,
    materi: "Language Style – Formal vs Informal Language", tujuanPembelajaran: "Membedakan penggunaan bahasa formal dan informal dalam konteks nyata", levelKognitif: "C4"
  },
  {
    id: "bing-pg-29", type: "PG", number: 29,
    question: "Arrange the following sentences into a CORRECT and LOGICAL paragraph about washing dishes.\n\n(1) After rinsing thoroughly, dry the plates with a clean cloth and put them back in the cupboard.\n(2) The first step is to scrape any leftover food from the plates into the rubbish bin.\n(3) Rinse each plate under clean running water to remove all soap and suds completely.\n(4) Washing dishes properly after meals is an important household skill that everyone should learn.\n(5) Next, fill the sink with warm water and add a few drops of dishwashing liquid, then scrub each plate gently with a sponge.\n\nThe CORRECT logical order is ...",
    options: [
      "4 – 2 – 5 – 3 – 1",
      "2 – 4 – 5 – 1 – 3",
      "4 – 5 – 2 – 3 – 1",
      "2 – 5 – 4 – 1 – 3"
    ],
    correctAnswer: 0,
    materi: "Writing – Sentence Arrangement (Procedure Paragraph)", tujuanPembelajaran: "Menyusun kalimat-kalimat menjadi paragraf yang runtut dan logis", levelKognitif: "C3"
  },
  {
    id: "bing-pg-30", type: "PG", number: 30,
    question: "Read the passage below and answer the question.\n\n'Every year on October 28th, Indonesians celebrate Youth Pledge Day (Hari Sumpah Pemuda) to commemorate the historic moment in 1928 when young people from across the archipelago declared their commitment to one homeland, one nation, and one language — Indonesia. This declaration was a powerful turning point in the nation's long struggle for independence. Schools across the country hold flag ceremonies, essay competitions, and cultural performances to honour this important day and inspire the next generation.'\n\nWhat INFERENCE can you make about the importance of Youth Pledge Day based on the text?",
    options: [
      "Youth Pledge Day is celebrated only in a few big cities and is not widely known",
      "Youth Pledge Day is no longer very relevant because it happened nearly 100 years ago",
      "Youth Pledge Day is a deeply significant national event that connects young Indonesians to their history and national identity",
      "Schools celebrate Youth Pledge Day mainly because the government requires it by law"
    ],
    correctAnswer: 2,
    materi: "Reading Comprehension – Inference (Expository Text)", tujuanPembelajaran: "Menarik kesimpulan dari teks eksposisi tentang peristiwa bersejarah", levelKognitif: "C4"
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
    question: "Read the sentence carefully and fill in the blank with the CORRECT past tense form of the verb in brackets.\n\n'When the teacher ___ (enter) the classroom yesterday morning, all the students were already sitting quietly at their desks and ready to start the lesson.'",
    acceptedAnswers: ["entered"],
    modelAnswer: "entered (regular verb: enter → entered)",
    materi: "Grammar – Simple Past Tense (Regular Verbs)", tujuanPembelajaran: "Menggunakan kata kerja beraturan dalam simple past tense", levelKognitif: "C2"
  },
  {
    id: "bing-is-2", type: "IS", number: 27,
    question: "Read the sentence below and identify the meaning of the underlined word in Indonesian.\n\n'The expedition team had to abandon their camp and retreat to safety when the storm became too dangerous to continue their climb up the mountain.'\n\nThe word 'abandon' in the sentence above means ... (in Indonesian)",
    acceptedAnswers: ["meninggalkan", "meninggalkan", "melepaskan"],
    modelAnswer: "Meninggalkan / melepaskan (to leave something behind, to give up on something)",
    materi: "Vocabulary – Word Meaning in Context", tujuanPembelajaran: "Memahami makna kata dalam konteks kalimat dan menerjemahkannya", levelKognitif: "C2"
  },
  {
    id: "bing-is-3", type: "IS", number: 28,
    question: "Fill in the blank with the CORRECT comparative form of the adjective in brackets.\n\n'Scientists have measured many mountains in Indonesia. Mount Kerinci in Sumatra is 3,805 metres high, while Mount Rinjani in Lombok is 3,726 metres. Therefore, Mount Kerinci is ___ (tall) than Mount Rinjani.'",
    acceptedAnswers: ["taller"],
    modelAnswer: "taller (tall → taller: add -er to short adjectives for comparatives)",
    materi: "Grammar – Adjectives (Comparative)", tujuanPembelajaran: "Menggunakan bentuk komparatif kata sifat dalam konteks", levelKognitif: "C2"
  },
  {
    id: "bing-is-4", type: "IS", number: 29,
    question: "Read the following short text and answer the question.\n\n'Ragunan Zoo is one of the oldest and largest zoos in Indonesia. Located in South Jakarta, it covers an area of about 140 hectares and is home to more than 4,000 animals from over 290 species. It is a popular destination for families and school trips every weekend.'\n\nApproximately how many animal species can be found at Ragunan Zoo?",
    acceptedAnswers: ["290", "over 290", "more than 290"],
    modelAnswer: "More than 290 species (over 290 species)",
    materi: "Reading Comprehension – Report Text", tujuanPembelajaran: "Menemukan informasi spesifik dalam teks laporan", levelKognitif: "C2"
  },
  {
    id: "bing-is-5", type: "IS", number: 30,
    question: "Read the opening lines of a text:\n\n'Once upon a time in a faraway kingdom, there lived a young princess who had never been allowed to leave the palace walls. One day, she discovered a hidden door in the garden that led to an enchanted forest...'\n\nBased on these opening lines, what type of text is this?",
    acceptedAnswers: ["narrative", "narrative text", "teks naratif"],
    modelAnswer: "Narrative text — it begins with 'Once upon a time' and tells an imaginative story with characters, setting, and conflict",
    materi: "Text Types – Identifying Narrative Text", tujuanPembelajaran: "Mengidentifikasi jenis teks berdasarkan ciri-ciri pembukanya", levelKognitif: "C2"
  },
  {
    id: "bing-is-6", type: "IS", number: 31,
    question: "Fill in the blank with the correct MODAL VERB.\n\n'Before crossing a busy road, you ___ always look left and right, and use the pedestrian crossing when one is available. Your safety depends on it.'",
    acceptedAnswers: ["must", "should"],
    modelAnswer: "must / should (both express strong obligation or important advice for safety)",
    materi: "Grammar – Modal Verbs (Must/Should for Obligation and Advice)", tujuanPembelajaran: "Menggunakan modal verb untuk menyatakan kewajiban atau saran yang penting", levelKognitif: "C2"
  },
  {
    id: "bing-is-7", type: "IS", number: 32,
    question: "Fill in the blank with the correct CONJUNCTION to complete the sentence logically.\n\n'Dina studied very hard every night for two weeks before the national exam. ___, she achieved the highest score in her school and made her family extremely proud.'",
    acceptedAnswers: ["as a result", "therefore", "consequently"],
    modelAnswer: "As a result / Therefore / Consequently — showing cause and effect between the hard study and the high score",
    materi: "Grammar – Conjunctions (Result/Consequence)", tujuanPembelajaran: "Menggunakan konjungsi yang menunjukkan hubungan sebab-akibat", levelKognitif: "C3"
  },
  {
    id: "bing-is-8", type: "IS", number: 33,
    question: "Read the sentence below and find the grammar MISTAKE. Write the CORRECT form of the wrong word.\n\n'Yesterday, Rina and her friends goes to the school library to borrow books for their group project on climate change.'\n\nThe incorrect word is 'goes' — the correct form should be ___.",
    acceptedAnswers: ["went"],
    modelAnswer: "went — because 'yesterday' indicates past tense, and the past form of 'go' is 'went'",
    materi: "Grammar – Error Correction (Simple Past – Irregular Verb)", tujuanPembelajaran: "Menemukan dan memperbaiki kesalahan tata bahasa dalam kalimat", levelKognitif: "C3"
  },
  {
    id: "bing-is-9", type: "IS", number: 34,
    question: "Change the active sentence below to a PASSIVE VOICE sentence by filling in the blank.\n\nActive: 'The students clean the classroom every Friday afternoon before going home.'\nPassive: 'The classroom ___ by the students every Friday afternoon before they go home.'",
    acceptedAnswers: ["is cleaned", "gets cleaned"],
    modelAnswer: "is cleaned (The classroom is cleaned by the students every Friday afternoon.)",
    materi: "Grammar – Passive Voice (Simple Present)", tujuanPembelajaran: "Mengubah kalimat aktif menjadi kalimat pasif dalam simple present tense", levelKognitif: "C3"
  },
  {
    id: "bing-is-10", type: "IS", number: 35,
    question: "Translate the following sentence from Indonesian to English.\n\n'Para ilmuwan percaya bahwa perubahan iklim adalah salah satu tantangan terbesar yang dihadapi oleh generasi muda saat ini.'\n\nWrite your answer in English.",
    acceptedAnswers: ["scientists believe that climate change is one of the greatest challenges facing young people today", "scientists believe climate change is one of the biggest challenges facing the younger generation today"],
    modelAnswer: "Scientists believe that climate change is one of the greatest challenges facing young people today.",
    materi: "Translation – Indonesian to English", tujuanPembelajaran: "Menerjemahkan kalimat dari Bahasa Indonesia ke Bahasa Inggris secara akurat", levelKognitif: "C3"
  },
  {
    id: "bing-is-11", type: "IS", number: 36,
    question: "Read the following sentence and write the ONE WORD that best completes it.\n\n'The ancient Prambanan temple complex was ___ by a powerful earthquake in the 16th century, but many of its structures have since been carefully restored by archaeologists and historians.'\n\nThe missing word (hint: it means 'badly damaged or partly destroyed') is ...",
    acceptedAnswers: ["damaged", "destroyed", "devastated", "ruined"],
    modelAnswer: "damaged / destroyed / devastated / ruined (all describe the temple being badly affected by the earthquake)",
    materi: "Vocabulary – Context Clues", tujuanPembelajaran: "Menggunakan konteks kalimat untuk menemukan kata yang tepat", levelKognitif: "C3"
  },
  {
    id: "bing-is-12", type: "IS", number: 37,
    question: "Fill in the blank to complete the TYPE 1 CONDITIONAL sentence below.\n\n'If our school's football team practises harder and improves their teamwork, they ___ win the inter-school tournament next month.'\n\n(Hint: Use will + verb for Type 1 Conditional — a real, likely future possibility.)",
    acceptedAnswers: ["will", "will win", "will probably win"],
    modelAnswer: "will (will win — Type 1 conditional: If + present tense, will + base verb)",
    materi: "Grammar – Conditional Sentences Type 1", tujuanPembelajaran: "Melengkapi conditional sentence type 1 untuk mengungkapkan kemungkinan di masa depan", levelKognitif: "C3"
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
