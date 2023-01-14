import React from 'react';
import { render } from '@testing-library/react-native';
import AppBackground from './AppBackground';

describe('renders AppBackground component', () => {
  test('base component', () => {
    render(<AppBackground />);
  });
});
