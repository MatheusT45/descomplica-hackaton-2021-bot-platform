import './index.css';
import { useAtom } from 'jotai'
import { answersAtom } from '../../answers-atom';
import PersonaSelectAnswer from '../../components/Answers/PersonaSelectAnswer';
import YesNoAnswer from '../../components/Answers/YesNoAnswer';

function Interaction() {
  const [answers] = useAtom(answersAtom);

  const handleShowPersona = () => !answers.persona;
  const handleShowYesAndNo = () => !!answers.persona && answers.yesOrNo === undefined;

  return (
    <div className="interaction-block">
      { handleShowPersona() && <PersonaSelectAnswer/> }
      { handleShowYesAndNo() && <YesNoAnswer yesAnswer="Sim!" noAnswer="Sim vermelho"/> }
    </div>
  );
}
export default Interaction;
