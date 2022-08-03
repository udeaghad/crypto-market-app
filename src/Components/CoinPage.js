import { useSelector } from 'react-redux';
import React from 'react';
import {  NavLink } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";




const CoinPage = () =>{

  const coinExchange = useSelector((state) => state.cryptoMarkets) 
  const exchangeMarket = coinExchange.market
  const coinExchangeId = coinExchange.coin_id
 
 
  const coinDetails = useSelector(state => state.cryptoCoins)

  const newDetail = coinDetails.filter(item => item.id === coinExchangeId)
 
  return (
    <div>
      <nav>
      <NavLink to='/'>
      <MdArrowBackIosNew style={{color:'white'}}/>
      </NavLink>
          <p className='heading'>Top Exchange</p>
          <div className='nav-icon'> 
          <FaMicrophone style={{color:'white', marginRight:'2rem'}} />
          <MdSettings style={{color:'white'}}/>
          </div>
        </nav>
     

      {newDetail.length?
      <div>
      <img src={newDetail[0].icon} alt=''></img>
      <div>{newDetail[0].name}</div>
      <div>{newDetail[0].price}</div>
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

