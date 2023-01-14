import React from 'react';
import { render } from '@testing-library/react-native';
import NavigationButton from './NavigationButton';

describe('renders NavigationButton component', () => {
  test('base component', () => {
    render(<NavigationButton />);
  });
});
