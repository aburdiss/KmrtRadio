import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';

import Text from '../../../BaseComponents/Text/Text';
import BackButton from '../BackButton/BackButton';

import { PAGES } from '../pages';
import { translate } from '../../../translations/TranslationModel';

export default function AboutPage({ setScreenPage }: any) {
  const styles = StyleSheet.create({
    container: {
      paddingBottom: 24,
    },
    scrollview: {
      height: '100%',
    },
    scrollviewInner: {
      paddingBottom: 16,
    },
  });

  return (
    <View style={styles.container}>
      <BackButton onPress={() => setScreenPage(PAGES.HOME)} />
      <ScrollView style={styles.scrollview}>
        <View style={styles.scrollviewInner}>
          <Text>{translate('About1')}</Text>
          <Text />
          <Text>{translate('About2')}</Text>
          <Text />
          <Text>{translate('About3')}</Text>
          <Text />
          <Text>{translate('About4')}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

AboutPage.propTypes = {
  setScreenPage: PropTypes.func,
};
