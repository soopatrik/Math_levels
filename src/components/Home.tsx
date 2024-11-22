// src/components/Home.tsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Choose Your <span className="text-teal-500">Level</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 10 }, (_, i) => (
            <Link
              key={i}
              to={`/level/${i + 1}`}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden 
                         transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 
                              group-hover:from-teal-500/20 group-hover:to-blue-500/20"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Level {i + 1}
                </h2>
                <p className="text-gray-600">
                  {i === 0
                    ? "Start your journey"
                    : `Master level ${i + 1} concepts`}
                </p>
                <div className="mt-4 flex items-center text-teal-500">
                  <span>Begin Challenge</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
