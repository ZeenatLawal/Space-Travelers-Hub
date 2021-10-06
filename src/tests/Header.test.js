import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../Pages/Header';

it('renders correctly', () => {
  const header = renderer
    .create(
      <Provider store={store}>
        <Header />
      </Provider>,
    )
    .toJSON();
  expect(header).toMatchSnapshot();
});
