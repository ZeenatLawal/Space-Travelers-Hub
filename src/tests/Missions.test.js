import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

it('renders correctly', () => {
  const missions = renderer
    .create(<Provider store={store}><Missions /></Provider>)
    .toJSON();
  expect(missions).toMatchSnapshot();
});
