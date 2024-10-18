const level4Questions: { question: string; answer: string; topic: string }[] = [
  // Topic: Binary
  { question: "Convert the decimal number 45 to binary.", answer: "101101", topic: "Binary" },
  { question: "What decimal number does the binary number 11011 represent?", answer: "27", topic: "Binary" },
  { question: "Convert the binary number 11100 to decimal.", answer: "28", topic: "Binary" },

  // Topic: Exponents
  { question: "Evaluate 2^8.", answer: "256", topic: "Exponents" },
  { question: "Simplify: (2^4)^3.", answer: "4096", topic: "Exponents" },
  { question: "Evaluate 5^3.", answer: "125", topic: "Exponents" },

  // Topic: Number Systems
  { question: "Convert the decimal number 255 to hexadecimal.", answer: "FF", topic: "Number Systems" },
  { question: "What is the base of the hexadecimal number system?", answer: "16", topic: "Number Systems" },
  { question: "Which number system uses digits 0-7?", answer: "Octal", topic: "Number Systems" },

  // Topic: Hexadecimal
  { question: "Convert the hexadecimal number 2A to decimal.", answer: "42", topic: "Hexadecimal" },
  { question: "What is the hexadecimal equivalent of decimal 63?", answer: "3F", topic: "Hexadecimal" },
  { question: "Convert the decimal number 100 to hexadecimal.", answer: "64", topic: "Hexadecimal" },

  // Topic: Octal
  { question: "Convert the decimal number 64 to octal.", answer: "100", topic: "Octal" },
  { question: "What is the octal equivalent of decimal 40?", answer: "50", topic: "Octal" },
  { question: "Convert the octal number 77 to decimal.", answer: "63", topic: "Octal" },

  // Topic: Natural Numbers
  { question: "What is the sum of the first 10 natural numbers?", answer: "55", topic: "Natural Numbers" },
  { question: "Is zero considered a natural number?", answer: "Depends on definition", topic: "Natural Numbers" },
  { question: "Which of the following is a natural number: -5, 0, 5.5, 10?", answer: "10", topic: "Natural Numbers" },

  // Topic: Integers
  { question: "Calculate: -7 + (-5)", answer: "-12", topic: "Integers" },
  { question: "What is the result of -8 - (-3)?", answer: "-5", topic: "Integers" },
  { question: "Calculate the absolute value of -20.", answer: "20", topic: "Integers" },

  // Topic: Factors and Primes
  { question: "List all prime numbers between 10 and 20.", answer: "11,13,17,19", topic: "Factors and Primes" },
  { question: "Is 29 a prime number?", answer: "Yes", topic: "Factors and Primes" },
  { question: "Find all factors of 18.", answer: "1,2,3,6,9,18", topic: "Factors and Primes" },

  // Topic: Fundamental Theorem of Arithmetic
  { question: "Express 84 as a product of prime numbers.", answer: "2^2 * 3 * 7", topic: "Fundamental Theorem of Arithmetic" },
  { question: "What is the unique prime factorization of 100?", answer: "2^2 * 5^2", topic: "Fundamental Theorem of Arithmetic" },
  { question: "Express 70 as a product of primes.", answer: "2 * 5 * 7", topic: "Fundamental Theorem of Arithmetic" },

  // Topic: Prime Factorization
  { question: "Find the prime factors of 105.", answer: "3 * 5 * 7", topic: "Prime Factorization" },
  { question: "What are the prime factors of 17?", answer: "17", topic: "Prime Factorization" },
  { question: "Express 90 as a product of prime numbers.", answer: "2 * 3^2 * 5", topic: "Prime Factorization" },

  // Topic: GCD and LCM
  { question: "What is the GCD of 48 and 64?", answer: "16", topic: "GCD and LCM" },
  { question: "Find the LCM of 12 and 15.", answer: "60", topic: "GCD and LCM" },
  { question: "What is the GCD of 27 and 36?", answer: "9", topic: "GCD and LCM" },

  // Topic: Modular Arithmetic
  { question: "What is 23 mod 6?", answer: "5", topic: "Modular Arithmetic" },
  { question: "Calculate 50 mod 7.", answer: "1", topic: "Modular Arithmetic" },
  { question: "What is 31 mod 4?", answer: "3", topic: "Modular Arithmetic" },

  // Topic: Rational and Irrational Numbers
  { question: "Is 0.121221222... an irrational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
  { question: "Is the square root of 9 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
  { question: "Is the number π (pi) rational or irrational?", answer: "Irrational", topic: "Rational and Irrational Numbers" },

  // Topic: Real Numbers
  { question: "Is infinity a real number?", answer: "No", topic: "Real Numbers" },
  { question: "Is -√16 a real number?", answer: "Yes", topic: "Real Numbers" },
  { question: "Is 0.333... (repeating) a real number?", answer: "Yes", topic: "Real Numbers" },

  // Topic: Power Rules
  { question: "Simplify: (x^3)^4.", answer: "x^12", topic: "Power Rules" },
  { question: "Simplify: x^5 * x^3.", answer: "x^8", topic: "Power Rules" },
  { question: "Simplify: x^7 / x^2.", answer: "x^5", topic: "Power Rules" },

  // Topic: Radicals
  { question: "Simplify: √(81).", answer: "9", topic: "Radicals" },
  { question: "Simplify: √(x^4).", answer: "x^2", topic: "Radicals" },
  { question: "Simplify: √(121).", answer: "11", topic: "Radicals" },

  // Topic: Exponents
  { question: "Evaluate 2^-3.", answer: "0.125", topic: "Exponents" },
  { question: "Simplify: (4^2)^3.", answer: "4096", topic: "Exponents" },
  { question: "Evaluate 9^(1/2).", answer: "3", topic: "Exponents" },

  // Topic: Logarithms
  { question: "What is log base 2 of 256?", answer: "8", topic: "Logarithms" },
  { question: "Evaluate log base 10 of 0.1.", answer: "-1", topic: "Logarithms" },
  { question: "What is log base 4 of 64?", answer: "3", topic: "Logarithms" },

  // Topic: Functions
  { question: "If f(x) = 3x - 2, what is f(4)?", answer: "10", topic: "Functions" },
  { question: "If f(x) = x^2 - 4x, find f(5).", answer: "5", topic: "Functions" },
  { question: "If f(x) = 1/(x+1), what is f(1)?", answer: "0.5", topic: "Functions" },

  // Topic: Domain, Codomain, Range
  { question: "What is the domain of f(x) = 1/√(x)?", answer: "x > 0", topic: "Domain, Codomain, Range" },
  { question: "What is the range of f(x) = √(x - 2)?", answer: "y ≥ 0", topic: "Domain, Codomain, Range" },
  { question: "For f(x) = 1/(x^2 - 1), what values are excluded from the domain?", answer: "x = 1, x = -1", topic: "Domain, Codomain, Range" },

  // Topic: Inverse Functions
  { question: "What is the inverse of f(x) = (x - 2)/3?", answer: "f^(-1)(x) = 3x + 2", topic: "Inverse Functions" },
  { question: "Find the inverse of f(x) = x^3, x ≥ 0.", answer: "f^(-1)(x) = x^(1/3)", topic: "Inverse Functions" },
  { question: "What is the inverse function of f(x) = 1/(x - 1)?", answer: "f^(-1)(x) = 1/x + 1", topic: "Inverse Functions" },

  // Topic: Composite Functions
  { question: "If f(x) = x^2 and g(x) = x + 1, find (f ∘ g)(2).", answer: "9", topic: "Composite Functions" },
  { question: "If f(x) = 2x and g(x) = x^2, find (g ∘ f)(3).", answer: "36", topic: "Composite Functions" },
  { question: "Given f(x) = x - 3 and g(x) = x^2, compute (f ∘ g)(4).", answer: "13", topic: "Composite Functions" },
];

export default level4Questions;