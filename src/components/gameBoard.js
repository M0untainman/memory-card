import React, { useState } from 'react';
import ScoreBoard from './scores.js';
import Card from './card.js';

//  array to store card info
let cardsArray = [
  { key: 0, name: 'cat', isClicked: false },
  { key: 1, name: 'hat', isClicked: false },
  { key: 2, name: 'mat', isClicked: false },
  { key: 3, name: 'fat', isClicked: false },
  { key: 4, name: 'flat', isClicked: false },
  { key: 5, name: 'rat', isClicked: false },
  { key: 6, name: 'bat', isClicked: false },
  { key: 7, name: 'stat', isClicked: false },
  { key: 8, name: 'vat', isClicked: false },
  { key: 9, name: 'tat', isClicked: false },
  { key: 10, name: 'gnat', isClicked: false },
  { key: 11, name: 'sat', isClicked: false },
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
