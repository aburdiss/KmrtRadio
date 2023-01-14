import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';

/**
 * @function Loading
 * @component
 * @description A fullpage loading component, that the app uses while the React
 * Native Track Player Library is starting up.
 * Created 1/6/23
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.1.0
 */
export default function Loading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#bbb" />
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
