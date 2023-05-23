import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../Model/Model';
import Text from '../../../BaseComponents/Text/Text';
import { StyleSheet } from 'react-native';
import { translate } from '../../../translations/TranslationModel';

/**
 * @function BackButton
 * @memberof Explorer
 * @description A stylized button to go back one context level in the Explorer
 * Created 1/14/23
 * @param {Object} props JSX props passed to this React component
 * @param {Function} props.onPress A function to call when this component is
 * clicked
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/16/23
 * @version 1.0.0
 */
export default function BackButton({ onPress }: any) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Ionicon name="caret-back-circle" color={colors.text} size={32} />
      <Text style={styles.text}>{translate('Back')}</Text>
    </Pressable>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 8,
    fontSize: 18,
  },
});
