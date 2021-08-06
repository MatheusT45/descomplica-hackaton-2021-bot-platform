import { atom } from 'jotai';

export type DefaultQuestionType = {
  name: string
  questionTitle: string;
  questionSubtitle: string;
  options: Array<string>;
  answer?: string;
}

export type AnswersType = {
  persona: DefaultQuestionType;
  yesOrNo: DefaultQuestionType;
}

export const answersAtom = atom<DefaultQuestionType[]>([
    {
      name: 'persona',
      questionTitle: 'E aí, Pronto pra começar?',
      questionSubtitle: 'Como você se identifica?',
      options: ['1', '2', '3', '4'],
      answer: undefined,
    },
    {
      name: 'yesOrNo',
      questionTitle: 'Tem certeza?',
      questionSubtitle: '',
      options: ['1', '2'],
      answer: undefined,
    },
    {
      name: 'certain',
      questionTitle: 'Tem de verdade?',
      questionSubtitle: 'nao tem mais volta >.>',
      options: ['nao sei', 'talvez', 'aaaaa'],
      answer: undefined,
    },
  ]
);

export const answersCountAtom = atom<number>(0);