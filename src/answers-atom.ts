import { atom } from 'jotai';

export type DefaultQuestionType = {
  questionTitle: string;
  questionSubtitle: string;
  options: Array<string>;
  images: Array<string>;
  labels: Array<string>;
  answer?: string;
  personalityTrait?: Array<string>;
}

export type AnswersType = {
  persona: DefaultQuestionType;
  yesOrNo: DefaultQuestionType;
}

export const answersAtom = atom<DefaultQuestionType[]>([
    {
      questionTitle: 'E aí, Pronto pra começar?',
      questionSubtitle: 'Como você se identifica?',
      options: ['1', '2', '3', '4'],
      labels: ['Vestibulando', 'Superior Completo', 'Quero mudar', 'Curioso'],
      images: [],
      answer: undefined,
    },
    {
      questionTitle: 'Voce pensa antes de falar ou vc vai pensando enquanto fala?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Extrovertido', 'Introvertido'],
      images: ['https://c.tenor.com/mt-uVZTwwy4AAAAM/blah.gif', 'https://c.tenor.com/PgDuhQJ5W14AAAAC/analyzing-thinking.gif'],
      personalityTrait: ['E', 'I'],
      answer: undefined,
    },
    {
      questionTitle: 'Você gosta de pessoas?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Extrovertido', 'Introvertido'],
      images: ['https://i.pinimg.com/originals/2a/3a/bd/2a3abdca372671732e85eecfcb4a8ede.jpg', 'http://pm1.narvii.com/6631/612d409fcf3f280c37b576307e0c700b76722ebc_00.jpg'],
      personalityTrait: ['E', 'I'],
      answer: undefined,
    },
    {
      questionTitle: 'Ouviu falar em evento social, você...',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Extrovertido', 'Introvertido'],
      images: ['https://c.tenor.com/NvnO0AuuzvkAAAAC/dancing-cats.gif', 'https://c.tenor.com/wKn04fNLlRwAAAAC/hiding-fridge.gif'],
      personalityTrait: ['E', 'I'],
      answer: undefined,
    },
    {
      questionTitle: 'Teu negócio é viver a experiência ou ouvir e ler sobre?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['A gente aprende vivendo', 'Não custa nada ler um pouco sobre antes ... vai que caio em uma furada'],
      images: [],
      personalityTrait: ['P', 'J'],
      answer: undefined,
    },
    {
      questionTitle: 'Antes de uma apresentação, você:',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Apresentação? Quando é? ', 'Já tem um roteiro pronto e o espelho já tá cansado da sua cara'],
      images: [],
      personalityTrait: ['P', 'J'],
      answer: undefined,
    },
    {
      questionTitle: 'Selecione a frase que mais te define:',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ["'Hoje eu começo.' Não comecei.", 'Vou ver um horário na minha agenda'],
      images: [],
      personalityTrait: ['P', 'J'],
      answer: undefined,
    },
    {
      questionTitle: 'Amanhã você começa uma viagem internacional de 6 meses',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Sensorial', 'Intuitivo'],
      images: ['https://c.tenor.com/plJIivROHy8AAAAd/ready-to-go-ready.gif', 'https://c.tenor.com/QWbhyFZoNP4AAAAM/pack-packing.gif'],
      personalityTrait: ['S', 'I'],
      answer: undefined,
    },
    {
      questionTitle: 'Quando te perguntam se você é organizado',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['', ''],
      images: ['https://i.pinimg.com/736x/20/cf/bb/20cfbbdf8d2b33038476e74a7fd35727.jpg', 'https://i.pinimg.com/originals/f7/3a/63/f73a63698d0f6b720d11804a86a06458.jpg'],
      personalityTrait: ['S', 'I'],
      answer: undefined,
    },
    {
      questionTitle: 'Você se considera bom em lógica?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Eu até sonho que estou resolvendo problemas', 'Ai, não podemos falar sobre outro assunto?'],
      images: [],
      personalityTrait: ['S', 'I'],
      answer: undefined,
    },
    {
      questionTitle: 'Em uma discussão você se parece mais com qual imagem?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Razão', 'Sentimento'],
      images: ['https://c.tenor.com/4OIcnmLqQmIAAAAd/to-aqui-a-fazenda.gif', 'https://c.tenor.com/MJV43KIrSaYAAAAd/table-flip-laser-eyes.gif'],
      personalityTrait: ['T', 'F'],
      answer: undefined,
    },
    {
      questionTitle: 'Qual expressão te define melhor?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Mão na Massa', 'Gênio Criativo'],
      images: [],
      personalityTrait: ['T', 'F'],
      answer: undefined,
    },
    {
      questionTitle: 'Seu coração se guia pela lógica ou o que você sente na hora de tomar decisões importantes?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Razão', 'Sentimento'],
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Q-0khE7VzIEEOaIJd5CP2NDlywrrf0-jwg&usqp=CAU', 'https://c.tenor.com/ev-imR22FIwAAAAC/love-urso.gif'],
      personalityTrait: ['T', 'F'],
      answer: undefined,
    },
    {
      questionTitle: 'Voce costuma fazer o que tem que ser feito mesmo com caos a sua volta ou voce normalmente quem gera o caos?',
      questionSubtitle: '',
      options: ['1', '2'],
      labels: ['Faço o que é preciso, quando é preciso', 'Err...'],
      images: [],
      personalityTrait: ['T', 'F'],
      answer: undefined,
    },
  ]
);

export const answersCountAtom = atom<number>(0);