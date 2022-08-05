import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdSettings } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getAllCoins, getCoinMarkets, searchByRank } from '../Redux/CoinAPI';
import cryptoPix from './images/crypto-pix.jpg';

const HomePage = () => {

  const getList = useSelector((state) => state.cryptoCoins);

  const coins = getList.coin;
  const { currency } = getList;

  const dispatch = useDispatch();

  let cur = 'USD';

  const onSelect = (e) => {    
     cur = e.target.value     
    dispatch(getAllCoins(cur));
    let parent = e.target.parentElement.children[1]
    parent.children[0].value = '';
  };

  useEffect(() => {      
      dispatch(getAllCoins(cur));     
         
  }, []);

  let rank = '';

  const onFillValue =(e)=> {
    rank = e.target.value
    
   }

  const onSearch = (e) => {
   e.preventDefault();   
   
    if(rank){
      dispatch(searchByRank(rank))
      
    }else if(!rank){
      dispatch(getAllCoins(cur))
   
        }     
    
  }

  const onClear = (e) => {   
    dispatch(getAllCoins(cur))
    e.target.parentElement.firstElementChild.value = ""
  }

  const onBackspace = e => {
    if(e.key === 'Backspace'){
      dispatch(getAllCoins(cur))
    }
  }  

  const handleClick = (e) => {
    dispatch(getCoinMarkets(e.target.id));
  };

  return (
    <div className="pg-container">
      <nav>
        <p className="heading">Top Cryptos</p>
        <div className="nav-icon">
          <FaMicrophone style={{ color: 'white', marginRight: '2rem' }} />
          <MdSettings style={{ color: 'white' }} />
        </div>
      </nav>
      <div className="pg-head">
        <div className="crypto-pix">
          <img className="image" src={cryptoPix} alt="currency" />
        </div>
        <div className="head-desr">
          <h1 className="crypto-x">CRYPTO EXCHANGE</h1>
        </div>

      </div>

      <div className="coin-heading">
        <div>
        <h4>Price Per Coin</h4> 
        </div>
          

        <div className='search-row'>

       
        <select
          className="currency-name"
          name="currency"
          type="text"
          onChange={(e) => onSelect(e)}          
        >
          <option value="USD">Choose Currency</option>
          <option value="USD">USD - US Dollars</option>
          <option value="EUR">EUR - EURO</option>
          <option value="GBP">GBP - British Pounds</option>
          <option value="CAD">CAD - Canadian Dollars</option>
          <option value="AUD">AUD - Australian Dollars</option>
        </select>

        <form onSubmit={(e) => onSearch(e)}>
        <input
        name='search'
        type='number'
        className='search-field'
        placeholder='Search Top Rank'
        onChange={(e) => onFillValue(e)}
        onKeyDown={e => onBackspace(e)} 
        max='50'       
        />
        <button className='filter-btn' type='submit'>Filter</button>
        <button className='clear-btn' type='button' onClick={(e) => onClear(e)}>Clear</button>
        </form>
        </div>
      </div>
      <div className="list-coins">
     
        {coins ? coins.map((unitCoin) => (
         
          <div
            key={unitCoin.id}
            className="unit-coin"
          >
            <NavLink to="details" onClick={(e) => handleClick(e)} className="arrow-icon">
              <div>
                <BsArrowRightCircle id={unitCoin.id} style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
            </NavLink>

            <img src={unitCoin.icon} alt="crypto-coin" className="crypto-coin" />
            <div className="coin-name">{unitCoin.name}</div>
            <div className='price-rank'>
            <div className="coin-price">
              {unitCoin.price.toLocaleString('en-US', { style: 'currency', currency })}
            </div>
            <div className='coin-rank'>Rank: {unitCoin.rank}</div>
            </div>
          </div>

        ))
          : (
            <div className="loading-page">
              <p>Loading...wait for some seconds</p>
            </div>
          )}

      </div>
    </div>

  );
};

export default HomePage;
