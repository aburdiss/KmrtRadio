import React from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Play" color="#777" onPress={() => TrackPlayer.play()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#112',
  },
});
