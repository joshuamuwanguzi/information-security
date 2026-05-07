# Information Security Quiz - SPEC.md

## Concept & Vision

An energetic, engaging exam preparation quiz that transforms mundane revision into an interactive challenge. The app feels like a game rather than homework — with progress tracking, instant feedback, celebratory moments, and just enough sass to keep university students entertained. Think "study buddy who doesn't judge" meets "arcade-style learning."

## Design Language

### Aesthetic Direction
Cyberpunk-meets-academia: dark mode with neon accent glows, matrix-style decorative elements, and clean card-based UI. The vibe is "hacker training simulator meets modern web app."

### Color Palette
- **Primary**: #6366f1 (Indigo - trust/security)
- **Secondary**: #10b981 (Emerald - success/correct)
- **Accent**: #f59e0b (Amber - energy/warning)
- **Error**: #ef4444 (Red - incorrect)
- **Background**: #0f172a (Dark slate)
- **Surface**: #1e293b (Elevated dark)
- **Text Primary**: #f8fafc
- **Text Secondary**: #94a3b8

### Typography
- **Headings**: 'Orbitron', sans-serif (techy, futuristic)
- **Body**: 'Inter', sans-serif (clean, readable)

### Motion Philosophy
- Smooth 300ms transitions on all interactions
- Pulse animations on correct answers
- Shake animation on incorrect answers
- Confetti explosion on quiz completion
- Progress bar animated fills
- Question cards slide in/out

## Layout & Structure

### Page Structure
1. **Header**: Course info, timer (optional), progress indicator
2. **Main Quiz Area**: Question cards with options
3. **Navigation**: Previous/Next buttons, progress dots
4. **Footer**: Submit button, score preview

### Responsive Strategy
- Mobile-first design
- Questions stack vertically on mobile
- Side-by-side options on tablet+
- Max-width container for readability

## Features & Interactions

### Core Features
1. **Question Navigation**: 20 questions covering all topics
2. **Single/Multiple Choice**: Different question types
3. **Progress Tracking**: Visual progress bar + answered count
4. **Instant Feedback**: Show correct answer immediately after selection
5. **Score Summary**: Final score with breakdown
6. **Incomplete Submission Warning**: Sassy message for unfinished quizzes
7. **Answer Review**: Show what was wrong and why

### Question Topics Covered
- Introduction to IS Security
- Security frameworks, breaches, threats, vulnerabilities
- Access controls
- Risk management & analysis
- E-commerce/Internet Security
- Security policies and procedures
- Business continuity & disaster recovery
- Privacy and law
- Current issues and trends

### Interaction Details
- Click option → immediate feedback (green flash for correct, red shake for wrong)
- Cannot change answer after selection (exam realism)
- "Next" appears after answering
- Submit disabled until all questions answered (with sass if attempted early)
- Confetti animation triggers on 100% completion and submission

### Edge Cases
- Unanswered questions show as "unanswered" in review
- Timer optional (not enforcing, just showing elapsed time)
- Refresh warning if quiz in progress

## Component Inventory

### Question Card
- Question number badge
- Question text
- Topic tag
- Options list (A, B, C, D style)
- States: unanswered, answered, reviewed

### Option Button
- Default: dark surface with border
- Hover: glowing border effect
- Selected: indigo fill
- Correct: emerald with checkmark
- Incorrect: red with X, shake animation

### Progress Bar
- Animated fill based on answered/total
- Percentage text
- Color transitions as progress increases

### Result Card
- Final score percentage
- Correct/incorrect/partial counts
- Topic breakdown
- Correct answer explanations for missed questions

### Submit Button
- Disabled state when incomplete
- Shows "X questions remaining"
- Sassy modal when attempting early submission

## Technical Approach

- React with TypeScript
- Tailwind CSS for styling
- useState for quiz state management
- Questions stored as JSON array
- No external dependencies beyond React
- Confetti animation via CSS/JS