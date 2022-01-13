import React, { useState } from 'react';
import ScoreBoard from './scores.js';
import Card from './card.js';

//  array to store card info
let cardsArray = [
  { key: 1, name: 'card 1', isClicked: false },
  { key: 2, name: 'card 2', isClicked: false },
  { key: 3, name: 'card 3', isClicked: false },
  { key: 4, name: 'card 4', isClicked: false },
  { key: 5, name: 'card 5', isClicked: false },
  { key: 6, name: 'card 6', isClicked: false },
  { key: 7, name: 'card 7', isClicked: false },
  { key: 8, name: 'card 8', isClicked: false },
  { key: 9, name: 'card 9', isClicked: false },
  { key: 10, name: 'card 10', isClicked: false },
  { key: 11, name: 'card 11', isClicked: false },
  { key: 12, name: 'card 12', isClicked: false },
];

// shuffle algorithim found online. search Fisher-yates shuffle
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

// Gameboard component
const Gameboard = () => {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const ClickedChange = (cardNum) => {
    if (clicked[cardNum] === false) {
      const newClicked = [...clicked];
      newClicked[cardNum] = !newClicked[cardNum];
      setScore(score + 1);
      setClicked(newClicked);
    } else {
      const resetClicked = clicked.map((x) => false);
      setClicked(resetClicked);
      alert(`you lost. Your score was ${score}`);
      setScore(0);
    }
  };
  return (
    <div>
      <ScoreBoard score={score} />
      <div className='cardHolder'>
        {shuffle(cardsArray).map((card) => {
          return (
            <Card
              key={card.key}
              cardNum={card.key}
              whichCard={card.name}
              onClickedChange={ClickedChange}
              score={score}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Gameboard;
