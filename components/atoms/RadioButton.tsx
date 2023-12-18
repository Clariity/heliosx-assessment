import { capitalizeFirstLetter } from "@/lib/utils";
import type { AnswerOption } from "@/types";

type Props = {
  onChange: () => void;
  questionIndex: number;
  value: AnswerOption;
};

export function RadioButton({ onChange, questionIndex, value }: Props) {
  return (
    <div className="relative">
      <input
        className="peer absolute left-0 top-0 opacity-0 cursor-pointer"
        id={`${questionIndex}-${value}`}
        name={`${questionIndex}-yes-no-radios`}
        type="radio"
        value={value}
        onChange={onChange}
      />
      <label
        className="px-2 py-1 text-sm md:text-base md:px-4 md:py-2 rounded-md border border-gray-600 hover:bg-gray-200 cursor-pointer peer-checked:bg-primary-bg peer-checked:text-primary-fg peer-checked:hover:bg-primary-bg peer-hover:bg-gray-200 peer-focus:bg-primary-bg peer-focus:ring-4"
        htmlFor={`${questionIndex}-${value}`}
      >
        {capitalizeFirstLetter(value)}
      </label>
    </div>
  );
}
