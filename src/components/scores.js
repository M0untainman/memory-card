import React from 'react';

const ScoreBoard = (props) => {
  return (
    <div className='ScoreBoard'>
      <div>score: {props.score}</div>
      <div>high score: 0</div>
    </div>
  );
};

export default ScoreBoard;
