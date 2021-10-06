import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
// eslint-disable-next-line import/extensions
import NavBar from '../pages/NavBar.js';

describe('test if NavBar', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('NavBar', () => {
  test('Responding on Rockets click ', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Rockets'));
    screen.debug();
    expect(screen.getByTestId('1'));
  });

  test('Responding on Missions click ', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Missions'));
    screen.debug();
    expect(screen.getByTestId('2'));
  });

  test('Responding on My Profile click ', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('My Profile'));
    screen.debug();
    expect(screen.getByTestId('3'));
  });
});
