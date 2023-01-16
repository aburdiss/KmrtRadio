import React from 'react';
import { render } from '@testing-library/react-native';
import Explorer from './Explorer';

describe('renders Explorer component', () => {
  test('base component', () => {
    render(<Explorer />);
  });
});
