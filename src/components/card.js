import React, { useState } from 'react';

//card component
const Card = (props) => {
  const [clicked, setClicked] = useState(false);
  const changeClicked = () => {
    if (clicked === false) {
      props.changeScore();
      setClicked(true);
    } else {
      console.log('already clicked');
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
