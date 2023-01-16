import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, View, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../Model/Model';

export default function PlayerButton({ label, icon, onPress }: any) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        transform: [{ scale: pressed ? 0.95 : 1 }],
      })}
      accessibilityLabel={label}
    >
      <View style={styles.buttonInner}>
        <Ionicon name={icon} size={30} color={colors.electronicLight} />
      </View>
    </Pressable>
  );
}

PlayerButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(43, 44, 48)',
    backgroundColor: 'rgb(26, 25, 30)',
    borderWidth: 2,
    flex: 1,
    padding: 16,
    margin: 2,
  },
  buttonInner: {
    alignItems: 'center',
  },
});
