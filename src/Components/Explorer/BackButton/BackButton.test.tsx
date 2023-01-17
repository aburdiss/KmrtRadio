import React from 'react';
import { render } from '@testing-library/react-native';
import BackButton from './BackButton';

describe('renders BackButton component', () => {
  test('base component', () => {
    render(<BackButton />);
  });
});
