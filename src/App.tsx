import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What are the three pillars of Information Security (also known as the CIA triad)?",
    options: ["Confidentiality, Integrity, Authentication", "Confidentiality, Integrity, Availability", "Confidentiality, Integrity, Accountability", "Confidentiality, Integration, Availability"],
    correctAnswer: 1,
    explanation: "The CIA triad consists of Confidentiality (data is accessible only to authorized parties), Integrity (data is accurate and unaltered), and Availability (data is accessible when needed).",
    topic: "Introduction to IS Security"
  },
  {
    id: 2,
    question: "What is the difference between a threat and a vulnerability?",
    options: [
      "They are the same thing",
      "A threat is a potential cause of harm, while a vulnerability is a weakness that can be exploited",
      "A vulnerability is more dangerous than a threat",
      "A threat exploits physical weaknesses only"
    ],
    correctAnswer: 1,
    explanation: "A threat is any potential cause of unwanted incident that may result in harm (hackers, malware), while a vulnerability is a weakness in a system that could be exploited by a threat.",
    topic: "Security Frameworks, Breaches, Threats & Vulnerabilities"
  },
  {
    id: 3,
    question: "Which access control model grants access based on the user's role or job function?",
    options: ["DAC (Discretionary Access Control)", "MAC (Mandatory Access Control)", "RBAC (Role-Based Access Control)", "ABAC (Attribute-Based Access Control)"],
    correctAnswer: 2,
    explanation: "RBAC (Role-Based Access Control) assigns permissions to users based on their organizational roles. For example, a manager gets different access than a regular employee.",
    topic: "Access Controls"
  },
  {
    id: 4,
    question: "In risk management, what is the formula for Risk?",
    options: [
      "Risk = Asset × Vulnerability",
      "Risk = Threat × Vulnerability × Asset Value",
      "Risk = Threat + Vulnerability",
      "Risk = Asset Value / Threat"
    ],
    correctAnswer: 1,
    explanation: "Risk is calculated as: Risk = Threat × Vulnerability × Asset Value (or Impact). This helps prioritize which risks to address first.",
    topic: "Risk Management"
  },
  {
    id: 5,
    question: "What is the primary purpose of a Business Continuity Plan (BCP)?",
    options: [
      "To prevent all disasters from happening",
      "To ensure critical business operations can continue during and after a disaster",
      "To punish employees who cause security incidents",
      "To replace the need for insurance"
    ],
    correctAnswer: 1,
    explanation: "BCP focuses on keeping essential business functions running during and after a disaster, ensuring the organization can serve its customers even when facing disruptions.",
    topic: "Business Continuity & Disaster Recovery"
  },
  {
    id: 6,
    question: "Which of the following is NOT a valid authentication factor?",
    options: [
      "Something you know",
      "Something you have",
      "Something you are",
      "Something you want"
    ],
    correctAnswer: 3,
    explanation: "The three authentication factors are: Something you know (password), Something you have (smart card/token), Something you are (biometrics). 'Something you want' is not a recognized factor.",
    topic: "Access Controls"
  },
  {
    id: 7,
    question: "What is quantitative risk analysis?",
    options: [
      "Analysis based on personal opinions and feelings",
      "Analysis that uses numerical values and formulas to calculate risk",
      "Analysis that only looks at worst-case scenarios",
      "Analysis performed by quantitative researchers only"
    ],
    correctAnswer: 1,
    explanation: "Quantitative risk analysis uses numerical values (like dollar amounts, percentages, and mathematical formulas) to measure and prioritize risks objectively.",
    topic: "Risk Analysis"
  },
  {
    id: 8,
    question: "What does SSL/TLS provide in e-commerce transactions?",
    options: [
      "Faster transaction speeds",
      "Encrypted communication between client and server",
      "Guaranteed delivery of goods",
      "Unlimited storage space"
    ],
    correctAnswer: 1,
    explanation: "SSL/TLS provides encryption to ensure that data transmitted between the client and server (like credit card information) cannot be intercepted by attackers.",
    topic: "E-commerce & Internet Security"
  },
  {
    id: 9,
    question: "What is the main purpose of a security policy?",
    options: [
      "To make employees busy with paperwork",
      "To define the organization's security rules and acceptable behavior",
      "To ensure hackers cannot attack",
      "To increase company profits"
    ],
    correctAnswer: 1,
    explanation: "Security policies establish the rules and guidelines that govern how an organization manages and protects its information assets, including acceptable use, password requirements, etc.",
    topic: "Security Policies & Procedures"
  },
  {
    id: 10,
    question: "Which law in many countries protects personal data collected by organizations?",
    options: [
      "The Copyright Act",
      "The Data Protection/Privacy Act",
      "The Traffic Act",
      "The Employment Act"
    ],
    correctAnswer: 1,
    explanation: "Data Protection or Privacy Acts (like GDPR in Europe) regulate how organizations collect, store, process, and share personal information of individuals.",
    topic: "Privacy & the Law"
  },
  {
    id: 11,
    question: "What is a firewall's primary function?",
    options: [
      "To make the network faster",
      "To filter incoming and outgoing network traffic based on security rules",
      "To store backup data",
      "To authenticate users"
    ],
    correctAnswer: 1,
    explanation: "A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules, creating a barrier between trusted and untrusted networks.",
    topic: "Network Security"
  },
  {
    id: 12,
    question: "What is the difference between symmetrical and asymmetrical encryption?",
    options: [
      "They are the same thing",
      "Symmetrical uses one key for both encryption and decryption; asymmetrical uses a pair of keys (public and private)",
      "Symmetrical is slower but more secure",
      "Asymmetrical was invented first"
    ],
    correctAnswer: 1,
    explanation: "Symmetrical encryption uses a single secret key for both encrypting and decrypting data. Asymmetrical encryption uses a pair of keys - a public key to encrypt and a private key to decrypt.",
    topic: "Cryptology & Security Tools"
  },
  {
    id: 13,
    question: "What is a honeypot in information security?",
    options: [
      "A sweet dessert for IT staff",
      "A decoy system designed to attract and detect attackers",
      "A type of malware",
      "A password management tool"
    ],
    correctAnswer: 1,
    explanation: "A honeypot is a decoy system that appears vulnerable to attract attackers, allowing security teams to study attack methods and gather intelligence on threats.",
    topic: "Network Security"
  },
  {
    id: 14,
    question: "What is social engineering?",
    options: [
      "Building social networks",
      "Manipulating people to divulge confidential information",
      "Engineering software for social media",
      "Designing social clubs"
    ],
    correctAnswer: 1,
    explanation: "Social engineering involves manipulating human psychology to convince people to reveal sensitive information or perform actions that compromise security (like phishing, pretexting).",
    topic: "Security Frameworks, Breaches, Threats & Vulnerabilities"
  },
  {
    id: 15,
    question: "What does the principle of 'Least Privilege' mean?",
    options: [
      "Everyone should have minimum wage",
      "Users should only have access to the minimum resources needed to perform their job",
      "Admins should have no privileges",
      "Guest users should have more privileges"
    ],
    correctAnswer: 1,
    explanation: "The principle of Least Privilege states that users and programs should only be granted the minimum permissions necessary to perform their tasks, reducing potential damage from attacks.",
    topic: "Access Controls"
  },
  {
    id: 16,
    question: "What is a Disaster Recovery Plan (DRP)?",
    options: [
      "A plan to prevent natural disasters",
      "A plan to restore IT infrastructure and operations after a disaster",
      "A plan for military recovery operations",
      "A plan to recover from employee sick days"
    ],
    correctAnswer: 1,
    explanation: "DRP focuses specifically on restoring IT systems, applications, and data after a disaster occurs, often as part of the broader Business Continuity Plan.",
    topic: "Business Continuity & Disaster Recovery"
  },
  {
    id: 17,
    question: "What is phishing?",
    options: [
      "A method of fishing for compliments",
      "A type of social engineering attack using deceptive emails/websites to steal information",
      "A networking protocol",
      "A type of firewall"
    ],
    correctAnswer: 1,
    explanation: "Phishing is a cyber attack that uses disguised communication (usually email) to trick the recipient into revealing sensitive information or installing malware.",
    topic: "E-commerce & Internet Security"
  },
  {
    id: 18,
    question: "What is the purpose of intrusion detection systems (IDS)?",
    options: [
      "To prevent all hacking attempts",
      "To detect and alert on suspicious network activity or violations",
      "To speed up network connections",
      "To manage user passwords"
    ],
    correctAnswer: 1,
    explanation: "IDS monitors network traffic for suspicious activity and alerts administrators when potential threats are detected. IPS (Intrusion Prevention Systems) can also take action to block threats.",
    topic: "Network Security"
  },
  {
    id: 19,
    question: "What is authentication in the context of access control?",
    options: [
      "Printing a document",
      "Verifying the identity of a user or system before granting access",
      "Deleting files",
      "Installing software"
    ],
    correctAnswer: 1,
    explanation: "Authentication is the process of verifying that a user or system is who they claim to be, typically through credentials like username/password, tokens, or biometrics.",
    topic: "Access Controls"
  },
  {
    id: 20,
    question: "Which of the following is considered an emerging trend in Information Security?",
    options: [
      "Using floppy disks",
      "AI-powered threat detection and response",
      "Manual password writing",
      "Fax-based communication"
    ],
    correctAnswer: 1,
    explanation: "AI-powered security tools that can detect, analyze, and respond to threats automatically are a major emerging trend, along with zero-trust architecture, cloud security, and quantum-resistant cryptography.",
    topic: "Current Issues & Future Trends"
  }
];

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#ec4899'][Math.floor(Math.random() * 5)],
            width: '10px',
            height: '10px',
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showIncompleteWarning, setShowIncompleteWarning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const answeredCount = answers.filter(a => a !== null).length;
  const progress = (answeredCount / questions.length) * 100;

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setStartTime(new Date());
  };

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(index);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
      setShowExplanation(answers[currentQuestion - 1] !== null);
    }
  };

  const handleSubmit = () => {
    const unanswered = answers.filter(a => a === null).length;
    
    if (unanswered > 0) {
      setShowIncompleteWarning(true);
      return;
    }
    
    setEndTime(new Date());
    setQuizSubmitted(true);
    setShowConfetti(true);
  };

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      } else if (answer !== null) {
        incorrect++;
      }
    });
    
    return { correct, incorrect, total: questions.length };
  };

  const getCorrectCount = () => {
    return answers.filter((a, i) => a !== null && a === questions[i].correctAnswer).length;
  };

  const getElapsedTime = () => {
    if (!startTime) return '';
    const end = endTime || new Date();
    const diff = Math.floor((end.getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="text-6xl mb-2">🛡️</div>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Information Security
            </h1>
            <p className="text-2xl text-indigo-400 font-semibold">MIT7103 Quiz Challenge</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📚</span> Course Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 mb-6">
              <div className="bg-slate-900/50 p-4 rounded-xl">
                <p className="text-indigo-400 font-semibold">Credit Unit</p>
                <p className="text-lg">3 Credits</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl">
                <p className="text-indigo-400 font-semibold">Questions</p>
                <p className="text-lg">{questions.length} Questions</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6">
              This quiz covers all topics from Introduction to IS Security, Access Controls, 
              Risk Management, E-commerce Security, Policies, Disaster Recovery, Privacy Laws, 
              and Emerging Trends.
            </p>
            
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-4 rounded-xl border border-indigo-500/30 mb-6">
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">🎯 What to Expect</h3>
              <ul className="text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Instant feedback after each question
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Detailed explanations for learning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Full results with review at the end
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Track your progress as you go
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-900/20 p-4 rounded-xl border border-amber-500/30 mb-6">
              <p className="text-amber-400 font-semibold flex items-center gap-2">
                <span className="text-xl">⚡</span> Pro Tip from Your Study Guide
              </p>
              <p className="text-slate-300 text-sm mt-2">
                "Your brain remembers through retrieval, repetition, testing, and mistakes. 
                This quiz is designed using the 3-DAY EXAM SURVIVAL SYSTEM — active recall beats passive reading!"
              </p>
            </div>
          </div>
          
          <button
            onClick={handleStartQuiz}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-xl hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-3"
          >
            <span>Start Quiz</span>
            <span className="text-2xl">🚀</span>
          </button>
          
          <p className="text-center text-slate-500 mt-4 text-sm">
            "Execution wins. Perfection is the enemy right now." — 3-Day Exam System
          </p>
        </div>
      </div>
    );
  }

  if (quizSubmitted) {
    const { correct, incorrect } = calculateScore();
    const percentage = Math.round((correct / questions.length) * 100);
    const passed = percentage >= 60;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 py-8">
        {showConfetti && <Confetti />}
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{passed ? '🏆' : '📚'}</div>
            <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {passed ? 'Congratulations, Champion!' : 'Quiz Complete!'}
            </h1>
            <p className="text-xl text-slate-400">
              {passed 
                ? "You've crushed it! Time to celebrate! 🎉" 
                : "Keep studying, you'll get there! 💪"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/30 p-6 rounded-2xl border border-emerald-500/30 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">{correct}</div>
              <p className="text-emerald-300 font-semibold">Correct ✓</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 p-6 rounded-2xl border border-red-500/30 text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">{incorrect}</div>
              <p className="text-red-300 font-semibold">Incorrect ✗</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-800/30 p-6 rounded-2xl border border-indigo-500/30 text-center">
              <div className="text-5xl font-bold text-indigo-400 mb-2">{getElapsedTime()}</div>
              <p className="text-indigo-300 font-semibold">Time Taken ⏱️</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-6">
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${
                percentage >= 80 ? 'bg-emerald-500/20 border-4 border-emerald-500' :
                percentage >= 60 ? 'bg-amber-500/20 border-4 border-amber-500' :
                'bg-red-500/20 border-4 border-red-500'
              }`}>
                <span className={`text-4xl font-bold ${
                  percentage >= 80 ? 'text-emerald-400' :
                  percentage >= 60 ? 'text-amber-400' :
                  'text-red-400'
                }`}>{percentage}%</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              {percentage >= 80 ? "Outstanding Performance! 🌟" :
               percentage >= 60 ? "Good Job! You've Passed! 👍" :
               "Keep Studying! You'll Improve! 💪"}
            </h2>
            
            <div className="divider border-t border-slate-700 my-6"></div>
            
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span>📋</span> Detailed Review
            </h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {questions.map((q, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer === q.correctAnswer;
                
                return (
                  <div 
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      isCorrect 
                        ? 'bg-emerald-900/20 border-emerald-500/30' 
                        : 'bg-red-900/20 border-red-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                      }`}>
                        {isCorrect ? (
                          <span className="text-white font-bold">✓</span>
                        ) : (
                          <span className="text-white font-bold">✗</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium mb-2">
                          Q{index + 1}: {q.question}
                        </p>
                        {!isCorrect && (
                          <div className="space-y-1 mb-2">
                            <p className="text-red-400 text-sm">
                              <span className="font-semibold">Your answer:</span> {q.options[userAnswer!]}
                            </p>
                            <p className="text-emerald-400 text-sm">
                              <span className="font-semibold">Correct answer:</span> {q.options[q.correctAnswer]}
                            </p>
                          </div>
                        )}
                        <div className="bg-slate-800/50 p-3 rounded-lg mt-2">
                          <p className="text-indigo-400 text-sm font-semibold mb-1">💡 Explanation:</p>
                          <p className="text-slate-300 text-sm">{q.explanation}</p>
                        </div>
                        <span className="inline-block mt-2 px-2 py-1 bg-slate-700 rounded text-xs text-slate-400">
                          {q.topic}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                setQuizSubmitted(false);
                setAnswers(new Array(questions.length).fill(null));
                setCurrentQuestion(0);
                setShowConfetti(false);
                setStartTime(new Date());
                setEndTime(null);
              }}
              className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              🔄 Retake Quiz
            </button>
            <button
              onClick={() => {
                setQuizSubmitted(false);
                setQuizStarted(false);
                setAnswers(new Array(questions.length).fill(null));
                setCurrentQuestion(0);
                setShowConfetti(false);
                setStartTime(null);
                setEndTime(null);
              }}
              className="flex-1 py-4 bg-slate-700 text-white font-bold text-lg rounded-xl hover:bg-slate-600 transition-all duration-300"
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showIncompleteWarning) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-red-500/50 text-center">
          <div className="text-6xl mb-4">😤</div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Hold Up There, Champ!
          </h2>
          <p className="text-xl text-red-400 mb-2 font-semibold">
            "Go finish up the quiz you imbecile!"
          </p>
          <p className="text-slate-400 mb-6">
            You still have {questions.length - answeredCount} question(s) unanswered. 
            Complete the quiz before submitting!
          </p>
          
          <div className="bg-slate-900/50 rounded-xl p-4 mb-6">
            <div className="flex justify-between text-slate-300 mb-2">
              <span>Progress</span>
              <span>{answeredCount}/{questions.length}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-amber-500 to-red-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <button
            onClick={() => setShowIncompleteWarning(false)}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
          >
            Continue Quiz →
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === q.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 py-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              🛡️ MIT7103 Quiz
            </h1>
            <p className="text-slate-400 text-sm">Information Security</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-400">{getElapsedTime()}</div>
            <p className="text-slate-500 text-xs">Elapsed Time</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-slate-700">
          <div className="flex justify-between text-slate-300 mb-2">
            <span className="font-medium">Progress</span>
            <span className="font-bold">{answeredCount}/{questions.length}</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <span className="text-emerald-400">✓ {answers.filter(a => a !== null).length} answered</span>
            <span className="text-red-400">✗ {answers.filter(a => a === null).length} remaining</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">
              {q.topic}
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-6 leading-relaxed">
            {q.question}
          </h2>

          <div className="space-y-3">
            {q.options.map((option, index) => {
              const letters = ['A', 'B', 'C', 'D'];
              const isSelected = selectedOption === index;
              const isCorrectOption = index === q.correctAnswer;
              
              let optionClasses = "w-full p-4 rounded-xl text-left flex items-center gap-4 transition-all duration-300 border-2 ";
              
              if (!isAnswered) {
                optionClasses += "bg-slate-900/50 border-slate-600 hover:border-indigo-500 hover:bg-slate-900";
              } else if (isCorrectOption) {
                optionClasses += "bg-emerald-900/50 border-emerald-500 animate-pulse-correct";
              } else if (isSelected && !isCorrectOption) {
                optionClasses += "bg-red-900/50 border-red-500 animate-shake";
              } else {
                optionClasses += "bg-slate-900/30 border-slate-700 opacity-50";
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleSelectOption(index)}
                  disabled={isAnswered}
                  className={optionClasses}
                >
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                    isAnswered && isCorrectOption
                      ? 'bg-emerald-500 text-white'
                      : isAnswered && isSelected && !isCorrectOption
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {letters[index]}
                  </span>
                  <span className={`text-base md:text-lg ${
                    isAnswered && isCorrectOption
                      ? 'text-emerald-300'
                      : isAnswered && isSelected && !isCorrectOption
                      ? 'text-red-300'
                      : 'text-slate-200'
                  }`}>
                    {option}
                  </span>
                  {isAnswered && isCorrectOption && (
                    <span className="ml-auto text-emerald-400 text-2xl">✓</span>
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <span className="ml-auto text-red-400 text-2xl">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mt-6 p-5 rounded-xl border-2 ${
              isCorrect 
                ? 'bg-emerald-900/30 border-emerald-500/50' 
                : 'bg-indigo-900/30 border-indigo-500/50'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{isCorrect ? '🎯' : '💡'}</span>
                <span className={`font-bold text-lg ${isCorrect ? 'text-emerald-400' : 'text-indigo-400'}`}>
                  {isCorrect ? 'Excellent!' : 'Explanation'}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentQuestion === 0
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
          >
            ← Previous
          </button>
          
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestion(index);
                  setSelectedOption(answers[index]);
                  setShowExplanation(answers[index] !== null);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuestion
                    ? 'bg-indigo-500 scale-125'
                    : answers[index] !== null
                    ? 'bg-emerald-500'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
          
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/30"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-500 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30"
            >
              Submit ✓
            </button>
          )}
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-6 bg-slate-800/30 rounded-xl p-4 border border-slate-700/50">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-slate-400">
              <span className="text-emerald-400 font-bold">{getCorrectCount()}</span> Correct
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">
              <span className="text-red-400 font-bold">{answers.filter((a, i) => a !== null && a !== questions[i].correctAnswer).length}</span> Incorrect
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-400">
              <span className="text-amber-400 font-bold">{answers.filter(a => a === null).length}</span> Unanswered
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        
        @keyframes pulse-correct {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
        }
        
        .animate-pulse-correct {
          animation: pulse-correct 1s ease-in-out infinite;
        }
        
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        .animate-confetti {
          animation: confetti-fall 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;