import './index.css';
import { useAtom } from 'jotai'
import { answersAtom, answersCountAtom } from '../../../answers-atom';

function SelectAnswer() {
  const [answers, setAnswers] = useAtom(answersAtom);
  const [count, setCount] = useAtom(answersCountAtom);

  const handleAnswer = (answer: string) => {
    answers[count].answer = answer;
    setAnswers(answers);
    if (count !== answers.length - 1) {
      setCount(count + 1);
    }
  }

  return (
    <div className="persona-select">
      <div className="persona-row">
        <span className="persona" onClick={() => handleAnswer(answers[count].options[0])}>{answers[count].options[0]}</span>
        <span className="persona" onClick={() => handleAnswer(answers[count].options[1])}>{answers[count].options[1]}</span>
      </div>
      <div className="persona-row">
        {answers[count].options[2] && <span className="persona"onClick={() => handleAnswer(answers[count].options[2])}>{answers[count].options[2]}</span>}
        {answers[count].options[3] && <span className="persona"onClick={() => handleAnswer(answers[count].options[3])}>{answers[count].options[3]}</span>}
      </div>
    </div>
  );
}

export default SelectAnswer;