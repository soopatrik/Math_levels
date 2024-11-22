import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import exercises from "../data/exercises";
import { Question } from "../types";

const Level: React.FC = () => {
  const { levelNumber } = useParams<{ levelNumber: string }>();
  const level = parseInt(levelNumber || "1");
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [showAnswerFormat, setShowAnswerFormat] = useState<boolean>(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);

  useEffect(() => {
    const levelQuestions = exercises.slice((level - 1) * 5, level * 5);

    if (levelQuestions.length === 0) {
      // If no questions are available for the level
      setFeedback("No questions available for this level.");
      setShowResults(true);
      return;
    }

    const selectedQuestions = getRandomQuestions(levelQuestions, 5);
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setFeedback("");
    setShowResults(false);
  }, [level]);

  // Function to get random questions
  const getRandomQuestions = (
    questionPool: Question[],
    num: number
  ): Question[] => {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    const uniqueQuestions = new Set<Question>();
    for (const question of shuffled) {
      if (uniqueQuestions.size < num) {
        uniqueQuestions.add(question);
      } else {
        break;
      }
    }
    return Array.from(uniqueQuestions);
  };

  // Add this function to get the answer format based on the question
  const getAnswerFormat = (question: Question): string => {
    // First check if the question has a specific format defined
    if (question.format) {
      return question.format;
    }

    // Fallback logic for questions without format property
    if (
      question.question.toLowerCase().includes("rational") ||
      question.question.toLowerCase().includes("irrational")
    ) {
      return "Answer with 'Yes' or 'No'";
    }
    if (question.question.toLowerCase().includes("simplify")) {
      return "Use ^ for exponents, √ for square root. Example: x^2, 2√3";
    }
    if (question.question.toLowerCase().includes("evaluate")) {
      return "Enter the numerical value. Use decimals if needed.";
    }
    if (question.question.toLowerCase().includes("solve")) {
      return "Enter the value of the variable only. Example: 5";
    }

    return "Enter your answer in simplest form";
  };

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  // Handle user's answer
  const handleAnswer = () => {
    const newUserAnswers = [...userAnswers, userAnswer];
    setUserAnswers(newUserAnswers);
    setUserAnswer(""); // Clear input field

    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Last question answered, evaluate results
      const allCorrect = questions.every((question, index) => {
        return question.answer === newUserAnswers[index];
      });

      if (allCorrect) {
        // Advance to next level
        setFeedback("Congratulations! You've passed this level.");
        setShowResults(true);
      } else {
        // Repeat the same level with new questions
        setFeedback("Not quite there. Try again!");
        setShowResults(true);
      }
    }
  };

  // Handle going back to the previous question
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer(userAnswers[currentQuestionIndex - 1] || "");
    }
  };

  // Navigate back home
  const navigateHome = () => {
    navigate("/home");
  };

  // Restart level with new questions
  const retryLevel = () => {
    const levelQuestions = exercises.slice((level - 1) * 5, level * 5);
    const selectedQuestions = getRandomQuestions(levelQuestions, 5);
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setFeedback("");
    setShowResults(false);
  };

  // Proceed to next level
  const nextLevel = () => {
    navigate(`/level/${level + 1}`);
  };

  if (questions.length === 0 && !showResults) {
    return <p className="p-6 text-center text-red-600">Loading questions...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md 
                     hover:shadow-lg transition-all text-gray-700 hover:text-teal-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Home</span>
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Level {level}
          </h2>

          {!showResults ? (
            <div className="space-y-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-teal-500 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      (currentQuestionIndex / questions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="text-sm text-gray-600 mb-8">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-xl text-gray-800 mb-4">
                  {questions[currentQuestionIndex].question}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <button
                    onClick={() => setShowAnswerFormat(!showAnswerFormat)}
                    className="text-teal-600 hover:text-teal-700 flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Answer Format
                  </button>

                  <button
                    onClick={() => setShowCorrectAnswer(!showCorrectAnswer)}
                    className="text-orange-600 hover:text-orange-700 flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {showCorrectAnswer ? "Hide Answer" : "Show Answer"}
                  </button>
                </div>

                {showAnswerFormat && (
                  <div className="mt-2 text-sm text-gray-600 bg-teal-50 p-3 rounded-lg">
                    {getAnswerFormat(questions[currentQuestionIndex])}
                  </div>
                )}

                {showCorrectAnswer && (
                  <div className="mt-2 text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                    Correct answer: {questions[currentQuestionIndex].answer}
                  </div>
                )}
              </div>

              <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                         focus:ring-teal-500 focus:border-transparent transition"
                placeholder="Type your answer here"
              />

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-medium
                           hover:bg-gray-300 transition"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                <button
                  onClick={handleAnswer}
                  className="flex-1 px-6 py-3 rounded-lg bg-teal-500 text-white font-medium
                           hover:bg-teal-600 transition"
                >
                  Submit Answer
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div
                className={`text-2xl font-bold mb-6 ${
                  feedback.includes("Congratulations")
                    ? "text-teal-500"
                    : "text-orange-500"
                }`}
              >
                {feedback}
              </div>

              {feedback.includes("Congratulations") ? (
                <button
                  onClick={nextLevel}
                  className="px-8 py-4 rounded-lg bg-teal-500 text-white font-medium
                           hover:bg-teal-600 transition transform hover:scale-105"
                >
                  Proceed to Level {level + 1}
                </button>
              ) : (
                <button
                  onClick={retryLevel}
                  className="px-8 py-4 rounded-lg bg-orange-500 text-white font-medium
                           hover:bg-orange-600 transition transform hover:scale-105"
                >
                  Try Again
                </button>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex-1 px-6 py-3 rounded-lg bg-gray-200 text-gray-700 
                     font-medium hover:bg-gray-300 transition flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Welcome Page
          </button>
          <button
            onClick={navigateHome}
            className="flex-1 px-6 py-3 rounded-lg bg-teal-500 text-white 
                     font-medium hover:bg-teal-600 transition flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
            Level Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Level;
