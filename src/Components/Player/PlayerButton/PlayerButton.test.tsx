import React from 'react';
import { render } from '@testing-library/react-native';
import PlayerButton from './PlayerButton';

describe('renders PlayerButton component', () => {
  test('base component', () => {
    render(<PlayerButton />);
  });
});
