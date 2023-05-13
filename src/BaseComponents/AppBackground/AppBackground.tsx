import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Burst from './Backgrounds/Burst';
import Speckled from './Backgrounds/Speckled';
import { useTheme } from '../../utils/useTheme';

export default function AppBackground() {
  const theme = useTheme();

  return (
    <View
      style={{ ...styles.background, backgroundColor: theme.appBackground }}
    >
      <Speckled />
      {/* <Burst /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
  },
});
