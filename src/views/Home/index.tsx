import './index.css';
import { useState } from 'react';
import WebChat from '../../components/WebChat';
import Question from '../../components/Question';
import FloatingActionButton from '../../components/FloatingActionButton';
import Interaction from '../../components/Interaction';
import { useAtom } from 'jotai'
import { answersAtom, answersCountAtom } from '../../answers-atom';

function Home() {
  const [answers] = useAtom(answersAtom);
  const [count] = useAtom(answersCountAtom);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleFabClick = () => {
    setIsChatOpen(!isChatOpen);
  }

  return (
    <div className="home">
      <Question
        title={answers[count].questionTitle}
        subtitle={answers[count].questionSubtitle}
      />
      <Interaction/>
        <div className={isChatOpen ? 'chat-visible' : 'chat-hidden'}>
          <WebChat/>
        </div>
        <FloatingActionButton onClick={handleFabClick} isChatOpen={isChatOpen} />
    </div>
  );
}
export default Home;