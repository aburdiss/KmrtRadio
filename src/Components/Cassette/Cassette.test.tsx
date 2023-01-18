import React from 'react';
import { render } from '@testing-library/react-native';
import Cassette from './Cassette';

describe('renders Cassette component', () => {
  test('base component', () => {
    render(<Cassette />);
  });
});
