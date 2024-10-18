import { Question } from "../types";
import level1Questions from "./level1";
import level2Questions from "./level2";
import level3Questions from "./level3";
import level4Questions from "./level4";
import level5Questions from "./level5";
import level6Questions from "./level6";
import level7Questions from "./level7";
import level8Questions from "./level8";

const generateQuestions = (questions: { question: string, answer: string, topic: string }[], difficulty: number): Question[] => {
  return questions.map(q => ({ ...q, difficulty }));
};
  
  const exercises: Question[] = [
    ...generateQuestions(level1Questions, 1),
    ...generateQuestions(level2Questions, 2),
    ...generateQuestions(level3Questions, 3),
    ...generateQuestions(level4Questions, 4),
    ...generateQuestions(level5Questions, 5),
    ...generateQuestions(level6Questions, 6),
    ...generateQuestions(level7Questions, 7),
    ...generateQuestions(level8Questions, 8),
  ];
  



export default exercises;