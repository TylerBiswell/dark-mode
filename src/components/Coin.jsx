import React from 'react';

export default function Coin(props) {
  return (
    <div className='coin'>
      <h2>
        {props.data.name} <span className='symbol'>{props.data.symbol}</span>
      </h2>
      <img src={props.img} />
      <p>Genesis Date: {props.data.genesis_date}</p>
      <p>Current Price: ${props.price.usd}</p>
    </div>
  );
}