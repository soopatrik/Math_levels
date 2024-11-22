import { Question } from "../types";

const level6Questions: Omit<Question, "difficulty">[] = [
  // Topic: Binary
  {
    question: "Convert the decimal number 123 to binary.",
    answer: "1111011",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "What decimal number does the binary number 1001101 represent?",
    answer: "77",
    topic: "Binary",
    format: "Enter the decimal number only",
  },
  {
    question: "Perform binary addition: 1011 + 1101.",
    answer: "11000",
    topic: "Binary",
    format: "Enter the binary result without '0b' prefix",
  },

  // Topic: Exponents
  {
    question: "Simplify: (2^5)^3.",
    answer: "32768",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate: 9^(3/2).",
    answer: "27",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: 16^(3/4).",
    answer: "8",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },

  // Topic: Number Systems
  {
    question:
      "Convert the decimal number 255 to binary, octal, and hexadecimal.",
    answer: "Binary: 11111111, Octal: 377, Hexadecimal: FF",
    topic: "Number Systems",
    format: "Format as 'Binary: value, Octal: value, Hexadecimal: value'",
  },
  {
    question:
      "What is the decimal equivalent of the number '1A7' in hexadecimal?",
    answer: "423",
    topic: "Number Systems",
    format: "Enter the decimal number only",
  },
  {
    question: "Express the number 101101 in base 4.",
    answer: "1121",
    topic: "Number Systems",
    format: "Enter the base-4 number only",
  },

  // Topic: Hexadecimal
  {
    question: "Convert the hexadecimal number '2F' to binary.",
    answer: "101111",
    topic: "Hexadecimal",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question:
      "What is the hexadecimal representation of the binary number 1101101?",
    answer: "6D",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal number only",
  },
  {
    question: "Perform hexadecimal addition: '1C' + '2A'.",
    answer: "46",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal result without '0x' prefix",
  },

  // Topic: Octal
  {
    question: "Convert the decimal number 100 to octal.",
    answer: "144",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },
  {
    question: "What is the decimal equivalent of the octal number 257?",
    answer: "175",
    topic: "Octal",
    format: "Enter the decimal number only",
  },
  {
    question: "Perform octal addition: 157 + 66.",
    answer: "245",
    topic: "Octal",
    format: "Enter the octal result without '0o' prefix",
  },

  // Topic: Natural Numbers
  {
    question: "Find the sum of the first 20 natural numbers.",
    answer: "210",
    topic: "Natural Numbers",
    format: "Enter the numerical result only",
  },
  {
    question:
      "How many natural numbers are there between 1 and 100 that are divisible by both 2 and 5?",
    answer: "10",
    topic: "Natural Numbers",
    format: "Enter the numerical result only",
  },
  {
    question: "Is the set of natural numbers closed under subtraction?",
    answer: "No",
    topic: "Natural Numbers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Integers
  {
    question: "Calculate: (-15) × (-4) + 20.",
    answer: "80",
    topic: "Integers",
    format: "Enter the numerical result only",
  },
  {
    question: "Solve for x: 3x + (-7) = 5.",
    answer: "4",
    topic: "Integers",
    format: "Enter the numerical result only",
  },
  {
    question: "What is the additive inverse of -12?",
    answer: "12",
    topic: "Integers",
    format: "Enter the numerical result only",
  },

  // Topic: Factors and Primes
  {
    question: "Determine whether 91 is a prime number.",
    answer: "No",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Find all prime numbers between 30 and 50.",
    answer: "31,37,41,43,47",
    topic: "Factors and Primes",
    format: "Enter the prime numbers separated by commas",
  },
  {
    question: "How many prime numbers are there less than 50?",
    answer: "15",
    topic: "Factors and Primes",
    format: "Enter the numerical result only",
  },

  // Topic: Fundamental Theorem of Arithmetic
  {
    question: "Express 210 as a product of prime factors.",
    answer: "2 × 3 × 5 × 7",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Enter the prime factors separated by multiplication",
  },
  {
    question: "Find the prime factorization of 231.",
    answer: "3 × 7 × 11",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Enter the prime factors separated by multiplication",
  },
  {
    question: "Express 144 as a product of powers of prime numbers.",
    answer: "2^4 × 3^2",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Enter the prime factors separated by multiplication",
  },

  // Topic: Prime Factorization
  {
    question: "Find the prime factors of 196.",
    answer: "2^2 × 7^2",
    topic: "Prime Factorization",
    format: "Enter the prime factors separated by multiplication",
  },
  {
    question: "Express 128 as a product of prime numbers.",
    answer: "2^7",
    topic: "Prime Factorization",
    format: "Enter the prime factors separated by multiplication",
  },
  {
    question: "Find the prime factorization of 99.",
    answer: "3 × 3 × 11",
    topic: "Prime Factorization",
    format: "Enter the prime factors separated by multiplication",
  },

  // Topic: GCD and LCM
  {
    question: "Find the GCD and LCM of 24 and 36.",
    answer: "GCD: 12, LCM: 72",
    topic: "GCD and LCM",
    format: "Format as 'GCD: value, LCM: value'",
  },
  {
    question: "What is the GCD of 81 and 153?",
    answer: "9",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },
  {
    question: "Find the LCM of 14, 21, and 42.",
    answer: "42",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },

  // Topic: Modular Arithmetic
  {
    question: "Calculate 2^10 mod 7.",
    answer: "2",
    topic: "Modular Arithmetic",
    format: "Enter the numerical result only",
  },
  {
    question: "Solve for x: x ≡ 3 mod 5 and x ≡ 2 mod 3.",
    answer: "x ≡ 8 mod 15",
    topic: "Modular Arithmetic",
    format: "Use x ≡ for modular arithmetic notation",
  },
  {
    question: "What is the remainder when 12345 is divided by 11?",
    answer: "6",
    topic: "Modular Arithmetic",
    format: "Enter the numerical result only",
  },

  // Topic: Rational and Irrational Numbers
  {
    question: "Is the decimal expansion of 1/7 terminating or non-terminating?",
    answer: "Non-terminating",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Terminating' or 'Non-terminating'",
  },
  {
    question: "Prove that √5 is irrational.",
    answer: "Yes (proof required)",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question:
      "Is the sum of a rational number and an irrational number rational or irrational?",
    answer: "Irrational",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Rational' or 'Irrational'",
  },

  // Topic: Real Numbers
  {
    question: "Express 0.333... as a fraction.",
    answer: "1/3",
    topic: "Real Numbers",
    format: "Enter the fraction in the form a/b",
  },
  {
    question: "Find a real number between √2 and √3.",
    answer: "Any number between approximately 1.414 and 1.732",
    topic: "Real Numbers",
    format: "Enter a real number between 1.414 and 1.732",
  },
  {
    question: "Are all rational numbers real numbers?",
    answer: "Yes",
    topic: "Real Numbers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Power Rules
  {
    question: "Simplify: x^(-2) × x^5.",
    answer: "x^3",
    topic: "Power Rules",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: (x^3 y^2)^2.",
    answer: "x^6 y^4",
    topic: "Power Rules",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: (x^4 / x^2)^3.",
    answer: "x^6",
    topic: "Power Rules",
    format: "Enter the simplified expression",
  },

  // Topic: Radicals
  {
    question: "Simplify: √(50).",
    answer: "5√2",
    topic: "Radicals",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: √(x^2 y^4).",
    answer: "x y^2",
    topic: "Radicals",
    format: "Enter the simplified expression",
  },
  {
    question: "Simplify: √(a^2 + 2ab + b^2).",
    answer: "a + b",
    topic: "Radicals",
    format: "Enter the simplified expression",
  },

  // Topic: Exponents
  {
    question: "Evaluate: 125^(2/3).",
    answer: "25",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: (27)^(4/3).",
    answer: "81",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate: 8^(-2/3).",
    answer: "0.25",
    topic: "Exponents",
    format: "Enter the decimal result (use point for decimal)",
  },

  // Topic: Logarithms
  {
    question: "Solve for x: log(x) = 3.",
    answer: "1000",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: log_2(32).",
    answer: "5",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate: ln(e^5).",
    answer: "5",
    topic: "Logarithms",
    format: "Enter the numerical result only",
  },

  // Topic: Functions
  {
    question: "If f(x) = x^2 + 2x, find f(-3).",
    answer: "3",
    topic: "Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "If f(x) = 1/(x - 2), find f(4).",
    answer: "0.5",
    topic: "Functions",
    format: "Enter the decimal result (use point for decimal)",
  },
  {
    question:
      "Determine whether f(x) = x^3 is an even, odd, or neither function.",
    answer: "Odd",
    topic: "Functions",
    format: "Answer with 'Even', 'Odd', or 'Neither'",
  },

  // Topic: Domain, Codomain, Range
  {
    question: "Find the domain of f(x) = 1/√(x - 3).",
    answer: "x > 3",
    topic: "Domain, Codomain, Range",
    format: "Use inequality notation. Example: x > 3",
  },
  {
    question: "What is the range of f(x) = 1/(x^2)?",
    answer: "y > 0",
    topic: "Domain, Codomain, Range",
    format: "Use y for range values and inequality notation",
  },
  {
    question: "Find the domain of f(x) = ln(x - 1).",
    answer: "x > 1",
    topic: "Domain, Codomain, Range",
    format: "Use inequality notation. Example: x > 1",
  },

  // Topic: Inverse Functions
  {
    question: "Find the inverse of f(x) = (2x - 5)/3.",
    answer: "f^(-1)(x) = (3x + 5)/2",
    topic: "Inverse Functions",
    format: "Use f^(-1)(x) = for inverse function notation",
  },
  {
    question: "Determine if f(x) = x^2 is invertible when x ≥ 0.",
    answer: "Yes",
    topic: "Inverse Functions",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Find the inverse of f(x) = e^x.",
    answer: "f^(-1)(x) = ln(x)",
    topic: "Inverse Functions",
    format: "Use f^(-1)(x) = and ln for natural logarithm",
  },

  // Topic: Composite Functions
  {
    question: "If f(x) = x^2 and g(x) = √x, find (f ∘ g)(4).",
    answer: "4",
    topic: "Composite Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "If f(x) = 3x + 2 and g(x) = x - 2, find (g ∘ f)(1).",
    answer: "3",
    topic: "Composite Functions",
    format: "Enter the numerical result only",
  },
  {
    question: "Given f(x) = x^3 and g(x) = x^2, compute (f ∘ g)(2).",
    answer: "64",
    topic: "Composite Functions",
    format: "Enter the numerical result only",
  },
];

export default level6Questions;
