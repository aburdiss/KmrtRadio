import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Burst from './Backgrounds/Burst';
import Speckled from './Backgrounds/Speckled';

export default function AppBackground() {
  return (
    <View style={styles.background}>
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
