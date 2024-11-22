import { Question } from "../types";

const level1Questions: Omit<Question, "difficulty">[] = [
  // Topic: Binary
  {
    question: "Convert the decimal number 5 to binary.",
    answer: "101",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "Convert the decimal number 2 to binary.",
    answer: "10",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "What is the binary equivalent of decimal 3?",
    answer: "11",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },

  // Topic: Exponents
  {
    question: "Evaluate 2^3.",
    answer: "8",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 3^2.",
    answer: "9",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 4^2.",
    answer: "16",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },

  // Topic: Number Systems
  {
    question: "What is the base of the decimal number system?",
    answer: "10",
    topic: "Number Systems",
    format: "Enter the numerical value only",
  },
  {
    question: "Which number system uses only the digits 0 and 1?",
    answer: "Binary",
    topic: "Number Systems",
    format: "Answer with 'Binary'",
  },
  {
    question: "What is the base of the hexadecimal number system?",
    answer: "16",
    topic: "Number Systems",
    format: "Enter the numerical value only",
  },

  // Topic: Hexadecimal
  {
    question: "What is the hexadecimal equivalent of decimal 15?",
    answer: "F",
    topic: "Hexadecimal",
    format: "Enter a single hexadecimal digit (0-9 or A-F)",
  },
  {
    question: "Convert the hexadecimal number A to decimal.",
    answer: "10",
    topic: "Hexadecimal",
    format: "Enter the decimal number",
  },
  {
    question: "What is the hexadecimal number for decimal 16?",
    answer: "10",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal number without '0x' prefix",
  },

  // Topic: Octal
  {
    question: "What is the base of the octal number system?",
    answer: "8",
    topic: "Octal",
    format: "Enter the numerical value only",
  },
  {
    question: "Convert the decimal number 7 to octal.",
    answer: "7",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },
  {
    question: "What is the octal equivalent of decimal 8?",
    answer: "10",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },

  // Topic: Natural Numbers
  {
    question: "What is the smallest natural number?",
    answer: "1",
    topic: "Natural Numbers",
    format: "Enter the numerical value only",
  },
  {
    question: "Is zero considered a natural number?",
    answer: "No",
    topic: "Natural Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which of the following is a natural number?",
    answer: "1",
    topic: "Natural Numbers",
    format: "Enter the numerical value only",
  },

  // Topic: Integers
  {
    question: "Is -1 an integer?",
    answer: "Yes",
    topic: "Integers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which of the following is not an integer?",
    answer: "1.5",
    topic: "Integers",
    format: "Enter the number as shown (with decimal point if needed)",
  },
  {
    question: "Is zero an integer?",
    answer: "Yes",
    topic: "Integers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Factors and Primes
  {
    question: "Is 2 a prime number?",
    answer: "Yes",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which number is a factor of 6?",
    answer: "6",
    topic: "Factors and Primes",
    format: "Enter the numerical value only",
  },
  {
    question: "Is 9 a prime number?",
    answer: "No",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Rational and Irrational Numbers
  {
    question: "Is 1/2 a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is √2 a rational number?",
    answer: "No",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is 0.333... (repeating) a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Real Numbers
  {
    question:
      "The set of real numbers includes rational numbers and what other type of numbers?",
    answer: "Irrational",
    topic: "Real Numbers",
    format: "Answer with 'Irrational'",
  },
  {
    question: "Is π (pi) a real number?",
    answer: "Yes",
    topic: "Real Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is -5 a real number?",
    answer: "Yes",
    topic: "Real Numbers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Power Rules
  {
    question: "Simplify: x^0",
    answer: "1",
    topic: "Power Rules",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: x^1",
    answer: "x",
    topic: "Power Rules",
    format: "Enter 'x' as the answer",
  },
  {
    question: "Simplify: x^a * x^b",
    answer: "x^(a+b)",
    topic: "Power Rules",
    format: "Use ^ for exponents and parentheses when needed. Example: x^(a+b)",
  },

  // Topic: Radicals
  {
    question: "What is the square root of 9?",
    answer: "3",
    topic: "Radicals",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: √16",
    answer: "4",
    topic: "Radicals",
    format: "Enter the numerical result only",
  },
  {
    question: "What is the cube root of 8?",
    answer: "2",
    topic: "Radicals",
    format: "Enter the numerical result only",
  },

  // Topic: Logarithms
  {
    question: "What is log base 10 of 100?",
    answer: "2",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate log base 2 of 8.",
    answer: "3",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
  {
    question: "What is log base 5 of 1?",
    answer: "0",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
];

export default level1Questions;
