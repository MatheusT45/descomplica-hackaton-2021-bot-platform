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

  return (
    <div>
      <Question
        title="E aí, Pronto pra começar?"
        subtitle="Como você se identifica?"
      />
      <Interaction/>
        <div className={isChatOpen ? 'chat-visible' : 'chat-hidden'}>
          <WebChat/>
        </div>
        <FloatingActionButton onClick={handleFabClick}/>
    </div>
  );
}
export default Home;