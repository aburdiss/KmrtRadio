import React from 'react';
import Text from './Text';
import { render } from '@testing-library/react-native';

describe('renders Text component', () => {
  test('base component', () => {
    render(<Text />);
  });

  test('accepts string children', () => {
    render(<Text>Hello, World!</Text>);
  });

  test('accepts JSX children', () => {
    render(
      <Text>
        <Text>Hello, World!</Text>
      </Text>,
    );
  });
});
