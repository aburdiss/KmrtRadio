import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Svg, {
  RadialGradient,
  LinearGradient,
  Defs,
  Stop,
  Rect,
} from 'react-native-svg';

import Text from '../../BaseComponents/Text/Text';

export default function NavigationButton({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.pressable,
        transform: [{ scale: pressed ? 0.95 : 1 }],
      })}
    >
      <View style={styles.view}>
        <Text style={styles.text}>{children}</Text>
        <View style={styles.linearGradient}>
          <Svg width={80} height={40}>
            <Defs>
              <LinearGradient id="linGrad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#c7c7c7" stopOpacity="1" />
                <Stop offset="1" stopColor="#f7f7f7" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <Rect width="70" height="40" fill="url(#linGrad)" />
          </Svg>
        </View>
      </View>
      <View style={styles.after}>
        <Svg width={84} height={52}>
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="30%"
              rx="50%"
              ry="50%"
              fx="50%"
              fy="50%"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <Stop offset="100%" stopColor="#adadaa" stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  after: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: -1,
  },
  linearGradient: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  pressable: {
    marginVertical: 8,
    marginHorizontal: 2,
    backgroundColor: '#d1d0cb',
    height: 52,
    width: 84,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  text: {},
  view: {
    position: 'relative',
    height: 40,
    width: 68,
    borderRadius: 40,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
