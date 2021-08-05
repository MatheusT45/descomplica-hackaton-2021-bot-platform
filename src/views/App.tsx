import FloatingActionButton from '../components/FloatingActionButton';
import { useState } from 'react';
import WebChat from '../components/WebChat';
import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleFabClick = () => {
    setIsChatOpen(!isChatOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://descomplica.com.br/guia-de-carreiras/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olá! Da uma olhada no nosso robozinho ai!
        </a>
      </header>
      <div className={isChatOpen ? 'chat-visible' : 'chat-hidden'}>
        <WebChat />
      </div>
        <FloatingActionButton onClick={handleFabClick}/>
    </div>
  );
}
export default App;
