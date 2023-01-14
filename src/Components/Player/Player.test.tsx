import React from 'react';
import { render } from '@testing-library/react-native';
import Player from './Player';
import MockContext from '../../../jest/MockContext';

describe('renders Player component', () => {
  test('base component', () => {
    render(
      <MockContext>
        <Player />
      </MockContext>,
    );
  });
});
