import React from 'react';
import { render } from '@testing-library/react-native';
import Loading from './Loading';

describe('renders Loading component', () => {
  test('base component', () => {
    render(<Loading />);
  });
});
