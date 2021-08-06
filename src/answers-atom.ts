import { atom } from 'jotai';

export type AnswersType = {
  persona?: number;
  yesOrNo?: boolean;
}

export const answersAtom = atom<AnswersType>(
  {
    persona: undefined,
    yesOrNo: undefined,
  }
);