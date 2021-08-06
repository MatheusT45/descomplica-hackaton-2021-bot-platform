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

  const hasImage = () => answers[count].images.length > 0;

  return (
    <div className="select">
      <div className="row">
        <span 
          className={`option ${hasImage() ? '' : 'without-image'}`}
          onClick={() => handleAnswer(answers[count].options[0])}>
            { hasImage() ? <img alt={answers[count].labels[0]} src={answers[count].images[0]}/> : <p>{answers[count].labels[0]}</p>}
        </span>
        <span
          className={`option ${hasImage() ? '' : 'without-image'}`}
          onClick={() => handleAnswer(answers[count].options[1])}>
          { hasImage() ? <img alt={answers[count].labels[1]} src={answers[count].images[1]}/> : <p>{answers[count].labels[1]}</p>}
        </span>
      </div>
      <div className="row">
        {answers[count].options[2] && 
          <span
            className={`option ${hasImage() ? '' : 'without-image'}`}
            onClick={() => handleAnswer(answers[count].options[2])}>
            { hasImage() ? <img alt={answers[count].labels[2]} src={answers[count].images[2]}/> : <p>{answers[count].labels[2]}</p>}
          </span>
        }
        {answers[count].options[3] &&
          <span 
            className={`option ${hasImage() ? '' : 'without-image'}`}
            onClick={() => handleAnswer(answers[count].options[3])}>
            { hasImage() ? <img alt={answers[count].labels[3]} src={answers[count].images[3]}/> : <p>{answers[count].labels[3]}</p>}
          </span>
        }
      </div>
    </div>
  );
}

export default SelectAnswer;
