import PersonaSelectAnswer from '../Answers/PersonaSelectAnswer';
import YesNoAnswer from '../Answers/YesNoAnswer';
import './index.css';

type Prop = {
  title: string,
  subtitle: string,
  personaSelect?: boolean,
  yesAndNo?: boolean,
  slider?: boolean,
}

function Question(props: Prop) {
  return (
    <div>
      <h1 className="question-title">{props.title}</h1>
      <h3 className="question-subtitle">{props.subtitle}</h3>
      <div className="answer-block">
        {props.personaSelect && <PersonaSelectAnswer/>}
        {props.yesAndNo && <YesNoAnswer yesAnswer="Sim!" noAnswer="Sim vermelho"/>}
      </div>
    </div>
  );
}
export default Question;
