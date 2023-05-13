import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Pressable } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Text from '../../BaseComponents/Text/Text';

import { colors } from '../../Model/Model';
import { shadeHexColor } from '../../utils/shadeHexColor';
import { getContrast } from '../../utils/getContrast';

/**
 * @function CassetteBoxTop
 * @component
 * @description A top view of a cassette tape box. this component is a
 * pressable component so that a vertical array of them can be used as a
 * theme picker, or other options choosers.
 * Created 3/3/23
 * @param {Object} props The JSX props passed to this React component
 * @param {string} props.label The text to display on this Cassette tape box
 * @param {string} props.color The color of the label of this cassette tape
 * box
 * @param {Function} props.onPress A function to call when this component is
 * pressed
 * @param {boolean} props.active Whether or not this theme is active
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export default function CassetteBoxTop({
  label,
  color = colors.primary0,
  onPress,
  active,
}: any) {
  const isDarkColor = getContrast(color) === getContrast('#000');
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      {({ pressed }) => (
        <View
          style={{
            ...styles.pressableChild,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          }}
        >
          <View style={styles.outerContainer} />
          <View style={styles.cassetteContainer}>
            <View style={{ ...styles.joint, ...styles.jointLeft }} />
            <View style={{ ...styles.joint, ...styles.jointRight }} />
            <View
              style={{
                ...styles.label,
                backgroundColor: color,
              }}
            >
              <View style={styles.nameContainer}>
                <Text
                  style={{ ...styles.labelText, color: getContrast(color) }}
                >
                  {label?.toUpperCase()}
                </Text>
                {active && (
                  <IonIcons
                    name="checkmark"
                    color={getContrast(color)}
                    size={20}
                  />
                )}
              </View>
              <View style={styles.bottomText}>
                <Text
                  style={{ ...styles.brandText, color: getContrast(color) }}
                >
                  KMRT Radio
                </Text>
                <Text
                  style={{ ...styles.modelNumber, color: getContrast(color) }}
                >
                  60296-4
                </Text>
              </View>
              <View
                style={{
                  ...styles.line,
                  ...styles.line1,
                  backgroundColor: shadeHexColor(
                    color,
                    isDarkColor ? 0.5 : -0.5,
                  ),
                }}
              />
              <View
                style={{
                  ...styles.line,
                  ...styles.line2,
                  backgroundColor: shadeHexColor(
                    color,
                    isDarkColor ? 0.3 : -0.3,
                  ),
                }}
              />
              <View
                style={{
                  ...styles.line,
                  ...styles.line3,
                  backgroundColor: shadeHexColor(
                    color,
                    isDarkColor ? 0.1 : -0.1,
                  ),
                }}
              />
            </View>
            <IonIcons
              style={styles.icon}
              color={shadeHexColor(color, isDarkColor ? 0.5 : -0.5)}
              name="musical-notes-sharp"
              size={25}
            />
          </View>
          <View style={styles.outerContainer} />
        </View>
      )}
    </Pressable>
  );
}

CassetteBoxTop.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  active: PropTypes.bool,
};

const styles = StyleSheet.create({
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 12,
  },
  cassetteContainer: {
    backgroundColor: colors.electronicLight,
    borderRadius: 2,
    flex: 1,
    marginHorizontal: 1,
    borderBottomColor: shadeHexColor(colors.electronicLight, 0.3),
    borderBottomWidth: 7,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 24,
  },
  joint: {
    backgroundColor: shadeHexColor(colors.white, -0.2),
    width: 8,
    height: 8,
    position: 'absolute',
    opacity: 0.5,
    borderTopColor: colors.white,
    borderTopWidth: 2,
  },
  jointLeft: {
    top: 30,
    left: 2,
  },
  jointRight: {
    top: 30,
    right: 2,
  },
  label: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: colors.white,
    borderBottomWidth: 2,
    borderBottomColor: colors.black,
    overflow: 'hidden',
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  line: {
    width: 6,
    height: 100,
    position: 'absolute',
    transform: [{ rotate: '30deg' }],
    top: -20,
    zIndex: -1,
  },
  line1: {
    right: -14,
  },
  line2: {
    right: -2,
  },
  line3: {
    right: 10,
  },
  modelNumber: {
    fontSize: 12,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  outerContainer: {
    height: '100%',
    width: 6,
    backgroundColor: shadeHexColor(colors.black, 0.1),
    borderRadius: 3,
  },
  outerContainerRight: {
    borderRightColor: colors.black,
  },
  pressable: {
    paddingVertical: 3,
  },
  pressableChild: {
    flexDirection: 'row',
  },
});
