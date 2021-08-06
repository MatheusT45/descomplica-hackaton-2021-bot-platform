import './index.css';
import { useAtom } from 'jotai'
import { answersAtom } from '../../../answers-atom';

function YesNoAnswer(props: any) {
  const [answers, setAnswers] = useAtom(answersAtom);

  const handleAnswer = (answer: boolean) => {
    setAnswers({ ...answers, yesOrNo: {
      ...answers.yesOrNo,
      answer
    }
  });
  }

  return (
    <div className="yes-no-answer">
      <span className="yes-answer" onClick={() => handleAnswer(true)}>{props.yesAnswer}</span>
      <span className="no-answer" onClick={() => handleAnswer(false)}>{props.noAnswer}</span>
    </div>
  );
}
export default YesNoAnswer;
