const level7Questions: { question: string; answer: string; topic: string }[] = [
  // Topic: Number Systems
  {
    question: "Express the decimal number 0.375 in binary, octal, and hexadecimal.",
    answer: "Binary: 0.011, Octal: 0.3, Hexadecimal: 0.6",
    topic: "Number Systems",
  },
  {
    question: "Convert the repeating decimal 0.\\overline{3} to a fraction.",
    answer: "1/3",
    topic: "Number Systems",
  },
  {
    question: "Prove that the decimal expansion of any rational number either terminates or repeats.",
    answer: "Yes, rational numbers have terminating or repeating decimals.",
    topic: "Number Systems",
  },

  // Topic: Binary
  {
    question: "Perform binary division: 110101 ÷ 101.",
    answer: "Quotient: 110, Remainder: 11",
    topic: "Binary",
  },
  {
    question: "Convert the binary number 1101.101 to decimal.",
    answer: "13.625",
    topic: "Binary",
  },
  {
    question: "Perform binary multiplication: 1011 × 110.",
    answer: "1000110",
    topic: "Binary",
  },

  // Topic: Hexadecimal
  {
    question: "Convert the hexadecimal number '1A.F' to decimal.",
    answer: "26.9375",
    topic: "Hexadecimal",
  },
  {
    question: "Perform hexadecimal addition: 'AB' + '1F'.",
    answer: "CA",
    topic: "Hexadecimal",
  },
  {
    question: "Convert the decimal number 255.5 to hexadecimal.",
    answer: "FF.8",
    topic: "Hexadecimal",
  },

  // Topic: Octal
  {
    question: "Convert the octal number '7.4' to decimal.",
    answer: "7.5",
    topic: "Octal",
  },
  {
    question: "Perform octal subtraction: 127 - 56.",
    answer: "47",
    topic: "Octal",
  },
  {
    question: "Express the decimal number 0.625 in octal.",
    answer: "0.5",
    topic: "Octal",
  },

  // Topic: Natural Numbers
  {
    question: "Find the 15th triangular number.",
    answer: "120",
    topic: "Natural Numbers",
  },
  {
    question: "Prove that the sum of any two natural numbers is a natural number.",
    answer: "Yes, the set of natural numbers is closed under addition.",
    topic: "Natural Numbers",
  },
  {
    question: "Determine if 210 is a triangular number.",
    answer: "Yes, it's the 20th triangular number.",
    topic: "Natural Numbers",
  },

  // Topic: Integers
  {
    question: "Solve for x: |2x - 5| = 9.",
    answer: "x = 7 or x = -2",
    topic: "Integers",
  },
  {
    question: "Evaluate: (-3)^4 + (-2)^5.",
    answer: "81 - 32 = 49",
    topic: "Integers",
  },
  {
    question: "If x and y are integers such that x + y = -5 and xy = 6, find x and y.",
    answer: "x = -2, y = -3 or x = -3, y = -2",
    topic: "Integers",
  },

  // Topic: Factors and Primes
  {
    question: "Find all prime factors of 2310.",
    answer: "2, 3, 5, 7, 11",
    topic: "Factors and Primes",
  },
  {
    question: "Determine the least common multiple (LCM) of 14 and 15.",
    answer: "210",
    topic: "Factors and Primes",
  },
  {
    question: "Prove that there are infinitely many prime numbers.",
    answer: "Yes, by contradiction using Euclid's proof.",
    topic: "Factors and Primes",
  },

  // Topic: Fundamental Theorem of Arithmetic
  {
    question: "Express 1001 as a product of prime numbers.",
    answer: "7 × 11 × 13",
    topic: "Fundamental Theorem of Arithmetic",
  },
  {
    question: "How many positive divisors does 360 have?",
    answer: "24",
    topic: "Fundamental Theorem of Arithmetic",
  },
  {
    question: "If n = 2^2 × 3 × 5^2, how many positive divisors does n have?",
    answer: "18",
    topic: "Fundamental Theorem of Arithmetic",
  },

  // Topic: Prime Factorization
  {
    question: "Determine the prime factorization of 1000.",
    answer: "2^3 × 5^3",
    topic: "Prime Factorization",
  },
  {
    question: "Express 12345 as a product of prime factors.",
    answer: "3 × 5 × 823",
    topic: "Prime Factorization",
  },
  {
    question: "Find the greatest prime factor of 9975.",
    answer: "1995 is not prime; correct prime factors are 3 × 5^2 × 7 × 19",
    topic: "Prime Factorization",
  },

  // Topic: GCD and LCM
  {
    question: "Find the greatest common divisor (GCD) of 252 and 198.",
    answer: "18",
    topic: "GCD and LCM",
  },
  {
    question: "If GCD(a, b) = 1, what is LCM(a, b)?",
    answer: "LCM(a, b) = a × b",
    topic: "GCD and LCM",
  },
  {
    question: "Solve for x: GCD(48, x) = 12, x < 48.",
    answer: "x = 12, 24, 36",
    topic: "GCD and LCM",
  },

  // Topic: Modular Arithmetic
  {
    question: "Solve for x: x ≡ 2 mod 5 and x ≡ 3 mod 7.",
    answer: "x ≡ 17 mod 35",
    topic: "Modular Arithmetic",
  },
  {
    question: "Compute the remainder when 7^100 is divided by 5.",
    answer: "2",
    topic: "Modular Arithmetic",
  },
  {
    question: "Find the last digit of 3^1000.",
    answer: "1",
    topic: "Modular Arithmetic",
  },

  // Topic: Rational and Irrational Numbers
  {
    question: "Is the sum of √2 and √3 rational or irrational?",
    answer: "Irrational",
    topic: "Rational and Irrational Numbers",
  },
  {
    question: "Express the repeating decimal 0.\\overline{142857} as a fraction.",
    answer: "1/7",
    topic: "Rational and Irrational Numbers",
  },
  {
    question: "Prove that √n is irrational if n is not a perfect square.",
    answer: "Yes, it's irrational.",
    topic: "Rational and Irrational Numbers",
  },

  // Topic: Real Numbers
  {
    question: "Find the decimal expansion of 1/13 up to 6 decimal places.",
    answer: "0.076923",
    topic: "Real Numbers",
  },
  {
    question: "Between any two real numbers, does there exist a rational number?",
    answer: "Yes, due to the density of rationals.",
    topic: "Real Numbers",
  },
  {
    question: "Determine if the set of real numbers is countable or uncountable.",
    answer: "Uncountable",
    topic: "Real Numbers",
  },

  // Topic: Power Rules
  {
    question: "Simplify: (x^a)^b × (x^b)^a.",
    answer: "x^{2ab}",
    topic: "Power Rules",
  },
  {
    question: "Simplify: (x^{1/2} y^{1/3})^{6}.",
    answer: "x^{3} y^{2}",
    topic: "Power Rules",
  },
  {
    question: "Express x^{-3} y^{4} with positive exponents in the denominator.",
    answer: "y^{4} / x^{3}",
    topic: "Power Rules",
  },

  // Topic: Radicals
  {
    question: "Simplify: √(48).",
    answer: "4√3",
    topic: "Radicals",
  },
  {
    question: "Simplify: (√a + √b)(√a - √b).",
    answer: "a - b",
    topic: "Radicals",
  },
  {
    question: "Rationalize the denominator: 1 / (√2 + √3).",
    answer: "(√2 - √3) / ( -1 )",
    topic: "Radicals",
  },

  // Topic: Exponents
  {
    question: "Solve for x: 2^{2x} = 8^{x+1}.",
    answer: "x = 2",
    topic: "Exponents",
  },
  {
    question: "Simplify: (8^{1/3})^{2}.",
    answer: "4",
    topic: "Exponents",
  },
  {
    question: "Evaluate: 16^{-3/4}.",
    answer: "1/8",
    topic: "Exponents",
  },

  // Topic: Logarithms
  {
    question: "Solve for x: log_{2}(x) + log_{2}(x - 2) = 3.",
    answer: "x = 4",
    topic: "Logarithms",
  },
  {
    question: "Simplify: log_{a}(b) × log_{b}(a).",
    answer: "1",
    topic: "Logarithms",
  },
  {
    question: "Express ln(e^{5} x) in terms of ln(x).",
    answer: "5 + ln(x)",
    topic: "Logarithms",
  },

  // Topic: Functions
  {
    question: "If f(x) = x^2, find f^{-1}(x).",
    answer: "f^{-1}(x) = √x, x ≥ 0",
    topic: "Functions",
  },
  {
    question: "Determine if f(x) = 1/x is even, odd, or neither.",
    answer: "Odd",
    topic: "Functions",
  },
  {
    question: "If f(x) = 2x + 3, find f^{-1}(x).",
    answer: "f^{-1}(x) = (x - 3)/2",
    topic: "Functions",
  },

  // Topic: Domain, Codomain, Range
  {
    question: "Find the domain of f(x) = ln(x - 5).",
    answer: "x > 5",
    topic: "Domain, Codomain, Range",
  },
  {
    question: "Determine the range of f(x) = 1/(x^2).",
    answer: "y > 0",
    topic: "Domain, Codomain, Range",
  },
  {
    question: "For f(x) = √(x^2 - 9), find the domain.",
    answer: "x ≤ -3 or x ≥ 3",
    topic: "Domain, Codomain, Range",
  },

  // Topic: Inverse Functions
  {
    question: "Find the inverse of f(x) = (3x - 4)/2.",
    answer: "f^{-1}(x) = (2x + 4)/3",
    topic: "Inverse Functions",
  },
  {
    question: "Determine if f(x) = x^2 is invertible over x ≥ 0.",
    answer: "Yes",
    topic: "Inverse Functions",
  },
  {
    question: "If f(x) = e^{x}, find f^{-1}(x).",
    answer: "f^{-1}(x) = ln(x)",
    topic: "Inverse Functions",
  },

  // Topic: Composite Functions
  {
    question: "If f(x) = x^2 and g(x) = x + 1, find (f ∘ g)(2).",
    answer: "9",
    topic: "Composite Functions",
  },
  {
    question: "Compute (g ∘ f)(x) if f(x) = x - 1 and g(x) = 1/(x).",
    answer: "g(f(x)) = 1/(x - 1)",
    topic: "Composite Functions",
  },
  {
    question: "If f(x) = 2x and g(x) = x^2, find (f ∘ f)(3).",
    answer: "12",
    topic: "Composite Functions",
  },
];

export default level7Questions;
