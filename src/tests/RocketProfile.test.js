import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketProfile from '../components/RocketProfile';

it('renders correctly', () => {
  const profile = renderer
    .create(<Provider store={store}><RocketProfile /></Provider>)
    .toJSON();
  expect(profile).toMatchSnapshot();
});
