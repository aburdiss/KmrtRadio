import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { colors } from '../../Model/Model';

/**
 * @function CassetteBoxTop
 * @component
 * @description A top view of a cassette tape box
 * Created 3/3/23
 * @param {Object} props The JSX props passed to this React component
 * @param {string} props.label The text to display on this Cassette tape box
 * @param {string} props.color The color of the label of this cassette tape
 * box
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export default function CassetteBoxTop({ label, color }: any) {
  console.log(color);
  return (
    <Pressable>
      <View style={styles.cassetteContainer}>
        <View style={styles.jointLeft} />
        <View style={styles.jointRight} />
        <View style={styles.label}>
          <Text>{label}</Text>
        </View>
      </View>
    </Pressable>
  );
}

CassetteBoxTop.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  cassetteContainer: {
    backgroundColor: colors.electronicLight,
    width: '100%',
    borderRadius: 2,
  },
  label: {
    padding: 20,
    margin: 5,
    backgroundColor: 'salmon',
  },
  jointLeft: {
    backgroundColor: colors.white,
  },
  jointRight: {
    backgroundColor: colors.white,
  },
});
