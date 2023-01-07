import React from 'react';
import { Text as TextRN, StyleSheet } from 'react-native';

export default function Text(props) {
  return (
    <TextRN {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </TextRN>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NotoSans-Medium',
  },
});
