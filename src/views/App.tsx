import './App.css';

function App() {
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
      <iframe
          title="bot"
          className="bot"
          src='https://webchat.botframework.com/embed/descomplica?s=F1mceHZdYRs.zMTThcDoFRJ6WzQ97xyL_R2u9ObTfKGymdaotQYcDgA'
        />
    </div>
  );
}
export default App;
