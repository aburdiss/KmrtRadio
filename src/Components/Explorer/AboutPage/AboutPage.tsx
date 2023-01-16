import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Text from '../../../BaseComponents/Text/Text';
import BackButton from '../BackButton/BackButton';

import { PAGES } from '../pages';

export default function AboutPage({ setScreenPage }: any) {
  return (
    <View>
      <BackButton onPress={() => setScreenPage(PAGES.HOME)} />
      <Text>About</Text>
    </View>
  );
}

AboutPage.propTypes = {
  setScreenPage: PropTypes.func,
};
