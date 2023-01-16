import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import HomePage from './HomePage/HomePage';

import { colors } from '../../Model/Model';
import { PAGES } from './pages';
import AboutPage from './AboutPage/AboutPage';
import LicensesPage from './LicensesPage/LicensesPage';

/**
 * @namespace Explorer
 * A collection of components that function as a stylized explorer that the
 * user can use to learn more about the app.
 */

/**
 * @function Explorer
 * @memberof Explorer
 * @description A component that looks like an old touchscreen device, and
 * allows the user to explore more about the app.
 * Created 1/14/23
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/16/23
 * @version 1.0.0
 */
export default function Explorer() {
  const [screenPage, setScreenPage] = useState(PAGES.HOME);
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        {
          {
            [PAGES.HOME]: <HomePage setScreenPage={setScreenPage} />,
            [PAGES.ABOUT]: <AboutPage setScreenPage={setScreenPage} />,
            [PAGES.LICENCES]: <LicensesPage setScreenPage={setScreenPage} />,
          }[screenPage]
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.electronicDark,
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderBottomColor: colors.electronicLight,
    borderRightWidth: 3,
    borderRightColor: colors.electronicLight,
  },
  screen: {
    backgroundColor: colors.screen,
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: colors.electronicLight,
    borderLeftWidth: 2,
    borderLeftColor: colors.electronicLight,
    height: '100%',
  },
});
