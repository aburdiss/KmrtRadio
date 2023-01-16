import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../Model/Model';
import Text from '../../../BaseComponents/Text/Text';
import { StyleSheet } from 'react-native';

export default function BackButton({ onPress }: any) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Ionicon name="caret-back-circle" color={colors.text} size={32} />
      <Text style={styles.text}>Back</Text>
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
