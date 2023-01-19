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
  console.log(color, percentPlayed);
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.screw, ...styles.screwTopLeft }}>
        <View style={styles.screwGlare} />
        <View style={styles.screwPhilipsVertical} />
        <View style={styles.screwPhilipsHorizontal} />
      </View>
      <View style={{ ...styles.screw, ...styles.screwTopRight }}>
        <View style={styles.screwGlare} />
        <View style={styles.screwPhilipsVertical} />
        <View style={styles.screwPhilipsHorizontal} />
      </View>
      <View style={{ ...styles.screw, ...styles.screwBottomLeft }}>
        <View style={styles.screwGlare} />
        <View style={styles.screwPhilipsVertical} />
        <View style={styles.screwPhilipsHorizontal} />
      </View>
      <View style={{ ...styles.screw, ...styles.screwBottomRight }}>
        <View style={styles.screwGlare} />
        <View style={styles.screwPhilipsVertical} />
        <View style={styles.screwPhilipsHorizontal} />
      </View>
      <View style={styles.stickerOuter}>
        <View style={styles.sticker}>
          <View style={styles.sideContainer}>
            <Text style={styles.side}>A</Text>
          </View>
          <View style={styles.topTextContainer}>
            <Text style={styles.topText}>
              200 S. Broadway - Greenville, Ohio 45331
            </Text>
          </View>
          <View style={styles.middle}>
            <View />
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>{`KMRT ${month} ${year}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    textAlign: 'center',
  },
  bottomTextContainer: {},
  container: {
    backgroundColor: 'tan',
    borderRadius: 8,
  },
  middle: {
    backgroundColor: 'tan',
    height: 50,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  screw: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeftColor: 'grey',
    borderLeftWidth: 8,
    borderBottomColor: 'grey',
    borderBottomWidth: 7,
    borderTopColor: 'lightgrey',
    borderTopWidth: 8,
    borderRightColor: 'lightgrey',
    borderRightWidth: 8,
    borderRadius: 8,
  },
  screwGlare: {
    position: 'absolute',
    top: -5,
    right: -6,
    width: 6,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  screwPhilipsVertical: {
    position: 'absolute',
    width: 9,
    height: 3,
    borderRadius: 3,
    backgroundColor: 'black',
    top: -2,
    right: -5,
  },
  screwPhilipsHorizontal: {
    position: 'absolute',
    width: 3,
    height: 9,
    borderRadius: 3,
    backgroundColor: 'black',
    top: -5,
    right: -2,
  },
  screwTopLeft: {
    top: 5,
    left: 5,
  },
  screwTopRight: {
    top: 5,
    right: 5,
  },
  screwBottomLeft: {
    bottom: 5,
    left: 5,
  },
  screwBottomRight: {
    bottom: 5,
    right: 5,
  },
  side: {
    color: 'white',
  },
  sideContainer: {
    backgroundColor: 'grey',
    position: 'absolute',
    top: 8,
    left: 8,
    padding: 4,
    borderRadius: 3,
  },
  sticker: {
    backgroundColor: 'white',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  stickerOuter: {
    margin: 20,
    borderTopColor: 'grey',
    borderTopWidth: 3,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    borderRadius: 10,
  },
  topText: {
    textAlign: 'center',
    fontSize: 12,
  },
  topTextContainer: {
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
});

Cassette.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  color: PropTypes.string,
  percentPlayed: PropTypes.number,
};
