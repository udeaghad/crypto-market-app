import { useSelector } from 'react-redux';
import React from 'react';
import './coinPage.css';

const DetailsRender = () => {
  const coinExchange = useSelector((state) => state.cryptoMarkets);
  const exchangeMarket = coinExchange.market;

  const coinExchangeId = coinExchange.coin_id;

  const getCoinDetails = useSelector((state) => state.cryptoCoins);

  const coinDetails = getCoinDetails.coin;
  let currency = 'USD';
  if (getCoinDetails.currency) {
    currency = getCoinDetails.currency;
  }

  let newDetail = [{ name: 'bitcoin', price: 0 }];
  if (coinDetails) {
    newDetail = coinDetails.filter((item) => item.id === coinExchangeId);
  }

  return (
    <div className="pg-container">
      {newDetail.length
        ? (
          <div className="coin-head-pg">
            <div className="coin-photo">
              <img className="icon-pix" src={newDetail[0].icon} alt="" />
            </div>
            <div className="coin-name-price">
              <h2 className="coin-pg-name">{newDetail[0].name}</h2>
              <div className="coin-pg-price">{newDetail[0].price.toLocaleString('en-US', { style: 'currency', currency })}</div>
            </div>
          </div>
        )
        : <div>Loading...</div>}

      <div className="breakdown-label">
        <h4>Exchange Breakdown</h4>
      </div>

      <div className="coin-pg-exchange">
        {exchangeMarket
          ? exchangeMarket.map((coin, index) => (
            <div className="coin-exchange" key={coin.id} style={{ backgroundColor: index % 2 !== 0 ? 'rgb(76 102 146 / 1)' : null }}>
              <div className="exchange-name">
                <p>{coin.exchange}</p>
              </div>
              <div className="exchange-details">
                <p>
                  Pair:
                  {' '}
                  {coin.pair}
                </p>
                <p>
                  Pair Price:
                  {' '}
                  {coin.pairPrice}
                </p>
                <p>
                  Price:
                  {' '}
                  {coin.price}
                </p>
                <p>
                  Volume:
                  {' '}
                  {coin.volume}
                </p>
              </div>

            </div>
          ))
          : <p>Loading...</p>}
      </div>

    </div>
  );
};

export default DetailsRender;
