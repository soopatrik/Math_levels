import { Question } from "../types";

const level2Questions: Omit<Question, "difficulty">[] = [
  // Topic: Binary
  {
    question: "Convert the decimal number 10 to binary.",
    answer: "1010",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "What is the binary equivalent of decimal 5?",
    answer: "101",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "Convert the binary number 110 to decimal.",
    answer: "6",
    topic: "Binary",
    format: "Enter the decimal number only",
  },

  // Topic: Exponents
  {
    question: "Evaluate 2^5.",
    answer: "32",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 5^2.",
    answer: "25",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 6^2.",
    answer: "36",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },

  // Topic: Number Systems
  {
    question: "What is the base of the binary number system?",
    answer: "2",
    topic: "Number Systems",
    format: "Enter the numerical value only",
  },
  {
    question: "Which number system uses the digits 0-9 and A-F?",
    answer: "Hexadecimal",
    topic: "Number Systems",
    format: "Answer with 'Hexadecimal'",
  },
  {
    question: "What is the base of the octal number system?",
    answer: "8",
    topic: "Number Systems",
    format: "Enter the numerical value only",
  },

  // Topic: Hexadecimal
  {
    question: "What is the hexadecimal equivalent of decimal 20?",
    answer: "14",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal number without '0x' prefix",
  },
  {
    question: "Convert the hexadecimal number B to decimal.",
    answer: "11",
    topic: "Hexadecimal",
    format: "Enter the decimal number",
  },
  {
    question: "What is the hexadecimal number for decimal 32?",
    answer: "20",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal number without '0x' prefix",
  },

  // Topic: Octal
  {
    question: "Convert the decimal number 9 to octal.",
    answer: "11",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },
  {
    question: "What is the octal equivalent of decimal 16?",
    answer: "20",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },
  {
    question: "What is the base of the octal number system?",
    answer: "8",
    topic: "Octal",
    format: "Enter the numerical value only",
  },

  // Topic: Natural Numbers
  {
    question: "What is the smallest prime number?",
    answer: "2",
    topic: "Natural Numbers",
    format: "Enter the numerical value only",
  },
  {
    question: "Is 1 a prime number?",
    answer: "No",
    topic: "Natural Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which of the following is a prime number?",
    answer: "2",
    topic: "Natural Numbers",
    format: "Enter the numerical value only",
  },

  // Topic: Integers
  {
    question: "Is -2 an integer?",
    answer: "Yes",
    topic: "Integers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which of the following is not an integer?",
    answer: "2.5",
    topic: "Integers",
    format: "Enter the number as shown (with decimal point if needed)",
  },
  {
    question: "Is -3 an integer?",
    answer: "Yes",
    topic: "Integers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Factors and Primes
  {
    question: "Is 3 a prime number?",
    answer: "Yes",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which number is a factor of 9?",
    answer: "3",
    topic: "Factors and Primes",
    format: "Enter the numerical value only",
  },
  {
    question: "Is 15 a prime number?",
    answer: "No",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Fundamental Theorem of Arithmetic
  {
    question:
      "Every integer greater than 1 is either prime or can be uniquely factored into what?",
    answer: "Prime numbers",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Answer with 'Prime numbers'",
  },
  {
    question: "What is the prime factorization of 18?",
    answer: "2 * 3^2",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Use * for multiplication and ^ for exponents. Example: 2 * 3^2",
  },
  {
    question: "What is the prime factorization of 20?",
    answer: "2^2 * 5",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Use * for multiplication and ^ for exponents. Example: 2^2 * 5",
  },

  // Topic: Prime Factorization
  {
    question: "Find the prime factors of 25.",
    answer: "5^2",
    topic: "Prime Factorization",
    format: "Use ^ for exponents. Example: 5^2",
  },
  {
    question: "What are the prime factors of 11?",
    answer: "11",
    topic: "Prime Factorization",
    format: "Enter the numerical value only (11 is prime)",
  },
  {
    question: "Express 24 as a product of prime numbers.",
    answer: "2^3 * 3",
    topic: "Prime Factorization",
    format: "Use * for multiplication and ^ for exponents. Example: 2^3 * 3",
  },

  // Topic: GCD and LCM
  {
    question: "What is the GCD of 8 and 12?",
    answer: "4",
    topic: "GCD and LCM",
    format: "Enter the numerical value only",
  },
  {
    question: "Find the LCM of 4 and 6.",
    answer: "12",
    topic: "GCD and LCM",
    format: "Enter the numerical value only",
  },
  {
    question: "What is the GCD of 9 and 18?",
    answer: "9",
    topic: "GCD and LCM",
    format: "Enter the numerical value only",
  },

  // Topic: Modular Arithmetic
  {
    question: "What is 8 mod 3?",
    answer: "2",
    topic: "Modular Arithmetic",
    format: "Enter the remainder (numerical value only)",
  },
  {
    question: "Calculate 15 mod 4.",
    answer: "3",
    topic: "Modular Arithmetic",
    format: "Enter the remainder (numerical value only)",
  },
  {
    question: "What is 10 mod 7?",
    answer: "3",
    topic: "Modular Arithmetic",
    format: "Enter the remainder (numerical value only)",
  },

  // Topic: Rational and Irrational Numbers
  {
    question: "Is 3/4 a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is √3 a rational number?",
    answer: "No",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is 0.25 a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
];

export default level2Questions;
