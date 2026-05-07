import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Clock, 
  PhoneOff, 
  Flame, 
  HelpCircle, 
  Layers, 
  RefreshCw, 
  User, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Volume2, 
  VolumeX,
  FileText
} from 'lucide-react';
import { quizQuestions, Question } from './questionsData';

export default function App() {
  // Application State
  const [studentName, setStudentName] = useState<string>('');
  const [selectedPersona, setSelectedPersona] = useState<string>('The Hyper-Focused Crammer');
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showImbecileWarning, setShowImbecileWarning] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'survival-system' | 'infosec-course'>('all');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  
  // Simulated Timer state for fun immersion (50 mins Attack Cycle simulation)
  const [secondsLeft, setSecondsLeft] = useState<number>(3000); 
  const [timerActive, setTimerActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && secondsLeft > 0 && !submitted) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, secondsLeft, submitted]);

  // Audio synthesizer for interactive experience
  const playBeep = (type: 'success' | 'error' | 'click' | 'warn') => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc.frequency.setValueAtTime(147, ctx.currentTime + 0.1); // D3
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'warn') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.setValueAtTime(180, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch (e) {
      // Audio context blocked or not supported
    }
  };

  // Personas available for students
  const personas = [
    { name: 'The Hyper-Focused Crammer', icon: '⚡', subtitle: 'Applies the 50/10 rule ruthlessly' },
    { name: 'The Doom Scroller', icon: '📱', subtitle: 'Phone is currently the greatest enemy' },
    { name: 'The 11th Hour Legend', icon: '⏳', subtitle: 'Relies on strategic efficiency over luck' },
    { name: 'The GPA Warrior', icon: '⚔️', subtitle: 'Scans text for keywords to please examiners' }
  ];

  // Filtered Questions list based on UI choices
  const filteredQuestions = quizQuestions.filter(q => {
    const matchesCategory = categoryFilter === 'all' || q.category === categoryFilter;
    const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          q.options.some(opt => opt.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Current selected question object safely
  const currentQuestion: Question | undefined = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Answer selection handler
  const handleSelectAnswer = (questionId: number, optionText: string) => {
    if (submitted) return;
    playBeep('click');
    setAnswers(prev => ({ ...prev, [questionId]: optionText }));
    setShowImbecileWarning(false);
  };

  // Submission process with strict validation
  const handleExamSubmit = () => {
    // Check if ALL questions in the entire database have been answered
    const totalRequiredCount = quizQuestions.length;
    const currentAnsweredCount = Object.keys(answers).length;

    if (currentAnsweredCount < totalRequiredCount) {
      // Throw the specified failure message exactly as requested
      playBeep('warn');
      setShowImbecileWarning(true);
      // Auto-focus or scroll to alert view if needed
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Success flow
    playBeep('success');
    setShowImbecileWarning(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate score values
  const totalQuestionsCount = quizQuestions.length;
  const scoreCorrectCount = quizQuestions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
  const scorePercentage = Math.round((scoreCorrectCount / totalQuestionsCount) * 100);

  // Restart handler
  const handleRestartQuiz = () => {
    playBeep('click');
    setAnswers({});
    setSubmitted(false);
    setShowImbecileWarning(false);
    setCurrentQuestionIndex(0);
    setSecondsLeft(3000);
    setTimerActive(true);
  };

  const startQuizWorkflow = () => {
    playBeep('success');
    setQuizStarted(true);
    setTimerActive(true);
  };

  // Formatting helper for time
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-white">
      {/* Top Ambient Light Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-amber-500 to-rose-600 rounded-xl text-slate-900 font-black shadow-lg shadow-rose-900/20 tracking-wider">
              MIT7103
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                Information Security & Study War Plan <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              </h1>
              <p className="text-xs text-slate-400">Interactive University Mastery Engine • 3-Day Survival System</p>
            </div>
          </div>

          {/* Real-time stats header widget */}
          {quizStarted && (
            <div className="flex items-center flex-wrap gap-3 sm:gap-4">
              <div className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs flex items-center gap-2 text-slate-300">
                <User className="w-3.5 h-3.5 text-teal-400" />
                <span className="max-w-[100px] truncate font-semibold text-teal-300">
                  {studentName || "Anonymous Scholar"}
                </span>
                <span className="text-slate-500">({selectedPersona})</span>
              </div>

              <div className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-2 border transition-colors ${secondsLeft < 300 ? 'bg-rose-950/80 border-rose-700 text-rose-400 animate-pulse' : 'bg-slate-800 border-slate-700 text-amber-400'}`}>
                <Clock className="w-3.5 h-3.5" />
                <span>CYCLE: {formatTime(secondsLeft)}</span>
              </div>

              <div className="bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 border border-slate-700">
                Progress: <span className="text-white font-bold">{Object.keys(answers).length}</span>/{totalQuestionsCount}
              </div>

              <button 
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 text-slate-400 hover:text-white transition-all"
                title={soundEnabled ? "Mute audio synthesizer feedback" : "Enable audio synthesizer feedback"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* CRITICAL ALERTS WINDOW FOR THE SPECIFIED REQUIRED PHRASE */}
        {showImbecileWarning && (
          <div className="mb-6 transform animate-bounce">
            <div className="bg-gradient-to-r from-red-900 via-rose-950 to-red-900 border-2 border-red-500 text-white p-5 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-slate-900 text-2xl font-black shrink-0 shadow-lg">
                ⚠️
              </div>
              <div className="grow text-center sm:text-left">
                <h3 className="text-xl font-black tracking-wide text-rose-300 uppercase">SUBMISSION REJECTED BY EXAM PROCTOR</h3>
                <p className="text-lg font-bold text-white mt-1 italic tracking-wide">
                  "Go finish up the quiz you imbecile"
                </p>
                <p className="text-xs text-rose-200 mt-2">
                  Reason: Every single one of the {totalQuestionsCount} questions based on active recall & the MIT7103 curriculum outline must have an option selected before submission! No shortcuts.
                </p>
              </div>
              <button 
                onClick={() => setShowImbecileWarning(false)}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-slate-900 text-xs font-extrabold rounded-lg uppercase transition-all"
              >
                Dismiss & Obey
              </button>
            </div>
          </div>
        )}

        {/* SCREEN 1: WELCOME SCREEN & PERSONALIZATION */}
        {!quizStarted ? (
          <div className="max-w-3xl mx-auto space-y-8 my-4">
            {/* Core Motivation Quote */}
            <div className="bg-gradient-to-br from-amber-500/20 via-slate-800 to-slate-900 p-6 rounded-2xl border border-amber-500/30 text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-1 bg-amber-500 text-slate-900 uppercase font-black text-[9px] tracking-widest rounded-bl-md">
                Core Directive
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-1">Forget motivation. Execution wins.</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight italic">
                "You need a war plan, not motivation."
              </h2>
              <div className="mt-4 inline-flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span>⚡ 3 Days Left</span>
                <span>•</span>
                <span>🔥 Active Recall</span>
                <span>•</span>
                <span>📚 Course Code: MIT7103</span>
              </div>
            </div>

            {/* Complete Syllabus Rules Excerpt Component */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 shadow-lg">
              <h3 className="text-sm font-mono text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Rules of the Exam Arena
              </h3>
              <div className="text-xs text-slate-300 space-y-2 leading-relaxed max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                <p><strong className="text-amber-400">The Core Strategy:</strong> Don’t study to “understand everything.” Study to recognize, recall, and reproduce marks quickly. Exams reward recall, pattern recognition, presentation, and repetition—not raw intelligence.</p>
                <p><strong className="text-rose-400">Active Recall Mechanism:</strong> Reading from page 1 to 100 and highlighting things creates a false feeling of productivity. Your brain remembers through retrieval, repetition, testing, teaching, and mistakes.</p>
                <p><strong className="text-purple-400">MIT7103 Details:</strong> 3 Credit Units course mapping access controls, risk analysis, e-commerce, cryptology, and disaster recovery. Assessment is split 50% course work and 50% final exams.</p>
                <p className="text-slate-400 italic font-medium">Note: If you attempt to submit this simulator without completing all 41 comprehensive text questions, the system will accurately mock you as per standard extreme university standards.</p>
              </div>
            </div>

            {/* Setup Form Card */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" /> Enter the Simulator Workspace
              </h3>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Student Name / Cadet Alias:
                </label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Scholar Smith (Leave blank for Anonymous)"
                  maxLength={40}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500 text-sm font-medium transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Select Your Academic Persona:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personas.map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => { playBeep('click'); setSelectedPersona(p.name); }}
                      className={`p-4 rounded-xl border text-left transition-all relative ${selectedPersona === p.name ? 'bg-gradient-to-br from-teal-950 to-slate-800 border-teal-500 ring-2 ring-teal-500/20' : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-900'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{p.icon}</span>
                        <div>
                          <p className="text-sm font-bold text-white">{p.name}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{p.subtitle}</p>
                        </div>
                      </div>
                      {selectedPersona === p.name && (
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={startQuizWorkflow}
                  className="w-full py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-center text-base rounded-xl shadow-xl hover:shadow-teal-500/10 active:scale-[0.99] transition-all tracking-wide uppercase"
                >
                  Launch 41-Question Active Recall Arena →
                </button>
              </div>
            </div>

            {/* Quick stats footer for transparency */}
            <div className="text-center text-xs text-slate-500">
              Covers 100% of the 3-Day War Plan text + MIT7103 syllabus metadata. No facts modified.
            </div>
          </div>
        ) : submitted ? (
          
          /* SCREEN 3: DETAILED RESULTS AND REVIEW ENGINE */
          <div className="max-w-4xl mx-auto space-y-8 my-2">
            
            {/* CONGRATULATIONS HEADER CARD */}
            <div className="bg-gradient-to-br from-slate-800 via-teal-950 to-slate-950 border border-teal-500/40 p-6 sm:p-8 rounded-3xl text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-emerald-400 to-amber-500" />
              
              <div className="w-16 h-16 bg-teal-500 text-slate-950 rounded-2xl mx-auto flex items-center justify-center font-bold text-3xl shadow-xl shadow-teal-500/10 mb-4 transform rotate-3">
                🎉
              </div>

              <h2 className="text-3xl font-black text-white tracking-tight">
                CONGRATULATIONS ON FINISHING THE ENTIRE EXAM CRUSHER!
              </h2>
              
              <p className="text-slate-300 max-w-xl mx-auto mt-2 text-sm sm:text-base">
                Greetings, <span className="text-teal-300 font-bold">{studentName || "Elite Academic Weapon"}</span>! You have navigated the chaotic waters of active recall and the MIT7103 Information Security course syllabus perfectly. You are a legendary survivor!
              </p>

              {/* Final score display badge */}
              <div className="my-6 inline-block bg-slate-900/90 rounded-2xl p-4 sm:p-6 border border-slate-700 min-w-[240px]">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Final Verified Mark</p>
                <p className="text-4xl sm:text-5xl font-black text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-amber-400 mt-1">
                  {scoreCorrectCount} / {totalQuestionsCount}
                </p>
                <p className="text-lg font-bold text-white mt-1">
                  Score Percentage: <span className="text-emerald-400">{scorePercentage}%</span>
                </p>
                <div className="mt-2 inline-block px-3 py-1 rounded bg-slate-800 text-xs font-mono text-amber-300 uppercase">
                  Classification: {scorePercentage >= 75 ? "First Class Excellence 🏆" : scorePercentage >= 50 ? "Credit Pass Marks ✅" : "Needs Triage Cycles 🔄"}
                </div>
              </div>

              {/* Insight breakdown cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-center">
                  <p className="text-xs font-mono text-slate-400">Persona Evaluated</p>
                  <p className="text-sm font-bold text-white mt-0.5">{selectedPersona}</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-center">
                  <p className="text-xs font-mono text-slate-400">Strategy Executed</p>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5">Active Retrieval</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-center">
                  <p className="text-xs font-mono text-slate-400">Remaining Energy</p>
                  <p className="text-sm font-bold text-amber-400 mt-0.5">80/20 Optimal</p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl border border-slate-600 transition-all active:scale-95"
                >
                  <RefreshCw className="w-4 h-4 text-teal-400" /> Start Over (Retain Pathways)
                </button>
              </div>
            </div>

            {/* ERROR CORRECTION ENGINE SECTIONS (Returns correct answers for all that were incorrect) */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div>
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-400" /> Comprehensive Audit Log & Active Recall Correction
                  </h3>
                  <p className="text-xs text-slate-400">All questions you got incorrect are clearly highlighted with their respective correct solutions below.</p>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Total Incorrect Checked: <span className="text-rose-400 font-bold">{totalQuestionsCount - scoreCorrectCount}</span>
                </div>
              </div>

              {/* Loop through all questions to show choices + corrections */}
              <div className="space-y-4">
                {quizQuestions.map((q, idx) => {
                  const userChoice = answers[q.id];
                  const isCorrect = userChoice === q.correctAnswer;

                  return (
                    <div 
                      key={q.id} 
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        isCorrect 
                          ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-800' 
                          : 'bg-rose-950/20 border-rose-900/50 hover:border-rose-900/80'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                        <div className="space-y-1">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase ${
                            q.category === 'survival-system' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          }`}>
                            {q.category === 'survival-system' ? '3-Day survival system' : 'MIT7103 info sec'}
                          </span>
                          <h4 className="text-base font-bold text-white">
                            {idx + 1}. {q.question}
                          </h4>
                        </div>

                        <div className="shrink-0 pt-1">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1 Mark)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/30">
                              <XCircle className="w-3.5 h-3.5" /> Incorrect (0 Marks)
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Choices block highlighting */}
                      <div className="mt-3 grid grid-cols-1 gap-2 text-xs">
                        <div className={`p-2.5 rounded-lg border ${isCorrect ? 'bg-slate-800/60 border-emerald-500/20' : 'bg-slate-900 border-rose-500/30 text-rose-300'}`}>
                          <span className="font-mono uppercase text-slate-400 block text-[10px] tracking-wider mb-0.5">Your Choice:</span>
                          <p className="font-medium">{userChoice || "None Selected"}</p>
                        </div>

                        {!isCorrect && (
                          <div className="p-2.5 rounded-lg border bg-slate-900/90 border-emerald-500/50 text-emerald-300">
                            <span className="font-mono uppercase text-emerald-400 block text-[10px] tracking-wider mb-0.5">✨ Correct Answer Required for Marks:</span>
                            <p className="font-bold">{q.correctAnswer}</p>
                          </div>
                        )}
                      </div>

                      {/* Verbatim Explanation block */}
                      <div className="mt-3 p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                        <span className="font-semibold text-slate-300 block text-[11px] mb-1">📖 Text Verification Context:</span>
                        {q.explanation}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
              <p className="text-xs text-slate-400 font-mono">
                MIT7103 Evaluation Engine verified successfully. Marks are locked. Total registered elements: {totalQuestionsCount}.
              </p>
            </div>

          </div>
        ) : (
          
          /* SCREEN 2: ACTIVE RECALL CORE WORKSPACE AREA */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-2">
            
            {/* LEFT 8 COLUMNS: CURRENT QUESTION WORKSPACE */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Active Cycle Context Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 rounded-xl border border-slate-700/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 animate-pulse text-amber-500" /> Currently Answering
                  </span>
                  <p className="text-xs text-slate-400">
                    Use the side grid or search filters to test different components. Do not leave any blank spaces!
                  </p>
                </div>
                
                {/* Category quick tabs toggle */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg self-start sm:self-auto">
                  <button 
                    onClick={() => { playBeep('click'); setCategoryFilter('all'); setCurrentQuestionIndex(0); }}
                    className={`px-2 py-1 text-[11px] rounded font-mono uppercase tracking-tight transition-colors ${categoryFilter === 'all' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    All ({quizQuestions.length})
                  </button>
                  <button 
                    onClick={() => { playBeep('click'); setCategoryFilter('survival-system'); setCurrentQuestionIndex(0); }}
                    className={`px-2 py-1 text-[11px] rounded font-mono uppercase tracking-tight transition-colors ${categoryFilter === 'survival-system' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    War Plan ({quizQuestions.filter(q => q.category === 'survival-system').length})
                  </button>
                  <button 
                    onClick={() => { playBeep('click'); setCategoryFilter('infosec-course'); setCurrentQuestionIndex(0); }}
                    className={`px-2 py-1 text-[11px] rounded font-mono uppercase tracking-tight transition-colors ${categoryFilter === 'infosec-course' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    MIT7103 ({quizQuestions.filter(q => q.category === 'infosec-course').length})
                  </button>
                </div>
              </div>

              {/* Dynamic search input for convenience */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input 
                  type="text"
                  placeholder="Search questions or keyword patterns (e.g., 'Ciampa', 'Blurt', '50/10')..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentQuestionIndex(0); }}
                  className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3 text-[10px] bg-slate-700 hover:bg-slate-600 px-1.5 py-0.5 rounded text-slate-300"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* MAIN QUESTION DISPLAY CARD */}
              {filteredQuestions.length === 0 ? (
                <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 space-y-3">
                  <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
                  <p className="text-slate-300 font-medium">No questions match your filter or search string!</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setCategoryFilter('all'); }} 
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-xs rounded-lg font-mono text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                currentQuestion && (
                  <div className="bg-slate-800 rounded-2xl border border-slate-700/90 shadow-xl overflow-hidden">
                    
                    {/* Top Progress Bar indicator */}
                    <div className="bg-slate-950 px-4 py-3 border-b border-slate-700 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">
                        Filtered List View: <strong className="text-white">{currentQuestionIndex + 1}</strong> of <strong className="text-white">{filteredQuestions.length}</strong>
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                        currentQuestion.category === 'survival-system' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {currentQuestion.category === 'survival-system' ? '🔥 3-Day War Plan' : '🔒 MIT7103 Syllabus'}
                      </span>
                    </div>

                    {/* Question Content */}
                    <div className="p-6 space-y-6">
                      <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                        {currentQuestion.question}
                      </h3>

                      {/* Options Grid */}
                      <div className="space-y-3 pt-2">
                        {currentQuestion.options.map((option, oIdx) => {
                          const optionLetters = ['A', 'B', 'C', 'D'];
                          const isSelected = answers[currentQuestion.id] === option;

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => handleSelectAnswer(currentQuestion.id, option)}
                              className={`w-full p-4 rounded-xl text-left border transition-all text-xs sm:text-sm flex items-start gap-3 relative group ${
                                isSelected 
                                  ? 'bg-gradient-to-r from-teal-950 to-slate-800 border-teal-500 text-white ring-1 ring-teal-500/30 font-semibold' 
                                  : 'bg-slate-900/70 border-slate-700/80 hover:bg-slate-900 hover:border-slate-600 text-slate-300'
                              }`}
                            >
                              <span className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center font-mono font-black text-xs transition-colors ${
                                isSelected ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                              }`}>
                                {optionLetters[oIdx]}
                              </span>
                              
                              <span className="grow pt-0.5">{option}</span>

                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-teal-400 absolute top-4 right-4 animate-ping" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Question navigation controls */}
                    <div className="bg-slate-900/70 px-4 py-3 border-t border-slate-700 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        disabled={currentQuestionIndex === 0}
                        onClick={() => { playBeep('click'); setCurrentQuestionIndex(prev => prev - 1); }}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none rounded-lg text-xs font-medium text-slate-300 flex items-center gap-1 transition-all"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous
                      </button>

                      <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
                        Question ID: #{currentQuestion.id} (Verbatim Record)
                      </div>

                      <button
                        type="button"
                        disabled={currentQuestionIndex === filteredQuestions.length - 1}
                        onClick={() => { playBeep('click'); setCurrentQuestionIndex(prev => prev + 1); }}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none rounded-lg text-xs font-medium text-slate-300 flex items-center gap-1 transition-all"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                )
              )}

              {/* LIVE RECALL HINTS AND TIPS ACCORDING TO THE SUBJECT LAWS */}
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="space-y-1">
                  <p className="font-bold text-amber-400 flex items-center gap-1">💬 Theory Law</p>
                  <p className="text-slate-400">Examiners scan for keywords. Correct concepts matter more than perfect English style.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-teal-400 flex items-center gap-1">🔢 Calculation Law</p>
                  <p className="text-slate-400">Reading solutions is useless. Brain learns calculations through repetition, not passive observation.</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-cyan-400 flex items-center gap-1">💻 Programming Law</p>
                  <p className="text-slate-400">Don't memorize full programs. Master syntax patterns, loops, and logic flows.</p>
                </div>
              </div>

              {/* BIG SUBMIT ACTION TRIGGER PANEL */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-2xl border-2 border-dashed border-slate-700 text-center space-y-4">
                <div>
                  <h4 className="text-base font-bold text-white">Finished Answering Everything?</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">
                    Submitting evaluates your responses across all 41 checklist points. Remember: if any question is left unanswered, the simulator blocks evaluation and delivers the strict imbecile warning.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    Your Answered Metrics: <strong className="text-teal-400">{Object.keys(answers).length}</strong> / {totalQuestionsCount}
                  </div>

                  <button
                    type="button"
                    onClick={handleExamSubmit}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95"
                  >
                    Submit Final Exam & Calculate Marks
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT 4 COLUMNS: THE MAP OF ALL 41 QUESTIONS GRID & LIVE STUDY COMPANION */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* STATUS MATRIX MAP PILLS */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-teal-400" /> Question Matrix ({quizQuestions.length})
                  </h4>
                  <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">
                    Click any pill to jump
                  </span>
                </div>

                {/* Progress helper legend */}
                <div className="flex items-center gap-4 text-[11px] text-slate-400 border-b border-slate-700/60 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-slate-700 inline-block" /> Unanswered
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded bg-teal-500 inline-block" /> Answered
                  </div>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6 gap-2">
                  {quizQuestions.map((q) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isCurrentlyViewed = currentQuestion?.id === q.id;
                    
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => {
                          playBeep('click');
                          // Locate question in filtered array if applicable, or fallback to full list logic
                          const filteredIndex = filteredQuestions.findIndex(fq => fq.id === q.id);
                          if (filteredIndex !== -1) {
                            setCurrentQuestionIndex(filteredIndex);
                          } else {
                            // Reset filter to all so the user can jump to it
                            setCategoryFilter('all');
                            setSearchQuery('');
                            // find index in full list
                            const fullIndex = quizQuestions.findIndex(fq => fq.id === q.id);
                            setCurrentQuestionIndex(fullIndex);
                          }
                        }}
                        className={`py-2 text-xs font-mono font-bold rounded-lg transition-all border ${
                          isCurrentlyViewed
                            ? 'bg-white text-slate-900 border-white shadow-md scale-105 z-10'
                            : isAnswered 
                              ? 'bg-teal-500 text-slate-950 border-teal-600' 
                              : 'bg-slate-900 hover:bg-slate-700 text-slate-400 border-slate-800'
                        }`}
                        title={`Question ${q.id}: ${q.question.substring(0, 40)}...`}
                      >
                        {q.id}
                      </button>
                    );
                  })}
                </div>

                {/* Emergency boosters list view inside matrix */}
                <div className="pt-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/40 space-y-1.5">
                  <p className="text-[11px] font-mono font-bold text-amber-400 uppercase flex items-center gap-1">
                    🚨 Emergency Boosters:
                  </p>
                  <ul className="text-[10px] text-slate-400 space-y-1 list-disc pl-4 leading-normal">
                    <li>Study standing sometimes</li>
                    <li>Teach imaginary students out loud</li>
                    <li>Use timers & drink water frequently</li>
                    <li>Change study locations occasionally</li>
                  </ul>
                </div>
              </div>

              {/* INTEGRATED TEXT CHEAT-SHEET DRAWER WIDGET (Don't remove or change anything requirement helper) */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-4 shadow-md space-y-3">
                <button
                  type="button"
                  onClick={() => { playBeep('click'); setShowCheatSheet(!showCheatSheet); }}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-700 text-xs font-mono text-slate-300 font-bold rounded-lg border border-slate-700 flex items-center justify-between px-3 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-teal-400" /> 
                    {showCheatSheet ? "Hide Syllabus Reference text" : "Show Syllabus Reference text"}
                  </span>
                  <span className="text-[10px] text-slate-500 font-normal">
                    {showCheatSheet ? "Collapse ▲" : "Expand ▼"}
                  </span>
                </button>

                {showCheatSheet && (
                  <div className="bg-slate-950 rounded-xl p-3 text-[11px] text-slate-300 space-y-3 max-h-96 overflow-y-auto custom-scrollbar border border-slate-800">
                    <div className="border-b border-slate-800 pb-1.5">
                      <p className="font-bold text-teal-400">THE 3-DAY SURVIVAL SYSTEM SYSTEM</p>
                      <p className="text-slate-400 italic">Day 1: Triage + Foundation (Notes, Past papers, Slides, Assignments, CATs/quizzes). 80% comes from 20%.</p>
                      <p className="text-slate-400 italic">Hit List: A - MUST KNOW, B - SHOULD KNOW, C - LOW VALUE.</p>
                      <p className="text-slate-400 italic">50/10 Cycle: 50m focused study, 10m break. No TikTok, WhatsApp, YouTube shorts.</p>
                    </div>

                    <div className="border-b border-slate-800 pb-1.5">
                      <p className="font-bold text-amber-400">STUDY CYCLE PHASES</p>
                      <p>Phase 1: Learn (15 mins)</p>
                      <p>Phase 2: Close Everything (20 mins) reproduce from memory</p>
                      <p>Phase 3: Correct Mistakes (10 mins)</p>
                      <p>Phase 4: Rapid Recap (5 mins) 1-page, flashcard, voice note</p>
                      <p>Blurt Method: write everything on blank paper, compare with notes.</p>
                    </div>

                    <div>
                      <p className="font-bold text-cyan-400">MIT7103 COURSE OUTLINE CREDITS: 3</p>
                      <p>Assessment: Course work 50%, Final Exams 50%.</p>
                      <p>1. Intro to IS Security in orgs</p>
                      <p>2. Framework, Breaches, threats, vulnerabilities</p>
                      <p>3. Access controls</p>
                      <p>4. Risk management</p>
                      <p>5. Risk analysis</p>
                      <p>6. E-commerce, Internet Security</p>
                      <p>7. Security policies and procedures</p>
                      <p>8. BCP and disaster recovery</p>
                      <p>9. Privacy and the law</p>
                      <p>10. Current issues & future trends</p>
                    </div>
                  </div>
                )}
              </div>

              {/* TIMEOUT DISCIPLINE PANEL */}
              <div className="bg-gradient-to-br from-rose-950/40 to-slate-900 border border-rose-900/30 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <PhoneOff className="w-4 h-4 text-rose-400" />
                  <h4 className="text-xs font-mono uppercase text-slate-300 font-bold tracking-wider">
                    Discipline Counter-Measure
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  "Your phone is currently your biggest enemy. Put it in another room, use airplane mode, or give it to someone."
                </p>
                <div className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-[10px] text-rose-300 italic font-mono">
                  💡 Highlighting things gives a false sense of productivity. Force active recall right now.
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Page Footer */}
      <footer className="mt-16 border-t border-slate-800 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="font-mono">Course: MIT7103 Information Security • Credit Unit: 3 • Course Work: 50% / Final Exams: 50%</p>
          <p>© 2026 Academic War Plan Suite. Developed with absolute active recall strategies for maximum output performance.</p>
        </div>
      </footer>
    </div>
  );
}
