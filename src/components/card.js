import React, { useState } from 'react';

//card component
const Card = (props) => {
  const handleClickedChange = () => {
    props.onClickedChange(props.cardNum);
  };
  return (
    <div
      onClick={(e) => {
        handleClickedChange(e);
      }}
      className='card'
    >
      {props.whichCard}
    </div>
  );
};

export default Card;
