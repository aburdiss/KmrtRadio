import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, View, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { colors } from '../../../Model/Model';
import { shadeHexColor } from '../../../utils/shadeHexColor';

export default function PlayerButton({ label, icon, onPress, disabled }: any) {
  return disabled ? (
    <View style={styles.button}>
      {icon === 'loading' ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.buttonInner}>
          <Ionicon
            name={icon}
            size={30}
            color={shadeHexColor(colors.electronicLight, -0.65)}
          />
        </View>
      )}
    </View>
  ) : (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        transform: [{ scale: pressed ? 0.95 : 1 }],
      })}
      accessibilityLabel={label}
    >
      {icon === 'loading' ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.buttonInner}>
          <Ionicon name={icon} size={30} color={colors.electronicLight} />
        </View>
      )}
    </Pressable>
  );
}

PlayerButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: 6,
  },
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
