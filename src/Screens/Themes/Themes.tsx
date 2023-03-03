import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CassetteBoxTop from '../../Components/CassetteBoxTop/CassetteBoxTop';

import { colors } from '../../Model/Model';

/**
 * @function Themes
 * @component
 * @description A page on the app that allows you to choose your theme.
 * Created 1/8/23
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export default function Themes() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text>Themes</Text>
        <CassetteBoxTop label={'Test Theme Name'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.electronicDark,
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderBottomColor: colors.electronicLight,
    borderRightWidth: 3,
    borderRightColor: colors.electronicLight,
  },
  containerInner: {
    backgroundColor: colors.electronicDark,
    padding: 16,
    borderTopWidth: 8,
    borderTopColor: colors.electronicLight,
    borderLeftWidth: 8,
    borderLeftColor: colors.electronicLight,
    height: '100%',
  },
});
