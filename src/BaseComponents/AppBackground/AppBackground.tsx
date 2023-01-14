import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Rect, Defs, Pattern } from 'react-native-svg';

import { colors } from '../../Model/Model';

export default function AppBackground() {
  return (
    <View style={styles.background}>
      <Svg>
        <Defs>
          <Pattern
            id="pattern"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            viewBox="0 0 20 20"
          >
            <Rect width="1" height="1" x="13" y="0" fill={colors.primary1} />
            <Rect width="1" height="1" x="2" y="1" fill={colors.primary1} />
            <Rect width="1" height="1" x="16" y="2" fill={colors.primary1} />
            <Rect width="1" height="1" x="8" y="3" fill={colors.primary2} />
            <Rect width="1" height="1" x="5" y="5" fill={colors.primary1} />
            <Rect width="1" height="1" x="15" y="6" fill={colors.primary5} />
            <Rect width="1" height="1" x="2" y="7" fill={colors.primary5} />
            <Rect width="1" height="1" x="6" y="9" fill={colors.primary2} />
            <Rect width="1" height="1" x="18" y="9" fill={colors.primary2} />
            <Rect width="1" height="1" x="13" y="10" fill={colors.primary1} />
            <Rect width="1" height="1" x="1" y="11" fill={colors.primary1} />
            <Rect width="1" height="1" x="11" y="14" fill={colors.primary1} />
            <Rect width="1" height="1" x="15" y="14" fill={colors.primary1} />
            <Rect width="1" height="1" x="5" y="15" fill={colors.primary1} />
            <Rect width="1" height="1" x="1" y="18" fill={colors.primary5} />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#pattern)" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: colors.background3,
  },
});
