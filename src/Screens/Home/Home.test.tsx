import React from 'react';
import { render } from '@testing-library/react-native';
import Home from './Home';
import MockContext from '../../../jest/MockContext';

describe('renders Home component', () => {
  test('base component', () => {
    render(
      <MockContext>
        <Home />
      </MockContext>,
    );
  });
});
