import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { useTheme } from '../../utils/useTheme';
import { AppContext } from '../../Contexts/AppContext';
import { THEMES } from '../../Model/themes';

// Backgrounds
import Speckled from './Backgrounds/Speckled';
const jazz = require('./Backgrounds/draw.png');
const neon = require('./Backgrounds/burst.png');
const jukebox = require('./Backgrounds/replicate.png');
const summer = require('./Backgrounds/horizon.png');
const iceCream = require('./Backgrounds/spill.png');

export default function AppBackground() {
  const theme = useTheme();
  const { state } = useContext(AppContext);

  return (
    <View
      style={{ ...styles.background, backgroundColor: theme.appBackground }}
    >
      {
        {
          [THEMES.KMRT]: <Speckled />,
          [THEMES.JAZZ]: (
            <Image
              source={jazz}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
              }}
            />
          ),
          [THEMES.NEON]: (
            <Image
              source={neon}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
              }}
            />
          ),
          [THEMES.JUKEBOX]: (
            <Image
              source={jukebox}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
              }}
            />
          ),
          [THEMES.SUMMER]: (
            <Image
              source={summer}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
              }}
            />
          ),
          [THEMES.ICE_CREAM]: (
            <Image
              source={iceCream}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height,
              }}
            />
          ),
        }[state.theme ?? THEMES.KMRT]
      }
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
  },
});
