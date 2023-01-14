import React from 'react';
import { render } from '@testing-library/react-native';
import More from './More';
import MockContext from '../../../jest/MockContext';

describe('renders More component', () => {
  test('base component', () => {
    render(
      <MockContext>
        <More />
      </MockContext>,
    );
  });
});
