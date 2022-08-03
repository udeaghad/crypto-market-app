import { createAsyncThunk } from '@reduxjs/toolkit';


const GET_ALL_COINS = 'GET_ALL_COINS'
const GET_COIN_MARKETS = 'GET_COIN_MARKETS'

const baseUrl = 'https://api.coinstats.app/public/v1';

const getAllCoins = createAsyncThunk(
  GET_ALL_COINS,
  async () => {
    const request = new Request(`${baseUrl}/coins?skip=0&limit=10&currency=USD`);
    const response = await fetch(request);
    const result = await response.json();
   
    return result.coins
  }
)

const getCoinMarkets = createAsyncThunk(
  GET_COIN_MARKETS,
  async (coinId) => { 
    console.log(coinId) 
    const request = new Request(`${baseUrl}/markets?coinId=${coinId}`);
    const response = await fetch(request);
    const result = await response.json();
    

    let markets =[];
    for (let i =0; i < 10; i+=1){
      markets.push({...result[i], id:i+1})
    }
   
    return ({market: markets, coin_id: coinId})
    
  }
)

export {getAllCoins, getCoinMarkets};