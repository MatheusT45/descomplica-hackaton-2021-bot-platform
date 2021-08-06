import './index.css';
import PersonaSelectAnswer from '../../components/Answers/PersonaSelectAnswer';
import YesNoAnswer from '../../components/Answers/YesNoAnswer';

function Interaction(props: any) {
  return (
    <div className="interaction-block">
      { props.shouldShowPersona && <PersonaSelectAnswer/> }
      { props.shouldShowYesAndNo && <YesNoAnswer yesAnswer="Sim!" noAnswer="Sim vermelho"/> }
    </div>
  );
}
export default Interaction;
