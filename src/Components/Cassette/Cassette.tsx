import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import Text from '../../BaseComponents/Text/Text';

/**
 * @function Cassette
 * @description A component that renders a cassette tape with the Month and
 * Year, a custom color, and a changeable percent played that will adjust the
 * inner tape position
 * Created 1/17/23 by Alexander Burdiss
 * @param {Object} props JSX props passed to this React Component
 * @param {string} props.month The month that this cassette should render
 * @param {string} props.color The background color of this cassette
 * @param {number} props.percentPlayed A number between 0 and 100 that is the
 * current percent that this cassette is played through. This is kept up to
 * date with the music as the status bar
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/17/23
 * @version 1.0.0
 */
export default function Cassette({ month, year, color, percentPlayed }: any) {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Text>{month}</Text>
      <Text>{year}</Text>
      <Text>{percentPlayed}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

Cassette.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  color: PropTypes.string,
  percentPlayed: PropTypes.number,
};
