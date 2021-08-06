import { atom } from 'jotai';

export type DefaultAnswerType = {
  questionTitle: string;
  questionSubtitle: string;
  answer?: number;
}

export type AnswersType = {
  persona: DefaultAnswerType;
  yesOrNo: DefaultAnswerType;
}

export const answersAtom = atom<AnswersType>(
  {
    persona: {
      questionTitle: 'E aí, Pronto pra começar?',
      questionSubtitle: 'Como você se identifica?',
    },
    yesOrNo: {
      questionTitle: 'Tem certeza?',
      questionSubtitle: '',
    },
  }
);