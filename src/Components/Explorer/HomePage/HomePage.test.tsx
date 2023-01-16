import React from 'react';
import { render } from '@testing-library/react-native';
import HomePage from './HomePage';

describe('renders HomePage component', () => {
  test('base component', () => {
    render(<HomePage />);
  });
});
