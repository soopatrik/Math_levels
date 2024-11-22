import { Question } from "../types";
import level1Questions from "./level1";
import level2Questions from "./level2";
import level3Questions from "./level3";
import level4Questions from "./level4";
import level5Questions from "./level5";
import level6Questions from "./level6";
import level7Questions from "./level7";
import level8Questions from "./level8";

const exercises: Question[] = [
  ...level1Questions,
  ...level2Questions,
  ...level3Questions,
  ...level4Questions,
  ...level5Questions,
  ...level6Questions,
  ...level7Questions,
  ...level8Questions,
];

export default exercises;
