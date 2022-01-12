import React from 'react';
let cards = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
  'card10',
  'card11',
  'card12',
];

const Gameboard = () => {
  return (
    <div className='cardHolder'>
      {cards.map((card) => {
        return <div className='card'>{card}</div>;
      })}
    </div>
  );
};

export default Gameboard;
