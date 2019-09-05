import React from 'react';

export default function Home(props) {
  return (
    <div className='home-page'>
      <h2>Welcome to Crypto Tracker!</h2>
      <p>We use data pulled from the CoinGecko API.</p>
      {props.data && (
        <>
          <p>
            There are currently{' '}
            <span>{props.data.active_cryptocurrencies}</span> active
            cryptocurrencies in the database.
          </p>
          <p>
            The coin with the largest market cap percentage is Bitcoin at{' '}
            <span>{props.data.market_cap_percentage.btc.toFixed(2)}%</span>
          </p>
        </>
      )}
    </div>
  );
}