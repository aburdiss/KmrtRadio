import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Player from '../../Components/Player/Player';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Player />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
