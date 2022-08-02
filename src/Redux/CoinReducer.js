
const cryptoMarket = []

const getMarketReducer = (state = cryptoMarket, action) => {
  switch(action.type) {
    case 'GET_COIN_MARKETS/fulfilled':      
      return action.payload
      default:
        return state
  }
}
const cryptoCoins = []

const getCoinsReducer = (state = cryptoCoins, action) => {
  switch(action.type){
    case 'GET_ALL_COINS/fulfilled':
      return action.payload
      default:
        return state
  }
 
}



export {getMarketReducer, getCoinsReducer}