import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllCoins, getCoinMarkets } from '../Redux/CoinAPI';
import {  NavLink } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";

import cryptoPix from './images/crypto-pix.jpg'



const HomePage = () => {
const coins =  useSelector((state) => state.cryptoCoins);
const dispatch = useDispatch();

  useEffect(() => {
    if(!coins.length){
      dispatch(getAllCoins());     
    }     
  }, []);

  const handleClick = (e) =>{
      console.log(e.target)
      dispatch(getCoinMarkets(e.target.id))
    
  }


  return (    
        <div className='pg-container'>
          <div className='bg-color'>
        <nav>
          <p className='heading'>Top Cryptos</p>
          <div className='nav-icon'> 
          <FaMicrophone style={{color:'white', marginRight:'2rem'}} />
          <MdSettings style={{color:'white'}}/>
          </div>
        </nav>
         <div className='pg-head'>
          <div className='crypto-pix'>
            <img className='image' src={cryptoPix} alt='crpto-image'></img>
          </div>
          <div className='head-desr'>
            <h1 className='crypto-x'>CRYPTO EXCHANGE</h1>
          </div>
  
        </div>
         
        <div className='coin-heading'>
        <h4>Price Per Coin</h4>
        </div>
      <div className='list-coins' >
     
        {coins.map((unitCoin) => (
          <div key={unitCoin.id} className='unit-coin'>
           <NavLink to='details' onClick={(e) => handleClick(e)} className='arrow-icon'>
           <div>
            <BsArrowRightCircle id={unitCoin.id} style={{width:'20px', height:'20px',color:'white'}}/>
            </div>
            </NavLink>
            
            <img src={unitCoin.icon} alt='crypto-coin' className='crypto-coin'></img>
            <div className='coin-name'>{unitCoin.name}</div>
            <div className='coin-price'>{unitCoin.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</div>
            
           
           
          </div>
        ))}
     
      </div>
      </div>
      </div>
     
  
    
  )
}

export default HomePage