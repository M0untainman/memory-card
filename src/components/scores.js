import React, { useState, useEffect } from 'react';

const ScoreBoard = (props) => {
  const [highScore, setHighScore] = useState(0);
  useEffect(() => {
    if (props.score >= highScore) {
      setHighScore(props.score);
    }
  }, [props.score]);
  return (
    <div className='ScoreBoard'>
      <div>score: {props.score}</div>
      <div>high score: {highScore}</div>
    </div>
  );
};

export default ScoreBoard;
