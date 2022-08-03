import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../Redux/ConfigureStore'
import HomePage from './../HomePage'
import CoinPage from './../CoinPage'

decribe('To take snapshot of all components', () => { 
test('To Test HomePage component if renders successfully!', () => {
  const tree = renderer
    .create(<Provider store={store}><HomePage /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('To Test CoinPage component if renders successfully!', () => {
  const tree = renderer
    .create(<Provider store={store}><CoinPage /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

})