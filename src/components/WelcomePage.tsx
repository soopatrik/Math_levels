import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  const mathQuotes = [
    "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. – William Paul Thurston",
    "Pure mathematics is, in its way, the poetry of logical ideas. – Albert Einstein",
    "Mathematics is the most beautiful and most powerful creation of the human spirit. – Stefan Banach",
    "Mathematics is the art of giving the same name to different things. – Henri Poincaré",
    "In mathematics, the art of proposing a question must be held of higher value than solving it. – Georg Cantor",
  ];

  useEffect(() => {
    // Rotate through math quotes
    setCurrentQuote(mathQuotes[0]);
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => {
        const currentIndex = mathQuotes.indexOf(prev);
        const nextIndex = (currentIndex + 1) % mathQuotes.length;
        return mathQuotes[nextIndex];
      });
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-purple-600 
                    flex items-center justify-center p-4"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center space-y-8">
            {/* Title */}
            <h1
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text 
                          bg-gradient-to-r from-teal-500 to-blue-600"
            >
              Master Mathematics
            </h1>

            {/* Animated Quote */}
            <div className="h-20">
              <p className="text-gray-600 italic text-lg md:text-xl transition-all duration-500">
                {currentQuote}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Progressive Learning",
                  description:
                    "Start from basics and advance to complex topics",
                  icon: "📚",
                },
                {
                  title: "Interactive Practice",
                  description: "Engage with dynamic problems and solutions",
                  icon: "✏️",
                },
                {
                  title: "Track Progress",
                  description: "Monitor your improvement across levels",
                  icon: "📈",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-md 
                                          transform transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/home"
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 
                         text-white text-lg font-semibold px-12 py-4 rounded-xl
                         transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Begin Your Journey
            </Link>

            {/* Additional Info */}
            <p className="text-sm text-gray-500 mt-6">
              Join thousands of students mastering mathematics one level at a
              time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
