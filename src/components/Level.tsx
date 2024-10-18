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

  useEffect(() => {
    const levelQuestions = exercises.filter(
      (question) => question.difficulty === level
    );

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
    const levelQuestions = exercises.filter(
      (question) => question.difficulty === level
    );
    const selectedQuestions = getRandomQuestions(levelQuestions, 5);
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setFeedback("");
    setShowResults(false);
  };

  // Proceed to next level
  const nextLevel = () => {
    // Navigate to the next level using useNavigate hook
    navigate(`/level/${level + 1}`);
  };

  if (questions.length === 0 && !showResults) {
    return <p className="p-6 text-center text-red-600">Loading questions...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Level {level}</h2>
      {!showResults ? (
        <>
          <p className="mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="mb-4">{questions[currentQuestionIndex].question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            placeholder="Type your answer here"
          />
          <p className="mb-4">Your answer: {userAnswer}</p>
          <div className="flex space-x-4">
            <button
              onClick={handleBack}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
            <button
              onClick={handleAnswer}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Submit Answer
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-xl">{feedback}</p>
          {feedback.includes("Congratulations") ? (
            <button
              onClick={nextLevel}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Proceed to Level {level + 1}
            </button>
          ) : (
            <button
              onClick={retryLevel}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Try Again
            </button>
          )}
        </div>
      )}
      <button
        onClick={navigateHome}
        className="mt-8 bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600"
      >
        Back Home
      </button>
    </div>
  );
};

export default Level;
