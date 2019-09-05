import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Coin from './Coin';

export default function Coins() {
  const [coin, setCoin] = useState('bitcoin');
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
      .then(res => setImg(res.data.image.small))
      .catch(err => console.log(err));

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coin}`)
      .then(res => setPrice(res.data.market_data.current_price))
      .catch(err => console.log(err));
  }, [coin]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    setCoin(input.toLowerCase());
  };

  return (
    <div className='coins'>
      <p>Search for your cryptocurrency by name:</p>
      <div>
        <input
          type='text'
          value={input}
          onChange={handleChange}
          placeholder='...name of coin'
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Coin data={data} img={img} price={price} />
    </div>
  );
}