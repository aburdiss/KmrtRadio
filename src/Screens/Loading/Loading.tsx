import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

export default function Loading() {
  <SafeAreaView style={styles.container}>
    <ActivityIndicator size="large" color="#bbb" />
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#112',
  },
});
