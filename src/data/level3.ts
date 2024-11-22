import { Question } from "../types";

const level3Questions: Omit<Question, "difficulty">[] = [
  // Topic: Binary
  {
    question: "Convert the decimal number 25 to binary.",
    answer: "11001",
    topic: "Binary",
    format: "Enter the binary number without '0b' prefix",
  },
  {
    question: "What decimal number does the binary number 1110 represent?",
    answer: "14",
    topic: "Binary",
    format: "Enter the decimal number only",
  },
  {
    question: "Convert the binary number 10101 to decimal.",
    answer: "21",
    topic: "Binary",
    format: "Enter the decimal number only",
  },

  // Topic: Exponents
  {
    question: "Evaluate 2^6.",
    answer: "64",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Simplify: (2^3)^2.",
    answer: "64",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },
  {
    question: "Evaluate 9^2.",
    answer: "81",
    topic: "Exponents",
    format: "Enter the numerical result only",
  },

  // Topic: Number Systems
  {
    question: "Which number system uses digits 0-7?",
    answer: "Octal",
    topic: "Number Systems",
    format: "Answer with 'Octal'",
  },
  {
    question: "Convert the decimal number 15 to hexadecimal.",
    answer: "F",
    topic: "Number Systems",
    format: "Enter a single hexadecimal digit (0-9 or A-F)",
  },
  {
    question: "What is the base of the binary number system?",
    answer: "2",
    topic: "Number Systems",
    format: "Enter the numerical value only",
  },

  // Topic: Hexadecimal
  {
    question: "Convert the hexadecimal number 1A to decimal.",
    answer: "26",
    topic: "Hexadecimal",
    format: "Enter the decimal number only",
  },
  {
    question: "What is the hexadecimal equivalent of decimal 31?",
    answer: "1F",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal number without '0x' prefix",
  },
  {
    question: "Convert the decimal number 255 to hexadecimal.",
    answer: "FF",
    topic: "Hexadecimal",
    format: "Enter the hexadecimal number without '0x' prefix",
  },

  // Topic: Octal
  {
    question: "Convert the decimal number 16 to octal.",
    answer: "20",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },
  {
    question: "What is the octal equivalent of decimal 25?",
    answer: "31",
    topic: "Octal",
    format: "Enter the octal number without '0o' prefix",
  },
  {
    question: "Convert the octal number 17 to decimal.",
    answer: "15",
    topic: "Octal",
    format: "Enter the decimal number only",
  },

  // Topic: Natural Numbers
  {
    question: "Is 0 a natural number in modern mathematics?",
    answer: "Yes",
    topic: "Natural Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "What is the sum of the first 5 natural numbers?",
    answer: "15",
    topic: "Natural Numbers",
    format: "Enter the numerical result only",
  },
  {
    question: "Which of the following is not a natural number: 0, 1, -1, 2?",
    answer: "-1",
    topic: "Natural Numbers",
    format: "Enter the number with the minus sign if negative",
  },

  // Topic: Integers
  {
    question: "What is the result of -3 + 7?",
    answer: "4",
    topic: "Integers",
    format: "Enter the numerical result only",
  },
  {
    question: "Calculate the absolute value of -15.",
    answer: "15",
    topic: "Integers",
    format: "Enter the numerical result only (positive number)",
  },
  {
    question: "Is 0 an integer?",
    answer: "Yes",
    topic: "Integers",
    format: "Answer with 'Yes' or 'No'",
  },

  // Topic: Factors and Primes
  {
    question: "List all prime numbers less than 10.",
    answer: "2,3,5,7",
    topic: "Factors and Primes",
    format:
      "Enter numbers separated by commas without spaces. Example: 2,3,5,7",
  },
  {
    question: "Is 17 a prime number?",
    answer: "Yes",
    topic: "Factors and Primes",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Find all factors of 12.",
    answer: "1,2,3,4,6,12",
    topic: "Factors and Primes",
    format:
      "Enter numbers in ascending order, separated by commas without spaces",
  },

  // Topic: Fundamental Theorem of Arithmetic
  {
    question: "Express 28 as a product of prime numbers.",
    answer: "2^2 * 7",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Use * for multiplication and ^ for exponents. Example: 2^2 * 7",
  },
  {
    question: "What is the unique prime factorization of 30?",
    answer: "2 * 3 * 5",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Use * for multiplication, numbers in ascending order",
  },
  {
    question: "Express 100 as a product of primes.",
    answer: "2^2 * 5^2",
    topic: "Fundamental Theorem of Arithmetic",
    format: "Use * for multiplication and ^ for exponents. Example: 2^2 * 5^2",
  },

  // Topic: Prime Factorization
  {
    question: "Find the prime factors of 45.",
    answer: "3 * 3 * 5",
    topic: "Prime Factorization",
    format: "Use * for multiplication, list all factors. Example: 3 * 3 * 5",
  },
  {
    question: "What are the prime factors of 13?",
    answer: "13",
    topic: "Prime Factorization",
    format: "Enter the number only (13 is prime)",
  },
  {
    question: "Express 60 as a product of prime numbers.",
    answer: "2^2 * 3 * 5",
    topic: "Prime Factorization",
    format:
      "Use * for multiplication and ^ for exponents. Example: 2^2 * 3 * 5",
  },

  // Topic: GCD and LCM
  {
    question: "What is the GCD of 18 and 24?",
    answer: "6",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },
  {
    question: "Find the LCM of 5 and 7.",
    answer: "35",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },
  {
    question: "What is the GCD of 14 and 21?",
    answer: "7",
    topic: "GCD and LCM",
    format: "Enter the numerical result only",
  },

  // Topic: Modular Arithmetic
  {
    question: "What is 17 mod 5?",
    answer: "2",
    topic: "Modular Arithmetic",
    format: "Enter the remainder (numerical value only)",
  },
  {
    question: "Calculate 22 mod 6.",
    answer: "4",
    topic: "Modular Arithmetic",
    format: "Enter the remainder (numerical value only)",
  },
  {
    question: "What is 13 mod 7?",
    answer: "6",
    topic: "Modular Arithmetic",
    format: "Enter the remainder (numerical value only)",
  },

  // Topic: Rational and Irrational Numbers
  {
    question: "Is π (pi) a rational number?",
    answer: "No",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is 0.5 a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
  {
    question: "Is the square root of 4 a rational number?",
    answer: "Yes",
    topic: "Rational and Irrational Numbers",
    format: "Answer with 'Yes' or 'No'",
  },
];

export default level3Questions;
