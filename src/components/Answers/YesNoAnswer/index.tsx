import './index.css';
import { useAtom } from 'jotai'
import { answersAtom } from '../../../answers-atom';

function YesNoAnswer(props: any) {
  const [answers, setAnswers] = useAtom(answersAtom);

  const handleAnswer = (answer: number) => {
    setAnswers({ ...answers, yesOrNo: {
      ...answers.persona,
      answer
    }
  });
  }

  return (
    <div className="yes-no-answer">
      <span className="yes-answer" onClick={() => handleAnswer(1)}>{props.yesAnswer}</span>
      <span className="no-answer" onClick={() => handleAnswer(0)}>{props.noAnswer}</span>
    </div>
  );
}
export default YesNoAnswer;
