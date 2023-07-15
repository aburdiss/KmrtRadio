import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';

import Text from '../../../BaseComponents/Text/Text';
import BackButton from '../BackButton/BackButton';

import { PAGES } from '../pages';
import { translate } from '../../../translations/TranslationModel';
import { colors } from '../../../Model/Model';

/**
 * @function AboutPage
 * @component
 * @description The About Page on the Explorer. This shows information about
 * the app.
 * Created 1/16/23
 * @param {Object} props The JSX props passed to this React component
 * @param {Function} props.setScreenPage A function to set the current page of
 * the explorer
 * @returns {JSX.Element} JSX render instructions.
 *
 * @copyright 2023 Alexander Burdiss
 * @version 1.0.1
 * @since 7/14/23
 * @example
 * <AboutPage setScreenPage={setScreenPage} />
 */
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
    text: {
      color: colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <BackButton onPress={() => setScreenPage(PAGES.HOME)} />
      <ScrollView style={styles.scrollview}>
        <View style={styles.scrollviewInner}>
          <Text style={styles.text}>{translate('About1')}</Text>
          <Text />
          <Text style={styles.text}>{translate('About2')}</Text>
          <Text />
          <Text style={styles.text}>{translate('About3')}</Text>
          <Text />
          <Text style={styles.text}>{translate('About4')}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

AboutPage.propTypes = {
  setScreenPage: PropTypes.func,
};
