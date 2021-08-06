import { atom } from 'jotai';

export type DefaultQuestionType = {
  questionTitle: string;
  questionSubtitle: string;
}

export type PersonaAnswerType = DefaultQuestionType & {
  answer?: number;
}

export type YesOrNoAnswerType = DefaultQuestionType & {
  answer?: boolean;
}


export type AnswersType = {
  persona: PersonaAnswerType;
  yesOrNo: YesOrNoAnswerType;
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