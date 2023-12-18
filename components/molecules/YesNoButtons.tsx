import { RadioButton } from "@/components/atoms/RadioButton";
import type { AnswerOption } from "@/types";

type Props = {
  onChange: (value: AnswerOption, questionIndex: number) => void;
  questionIndex: number;
};

export function YesNoButtons({ onChange, questionIndex }: Props) {
  return (
    <div className="flex gap-2">
      <RadioButton
        onChange={() => onChange("yes", questionIndex)}
        questionIndex={questionIndex}
        value="yes"
      />
      <RadioButton
        onChange={() => onChange("no", questionIndex)}
        questionIndex={questionIndex}
        value="no"
      />
    </div>
  );
}
