import React from 'react';
import { render } from '@testing-library/react-native';
import LicensesPage from './LicensesPage';

describe('renders LicensesPage component', () => {
  test('base component', () => {
    render(<LicensesPage />);
  });
});
