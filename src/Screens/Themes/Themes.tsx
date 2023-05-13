import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Text from '../../BaseComponents/Text/Text';
import CassetteBoxTop from '../../Components/CassetteBoxTop/CassetteBoxTop';

import { colors } from '../../Model/Model';
import { shadeHexColor } from '../../utils/shadeHexColor';

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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>S. S. Kresge Tape Collection</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          <CassetteBoxTop label={'Department Store'} color={colors.primary0} />
          <CassetteBoxTop label={'Ice Water'} color={'#0CCDDB'} />
          <CassetteBoxTop label={'Neon Nights'} color={'#E433D0'} />
          <CassetteBoxTop label={'Jukebox'} color={'#DE5433'} />
          <CassetteBoxTop label={'Sunscreen'} color={'#f9ff9b'} />
          <CassetteBoxTop label={'Banana Split'} color={'#F1A9BE'} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: shadeHexColor(colors.black, 0.1),
    margin: 16,
    padding: 16,
    paddingTop: 30,
    borderRadius: 8,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderRightColor: colors.electronicLight,
    borderBottomColor: colors.electronicLight,
  },
  containerInner: {
    backgroundColor: shadeHexColor(colors.black, 0.25),
    borderTopWidth: 6,
    borderTopColor: colors.black,
    borderLeftWidth: 6,
    borderLeftColor: colors.black,
    height: '100%',
  },
  scrollview: {
    padding: 16,
  },
  title: {
    fontSize: 12,
    textAlign: 'right',
    fontStyle: 'italic',
    color: colors.white,
  },
  titleContainer: {
    position: 'absolute',
    top: -24,
    width: '100%',
  },
});
