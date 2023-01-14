import React from 'react';
import { Text as TextRN, StyleSheet } from 'react-native';
import { fonts } from '../../Model/Model';

export default function Text(props) {
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
