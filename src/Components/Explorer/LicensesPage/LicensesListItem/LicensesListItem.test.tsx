import React from 'react';
import { render } from '@testing-library/react-native';
import LicensesListItem from './LicensesListItem';

describe('renders LicensesListItem component', () => {
  test('base component', () => {
    render(<LicensesListItem />);
  });
});
