const level5Questions: { question: string; answer: string; topic: string }[] = [
  // Topic: Binary
  { question: "Convert the decimal number 85 to binary.", answer: "1010101", topic: "Binary" },
  { question: "What decimal number does the binary number 100101 represent?", answer: "37", topic: "Binary" },
  { question: "Convert the binary number 110010 to decimal.", answer: "50", topic: "Binary" },

  // Topic: Exponents
  { question: "Evaluate 2^10.", answer: "1024", topic: "Exponents" },
  { question: "Simplify: (3^2)^3.", answer: "729", topic: "Exponents" },
  { question: "Evaluate 7^2.", answer: "49", topic: "Exponents" },

  // Topic: Number Systems
  { question: "Convert the decimal number 1023 to hexadecimal.", answer: "3FF", topic: "Number Systems" },
  { question: "What is the base of the vigesimal number system?", answer: "20", topic: "Number Systems" },
  { question: "Which number system uses digits 0-9 and letters A-Z (up to Z)?", answer: "Base-36", topic: "Number Systems" },

  // Topic: Hexadecimal
  { question: "Convert the hexadecimal number 3C to decimal.", answer: "60", topic: "Hexadecimal" },
  { question: "What is the hexadecimal equivalent of decimal 255?", answer: "FF", topic: "Hexadecimal" },
  { question: "Convert the decimal number 500 to hexadecimal.", answer: "1F4", topic: "Hexadecimal" },

  // Topic: Octal
  { question: "Convert the decimal number 100 to octal.", answer: "144", topic: "Octal" },
  { question: "What is the octal equivalent of decimal 88?", answer: "130", topic: "Octal" },
  { question: "Convert the octal number 125 to decimal.", answer: "85", topic: "Octal" },

  // Topic: Natural Numbers
  { question: "What is the sum of the first 20 natural numbers?", answer: "210", topic: "Natural Numbers" },
  { question: "Is 0.999... (repeating) equal to 1?", answer: "Yes", topic: "Natural Numbers" },
  { question: "Which of the following is a natural number: √16?", answer: "4", topic: "Natural Numbers" },

  // Topic: Integers
  { question: "Calculate: -15 + 8", answer: "-7", topic: "Integers" },
  { question: "What is the result of -10 - (-15)?", answer: "5", topic: "Integers" },
  { question: "Calculate the absolute value of -50.", answer: "50", topic: "Integers" },

  // Topic: Factors and Primes
  { question: "List all prime numbers between 20 and 30.", answer: "23,29", topic: "Factors and Primes" },
  { question: "Is 51 a prime number?", answer: "No", topic: "Factors and Primes" },
  { question: "Find all factors of 28.", answer: "1,2,4,7,14,28", topic: "Factors and Primes" },

  // Topic: Fundamental Theorem of Arithmetic
  { question: "Express 105 as a product of prime numbers.", answer: "3 * 5 * 7", topic: "Fundamental Theorem of Arithmetic" },
  { question: "What is the unique prime factorization of 210?", answer: "2 * 3 * 5 * 7", topic: "Fundamental Theorem of Arithmetic" },
  { question: "Express 120 as a product of primes.", answer: "2^3 * 3 * 5", topic: "Fundamental Theorem of Arithmetic" },

  // Topic: Prime Factorization
  { question: "Find the prime factors of 143.", answer: "11 * 13", topic: "Prime Factorization" },
  { question: "What are the prime factors of 19?", answer: "19", topic: "Prime Factorization" },
  { question: "Express 150 as a product of prime numbers.", answer: "2 * 3 * 5^2", topic: "Prime Factorization" },

  // Topic: GCD and LCM
  { question: "What is the GCD of 48 and 180?", answer: "12", topic: "GCD and LCM" },
  { question: "Find the LCM of 14 and 15.", answer: "210", topic: "GCD and LCM" },
  { question: "What is the GCD of 81 and 27?", answer: "27", topic: "GCD and LCM" },

  // Topic: Modular Arithmetic
  { question: "What is 45 mod 7?", answer: "3", topic: "Modular Arithmetic" },
  { question: "Calculate 100 mod 13.", answer: "9", topic: "Modular Arithmetic" },
  { question: "What is 73 mod 10?", answer: "3", topic: "Modular Arithmetic" },

  // Topic: Rational and Irrational Numbers
  { question: "Is the decimal 0.101001000100001... (pattern continues) rational or irrational?", answer: "Irrational", topic: "Rational and Irrational Numbers" },
  { question: "Is the fraction 22/7 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
  { question: "Is the square root of 2 a rational number?", answer: "No", topic: "Rational and Irrational Numbers" },

  // Topic: Real Numbers
  { question: "Is the imaginary unit 'i' a real number?", answer: "No", topic: "Real Numbers" },
  { question: "Is -π a real number?", answer: "Yes", topic: "Real Numbers" },
  { question: "Is √(-9) a real number?", answer: "No", topic: "Real Numbers" },

  // Topic: Power Rules
  { question: "Simplify: (x^2)^5.", answer: "x^10", topic: "Power Rules" },
  { question: "Simplify: x^7 * x^3.", answer: "x^10", topic: "Power Rules" },
  { question: "Simplify: x^9 / x^3.", answer: "x^6", topic: "Power Rules" },

  // Topic: Radicals
  { question: "Simplify: √(256).", answer: "16", topic: "Radicals" },
  { question: "Simplify: √(x^6).", answer: "x^3", topic: "Radicals" },
  { question: "Simplify: √(169).", answer: "13", topic: "Radicals" },

  // Topic: Exponents
  { question: "Evaluate 2^-4.", answer: "0.0625", topic: "Exponents" },
  { question: "Simplify: (5^2)^3.", answer: "15625", topic: "Exponents" },
  { question: "Evaluate 16^(3/4).", answer: "8", topic: "Exponents" },

  // Topic: Logarithms
  { question: "What is log base 2 of 512?", answer: "9", topic: "Logarithms" },
  { question: "Evaluate log base 10 of 100000.", answer: "5", topic: "Logarithms" },
  { question: "What is log base 5 of 625?", answer: "4", topic: "Logarithms" },

  // Topic: Functions
  { question: "If f(x) = 4x - 5, what is f(6)?", answer: "19", topic: "Functions" },
  { question: "If f(x) = x^2 - 5x + 6, find f(3).", answer: "0", topic: "Functions" },
  { question: "If f(x) = 1/(x - 2), what is f(4)?", answer: "0.5", topic: "Functions" },

  // Topic: Domain, Codomain, Range
  { question: "What is the domain of f(x) = 1/(x^2 - 4)?", answer: "All real numbers except x = 2, x = -2", topic: "Domain, Codomain, Range" },
  { question: "What is the range of f(x) = x^2 + 1 for real x?", answer: "y ≥ 1", topic: "Domain, Codomain, Range" },
  { question: "For f(x) = ln(x), what is the domain?", answer: "x > 0", topic: "Domain, Codomain, Range" },

  // Topic: Inverse Functions
  { question: "What is the inverse of f(x) = (x + 3)/2?", answer: "f^(-1)(x) = 2x - 3", topic: "Inverse Functions" },
  { question: "Find the inverse of f(x) = x^3, x ∈ ℝ.", answer: "f^(-1)(x) = x^(1/3)", topic: "Inverse Functions" },
  { question: "What is the inverse function of f(x) = e^x?", answer: "f^(-1)(x) = ln(x)", topic: "Inverse Functions" },

  // Topic: Composite Functions
  { question: "If f(x) = x^2 and g(x) = x - 2, find (f ∘ g)(5).", answer: "9", topic: "Composite Functions" },
  { question: "If f(x) = 3x and g(x) = x^2, find (g ∘ f)(2).", answer: "36", topic: "Composite Functions" },
  { question: "Given f(x) = x^2 and g(x) = √x, compute (f ∘ g)(16).", answer: "16", topic: "Composite Functions" },
];

export default level5Questions;
