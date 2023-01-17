import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';

import BackButton from '../BackButton/BackButton';
import LicensesListItem from './LicensesListItem/LicensesListItem';
import Text from '../../../BaseComponents/Text/Text';

import { PAGES } from '../pages';

import data from './licenses.json';

import { getLicenseData } from '../utils/getLicenseData';

const licenseData = getLicenseData(data);

/**
 * @function LicensesPage
 * @description The page on the Explorer that shows the different licenses for
 * libraries used in building this application
 * Created 1/16/23
 * @param {Object} props JSX props passed to this React Component
 * @param {Function} props.setScreenPage A function to change the page of the
 * Explorer
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/16/23
 * @version 1.0.0
 */
export default function LicensesPage({ setScreenPage }: any) {
  return (
    <View style={styles.container}>
      <BackButton onPress={() => setScreenPage(PAGES.HOME)} />
      <Text style={styles.heading}>Licenses</Text>
      <FlatList
        style={styles.list}
        keyExtractor={({ key }) => key}
        data={licenseData}
        renderItem={({ item }) => <LicensesListItem {...item} />}
      />
    </View>
  );
}

LicensesPage.propTypes = {
  setScreenPage: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
  },
  list: {
    flex: 1,
  },
});
