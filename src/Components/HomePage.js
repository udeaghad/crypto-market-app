import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllCoins, getCoinMarkets } from '../Redux/CoinAPI';
import {  NavLink } from "react-router-dom";


const HomePage = () => {
const coins =  useSelector((state) => state.cryptoCoins);
const dispatch = useDispatch();

  useEffect(() => {
    if(!coins.length){
      dispatch(getAllCoins());     
    }     
  }, []);

  const handleClick = (e) =>{
      
      dispatch(getCoinMarkets(e.target.id))
    
  }


  return (    
        <div>

         <div className='pg-head'>
  
        </div>
      <div className='list-coins' >
     
        {coins.map((unitCoin) => (
          <div key={unitCoin.id}>
           <NavLink to='details' onClick={(e) => handleClick(e)}>
            <div id={unitCoin.id}>
            {unitCoin.name}
            </div>
           
           </NavLink>
          </div>
        ))}
     
      </div>
      </div>
     
  
    
  )
}

export default HomePage