import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import BackButton from '../BackButton/BackButton';
import Text from '../../../BaseComponents/Text/Text';

import { PAGES } from '../pages';

export default function LicensesPage({ setScreenPage }: any) {
  return (
    <View>
      <BackButton onPress={() => setScreenPage(PAGES.HOME)} />
      <Text>Licenses</Text>
    </View>
  );
}

LicensesPage.propTypes = {
  setScreenPage: PropTypes.func,
};
