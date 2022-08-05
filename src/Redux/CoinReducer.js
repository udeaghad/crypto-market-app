const cryptoMarket = [];

let newState

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
      console.log(action.payload)
      if(action){
        newState = state.coin.filter(item => item.rank <= action.payload)
        return {...state, coin:newState}
      }
      
    default:
      return state;
  }
};

export { getMarketReducer, getCoinsReducer };
