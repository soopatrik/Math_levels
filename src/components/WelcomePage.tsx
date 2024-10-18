import React from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-700">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-700 mb-4">
          Are you ready for some maths?
        </h1>
        <Link
          to="/home"
          className="inline-block bg-teal-500 text-white text-center py-2 px-4 rounded hover:bg-teal-600"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
