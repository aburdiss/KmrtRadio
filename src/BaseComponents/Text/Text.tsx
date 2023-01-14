import React from 'react';
import PropTypes from 'prop-types';
import { Text as TextRN, StyleSheet } from 'react-native';
import { fonts } from '../../Model/Model';

/**
 * @function Text
 * @component
 * @description An override for the React Native Text component. This is used
 * to apply a default font to every text component on the application more
 * easily
 * Created 1/6/23
 * @param {Object} props JSX props passed to this React component
 * @param {JSX.Element|string} props.children Children passed to this Component
 * @param {Object} props.style Style to apply to the text component in addition
 * to the font
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/13/23
 * @version 1.0.0
 */
export default function Text(props: {
  style?: Object;
  children?: JSX.Element | string;
}) {
  return (
    <TextRN {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </TextRN>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.fontPrimary,
  },
});

Text.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
