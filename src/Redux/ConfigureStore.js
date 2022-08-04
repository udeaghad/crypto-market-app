import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getCoinsReducer, getMarketReducer } from './CoinReducer';

const rootReducer = combineReducers({
  cryptoCoins: getCoinsReducer,
  cryptoMarkets: getMarketReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
