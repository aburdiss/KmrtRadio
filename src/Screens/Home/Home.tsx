import React from 'react';

import Player from '../../Components/Player/Player';
import { StyleSheet, View } from 'react-native';

/**
 * @function Home
 * @component
 * @description The Home screen of the App.
 * Created 1/6/23
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/13/23
 * @version 1.1.0
 */
export default function Home() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    inner: {
      width: '100%',
      maxWidth: 420,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Player />
      </View>
    </View>
  );
}
