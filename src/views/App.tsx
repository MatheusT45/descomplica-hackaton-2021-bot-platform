import './App.css';
import Home from './Home';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://descomplica.com.br/guia-de-carreiras/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Olá! Dá uma olhada no nosso robozinho ai!
          </a>
        </header>
        <Home/>
      </div>
    </Provider>
  );
}
export default App;
