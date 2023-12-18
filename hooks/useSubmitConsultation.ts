import { useMutation } from "@tanstack/react-query";

import type { YesNoAnswerItem } from "@/types";

type ProductConsultation = {
  productId: string;
  answers: YesNoAnswerItem[];
};

export function useSubmitConsultation() {
  return useMutation({
    mutationFn: postConsultation,
    onSuccess: (productConsultation) => {
      console.log(productConsultation);
    },
  });
}

async function postConsultation(body: ProductConsultation) {
  return body;
}
