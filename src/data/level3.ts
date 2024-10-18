const level3Questions: { question: string, answer: string, topic: string }[] = [
    // Topic: Binary
    { question: "Convert the decimal number 25 to binary.", answer: "11001", topic: "Binary" },
    { question: "What decimal number does the binary number 1110 represent?", answer: "14", topic: "Binary" },
    { question: "Convert the binary number 10101 to decimal.", answer: "21", topic: "Binary" },
  
    // Topic: Exponents
    { question: "Evaluate 2^6.", answer: "64", topic: "Exponents" },
    { question: "Simplify: (2^3)^2.", answer: "64", topic: "Exponents" },
    { question: "Evaluate 9^2.", answer: "81", topic: "Exponents" },
  
    // Topic: Number Systems
    { question: "Which number system uses digits 0-7?", answer: "Octal", topic: "Number Systems" },
    { question: "Convert the decimal number 15 to hexadecimal.", answer: "F", topic: "Number Systems" },
    { question: "What is the base of the binary number system?", answer: "2", topic: "Number Systems" },
  
    // Topic: Hexadecimal
    { question: "Convert the hexadecimal number 1A to decimal.", answer: "26", topic: "Hexadecimal" },
    { question: "What is the hexadecimal equivalent of decimal 31?", answer: "1F", topic: "Hexadecimal" },
    { question: "Convert the decimal number 255 to hexadecimal.", answer: "FF", topic: "Hexadecimal" },
  
    // Topic: Octal
    { question: "Convert the decimal number 16 to octal.", answer: "20", topic: "Octal" },
    { question: "What is the octal equivalent of decimal 25?", answer: "31", topic: "Octal" },
    { question: "Convert the octal number 17 to decimal.", answer: "15", topic: "Octal" },
  
    // Topic: Natural Numbers
    { question: "Is 0 a natural number in modern mathematics?", answer: "Yes", topic: "Natural Numbers" },
    { question: "What is the sum of the first 5 natural numbers?", answer: "15", topic: "Natural Numbers" },
    { question: "Which of the following is not a natural number: 0, 1, -1, 2?", answer: "-1", topic: "Natural Numbers" },
  
    // Topic: Integers
    { question: "What is the result of -3 + 7?", answer: "4", topic: "Integers" },
    { question: "Calculate the absolute value of -15.", answer: "15", topic: "Integers" },
    { question: "Is 0 an integer?", answer: "Yes", topic: "Integers" },
  
    // Topic: Factors and Primes
    { question: "List all prime numbers less than 10.", answer: "2,3,5,7", topic: "Factors and Primes" },
    { question: "Is 17 a prime number?", answer: "Yes", topic: "Factors and Primes" },
    { question: "Find all factors of 12.", answer: "1,2,3,4,6,12", topic: "Factors and Primes" },
  
    // Topic: Fundamental Theorem of Arithmetic
    { question: "Express 28 as a product of prime numbers.", answer: "2^2 * 7", topic: "Fundamental Theorem of Arithmetic" },
    { question: "What is the unique prime factorization of 30?", answer: "2 * 3 * 5", topic: "Fundamental Theorem of Arithmetic" },
    { question: "Express 100 as a product of primes.", answer: "2^2 * 5^2", topic: "Fundamental Theorem of Arithmetic" },
  
    // Topic: Prime Factorization
    { question: "Find the prime factors of 45.", answer: "3 * 3 * 5", topic: "Prime Factorization" },
    { question: "What are the prime factors of 13?", answer: "13", topic: "Prime Factorization" },
    { question: "Express 60 as a product of prime numbers.", answer: "2^2 * 3 * 5", topic: "Prime Factorization" },
  
    // Topic: GCD and LCM
    { question: "What is the GCD of 18 and 24?", answer: "6", topic: "GCD and LCM" },
    { question: "Find the LCM of 5 and 7.", answer: "35", topic: "GCD and LCM" },
    { question: "What is the GCD of 14 and 21?", answer: "7", topic: "GCD and LCM" },
  
    // Topic: Modular Arithmetic
    { question: "What is 17 mod 5?", answer: "2", topic: "Modular Arithmetic" },
    { question: "Calculate 22 mod 6.", answer: "4", topic: "Modular Arithmetic" },
    { question: "What is 13 mod 7?", answer: "6", topic: "Modular Arithmetic" },
  
    // Topic: Rational and Irrational Numbers
    { question: "Is π (pi) a rational number?", answer: "No", topic: "Rational and Irrational Numbers" },
    { question: "Is 0.5 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
    { question: "Is the square root of 4 a rational number?", answer: "Yes", topic: "Rational and Irrational Numbers" },
  
    // Topic: Real Numbers
    { question: "Is √-1 a real number?", answer: "No", topic: "Real Numbers" },
    { question: "Is the number e (Euler's number) irrational or rational?", answer: "Irrational", topic: "Real Numbers" },
    { question: "Is -√2 a real number?", answer: "Yes", topic: "Real Numbers" },
  
    // Topic: Power Rules
    { question: "Simplify: x^3 * x^2.", answer: "x^5", topic: "Power Rules" },
    { question: "Simplify: (x^4)^2.", answer: "x^8", topic: "Power Rules" },
    { question: "Simplify: x^5 / x^2.", answer: "x^3", topic: "Power Rules" },
  
    // Topic: Radicals
    { question: "Simplify: √(25).", answer: "5", topic: "Radicals" },
    { question: "Simplify: √(x^2).", answer: "x", topic: "Radicals" },
    { question: "Simplify: √(49).", answer: "7", topic: "Radicals" },
  
    // Topic: Exponents
    { question: "Evaluate 2^-1.", answer: "0.5", topic: "Exponents" },
    { question: "Simplify: (3^2)^2.", answer: "81", topic: "Exponents" },
    { question: "Evaluate 4^(1/2).", answer: "2", topic: "Exponents" },
  
    // Topic: Logarithms
    { question: "What is log base 2 of 32?", answer: "5", topic: "Logarithms" },
    { question: "Evaluate log base 10 of 10000.", answer: "4", topic: "Logarithms" },
    { question: "What is log base 3 of 9?", answer: "2", topic: "Logarithms" },
  
    // Topic: Functions
    { question: "If f(x) = 2x + 3, what is f(5)?", answer: "13", topic: "Functions" },
    { question: "If f(x) = x^2 - x, find f(3).", answer: "6", topic: "Functions" },
    { question: "If f(x) = 1/x, what is f(2)?", answer: "0.5", topic: "Functions" },
  
    // Topic: Domain, Codomain, Range
    { question: "What is the domain of f(x) = √(x - 1)?", answer: "x ≥ 1", topic: "Domain, Codomain, Range" },
    { question: "What is the range of f(x) = x^2 - 4 for real x?", answer: "y ≥ -4", topic: "Domain, Codomain, Range" },
    { question: "For f(x) = 1/(x - 2), what value is excluded from the domain?", answer: "2", topic: "Domain, Codomain, Range" },
  
    // Topic: Inverse Functions
    { question: "What is the inverse of f(x) = 3x + 1?", answer: "f^(-1)(x) = (x - 1)/3", topic: "Inverse Functions" },
    { question: "Find the inverse of f(x) = x^2, x ≥ 0.", answer: "f^(-1)(x) = √x", topic: "Inverse Functions" },
    { question: "What is the inverse function of f(x) = 1/x?", answer: "f^(-1)(x) = 1/x", topic: "Inverse Functions" },
  
    // Topic: Composite Functions
    { question: "If f(x) = x + 2 and g(x) = 2x, find (f ∘ g)(3).", answer: "8", topic: "Composite Functions" },
    { question: "If f(x) = x^2 and g(x) = x - 1, find (g ∘ f)(2).", answer: "3", topic: "Composite Functions" },
    { question: "Given f(x) = 2x and g(x) = x + 3, compute (f ∘ g)(4).", answer: "14", topic: "Composite Functions" },
  ];

  export default level3Questions;