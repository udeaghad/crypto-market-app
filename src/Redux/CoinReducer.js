const cryptoMarket = [];

let newState;
let newCurrencySearch;
let newItem;
let newAction;

const getMarketReducer = (state = cryptoMarket, action) => {
  switch (action.type) {
    case 'GET_COIN_MARKETS/fulfilled':
      return action.payload;
    default:
      return state;
  }
};
const cryptoCoins = [];

const getCoinsReducer = (state = cryptoCoins, action) => {
  switch (action.type) {
    case 'GET_ALL_COINS/fulfilled':
      return action.payload;

    case 'GET_BY_RANK':
      if (action) {
        newState = state.coin.filter((item) => item.rank <= action.payload);
      }
      return { ...state, coin: newState };

    case 'SEARCH_A_COIN':
      if (action) {
        newCurrencySearch = state.coin.filter((item) => {
          newItem = item.name.toLowerCase();
          newAction = action.payload.toLowerCase();
          return newItem.match(newAction);
        });
      }
      return { ...state, coin: newCurrencySearch };

    default:
      return state;
  }
};

export { getMarketReducer, getCoinsReducer };
