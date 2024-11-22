import { Question } from "../types";

const level5Questions: Omit<Question, "difficulty">[] = [
  // Topic: Binary
  {
    question: "Convert the decimal number 85 to binary.",
    answer: "1010101",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "What decimal number does the binary number 100101 represent?",
    answer: "37",
    topic: "Binary",
    format: "Enter the decimal number only",
  },
  {
    question: "Convert the binary number 110010 to decimal.",
    answer: "50",
    topic: "Binary",
    format: "Enter the decimal number only",
  },

  // Topic: Exponents
  {
    question: "Evaluate 2^10.",
    answer: "1024",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: (3^2)^3.",
    answer: "729",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 7^2.",
    answer: "49",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },

  // Topic: Number Systems
  {
    question: "Convert the decimal number 1023 to hexadecimal.",
    answer: "3FF",
    topic: "Number Systems",
    format:
      "Enter the hexadecimal number without '0x' prefix, using uppercase letters",
  },
  {
    question: "What is the base of the vigesimal number system?",
    answer: "20",
    topic: "Number Systems",
    format: "Enter the numerical value only",
  },
  {
    question: "Which number system uses digits 0-9 and letters A-Z (up to Z)?",
    answer: "Base-36",
    topic: "Number Systems",
    format: "Answer with 'Base-36'",
  },

  // Topic: Hexadecimal
  {
    question: "Convert the hexadecimal number 3C to decimal.",
    answer: "60",
    topic: "Hexadecimal",
    format: "Enter the decimal number only",
  },
  {
    question: "What is the hexadecimal equivalent of decimal 255?",
    answer: "FF",
    topic: "Hexadecimal",
    format:
      "Enter the hexadecimal number without '0x' prefix, using uppercase letters",
  },
  {
    question: "Convert the decimal number 500 to hexadecimal.",
    answer: "1F4",
    topic: "Hexadecimal",
    format:
      "Enter the hexadecimal number without '0x' prefix, using uppercase letters",
  },

  // Topic: Octal
  {
    question: "Convert the decimal number 100 to octal.",
    answer: "144",
    topic: "Octal",
    format:
      "Enter the octal number without '0o' prefix, using uppercase letters",
  },
  {
    question: "What is the octal equivalent of decimal 88?",
    answer: "130",
    topic: "Octal",
    format:
      "Enter the octal number without '0o' prefix, using uppercase letters",
  },
  {
    question: "Convert the octal number 125 to decimal.",
    answer: "85",
    topic: "Octal",
    format: "Enter the decimal number only",
  },

  // Topic: Natural Numbers
  {
    question: "What is the sum of the first 20 natural numbers?",
    answer: "210",
    topic: "Natural Numbers",
    format: "Enter the numerical result only",
  },
  {
    question: "Is 0.999... (repeating) equal to 1?",
    answer: "Yes",
    topic: "Natural Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Which of the following is a natural number: √16?",
    answer: "4",
    topic: "Natural Numbers",
    format: "Enter the numerical result only",
  },

  // Topic: Integers
  {
    question: "Calculate: -15 + 8",
    answer: "-7",
    topic: "Integers",
    format: "Enter the numerical result only",
  },
  {
    question: "What is the result of -10 - (-15)?",
    answer: "5",
    topic: "Integers",
    format: "Enter the numerical result only",
  },
  {
    question: "Calculate the absolute value of -50.",
    answer: "50",
    topic: "Integers",
    format: "Enter the numerical result only",
  },

  // Topic: Factors and Primes
  {
    question: "List all prime numbers between 20 and 30.",
    answer: "23,29",
    topic: "Factors and Primes",
    format: "Enter the prime numbers separated by commas",
  },
  {
    question: "Is 51 a prime number?",
    answer: "No",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Find all factors of 28.",
    answer: "1,2,4,7,14,28",
    topic: "Factors and Primes",
    format: "Enter the factors separated by commas",
  },

  // Topic: Fundamental Theorem of Arithmetic
  {
    question: "Express 105 as a product of prime numbers.",
    answer: "3 * 5 * 7",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Enter the product of prime numbers",
  },
  {
    question: "What is the unique prime factorization of 210?",
    answer: "2 * 3 * 5 * 7",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Enter the product of prime numbers",
  },
  {
    question: "Express 120 as a product of primes.",
    answer: "2^3 * 3 * 5",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Enter the product of primes",
  },

  // Topic: Prime Factorization
  {
    question: "Find the prime factors of 143.",
    answer: "11 * 13",
    topic: "Prime Factorization",
    format: "Enter the prime factors separated by commas",
  },
  {
    question: "What are the prime factors of 19?",
    answer: "19",
    topic: "Prime Factorization",
    format: "Enter the prime factors separated by commas",
  },
  {
    question: "Express 150 as a product of prime numbers.",
    answer: "2 * 3 * 5^2",
    topic: "Prime Factorization",
    format: "Enter the product of prime numbers",
  },

  // Topic: GCD and LCM
  {
    question: "What is the GCD of 48 and 180?",
    answer: "12",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },
  {
    question: "Find the LCM of 14 and 15.",
    answer: "210",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },
  {
    question: "What is the GCD of 81 and 27?",
    answer: "27",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },

  // Topic: Modular Arithmetic
  {
    question: "What is 45 mod 7?",
    answer: "3",
    topic: "Modular Arithmetic",
    format: "Enter the numerical result only",
  },
  {
    question: "Calculate 100 mod 13.",
    answer: "9",
    topic: "Modular Arithmetic",
    format: "Enter the numerical result only",
  },
  {
    question: "What is 73 mod 10?",
    answer: "3",
    topic: "Modular Arithmetic",
    format: "Enter the numerical result only",
  },

  // Topic: Rational and Irrational Numbers
  {
    question:
      "Is the decimal 0.101001000100001... (pattern continues) rational or irrational?",
    answer: "Irrational",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Rational' or 'Irrational'",
  },
  {
    question: "Is the fraction 22/7 a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is the square root of 2 a rational number?",
    answer: "No",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Real Numbers
  {
    question: "Is the imaginary unit 'i' a real number?",
    answer: "No",
    topic: "Real Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is -π a real number?",
    answer: "Yes",
    topic: "Real Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is √(-9) a real number?",
    answer: "No",
    topic: "Real Numbers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Power Rules
  {
    question: "Simplify: (x^2)^5.",
    answer: "x^10",
    topic: "Power Rules",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: x^7 * x^3.",
    answer: "x^10",
    topic: "Power Rules",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: x^9 / x^3.",
    answer: "x^6",
    topic: "Power Rules",
    format: "Enter the simplified expression",
  },

  // Topic: Radicals
  {
    question: "Simplify: √(256).",
    answer: "16",
    topic: "Radicals",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: √(x^6).",
    answer: "x^3",
    topic: "Radicals",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: √(169).",
    answer: "13",
    topic: "Radicals",
    format: "Enter the numerical result only",
  },

  // Topic: Exponents
  {
    question: "Evaluate 2^-4.",
    answer: "0.0625",
    topic: "Exponents",
    format: "Enter the decimal result (use point for decimal)",
  },
  {
    question: "Simplify: (5^2)^3.",
    answer: "15625",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 16^(3/4).",
    answer: "8",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },

  // Topic: Logarithms
  {
    question: "What is log base 2 of 512?",
    answer: "9",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate log base 10 of 100000.",
    answer: "5",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
  {
    question: "What is log base 5 of 625?",
    answer: "4",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },

  // Topic: Functions
  {
    question: "If f(x) = 4x - 5, what is f(6)?",
    answer: "19",
    topic: "Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "If f(x) = x^2 - 5x + 6, find f(3).",
    answer: "0",
    topic: "Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "If f(x) = 1/(x - 2), what is f(4)?",
    answer: "0.5",
    topic: "Functions",
    format: "Enter the decimal result (use point for decimal)",
  },

  // Topic: Domain, Codomain, Range
  {
    question: "What is the domain of f(x) = 1/(x^2 - 4)?",
    answer: "All real numbers except x = 2, x = -2",
    topic: "Domain, Codomain, Range",
    format: "Use 'All real numbers except' followed by x values",
  },
  {
    question: "What is the range of f(x) = x^2 + 1 for real x?",
    answer: "y ≥ 1",
    topic: "Domain, Codomain, Range",
    format: "Use y for range values and ≥ for greater than or equal to",
  },
  {
    question: "For f(x) = ln(x), what is the domain?",
    answer: "x > 0",
    topic: "Domain, Codomain, Range",
    format: "Use inequality notation. Example: x > 0",
  },

  // Topic: Inverse Functions
  {
    question: "What is the inverse of f(x) = (x + 3)/2?",
    answer: "f^(-1)(x) = 2x - 3",
    topic: "Inverse Functions",
    format: "Use f^(-1)(x) = for inverse function notation",
  },
  {
    question: "Find the inverse of f(x) = x^3, x ∈ ℝ.",
    answer: "f^(-1)(x) = x^(1/3)",
    topic: "Inverse Functions",
    format: "Use f^(-1)(x) = and ^ for exponents",
  },
  {
    question: "What is the inverse function of f(x) = e^x?",
    answer: "f^(-1)(x) = ln(x)",
    topic: "Inverse Functions",
    format: "Use f^(-1)(x) = and ln for natural logarithm",
  },

  // Topic: Composite Functions
  {
    question: "If f(x) = x^2 and g(x) = x - 2, find (f ∘ g)(5).",
    answer: "9",
    topic: "Composite Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "If f(x) = 3x and g(x) = x^2, find (g ∘ f)(2).",
    answer: "36",
    topic: "Composite Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "Given f(x) = x^2 and g(x) = √x, compute (f ∘ g)(16).",
    answer: "16",
    topic: "Composite Functions",
    format: "Enter the numerical result only",
  },
];

export default level5Questions;
