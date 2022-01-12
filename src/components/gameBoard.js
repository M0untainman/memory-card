import React from 'react';
let cards = [
  'card 1',
  'card 2',
  'card 3',
  'card 4',
  'card 5',
  'card 6',
  'card 7',
  'card 8',
  'card 9',
  'card 10',
  'card 11',
  'card 12',
];

//shuffle algorithim found online. search Fisher-yates shuffle
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const Gameboard = () => {
  return (
    <div className='cardHolder'>
      {shuffle(cards).map((card) => {
        return <div className='card'>{card}</div>;
      })}
    </div>
  );
};

export default Gameboard;
