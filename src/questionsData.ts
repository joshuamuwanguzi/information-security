export interface Question {
  id: number;
  category: 'survival-system' | 'infosec-course';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: Question[] = [
  // SECTION 1: THE 3-DAY EXAM SURVIVAL SYSTEM
  {
    id: 1,
    category: 'survival-system',
    question: "What is THE CORE RULE for the 3 days before the exam?",
    options: [
      "Study to understand everything perfectly down to the finest footnotes.",
      "Don't study to 'understand everything.' Study to recognize, recall, and reproduce marks quickly.",
      "Read from page 1 to page 100 continuously without resting.",
      "Spend 12 hours a day highlighting text using different colored neon markers."
    ],
    correctAnswer: "Don't study to 'understand everything.' Study to recognize, recall, and reproduce marks quickly.",
    explanation: "The text says: For the next 3 days: Don’t study to 'understand everything.' Study to recognize, recall, and reproduce marks quickly."
  },
  {
    id: 2,
    category: 'survival-system',
    question: "Exams reward specific behaviors rather than raw intelligence. What four things do they reward?",
    options: [
      "Intelligence, reading speed, text volume, and endurance.",
      "Perfect handwriting, compliance, vocabulary, and luck.",
      "Recall, Pattern recognition, Presentation, and Repetition.",
      "Highlighting efficiency, note ownership, attendance, and sleep deprivation."
    ],
    correctAnswer: "Recall, Pattern recognition, Presentation, and Repetition.",
    explanation: "Exams reward: 1. Recall, 2. Pattern recognition, 3. Presentation, 4. Repetition. Not intelligence."
  },
  {
    id: 3,
    category: 'survival-system',
    question: "What is described as THE BIGGEST MISTAKE people make when preparing for exams?",
    options: [
      "Sleeping too much the night before.",
      "Reading from page 1 to page 100, highlighting things, feeling productive, then failing to answer questions.",
      "Using active recall methods instead of group discussions.",
      "Studying calculation subjects standing up."
    ],
    correctAnswer: "Reading from page 1 to page 100, highlighting things, feeling productive, then failing to answer questions.",
    explanation: "The biggest mistake people make: They read from page 1 to page 100, highlight things, feel productive, then fail to answer questions."
  },
  {
    id: 4,
    category: 'survival-system',
    question: "Why does passive reading fail according to the survival system guide?",
    options: [
      "Because reading is only meant for language arts classes.",
      "Because reading makes the brain too relaxed to focus.",
      "Because reading ≠ remembering.",
      "Because books contain too many tiny details that carry no marks."
    ],
    correctAnswer: "Because reading ≠ remembering.",
    explanation: "Why? Because reading ≠ remembering."
  },
  {
    id: 5,
    category: 'survival-system',
    question: "Through what channels does your brain actually remember information?",
    options: [
      "Observation, scrolling, highlighting, and listening to background music.",
      "Retrieval, repetition, testing, teaching, and mistakes.",
      "Subconscious absorption, sleep learning, and sheer intelligence.",
      "Rewriting notes word-for-word and staring at diagrams."
    ],
    correctAnswer: "Retrieval, repetition, testing, teaching, and mistakes.",
    explanation: "Your brain remembers through: retrieval, repetition, testing, teaching, mistakes."
  },
  {
    id: 6,
    category: 'survival-system',
    question: "What concept must your whole exam-survival strategy revolve around?",
    options: [
      "Passive recognition.",
      "Active recall.",
      "Intuitive comprehension.",
      "Syllabus memorization."
    ],
    correctAnswer: "Active recall.",
    explanation: "So your strategy must revolve around ACTIVE RECALL."
  },
  {
    id: 7,
    category: 'survival-system',
    question: "What is your primary mission during DAY 1 of the survival system?",
    options: [
      "Memorize formulas and practice complex code structures.",
      "Triage + Foundation (Identify what matters most, remove useless content, build a map of the syllabus).",
      "Do full past papers under strict exam conditions.",
      "Create flashcards for all 100 pages of the reference book."
    ],
    correctAnswer: "Triage + Foundation (Identify what matters most, remove useless content, build a map of the syllabus).",
    explanation: "DAY 1 — TRIAGE + FOUNDATION. Your mission: Identify what matters most. Remove useless content. Build a map of the syllabus."
  },
  {
    id: 8,
    category: 'survival-system',
    question: "In Day 1 - Step 1: Gather Everything, what is the maximum recommended time allowed to assemble all materials?",
    options: [
      "15 minutes max.",
      "1 hour max.",
      "3 hours max.",
      "An entire afternoon cycle."
    ],
    correctAnswer: "1 hour max.",
    explanation: "Step 1: Gather Everything (1 hour max). Get notes, handouts, past papers, slides, assignments, CATs/quizzes."
  },
  {
    id: 9,
    category: 'survival-system',
    question: "What rule of distribution dictates where most exam marks originate?",
    options: [
      "50% of exams come from 50% of the easiest topics.",
      "90% of exams come from 10% of standard lectures.",
      "80% of exams come from 20% of content.",
      "100% of exams come from information not mentioned in class."
    ],
    correctAnswer: "80% of exams come from 20% of content.",
    explanation: "80% of exams come from 20% of content. Find that 20%."
  },
  {
    id: 10,
    category: 'survival-system',
    question: "When executing 'Step 2: Predict the Exam', what specific patterns or elements should you look out for?",
    options: [
      "Repeated questions, definitions, formulas, procedures, diagrams, essay patterns, coding structures.",
      "Grammatical tone, spelling errors, page numbering style, font choices.",
      "The longest paragraphs in the reference textbook.",
      "Topics that sound entirely unique and have never been examined before."
    ],
    correctAnswer: "Repeated questions, definitions, formulas, procedures, diagrams, essay patterns, coding structures.",
    explanation: "Look for: repeated questions, definitions, formulas, procedures, diagrams, essay patterns, coding structures."
  },
  {
    id: 11,
    category: 'survival-system',
    question: "According to the guide, if a lecturer repeated something X times in class, it's probably coming in the exam. What is X?",
    options: [
      "2 times.",
      "3 times.",
      "5 times.",
      "10 times."
    ],
    correctAnswer: "5 times.",
    explanation: "If a lecturer repeated something 5 times in class, it’s probably coming."
  },
  {
    id: 12,
    category: 'survival-system',
    question: "What are the 3 categories you must use to build your 'Hit List'?",
    options: [
      "A — MUST KNOW, B — SHOULD KNOW, C — LOW VALUE",
      "A — EASY MARKS, B — MEDIUM EFFORT, C — IMPOSSIBLE",
      "1 — THEORY, 2 — CALCULATIONS, 3 — CODES",
      "X — URGENT, Y — OPTIONAL, Z — REJECTED"
    ],
    correctAnswer: "A — MUST KNOW, B — SHOULD KNOW, C — LOW VALUE",
    explanation: "Make 3 categories: A — MUST KNOW (Likely to appear. High marks. Core concepts.), B — SHOULD KNOW (Moderately important.), C — LOW VALUE (Tiny details. Rare topics.)."
  },
  {
    id: 13,
    category: 'survival-system',
    question: "What is the exact name and timing breakdown of the Attack Cycles recommended for study focus?",
    options: [
      "25/5 Pomodoro method.",
      "60/30 Marathon strategy.",
      "50/10 Method (50 mins focused study, 10 mins break).",
      "90/20 High-intensity interval study."
    ],
    correctAnswer: "50/10 Method (50 mins focused study, 10 mins break).",
    explanation: "50/10 Method: 50 mins focused study, 10 mins break."
  },
  {
    id: 14,
    category: 'survival-system',
    question: "During your 10-minute focus breaks, which specific digital actions are explicitly prohibited?",
    options: [
      "Drinking water and taking a short stretch walk.",
      "TikTok, WhatsApp, YouTube shorts, and random music browsing.",
      "Checking the exam location on the university board.",
      "Reviewing a 1-page mind map or flashcard."
    ],
    correctAnswer: "TikTok, WhatsApp, YouTube shorts, and random music browsing.",
    explanation: "NO: TikTok, WhatsApp, YouTube shorts, random music browsing. Your phone is currently your biggest enemy."
  },
  {
    id: 15,
    category: 'survival-system',
    question: "What is the correct 4-phase sequence and duration breakdown of an actual study session?",
    options: [
      "Phase 1: Read (30m), Phase 2: Highlight (10m), Phase 3: Sleep (15m), Phase 4: Repeat (5m)",
      "Phase 1: Learn (15 mins), Phase 2: Close Everything (20 mins), Phase 3: Correct Mistakes (10 mins), Phase 4: Rapid Recap (5 mins)",
      "Phase 1: Search past papers (20m), Phase 2: Ask friends (20m), Phase 3: Write code (10m), Phase 4: Relax (10m)",
      "Phase 1: Memorize (40m), Phase 2: Test (10m), Phase 3: Group chat (5m), Phase 4: Review notes (5m)"
    ],
    correctAnswer: "Phase 1: Learn (15 mins), Phase 2: Close Everything (20 mins), Phase 3: Correct Mistakes (10 mins), Phase 4: Rapid Recap (5 mins)",
    explanation: "The Right Way: Phase 1 — Learn (15 mins); Phase 2 — Close Everything (20 mins); Phase 3 — Correct Mistakes (10 mins); Phase 4 — Rapid Recap (5 mins)."
  },
  {
    id: 16,
    category: 'survival-system',
    question: "What exactly happens during Phase 2 (Close Everything) of the study session?",
    options: [
      "You take a quick nap to solidify long-term storage.",
      "You check your phone to see if the lecturer changed the exam date.",
      "You reproduce from memory definitions, formulas, processes, diagrams, code syntax, or explanations WITHOUT looking.",
      "You call a study partner to verify answers together."
    ],
    correctAnswer: "You reproduce from memory definitions, formulas, processes, diagrams, code syntax, or explanations WITHOUT looking.",
    explanation: "Phase 2 — Close Everything (20 mins). Now reproduce from memory: definitions, formulas, processes, diagrams, code syntax, explanations. WITHOUT looking. This is where learning actually happens."
  },
  {
    id: 17,
    category: 'survival-system',
    question: "How does the 'BLURT METHOD' work and why is it so powerful?",
    options: [
      "You talk aloud as fast as you can until you run out of breath.",
      "You write down everything you remember about a topic on blank paper, then compare with notes to instantly expose weak areas.",
      "You guess the answers based on multiple-choice letter frequency patterns.",
      "You skim the table of contents and write a broad overview."
    ],
    correctAnswer: "You write down everything you remember about a topic on blank paper, then compare with notes to instantly expose weak areas.",
    explanation: "THE 'BLURT METHOD': Take blank paper. Write EVERYTHING you remember about a topic. Then compare with notes. This exposes weak areas immediately. This method crushes passive reading."
  },
  {
    id: 18,
    category: 'survival-system',
    question: "What elements should you focus on for THEORY SUBJECTS (e.g., ICT theory, networking, management, database concepts)?",
    options: [
      "Flawless English grammar, complex narrative essays, and elegant prose style.",
      "Definitions, differences, advantages/disadvantages, steps/processes, diagrams, and keywords.",
      "Memorizing specific authors' biography details and textbook chapter page counts.",
      "Deriving formulas from first principles and creating original charts."
    ],
    correctAnswer: "Definitions, differences, advantages/disadvantages, steps/processes, diagrams, and keywords.",
    explanation: "THEORY SUBJECTS Strategy: Focus on: definitions, differences, advantages/disadvantages, steps/processes, diagrams, keywords. Examiners scan for keywords. You don’t need perfect English. You need correct concepts."
  },
  {
    id: 19,
    category: 'survival-system',
    question: "What is the 5-step strategy for mastering CALCULATION SUBJECTS (math, statistics, physics, accounting)?",
    options: [
      "1. Read solutions, 2. Highlight variables, 3. Memorize final values, 4. Hope for similar numbers.",
      "1. Example question, 2. Hide solution, 3. Solve alone, 4. Check mistakes, 5. Repeat similar question.",
      "1. Open formula sheet, 2. Copy examples 3 times, 3. Look at diagrams, 4. Rest your eyes.",
      "1. Watch tutorials, 2. Observe solutions, 3. Practice mentally, 4. Do nothing on paper."
    ],
    correctAnswer: "1. Example question, 2. Hide solution, 3. Solve alone, 4. Check mistakes, 5. Repeat similar question.",
    explanation: "CALCULATION SUBJECTS Strategy: Do: 1. Example question, 2. Hide solution, 3. Solve alone, 4. Check mistakes, 5. Repeat similar question. Your brain learns calculations through repetition, not observation."
  },
  {
    id: 20,
    category: 'survival-system',
    question: "In PROGRAMMING SUBJECTS (C, VB, Java, PHP), what should you focus on instead of wasting time memorizing entire programs?",
    options: [
      "The historical background of the language creators.",
      "Syntax patterns, loops, arrays, conditions, functions, common errors, and logic flow.",
      "Typing speed, code styling, comments syntax, and IDE installation steps.",
      "Memorizing the code line by line from standard github repositories."
    ],
    correctAnswer: "Syntax patterns, loops, arrays, conditions, functions, common errors, and logic flow.",
    explanation: "PROGRAMMING SUBJECTS Strategy: Do NOT waste time memorizing entire programs. Focus on: syntax patterns, loops, arrays, conditions, functions, common errors, logic flow."
  },
  {
    id: 21,
    category: 'survival-system',
    question: "According to the guide, why do most students fail programming subjects?",
    options: [
      "Because compilers are intentionally rigged against students.",
      "Because they only 'understand' code but never write it themselves.",
      "Because they don't buy premium computer science textbooks.",
      "Because their code has too many comments."
    ],
    correctAnswer: "Because they only 'understand' code but never write it themselves.",
    explanation: "Most students fail programming because they only “understand” code but never write it themselves."
  },
  {
    id: 22,
    category: 'survival-system',
    question: "What is the guide's explicit directive regarding sleep and all-nighters?",
    options: [
      "Pull all-nighters every single day because sleeping is a luxury for after exams.",
      "Do NOT pull all-nighters unless absolutely necessary; sleep deprivation destroys recall, focus, and memory formation. Sleep 5.5–7 hours.",
      "Sleep exactly 10 hours a day to keep your mind entirely strain-free.",
      "Sleep for only 2 hours and rely on energy booster fluids instead."
    ],
    correctAnswer: "Do NOT pull all-nighters unless absolutely necessary; sleep deprivation destroys recall, focus, and memory formation. Sleep 5.5–7 hours.",
    explanation: "Do NOT pull all-nighters unless absolutely necessary. Sleep deprivation destroys: recall, focus, memory formation. Better: sleep 5.5–7 hours, wake early, revise actively."
  },
  {
    id: 23,
    category: 'survival-system',
    question: "What does the '3-2-1 Revision Method' require you to do right before sleeping?",
    options: [
      "Eat 3 snacks, drink 2 glasses of water, and set 1 alarm.",
      "Quickly review 3 major topics, 2 moderate topics, and 1 difficult topic to strengthen memory consolidation.",
      "Solve 3 hard codes, 2 math equations, and 1 essay outline.",
      "Text 3 classmates, check 2 group chats, and write 1 cheat sheet."
    ],
    correctAnswer: "Quickly review 3 major topics, 2 moderate topics, and 1 difficult topic to strengthen memory consolidation.",
    explanation: "THE 3-2-1 REVISION METHOD before sleeping: Review: 3 major topics, 2 moderate topics, 1 difficult topic. Quick review only. This strengthens memory consolidation during sleep."
  },
  {
    id: 24,
    category: 'survival-system',
    question: "What are the designated DOs and DONTs for the morning of the exam?",
    options: [
      "DO start a brand new complex topic; DON'T sleep or drink water.",
      "DO review summaries, formulas, keywords, mistakes; DON'T start new topics, panic, or discuss with over-anxious classmates.",
      "DO debate points with nervous friends; DON'T review your single-page flashcards.",
      "DO read all 100 pages again quickly; DON'T check your previous mistakes."
    ],
    correctAnswer: "DO review summaries, formulas, keywords, mistakes; DON'T start new topics, panic, or discuss with over-anxious classmates.",
    explanation: "THE MORNING OF THE EXAM: DO: review summaries, formulas, keywords, mistakes you made before. DON’T: start new topics, panic, discuss with over-anxious classmates. Panic is contagious."
  },
  {
    id: 25,
    category: 'survival-system',
    question: "What should you do during the first 5 minutes of the exam?",
    options: [
      "Immediately start writing the answer to Question 1 as fast as possible.",
      "Scan the whole paper and mark questions into easy, medium, and hard categories.",
      "Close your eyes and meditate to eliminate stress.",
      "Look around to see who else looks panicked."
    ],
    correctAnswer: "Scan the whole paper and mark questions into easy, medium, and hard categories.",
    explanation: "DURING THE EXAM: First 5 Minutes: Scan the whole paper. Mark: easy, medium, hard. Start with questions you can score fastest. Confidence builds momentum."
  },
  {
    id: 26,
    category: 'survival-system',
    question: "What is the vital rule to follow if you forget a specific answer during the exam?",
    options: [
      "Leave the space completely blank to show integrity.",
      "Don't freeze. Write related concepts, partial steps, formulas, or definitions, because partial marks save lives and blank spaces kill grades.",
      "Stare at the ceiling until memory suddenly returns.",
      "Raise your hand and ask the examiner for hints."
    ],
    correctAnswer: "Don't freeze. Write related concepts, partial steps, formulas, or definitions, because partial marks save lives and blank spaces kill grades.",
    explanation: "If You Forget Something: Don’t freeze. Write: related concepts, partial steps, formulas, definitions. Partial marks save lives. Blank spaces kill grades."
  },
  {
    id: 27,
    category: 'survival-system',
    question: "What is the realistic 3-day schedule breakdown for Morning, Afternoon, and Evening slots?",
    options: [
      "Morning: TikTok; Afternoon: Lecture reading; Evening: Passive audio listening.",
      "Morning: Hardest subjects/topics; Afternoon: Practice questions/past papers/active recall; Evening: Light revision/flashcards/summary sheets.",
      "Morning: Past papers; Afternoon: Sleep interval; Evening: Extreme programming drill.",
      "Morning: Light revision; Afternoon: Hardest topics; Evening: Sleep preparation."
    ],
    correctAnswer: "Morning: Hardest subjects/topics; Afternoon: Practice questions/past papers/active recall; Evening: Light revision/flashcards/summary sheets.",
    explanation: "A REALISTIC 3-DAY SCHEDULE: MORNING: Hardest subjects/topics. Brain is freshest. AFTERNOON: Practice questions. Past papers. Active recall. EVENING: Light revision. Flashcards. Summary sheets."
  },
  {
    id: 28,
    category: 'survival-system',
    question: "What is the absolute FINAL PRIORITY ORDER for strategic efficiency (from highest to lowest priority)?",
    options: [
      "1. Everything else, 2. Practice questions, 3. Past papers, 4. Core definitions, 5. Lecturer emphasis.",
      "1. Past papers, 2. Lecturer emphasis, 3. Repeated concepts, 4. Core definitions/formulas, 5. Practice questions, 6. Everything else.",
      "1. Textbook page order, 2. Internet tutorials, 3. Assignments, 4. Past papers, 5. Flashcards.",
      "1. Lecturer emphasis, 2. Textbooks, 3. Group work notes, 4. Quiz answers, 5. Speculative topics."
    ],
    correctAnswer: "1. Past papers, 2. Lecturer emphasis, 3. Repeated concepts, 4. Core definitions/formulas, 5. Practice questions, 6. Everything else.",
    explanation: "FINAL PRIORITY ORDER: 1. Past papers, 2. Lecturer emphasis, 3. Repeated concepts, 4. Core definitions/formulas, 5. Practice questions, 6. Everything else."
  },
  {
    id: 29,
    category: 'survival-system',
    question: "Which of the following are listed as EMERGENCY BOOSTERS when concentration levels are bad?",
    options: [
      "Drinking energy drinks, checking social feeds, using dual screens, and listening to fast tempo music.",
      "Study standing sometimes, teach imaginary students, read aloud, use timers, drink water frequently, change locations occasionally.",
      "Calling friends to complain, eating large meals, sleeping for 20 minutes every hour.",
      "Skipping difficult chapters entirely and switching to an easier course."
    ],
    correctAnswer: "Study standing sometimes, teach imaginary students, read aloud, use timers, drink water frequently, change locations occasionally.",
    explanation: "EMERGENCY BOOSTERS: Study standing sometimes. Teach imaginary students. Read aloud. Use timers. Drink water frequently. Change locations occasionally."
  },

  // SECTION 2: COURSE DETAILS - INFORMATION SECURITY (MIT7103)
  {
    id: 30,
    category: 'infosec-course',
    question: "What is the official Course Name and Course Code for the information security unit provided?",
    options: [
      "Advanced Systems Security - ASS3100",
      "Information Security - MIT7103",
      "Cybersecurity Management - SEC7102",
      "Network Protection Frameworks - MIT8101"
    ],
    correctAnswer: "Information Security - MIT7103",
    explanation: "The text specifies: Course Name: Information Security, Course Code: MIT7103."
  },
  {
    id: 31,
    category: 'infosec-course',
    question: "How many Credit Units are allocated to the course MIT7103?",
    options: [
      "2 Credit Units",
      "3 Credit Units",
      "4 Credit Units",
      "5 Credit Units"
    ],
    correctAnswer: "3 Credit Units",
    explanation: "The text explicitly states: Credit Unit: 3."
  },
  {
    id: 32,
    category: 'infosec-course',
    question: "According to the brief course description, which methods, models, techniques, and controls are discussed?",
    options: [
      "Risk analysis, qualitative and quantitative matrices, and access controls (such as passwords, smart cards, and security auditing).",
      "Blockchain ledger configuration, standard machine learning classification models, and quantum cryptography key distribution.",
      "Biometric retinal laser tracking, automated continuous deployment firewalls, and remote facial authorization.",
      "Heuristic antivirus engineering, malware sandbox configuration, and zero-trust edge networking architecture."
    ],
    correctAnswer: "Risk analysis, qualitative and quantitative matrices, and access controls (such as passwords, smart cards, and security auditing).",
    explanation: "The text states: 'including risk analysis, qualitative and quantitative matrices, and access controls: such as passwords, smart cards, and security auditing.'"
  },
  {
    id: 33,
    category: 'infosec-course',
    question: "What is the primary Course Objective of MIT7103?",
    options: [
      "To teach students full-stack software security engineering frameworks and cloud container optimization.",
      "To provide students with knowledge of current security philosophies, security methodologies, security analysis and design methods and techniques, security management, and professional ethics.",
      "To prepare students for corporate governance legal certifications and public accounting audits.",
      "To introduce automated penetration testing scripts, shellcode writing, and ethical hacking vulnerability hunting."
    ],
    correctAnswer: "To provide students with knowledge of current security philosophies, security methodologies, security analysis and design methods and techniques, security management, and professional ethics.",
    explanation: "Course Objective: This Course is intended to provide students with knowledge of current security philosophies, security methodologies, security analysis and design methods and techniques, security, management, and professional ethics."
  },
  {
    id: 34,
    category: 'infosec-course',
    question: "How many official Learning Outcomes are specified for the course MIT7103?",
    options: [
      "3 Learning Outcomes",
      "4 Learning Outcomes",
      "5 Learning Outcomes",
      "6 Learning Outcomes"
    ],
    correctAnswer: "5 Learning Outcomes",
    explanation: "The outline explicitly enumerates items 1 through 5 under 'Learning Outcomes'."
  },
  {
    id: 35,
    category: 'infosec-course',
    question: "Under Learning Outcome 5, what three core elements of the secure IS framework must be maintained in professional development?",
    options: [
      "Privacy, non-repudiation, and durability",
      "Authenticity, reliability, and accuracy",
      "Confidentiality, integrity, and availability",
      "Efficiency, speed, and safety"
    ],
    correctAnswer: "Confidentiality, integrity, and availability",
    explanation: "Learning Outcome 5 mentions: 'maintaining a secure IS framework; in relation to confidentiality, integrity, and availability, in the professional development of information systems'."
  },
  {
    id: 36,
    category: 'infosec-course',
    question: "Which of the following represents an exact item listed in the 10-point Course Outline?",
    options: [
      "Mobile device exploitation and wireless sniffing",
      "Business continuity plans (BCP) and disaster recovery",
      "Cloud virtualization architecture and multi-tenancy hazards",
      "Social engineering defense and phishing response metrics"
    ],
    correctAnswer: "Business continuity plans (BCP) and disaster recovery",
    explanation: "The Course Outline includes: 'Business continuity plans (BCP) and disaster recovery'."
  },
  {
    id: 37,
    category: 'infosec-course',
    question: "What are the four specified Modes of Delivery for MIT7103?",
    options: [
      "Online tutorials, hackathons, open source contributions, peer code reviews",
      "Lecture, Practical, Presentation, Group work",
      "Distance learning, laboratory sessions, individual research, oral defense",
      "Video recordings, coding bootcamps, automated feedback loops, seminar papers"
    ],
    correctAnswer: "Lecture, Practical, Presentation, Group work",
    explanation: "Mode of delivery: Lecture, Practical, Presentation, Group work."
  },
  {
    id: 38,
    category: 'infosec-course',
    question: "What is the exact Mode of Assessment split between course work and final exams?",
    options: [
      "Course work 40% / Final Exams 60%",
      "Course work 30% / Final Exams 70%",
      "Course work 50% / Final Exams 50%",
      "Course work 20% / Final Exams 80%"
    ],
    correctAnswer: "Course work 50% / Final Exams 50%",
    explanation: "Mode of Assessment: Course work 50%, Final Exams 50%."
  },
  {
    id: 39,
    category: 'infosec-course',
    question: "Who is the author of 'Security+ Guide to Network Security Fundamentals, (2nd Edn)' (2005) from the Basic Reading List?",
    options: [
      "Maiwald, E.",
      "Ciampa, M.",
      "Palmer, M.",
      "Whiteman, M. E. & Mattord, H. J."
    ],
    correctAnswer: "Ciampa, M.",
    explanation: "Basic Reading List item 1: Ciampa, M. (2005). Security+ Guide to Network Security Fundamentals, (2nd Edn)."
  },
  {
    id: 40,
    category: 'infosec-course',
    question: "Which text in the Basic Reading List was authored by Erbschloe, M. in 2003?",
    options: [
      "Fundamentals of Network Security",
      "Corporate Computer and Network Security",
      "Guide to Disaster Recovery",
      "Electronic Commerce and the Law"
    ],
    correctAnswer: "Guide to Disaster Recovery",
    explanation: "Basic Reading List item 2: Erbschloe, M. (2003). Guide to Disaster Recovery. Boston, Massachusetts: Thomson Technology."
  },
  {
    id: 41,
    category: 'infosec-course',
    question: "Which publisher/text pair is accurately represented in the basic reading list for MIT7103?",
    options: [
      "Panko, R. R. (2004) - Corporate Computer and Network Security (New Jersey: Pearson Education International)",
      "Quirk, P. & Forder, J. (2003) - Guide to Operating Systems Security (McGraw-Hill)",
      "Maiwald, E. (2004) - Security+ Guide to Network Security Fundamentals (Thomson Technology)",
      "Palmer, M. (2004) - Electronic Commerce and the Law (John Wiley & Sons)"
    ],
    correctAnswer: "Panko, R. R. (2004) - Corporate Computer and Network Security (New Jersey: Pearson Education International)",
    explanation: "Item 5 specifies: Panko, R. R. (2004). Corporate Computer and Network Security. New Jersey: Pearson Education International."
  }
];
