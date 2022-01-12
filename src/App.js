import './App.css';
import Gameboard from './components/gameBoard.js';
import ScoreBoard from './components/scores.js';

function App() {
  return (
    <div>
      <ScoreBoard />
      <Gameboard />
    </div>
  );
}

export default App;
