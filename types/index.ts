export type AnswerOption = "yes" | "no";

export type QuestionItem = {
  question: string;
  listItems: string[];
};

export type YesNoAnswerItem = QuestionItem & {
  answer: AnswerOption;
};
