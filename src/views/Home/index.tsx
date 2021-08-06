import './index.css';
import { useState } from 'react';
import WebChat from '../../components/WebChat';
import Question from '../../components/Question';
import FloatingActionButton from '../../components/FloatingActionButton';
import Interaction from '../../components/Interaction';
import { useAtom } from 'jotai'
import { answersAtom } from '../../answers-atom';

function Home() {
  const [answers] = useAtom(answersAtom);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleFabClick = () => {
    console.log(answers);
    setIsChatOpen(!isChatOpen);
  }

  const interactionToShow = () => {
    if (!answers.persona.answer) return answers.persona;
    if (!!answers.persona.answer && answers.yesOrNo.answer === undefined) return answers.yesOrNo;
    return {questionTitle: '', questionSubtitle: ''};
  }

  const handleShowPersona = () => !answers.persona.answer;
  const handleShowYesAndNo = () => !!answers.persona.answer && answers.yesOrNo.answer === undefined;

  return (
    <div>
      <Question
        title={interactionToShow().questionTitle}
        subtitle={interactionToShow().questionSubtitle}
      />
      <Interaction 
        shouldShowPersona={handleShowPersona()}
        shouldShowYesAndNo={handleShowYesAndNo()}
      />
        <div className={isChatOpen ? 'chat-visible' : 'chat-hidden'}>
          <WebChat/>
        </div>
        <FloatingActionButton onClick={handleFabClick}/>
    </div>
  );
}
export default Home;