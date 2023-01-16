import React from 'react';
import { render } from '@testing-library/react-native';
import AboutPage from './AboutPage';

describe('renders AboutPage component', () => {
  test('base component', () => {
    render(<AboutPage />);
  });
});
