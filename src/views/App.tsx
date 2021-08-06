import './App.css';
import Home from './Home';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  );
}
export default App;
