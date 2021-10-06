import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../Pages/NavBar';

describe('test if NavBar', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <Router>
          <NavBar />
        </Router>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('NavBar', () => {
  test('Responding on Rockets click ', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    fireEvent.click(screen.getByText('Rockets'));
    screen.debug();
    expect(screen.getByTestId('1'));
  });

  test('Responding on Missions click ', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    fireEvent.click(screen.getByText('Missions'));
    screen.debug();
    expect(screen.getByTestId('2'));
  });

  test('Responding on My Profile click ', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    fireEvent.click(screen.getByText('My Profile'));
    screen.debug();
    expect(screen.getByTestId('3'));
  });
});
