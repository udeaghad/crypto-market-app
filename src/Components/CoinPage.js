import { useSelector } from 'react-redux';
import React from 'react';
import {  NavLink } from "react-router-dom";



const CoinPage = () =>{

  const coinExchange = useSelector((state) => state.cryptoMarkets) 
  const exchangeMarket = coinExchange.market
  const coinExchangeId = coinExchange.coin_id
 
 
  const coinDetails = useSelector(state => state.cryptoCoins)

  const newDetail = coinDetails.filter(item => item.id === coinExchangeId)
 
  return (
    <div>
      <NavLink to='/'>
           Back
      </NavLink>

      {newDetail.length?
      <div>
      <img src={newDetail[0].icon} alt=''></img>
      <div>{newDetail[0].name}</div>
      </div>:
      <div>Loading...</div>}

      {exchangeMarket?
        exchangeMarket.map((coin) => (
        <div key={coin.id}>{coin.exchange}</div>
        )):
        <div>Loading...</div>
      }
      
    </div>
  )
}

export default CoinPage

