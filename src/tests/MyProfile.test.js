import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

it('renders correctly', () => {
  const profile = renderer
    .create(<Provider store={store}><MyProfile /></Provider>)
    .toJSON();
  expect(profile).toMatchSnapshot();
});
