"use client";
import { useState } from "react";

import { titleCase } from "@/lib/utils";
import { useSubmitConsultation } from "@/hooks/useSubmitConsultation";
import { YesNoButtons } from "@/components/molecules/YesNoButtons";
import type { AnswerOption, QuestionItem, YesNoAnswerItem } from "@/types";

type Props = {
  params: {
    productId: string;
  };
};

const questionItems: QuestionItem[] = [
  { question: "Are you aged between 18 and 65?", listItems: [] },

  {
    question: "Have you ever been diagnosed with one of the following conditions:",
    listItems: [
      "Kidney or liver problems",
      "High Blood Pressure",
      "A history of heart problems such as an irregular or fast heartbeat or angina",
      "Epilepsy",
    ],
  },
  {
    question:
      "Have you previously experienced an allergic reaction to antihistamines such as fexofenadine, loratadine or cetirizine or are you lactose intolerant?",
    listItems: [],
  },
  {
    question: "Are you taking any oral medications for allergies/hayfever?",
    listItems: [],
  },
  {
    question:
      "Do you understand there is a possibility that oral antihistamines may cause drowsiness and affect driving or operating machinery? You should check that the antihistamine tablets you receive do not make you feel sleepy or dizzy before driving or operating machinery.",
    listItems: [],
  },
];

export default function Consultation({ params: { productId } }: Props) {
  const [answers, setAnswers] = useState<AnswerOption[]>([]);
  const { mutate, isPending, isSuccess, isError } = useSubmitConsultation();

  function handleAnswerClick(value: AnswerOption, questionIndex: number) {
    setAnswers((previousAnswers) => {
      const newAnswers = [...previousAnswers];
      newAnswers[questionIndex] = value;

      if (questionIndex === questionItems.length - 1) {
        const enhancedAnswers: YesNoAnswerItem[] = questionItems.map(
          (questionItem, index) => ({
            ...questionItem,
            answer: newAnswers[index],
          })
        );
        mutate({ productId, answers: enhancedAnswers });
      }

      return newAnswers;
    });
  }

  return (
    <main className="flex flex-col gap-10 py-10">
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          {titleCase(productId)} - Consultation
        </h1>
        <div className="text-xl">
          Answer a few quick and easy questions from our pharmacists to see what
          treatments you&apos;re eligible for
        </div>
      </div>

      {questionItems.map((questionItem, questionIndex) => {
        const canShow = answers.length >= questionIndex;
        return (
          <div
            key={`question-${questionIndex}`}
            className={`flex items-center transition-opacity duration-500 ${
              canShow ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-2/3 pr-4">
              <div>{questionItem.question}</div>
              {questionItem.listItems.length > 0 ? (
                <ul className="list-disc list-inside text-secondary-fg text-sm mt-2">
                  {questionItem.listItems.map((listItem, listItemIndex) => (
                    <li key={`question-${questionIndex}-list-item-${listItemIndex}`}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="w-1/3 flex justify-end">
              <YesNoButtons onChange={handleAnswerClick} questionIndex={questionIndex} />
            </div>
          </div>
        );
      })}

      <div
        className={`transition-opacity duration-500 font-semibold text-center text-xl ${
          answers.length === questionItems.length ? "opacity-100" : "opacity-0"
        }`}
      >
        {isPending ? (
          "Submitting results...."
        ) : (
          <>
            {isError ? "Something went wrong." : null}
            {isSuccess ? "Thank you, your results have been submitted." : null}
          </>
        )}
      </div>
    </main>
  );
}
