import React from 'react';
import { render } from '@testing-library/react-native';
import Themes from './Themes';
import MockContext from '../../../jest/MockContext';

describe('renders Themes component', () => {
  test('base component', () => {
    render(
      <MockContext>
        <Themes />
      </MockContext>,
    );
  });
});
