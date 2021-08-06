import YesNoAnswer from '../Answers/YesNoAnswer';
import './index.css';

function Question() {

  return (
    <div>
      <h1 className="question-title">E aí, Pronto pra começar?</h1>
      <h3 className="question-subTitle"></h3>
      <div className="answer-block">
        <YesNoAnswer yesAnswer="Sim!" noAnswer="Sim vermelho"/>
      </div>
    </div>
  );
}
export default Question;
