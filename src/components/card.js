import React, { useState } from 'react';

//card component
const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const changeClicked = () => {
    if (clicked === false) {
      props.changeScore();
      setClicked(true);
    } else {
      alert(`you lost. Your score was ${props.score}`);
    }
  };

  return (
    <div
      onClick={() => {
        changeClicked();
      }}
      className='card'
    >
      {props.whichCard}
    </div>
  );
};

export default Card;
