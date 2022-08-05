import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ALL_COINS = 'GET_ALL_COINS';
const GET_COIN_MARKETS = 'GET_COIN_MARKETS';
const GET_BY_RANK = 'GET_BY_RANK'

const baseUrl = 'https://api.coinstats.app/public/v1';

const getAllCoins = createAsyncThunk(
  GET_ALL_COINS,
  async (cur) => {
    const request = new Request(`${baseUrl}/coins?skip=0&limit=50&currency=${cur}`);
    const response = await fetch(request);
    const result = await response.json();
    return { coin: result.coins, currency: cur };
    
  },
);

const getCoinMarkets = createAsyncThunk(
  GET_COIN_MARKETS,
  async (coinId) => {
    const request = new Request(`${baseUrl}/markets?coinId=${coinId}`);
    const response = await fetch(request);
    const result = await response.json();

    const markets = [];
    for (let i = 0; i < 10; i += 1) {
      markets.push({ ...result[i], id: i + 1 });
    }

    return ({ market: markets, coin_id: coinId });
  },
);

const searchByRank = (payload) => ({
  type: GET_BY_RANK,
  payload
})

export { getAllCoins, getCoinMarkets, searchByRank };
