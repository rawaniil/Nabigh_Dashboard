import { useState, useEffect, useMemo } from "react";

function QuizAPI() {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [showResult, setShowResult] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [answered, setAnswered] = useState(false);

    // Decode HTML entities
    const decodeHTML = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    // Fetch questions
    const fetchQuestions = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://opentdb.com/api.php?amount=15&category=18"
            );

            if (response.status === 429) {
                throw new Error("Too many requests. Please wait a minute and try again.");
            }

            if (!response.ok) {
                throw new Error("Failed to fetch questions. Please try again.");
            }

            const data = await response.json();

            if (data.response_code === 0 && data.results) {
                setQuestions(data.results);
                setError(null);
            } else {
                throw new Error("No questions available. Please try again later.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    // Timer countdown
    useEffect(() => {
        if (showResult || questions.length === 0 || answered) return;

        if (timeLeft === 0) {
            handleNextQuestion();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, showResult, questions.length, answered]);

    const handleAnswerClick = (answer) => {
        if (answered) return;

        setSelectedAnswer(answer);
        setAnswered(true);

        const currentQuestion = questions[currentIndex];
        if (answer === currentQuestion.correct_answer) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setAnswered(false);
        setTimeLeft(15);

        if (currentIndex === questions.length - 1) {
            setShowResult(true);
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setTimeLeft(15);
        setShowResult(false);
        setError(null);
        setAnswered(false);
        fetchQuestions();
    };

    const getButtonClass = (answer) => {
        if (!answered) return "answer-btn";

        const currentQuestion = questions[currentIndex];
        const correctAnswer = currentQuestion.correct_answer;

        if (answer === correctAnswer) {
            return "answer-btn correct";
        }

        if (answer === selectedAnswer && answer !== correctAnswer) {
            return "answer-btn incorrect";
        }

        return "answer-btn";
    };


    const answers = useMemo(() => {
        if (questions.length === 0) return [];
        
        const currentQuestion = questions[currentIndex];
        return [
            currentQuestion.correct_answer,
            ...currentQuestion.incorrect_answers
        ].sort(() => Math.random() - 0.5);
    }, [currentIndex, questions]);

    if (loading) {
        return (
            <div className="quiz-container">
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading quiz questions...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="quiz-container">
                <div className="error-card">
                    <h2>⚠️ Oops!</h2>
                    <p>{error}</p>
                    <button className="restart-btn" onClick={handleRestartQuiz}>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (showResult) {
        const percentage = Math.round((score / questions.length) * 100);
        let message = "";
        
        if (percentage >= 80) message = "Excellent! 🎉";
        else if (percentage >= 60) message = "Good job! 👍";
        else if (percentage >= 40) message = "Not bad! 💪";
        else message = "Keep practicing! ";

        return (
            <div className="quiz-container">
                <div className="result-card">
                    <div className="result-header">
                        <h1>Quiz Complete!</h1>
                        <div className="score-circle">
                            <div className="score-percentage">{percentage}%</div>
                        </div>
                    </div>
                    
                    <h2 className="result-message">{message}</h2>
                    
                    <div className="result-details">
                        <div className="result-item">
                            <span className="result-label">Correct Answers:</span>
                            <span className="result-value">{score}</span>
                        </div>
                        <div className="result-item">
                            <span className="result-label">Total Questions:</span>
                            <span className="result-value">{questions.length}</span>
                        </div>
                        <div className="result-item">
                            <span className="result-label">Accuracy:</span>
                            <span className="result-value">{percentage}%</span>
                        </div>
                    </div>

                    <button className="restart-btn" onClick={handleRestartQuiz}>
                        Restart Quiz
                    </button>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="quiz-container">
                <div className="loading">
                    <p>No questions available</p>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="quiz-container">
            <div className="quiz-card">
                <div className="quiz-header">
                    <div className="quiz-info">
                        <span className="category">{decodeHTML(currentQuestion.category)}</span>
                        <span className="difficulty">{currentQuestion.difficulty}</span>
                    </div>
                    <div className="progress">
                        Question {currentIndex + 1} of {questions.length}
                    </div>
                </div>

                <div className="timer-container">
                    <div className="timer-bar-bg">
                        <div 
                            className="timer-bar" 
                            style={{ 
                                width: `${(timeLeft / 15) * 100}%`,
                                backgroundColor: timeLeft <= 5 ? '#ef4444' : '#10b981'
                            }}
                        ></div>
                    </div>
                    <div className="timer-text">
                        ⏱️ {timeLeft}s
                    </div>
                </div>

                <div className="question-container">
                    <h2 className="question-text">
                        {decodeHTML(currentQuestion.question)}
                    </h2>
                </div>

                <div className="answers-grid">
                    {answers.map((answer, index) => (
                        <button
                            key={index}
                            className={getButtonClass(answer)}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={answered}
                        >
                            {decodeHTML(answer)}
                        </button>
                    ))}
                </div>

                {answered && (
                    <div className="next-container">
                        <button className="next-btn" onClick={handleNextQuestion}>
                            {currentIndex === questions.length - 1 ? "See Results" : "Next Question"} →
                        </button>
                    </div>
                )}

                <div className="score-display">
                    Score: {score} / {currentIndex + (answered ? 1 : 0)}
                </div>
            </div>
        </div>
    );
}

export default QuizAPI;