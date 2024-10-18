const level2Questions: { question: string, answer: string, topic: string }[] = [
  // Topic: Binary
  { question: "Convert the decimal number 10 to binary.", answer: "1010", topic: "Binary" },
  { question: "What is the binary equivalent of decimal 5?", answer: "101", topic: "Binary" },
  { question: "Convert the binary number 110 to decimal.", answer: "6", topic: "Binary" },

  // Topic: Exponents
  { question: "Evaluate 2^5.", answer: "32", topic: "Exponents" },
  { question: "Evaluate 5^2.", answer: "25", topic: "Exponents" },
  { question: "Evaluate 6^2.", answer: "36", topic: "Exponents" },

  // Topic: Number Systems
  { question: "What is the base of the binary number system?", answer: "2", topic: "Number Systems" },
  { question: "Which number system uses the digits 0-9 and A-F?", answer: "Hexadecimal", topic: "Number Systems" },
  { question: "What is the base of the octal number system?", answer: "8", topic: "Number Systems" },

  // Topic: Hexadecimal
  { question: "What is the hexadecimal equivalent of decimal 20?", answer: "14", topic: "Hexadecimal" },
  { question: "Convert the hexadecimal number B to decimal.", answer: "11", topic: "Hexadecimal" },
  { question: "What is the hexadecimal number for decimal 32?", answer: "20", topic: "Hexadecimal" },

  // Topic: Octal
  { question: "Convert the decimal number 9 to octal.", answer: "11", topic: "Octal" },
  { question: "What is the octal equivalent of decimal 16?", answer: "20", topic: "Octal" },
  { question: "What is the base of the octal number system?", answer: "8", topic: "Octal" },

  // Topic: Natural Numbers
  { question: "What is the smallest prime number?", answer: "2", topic: "Natural Numbers" },
  { question: "Is 1 a prime number?", answer: "No", topic: "Natural Numbers" },
  { question: "Which of the following is a prime number?", answer: "2", topic: "Natural Numbers" },

  // Topic: Integers
  { question: "Is -2 an integer?", answer: "Yes", topic: "Integers" },
  { question: "Which of the following is not an integer?", answer: "2.5", topic: "Integers" },
  { question: "Is -3 an integer?", answer: "Yes", topic: "Integers" },

  // Topic: Factors and Primes
  { question: "Is 3 a prime number?", answer: "Yes", topic: "Factors and Primes" },
  { question: "Which number is a factor of 9?", answer: "3", topic: "Factors and Primes" },
  { question: "Is 15 a prime number?", answer: "No", topic: "Factors and Primes" },

  // Topic: Fundamental Theorem of Arithmetic
  { question: "Every integer greater than 1 is either prime or can be uniquely factored into what?", answer: "Prime numbers", topic: "Fundamental Theorem of Arithmetic" },
  { question: "What is the prime factorization of 18?", answer: "2 * 3^2", topic: "Fundamental Theorem of Arithmetic" },
  { question: "What is the prime factorization of 20?", answer: "2^2 * 5", topic: "Fundamental Theorem of Arithmetic" },

  // Topic: Prime Factorization
  { question: "Find the prime factors of 25.", answer: "5^2", topic: "Prime Factorization" },
  { question: "What are the prime factors of 11?", answer: "11", topic: "Prime Factorization" },
  { question: "Express 24 as a product of prime numbers.", answer: "2^3 * 3", topic: "Prime Factorization" },

  // Topic: GCD and LCM
  { question: "What is the GCD of 8 and 12?", answer: "4", topic: "GCD and LCM" },
  { question: "Find the LCM of 4 and 6.", answer: "12", topic: "GCD and LCM" },
  { question: "What is the GCD of 9 and 18?", answer: "9", topic: "GCD and LCM" },

  // Topic: Modular Arithmetic
  { question: "What is 8 mod 3?", answer: "2", topic: "Modular Arithmetic" },
  { question: "Calculate 15 mod 4.", answer: "3", topic: "Modular Arithmetic" },
  { question: "What is 10 mod 7?", answer: "3", topic: "Modular Arithmetic" },

  // Topic: Rational and Irrational Numbers
  { question: "Is 3/4 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
  { question: "Is √3 a rational number?", answer: "No", topic: "Rational and Irrational Numbers" },
  { question: "Is 0.25 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },

  // Topic: Real Numbers
  { question: "The set of real numbers includes rational numbers and what other type of numbers?", answer: "Irrational", topic: "Real Numbers" },
  { question: "Is e (Euler's number) a real number?", answer: "Yes", topic: "Real Numbers" },
  { question: "Is -10 a real number?", answer: "Yes", topic: "Real Numbers" },

  // Topic: Power Rules
  { question: "Simplify: x^2 * x^3", answer: "x^5", topic: "Power Rules" },
  { question: "Simplify: (x^2)^3", answer: "x^6", topic: "Power Rules" },
  { question: "Simplify: x^a / x^b", answer: "x^(a-b)", topic: "Power Rules" },

  // Topic: Radicals
  { question: "What is the square root of 16?", answer: "4", topic: "Radicals" },
  { question: "Simplify: √25", answer: "5", topic: "Radicals" },
  { question: "What is the cube root of 27?", answer: "3", topic: "Radicals" },

  // Topic: Exponents
  { question: "Evaluate 3^3.", answer: "27", topic: "Exponents" },
  { question: "What is 4^0?", answer: "1", topic: "Exponents" },
  { question: "Calculate 6^1.", answer: "6", topic: "Exponents" },

  // Topic: Logarithms
  { question: "What is log base 10 of 1000?", answer: "3", topic: "Logarithms" },
  { question: "Evaluate log base 2 of 16.", answer: "4", topic: "Logarithms" },
  { question: "What is log base 3 of 27?", answer: "3", topic: "Logarithms" },

  // Topic: Functions
  { question: "If f(x) = x + 3, what is f(4)?", answer: "7", topic: "Functions" },
  { question: "If f(x) = 3x, find f(5).", answer: "15", topic: "Functions" },
  { question: "If f(x) = x^3, what is f(3)?", answer: "27", topic: "Functions" },

  // Topic: Domain, Codomain, Range
  { question: "What is the domain of f(x) = 1/x?", answer: "All real numbers except 0", topic: "Domain, Codomain, Range" },
  { question: "What is the range of f(x) = x^3 for real x?", answer: "All real numbers", topic: "Domain, Codomain, Range" },
  { question: "For f(x) = √x, what value is excluded from the domain?", answer: "Negative numbers", topic: "Domain, Codomain, Range" },

  // Topic: Inverse Functions
  { question: "What is the inverse of f(x) = x - 1?", answer: "f^(-1)(x) = x + 1", topic: "Inverse Functions" },
  { question: "Find the inverse of f(x) = 3x.", answer: "f^(-1)(x) = x/3", topic: "Inverse Functions" },
  { question: "What is the inverse function of f(x) = x^2?", answer: "f^(-1)(x) = √x", topic: "Inverse Functions" },

  // Topic: Composite Functions
  { question: "If f(x) = x + 3 and g(x) = x^2, find (f ∘ g)(2).", answer: "7", topic: "Composite Functions" },
  { question: "If f(x) = 3x and g(x) = x + 2, find (g ∘ f)(3).", answer: "11", topic: "Composite Functions" },
  { question: "Given f(x) = x - 2 and g(x) = x^3, compute (f ∘ g)(2).", answer: "6", topic: "Composite Functions" },
];


export default level2Questions;