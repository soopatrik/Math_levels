const level8Questions: { question: string; answer: string; topic: string }[] = [
  // Topic: Number Systems
  {
    question: "Convert the repeating decimal 0.\\overline{142857} to a fraction.",
    answer: "1/7",
    topic: "Number Systems",
  },
  {
    question: "Express the decimal number 0.625 in binary, octal, and hexadecimal fractions.",
    answer: "Binary: 0.101, Octal: 0.5, Hexadecimal: 0.A",
    topic: "Number Systems",
  },
  {
    question: "Prove that the decimal expansion of 1/13 is repeating and find its period.",
    answer: "Yes, repeating with period 6: 0.076923",
    topic: "Number Systems",
  },

  // Topic: Binary
  {
    question: "Perform binary multiplication: 1101.1 × 101.01.",
    answer: "Result: 100111.0111",
    topic: "Binary",
  },
  {
    question: "Convert the binary fraction 1011.101 to decimal.",
    answer: "11.625",
    topic: "Binary",
  },
  {
    question: "Divide the binary number 110101 by 101 and provide the quotient and remainder.",
    answer: "Quotient: 1001, Remainder: 0",
    topic: "Binary",
  },

  // Topic: Hexadecimal
  {
    question: "Convert the hexadecimal number '2F.A' to decimal.",
    answer: "47.625",
    topic: "Hexadecimal",
  },
  {
    question: "Perform hexadecimal multiplication: '1C' × '3'.",
    answer: "Result: '54'",
    topic: "Hexadecimal",
  },
  {
    question: "Express the decimal number 255.75 in hexadecimal.",
    answer: "FF.C",
    topic: "Hexadecimal",
  },

  // Topic: Octal
  {
    question: "Convert the octal fraction '17.4' to decimal.",
    answer: "15.5",
    topic: "Octal",
  },
  {
    question: "Perform octal division: 645 ÷ 17.",
    answer: "Quotient: 37, Remainder: 4",
    topic: "Octal",
  },
  {
    question: "Convert the decimal number 0.875 to octal.",
    answer: "0.7",
    topic: "Octal",
  },

  // Topic: Natural Numbers
  {
    question: "Prove that the sum of the first n odd natural numbers is n².",
    answer: "Yes, sum = n²",
    topic: "Natural Numbers",
  },
  {
    question: "Find the sum of the first 50 natural numbers.",
    answer: "1275",
    topic: "Natural Numbers",
  },
  {
    question: "Determine the 20th term of the arithmetic sequence where a₁ = 3 and d = 5.",
    answer: "aₙ = 3 + (20 - 1) × 5 = 98",
    topic: "Natural Numbers",
  },

  // Topic: Integers
  {
    question: "Solve for x: |2x + 3| = 7.",
    answer: "x = 2 or x = -5",
    topic: "Integers",
  },
  {
    question: "Evaluate: (-2)^5 + (-3)^4.",
    answer: "-32 + 81 = 49",
    topic: "Integers",
  },
  {
    question: "If x and y are integers such that x - y = 4 and xy = -21, find x and y.",
    answer: "x = 7, y = 3 or x = -3, y = -7",
    topic: "Integers",
  },

  // Topic: Factors and Primes
  {
    question: "Find the least positive integer that is divisible by all numbers from 1 to 10.",
    answer: "2520",
    topic: "Factors and Primes",
  },
  {
    question: "Prove that 561 is a pseudoprime to base 2.",
    answer: "Yes, 2^560 ≡ 1 mod 561, but 561 is composite.",
    topic: "Factors and Primes",
  },
  {
    question: "Determine if 97 is a prime number.",
    answer: "Yes",
    topic: "Factors and Primes",
  },

  // Topic: Fundamental Theorem of Arithmetic
  {
    question: "Express 1001 as a product of prime factors.",
    answer: "7 × 11 × 13",
    topic: "Fundamental Theorem of Arithmetic",
  },
  {
    question: "If n = 2^3 × 3^2 × 5, how many positive divisors does n have?",
    answer: "(3+1)(2+1)(1+1) = 24 divisors",
    topic: "Fundamental Theorem of Arithmetic",
  },
  {
    question: "Prove that the prime factorization of any integer greater than 1 is unique.",
    answer: "Yes, by the Fundamental Theorem of Arithmetic.",
    topic: "Fundamental Theorem of Arithmetic",
  },

  // Topic: Prime Factorization
  {
    question: "Determine the prime factors of 2310.",
    answer: "2 × 3 × 5 × 7 × 11",
    topic: "Prime Factorization",
  },
  {
    question: "Express 3600 as a product of prime powers.",
    answer: "2^4 × 3^2 × 5^2",
    topic: "Prime Factorization",
  },
  {
    question: "Find the prime factorization of 143.",
    answer: "11 × 13",
    topic: "Prime Factorization",
  },

  // Topic: GCD and LCM
  {
    question: "Find integers x and y such that 99x + 78y = GCD(99,78).",
    answer: "GCD is 3; x = -7, y = 9",
    topic: "GCD and LCM",
  },
  {
    question: "If GCD(a, b) = 12 and LCM(a, b) = 180, find possible values of a and b.",
    answer: "a = 12, b = 180 or a = 36, b = 60, etc.",
    topic: "GCD and LCM",
  },
  {
    question: "Compute the GCD of 252 and 105 using the Euclidean algorithm.",
    answer: "GCD is 21",
    topic: "GCD and LCM",
  },

  // Topic: Modular Arithmetic
  {
    question: "Solve for x: 3x ≡ 4 mod 7.",
    answer: "x ≡ 6 mod 7",
    topic: "Modular Arithmetic",
  },
  {
    question: "Find the remainder when 2^100 is divided by 13.",
    answer: "9",
    topic: "Modular Arithmetic",
  },
  {
    question: "Determine the least positive integer x satisfying x ≡ 2 mod 3, x ≡ 3 mod 5, x ≡ 2 mod 7.",
    answer: "x = 23",
    topic: "Modular Arithmetic",
  },

  // Topic: Rational and Irrational Numbers
  {
    question: "Prove that the sum of a rational number and an irrational number is irrational.",
    answer: "Yes, sum is irrational.",
    topic: "Rational and Irrational Numbers",
  },
  {
    question: "Is the product of √2 and √8 rational or irrational?",
    answer: "Rational, since √2 × √8 = √16 = 4",
    topic: "Rational and Irrational Numbers",
  },
  {
    question: "Express the infinite repeating decimal 0.\\overline{081} as a fraction.",
    answer: "81/999 = 9/111",
    topic: "Rational and Irrational Numbers",
  },

  // Topic: Real Numbers
  {
    question: "Between any two real numbers, there are infinitely many rational and irrational numbers. True or False?",
    answer: "True",
    topic: "Real Numbers",
  },
  {
    question: "Determine if the square root of a negative real number is a real number.",
    answer: "No, it's an imaginary number.",
    topic: "Real Numbers",
  },
  {
    question: "Prove that π is an irrational number.",
    answer: "Yes, π is irrational (proof is advanced).",
    topic: "Real Numbers",
  },

  // Topic: Power Rules
  {
    question: "Simplify: x^{a} × x^{b} × x^{-c}.",
    answer: "x^{a + b - c}",
    topic: "Power Rules",
  },
  {
    question: "Simplify: (x^{1/2} y^{1/3})^{6}.",
    answer: "x^3 y^2",
    topic: "Power Rules",
  },
  {
    question: "Express with positive exponents: (x^{-2} y^{3})^{-1}.",
    answer: "x^{2} y^{-3}",
    topic: "Power Rules",
  },

  // Topic: Radicals
  {
    question: "Simplify: √(75) + √(27).",
    answer: "5√3 + 3√3 = 8√3",
    topic: "Radicals",
  },
  {
    question: "Rationalize the denominator: 1 / (√5 - √2).",
    answer: "(√5 + √2) / 3",
    topic: "Radicals",
  },
  {
    question: "Simplify: (√a - √b)^2.",
    answer: "a - 2√(ab) + b",
    topic: "Radicals",
  },

  // Topic: Exponents
  {
    question: "Solve for x: 5^{2x - 1} = 125.",
    answer: "x = 2",
    topic: "Exponents",
  },
  {
    question: "Simplify: (27)^{2/3}.",
    answer: "9",
    topic: "Exponents",
  },
  {
    question: "Evaluate: 81^{3/4}.",
    answer: "27",
    topic: "Exponents",
  },

  // Topic: Logarithms
  {
    question: "Solve for x: log_{2}(x) + log_{2}(x - 2) = 3.",
    answer: "x = 4",
    topic: "Logarithms",
  },
  {
    question: "Simplify: log_{a}(b^3) - 3 log_{a}(b).",
    answer: "0",
    topic: "Logarithms",
  },
  {
    question: "If log_{b}(a) = c, express log_{a}(b) in terms of c.",
    answer: "1 / c",
    topic: "Logarithms",
  },

  // Topic: Functions
  {
    question: "Determine if f(x) = x / (x - 1) is its own inverse.",
    answer: "Yes",
    topic: "Functions",
  },
  {
    question: "If f(f(x)) = x, and f(x) = (ax + b)/(cx + d), find the relationship between coefficients.",
    answer: "Coefficients satisfy ad - bc ≠ 0, and specific relationships",
    topic: "Functions",
  },
  {
    question: "Find f^{-1}(x) if f(x) = (x + 2)/(x - 2).",
    answer: "f^{-1}(x) = (2x + 2)/(x - 1)",
    topic: "Functions",
  },

  // Topic: Domain, Codomain, Range
  {
    question: "Find the domain and range of f(x) = ln(x^2 - 4).",
    answer: "Domain: x ≤ -2 or x ≥ 2; Range: All real numbers",
    topic: "Domain, Codomain, Range",
  },
  {
    question: "Determine the domain of f(x) = 1 / (√(4 - x^2)).",
    answer: "-2 < x < 2",
    topic: "Domain, Codomain, Range",
  },
  {
    question: "For f(x) = e^{x}, what is the range of f^{-1}(x)?",
    answer: "All real numbers",
    topic: "Domain, Codomain, Range",
  },

  // Topic: Inverse Functions
  {
    question: "Find the inverse of f(x) = ln(x - 3).",
    answer: "f^{-1}(x) = e^{x} + 3",
    topic: "Inverse Functions",
  },
  {
    question: "Determine if f(x) = x^3 is invertible over all real numbers.",
    answer: "Yes",
    topic: "Inverse Functions",
  },
  {
    question: "If f(x) = 2x + 1, find (f^{-1} ∘ f)(x).",
    answer: "x",
    topic: "Inverse Functions",
  },

  // Topic: Composite Functions
  {
    question: "If f(x) = x^2 and g(x) = √x, find (f ∘ g)(x) and its domain.",
    answer: "f(g(x)) = x, Domain: x ≥ 0",
    topic: "Composite Functions",
  },
  {
    question: "Compute (g ∘ f)(x) if f(x) = x + 1 and g(x) = 1 / x.",
    answer: "g(f(x)) = 1 / (x + 1)",
    topic: "Composite Functions",
  },
  {
    question: "If f(x) = 3x - 2 and g(x) = (x + 2)/3, find (f ∘ g)(x).",
    answer: "f(g(x)) = x",
    topic: "Composite Functions",
  },
];

export default level8Questions;
