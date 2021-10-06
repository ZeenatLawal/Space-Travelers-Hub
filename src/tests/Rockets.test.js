import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

it('renders correctly', () => {
  const rockets = renderer
    .create(<Provider store={store}><Rockets /></Provider>)
    .toJSON();
  expect(rockets).toMatchSnapshot();
});
