import './App.css';
import Gameboard from './components/gameBoard.js';
import scoreBoard from './components/scores.js';

function App() {
  return (
    <div>
      <scoreBoard />
      <Gameboard />
    </div>
  );
}

export default App;
