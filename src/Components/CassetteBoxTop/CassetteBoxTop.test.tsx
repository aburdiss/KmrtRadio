import React from 'react';
import { render } from '@testing-library/react-native';
import CassetteBoxTop from './CassetteBoxTop';

describe('renders CassetteBoxTop component', () => {
  test('base component', () => {
    render(<CassetteBoxTop />);
  });
});
