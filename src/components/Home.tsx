// src/components/Home.tsx

import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">Math Path</h1>
      <p className="mb-6">Select a level to start practicing:</p>
      <ul className="grid grid-cols-2 gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <Link
              to={`/level/${i + 1}`}
              className="block bg-teal-500 text-white text-center py-2 rounded hover:bg-teal-600"
            >
              Level {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
