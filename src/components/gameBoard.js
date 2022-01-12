import React, { useState, useEffect } from 'react';

//shuffle algorithim found online. search Fisher-yates shuffle
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
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

let cards = [
  { key: 1, name: 'card 1' },
  { key: 2, name: 'card 2' },
  { key: 3, name: 'card 3' },
  { key: 4, name: 'card 4' },
  { key: 5, name: 'card 5' },
  { key: 6, name: 'card 6' },
  { key: 7, name: 'card 7' },
  { key: 8, name: 'card 8' },
  { key: 9, name: 'card 9' },
  { key: 10, name: 'card 10' },
  { key: 11, name: 'card 11' },
  { key: 12, name: 'card 12' },
];

//card component
const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const changeClicked = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      console.log('already clicked');
    }
  };
  const sayhi = () => {
    alert('works');
  };

  return (
    <div onClick={changeClicked} className='card'>
      {props.whichCard}
    </div>
  );
};

// Gameboard component
const Gameboard = () => {
  return (
    <div className='cardHolder'>
      {shuffle(cards).map((card) => {
        return <Card key={card.key} whichCard={card.name}></Card>;
      })}
    </div>
  );
};

export default Gameboard;
