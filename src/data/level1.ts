const level1Questions: { question: string, answer: string, topic: string }[] = [
  // Topic: Binary
  { question: "Convert the decimal number 5 to binary.", answer: "101", topic: "Binary" },
  { question: "Convert the decimal number 2 to binary.", answer: "10", topic: "Binary" },
  { question: "What is the binary equivalent of decimal 3?", answer: "11", topic: "Binary" },

  // Topic: Exponents
  { question: "Evaluate 2^3.", answer: "8", topic: "Exponents" },
  { question: "Evaluate 3^2.", answer: "9", topic: "Exponents" },
  { question: "Evaluate 4^2.", answer: "16", topic: "Exponents" },

  // Topic: Number Systems
  { question: "What is the base of the decimal number system?", answer: "10", topic: "Number Systems" },
  { question: "Which number system uses only the digits 0 and 1?", answer: "Binary", topic: "Number Systems" },
  { question: "What is the base of the hexadecimal number system?", answer: "16", topic: "Number Systems" },

  // Topic: Hexadecimal
  { question: "What is the hexadecimal equivalent of decimal 15?", answer: "F", topic: "Hexadecimal" },
  { question: "Convert the hexadecimal number A to decimal.", answer: "10", topic: "Hexadecimal" },
  { question: "What is the hexadecimal number for decimal 16?", answer: "10", topic: "Hexadecimal" },

  // Topic: Octal
  { question: "What is the base of the octal number system?", answer: "8", topic: "Octal" },
  { question: "Convert the decimal number 7 to octal.", answer: "7", topic: "Octal" },
  { question: "What is the octal equivalent of decimal 8?", answer: "10", topic: "Octal" },

  // Topic: Natural Numbers
  { question: "What is the smallest natural number?", answer: "1", topic: "Natural Numbers" },
  { question: "Is zero considered a natural number?", answer: "No", topic: "Natural Numbers" },
  { question: "Which of the following is a natural number?", answer: "1", topic: "Natural Numbers" },

  // Topic: Integers
  { question: "Is -1 an integer?", answer: "Yes", topic: "Integers" },
  { question: "Which of the following is not an integer?", answer: "1.5", topic: "Integers" },
  { question: "Is zero an integer?", answer: "Yes", topic: "Integers" },

  // Topic: Factors and Primes
  { question: "Is 2 a prime number?", answer: "Yes", topic: "Factors and Primes" },
  { question: "Which number is a factor of 6?", answer: "6", topic: "Factors and Primes" },
  { question: "Is 9 a prime number?", answer: "No", topic: "Factors and Primes" },

  // Topic: Fundamental Theorem of Arithmetic
  { question: "Every integer greater than 1 is either prime or can be uniquely factored into what?", answer: "Prime numbers", topic: "Fundamental Theorem of Arithmetic" },
  { question: "What is the prime factorization of 12?", answer: "2^2 * 3", topic: "Fundamental Theorem of Arithmetic" },
  { question: "What is the prime factorization of 15?", answer: "3 * 5", topic: "Fundamental Theorem of Arithmetic" },

  // Topic: Prime Factorization
  { question: "Find the prime factors of 20.", answer: "2^2 * 5", topic: "Prime Factorization" },
  { question: "What are the prime factors of 7?", answer: "7", topic: "Prime Factorization" },
  { question: "Express 18 as a product of prime numbers.", answer: "2 * 3^2", topic: "Prime Factorization" },

  // Topic: GCD and LCM
  { question: "What is the GCD of 4 and 6?", answer: "2", topic: "GCD and LCM" },
  { question: "Find the LCM of 3 and 5.", answer: "15", topic: "GCD and LCM" },
  { question: "What is the GCD of 7 and 14?", answer: "7", topic: "GCD and LCM" },

  // Topic: Modular Arithmetic
  { question: "What is 5 mod 3?", answer: "2", topic: "Modular Arithmetic" },
  { question: "Calculate 10 mod 4.", answer: "2", topic: "Modular Arithmetic" },
  { question: "What is 7 mod 7?", answer: "0", topic: "Modular Arithmetic" },

  // Topic: Rational and Irrational Numbers
  { question: "Is 1/2 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
  { question: "Is √2 a rational number?", answer: "No", topic: "Rational and Irrational Numbers" },
  { question: "Is 0.333... (repeating) a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },

  // Topic: Real Numbers
  { question: "The set of real numbers includes rational numbers and what other type of numbers?", answer: "Irrational", topic: "Real Numbers" },
  { question: "Is π (pi) a real number?", answer: "Yes", topic: "Real Numbers" },
  { question: "Is -5 a real number?", answer: "Yes", topic: "Real Numbers" },

  // Topic: Power Rules
  { question: "Simplify: x^0", answer: "1", topic: "Power Rules" },
  { question: "Simplify: x^1", answer: "x", topic: "Power Rules" },
  { question: "Simplify: x^a * x^b", answer: "x^(a+b)", topic: "Power Rules" },

  // Topic: Radicals
  { question: "What is the square root of 9?", answer: "3", topic: "Radicals" },
  { question: "Simplify: √16", answer: "4", topic: "Radicals" },
  { question: "What is the cube root of 8?", answer: "2", topic: "Radicals" },

  // Topic: Exponents
  { question: "Evaluate 2^4.", answer: "16", topic: "Exponents" },
  { question: "What is 3^0?", answer: "1", topic: "Exponents" },
  { question: "Calculate 5^1.", answer: "5", topic: "Exponents" },

  // Topic: Logarithms
  { question: "What is log base 10 of 100?", answer: "2", topic: "Logarithms" },
  { question: "Evaluate log base 2 of 8.", answer: "3", topic: "Logarithms" },
  { question: "What is log base 5 of 1?", answer: "0", topic: "Logarithms" },

  // Topic: Functions
  { question: "If f(x) = x + 2, what is f(3)?", answer: "5", topic: "Functions" },
  { question: "If f(x) = 2x, find f(4).", answer: "8", topic: "Functions" },
  { question: "If f(x) = x^2, what is f(2)?", answer: "4", topic: "Functions" },

  // Topic: Domain, Codomain, Range
  { question: "What is the domain of f(x) = x^2?", answer: "All real numbers", topic: "Domain, Codomain, Range" },
  { question: "What is the range of f(x) = x^2 for real x?", answer: "x ≥ 0", topic: "Domain, Codomain, Range" },
  { question: "For f(x) = 1/x, what value is excluded from the domain?", answer: "0", topic: "Domain, Codomain, Range" },

  // Topic: Inverse Functions
  { question: "What is the inverse of f(x) = x + 1?", answer: "f^(-1)(x) = x - 1", topic: "Inverse Functions" },
  { question: "Find the inverse of f(x) = 2x.", answer: "f^(-1)(x) = x/2", topic: "Inverse Functions" },
  { question: "What is the inverse function of f(x) = x^3?", answer: "f^(-1)(x) = x^(1/3)", topic: "Inverse Functions" },

  // Topic: Composite Functions
  { question: "If f(x) = x + 2 and g(x) = x^2, find (f ∘ g)(1).", answer: "3", topic: "Composite Functions" },
  { question: "If f(x) = 2x and g(x) = x + 3, find (g ∘ f)(2).", answer: "7", topic: "Composite Functions" },
  { question: "Given f(x) = x - 1 and g(x) = x^2, compute (f ∘ g)(2).", answer: "3", topic: "Composite Functions" },
];


export default level1Questions;