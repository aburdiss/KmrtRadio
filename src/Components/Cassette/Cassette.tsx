import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Easing } from 'react-native';

import Text from '../../BaseComponents/Text/Text';
import { colors } from '../../Model/Model';

/**
 * @function Cassette
 * @description A component that renders a cassette tape with the Month and
 * Year, a custom color, and a changeable percent played that will adjust the
 * inner tape position
 * Created 1/17/23 by Alexander Burdiss
 * @param {Object} props JSX props passed to this React Component
 * @param {string} props.month The month that this cassette should render
 * @param {number} props.percentPlayed A number between 0 and 100 that is the
 * current percent that this cassette is played through. This is kept up to
 * date with the music as the status bar
 * @param {boolean} props.playing Whether the cassette is playing or not
 * @returns {JSX.Element} JSX render instructions
 * @see https://codepen.io/tomhazledine/pen/RwxeVw
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 2/2/23
 * @version 1.0.1
 */
export default function Cassette({
  month,
  year,
  percentPlayed = 0,
  playing,
}: any) {
  // Calculate Reel sizes
  const rightReel = percentPlayed + 85;
  const leftReel = 185 - percentPlayed;

  // Handle Animation
  const spinValue = new Animated.Value(1);
  const animation = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  );
  if (playing) {
    // First set up animation
    animation.start();
  } else {
    animation.stop();
  }
  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

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
          <View style={styles.stripe} />
          <View style={styles.topTextContainer}>
            <Text style={styles.topText}>
              200 S. Broadway - Greenville, Ohio 45331
            </Text>
          </View>
          <View style={styles.middle}>
            <View style={styles.circle}>
              <Animated.View
                style={{
                  ...styles.teethContainer,
                  transform: [{ rotate: spin }],
                }}
              >
                <View style={styles.teeth} />
                <View
                  style={{ ...styles.teeth, transform: [{ rotate: '60deg' }] }}
                />
                <View
                  style={{ ...styles.teeth, transform: [{ rotate: '-60deg' }] }}
                />
              </Animated.View>
            </View>
            <View style={styles.windowOuter}>
              <View style={styles.windowInner}>
                <View
                  style={{
                    ...styles.tape,
                    width: leftReel,
                    height: leftReel,
                    left: -31 - leftReel / 2,
                    top: 13 - leftReel / 2,
                  }}
                />
                <View style={styles.reelLeft} />
                <View
                  style={{
                    ...styles.tape,
                    width: rightReel,
                    height: rightReel,
                    right: -31 - rightReel / 2,
                    top: 13 - rightReel / 2,
                  }}
                />
                <View style={styles.reelRight} />
              </View>
            </View>
            <View style={styles.circle}>
              <Animated.View
                style={{
                  ...styles.teethContainer,
                  transform: [{ rotate: spin }],
                }}
              >
                <View style={styles.teeth} />
                <View
                  style={{ ...styles.teeth, transform: [{ rotate: '60deg' }] }}
                />
                <View
                  style={{ ...styles.teeth, transform: [{ rotate: '-60deg' }] }}
                />
              </Animated.View>
            </View>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>{`KMRT ${month} ${year}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cassetteBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomText: {
    textAlign: 'center',
  },
  bottomTextContainer: {},
  cassetteBottom: {},
  circle: {
    margin: 10,
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderLeftWidth: 2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'tan',
    borderRadius: 8,
  },
  middle: {
    backgroundColor: 'tan',
    height: 50,
    marginHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  reelLeft: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 50,
    left: -93,
    top: -37.5,
    position: 'absolute',
  },
  reelRight: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 50,
    right: -93,
    top: -37.5,
    position: 'absolute',
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
    marginBottom: 40,
    borderColor: 'grey',
    borderTopWidth: 2,
    borderLeftWidth: 0.2,
    borderRightColor: 'lightgrey',
    borderRightWidth: 0.2,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  stripe: {
    borderColor: colors.cassettePrimary,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    height: 12,
    width: '100%',
    top: 70,
  },
  tape: {
    position: 'absolute',
    backgroundColor: '#4d3b3b',
    borderRadius: 999,
  },
  teeth: {
    position: 'absolute',
    borderColor: 'white',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 4,
    width: '100%',
    top: 11,
  },
  teethContainer: {
    width: 26,
    height: 26,
    backgroundColor: colors.electronicLight,
    borderRadius: 30,
    position: 'relative',
  },
  topText: {
    textAlign: 'center',
    fontSize: 12,
  },
  topTextContainer: {
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
  windowOuter: {
    height: 35,
    flex: 1,
    padding: 3,
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderTopWidth: 1,
    borderLeftWidth: 0.5,
    borderRightColor: 'grey',
    borderRightWidth: 0.5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  windowInner: {
    position: 'relative',
    overflow: 'hidden',
    borderColor: 'grey',
    borderTopWidth: 1,
    borderLeftWidth: 0.5,
    borderRightColor: 'lightgrey',
    borderRightWidth: 0.5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    height: '100%',
    backgroundColor: colors.electronicLight,
  },
});

Cassette.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  percentPlayed: PropTypes.number,
  playing: PropTypes.bool,
};
