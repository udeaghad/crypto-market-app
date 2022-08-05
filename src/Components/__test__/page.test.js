import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/ConfigureStore';
import HomePage from '../HomePage';
import CoinDetailsRender from '../CoinDetailsRender';
import { getCoinsReducer } from '../../Redux/CoinReducer';
import { searchByRank } from '../../Redux/CoinAPI';

describe('To take snapshot of all components', () => {
  test('To Test HomePage component if renders successfully!', () => {
    const tree = renderer
      .create(<Provider store={store}><HomePage /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('To Test CoinDetailRender component if renders successfully!', () => {
    const tree = renderer
      .create(<Provider store={store}><CoinDetailsRender /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('To test the filter function of the reducer', () => {
    const state = {
      coin: [
        {
          id: 'binance', name: 'Bitcoin', rank: 1, price: 23000,
        },
        {
          id: 'ethereum', name: 'Ethereum', rank: 2, price: 1800,
        },
        {
          id: 'tether', name: 'Tether', rank: 3, price: 1,
        },
        {
          id: 'bnb', name: 'BNB', rank: 4, price: 307,
        },
        {
          id: 'usd_coin', name: 'USD Coin', rank: 5, price: 0.8,
        },
      ],
      currency: 'USD',

    };

    expect(getCoinsReducer(state, searchByRank(3))).toEqual(
      {
        coin: [
          {
            id: 'binance', name: 'Bitcoin', rank: 1, price: 23000,
          },
          {
            id: 'ethereum', name: 'Ethereum', rank: 2, price: 1800,
          },
          {
            id: 'tether', name: 'Tether', rank: 3, price: 1,
          },
        ],
        currency: 'USD',
      },

    );
  });
});
