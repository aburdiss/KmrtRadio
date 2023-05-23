import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, StyleSheet, View, Linking } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';

import Text from '../../../BaseComponents/Text/Text';

import { PAGES } from '../pages';
import { colors } from '../../../Model/Model';
import { translate } from '../../../translations/TranslationModel';
import { getAppStoreLink } from '../../../utils/getAppStoreLink';

/**
 * @function HomePage
 * @memberof Explorer
 * @description The main page of the Explorer, that allows the user to navigate
 * to other pages.
 * Created 1/14/23
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/16/23
 * @version 1.0.0
 */
export default function HomePage({ setScreenPage }: any) {
  return (
    <View>
      <Pressable
        style={styles.fauxApp}
        onPress={() => setScreenPage(PAGES.ABOUT)}
      >
        <Ionicon name="globe" size={32} color={colors.text} />
        <Text style={styles.fauxAppText}>{translate('About')}</Text>
      </Pressable>
      <Pressable
        style={styles.fauxApp}
        onPress={() => setScreenPage(PAGES.LICENCES)}
      >
        <Ionicon name="ribbon" size={32} color={colors.text} />
        <Text style={styles.fauxAppText}>{translate('Licenses')}</Text>
      </Pressable>
      <Pressable
        style={styles.fauxApp}
        onPress={() => {
          const link = getAppStoreLink();
          Linking.openURL(link);
        }}
      >
        <Ionicon name="person" size={32} color={colors.text} />
        <Text style={styles.fauxAppText}>{translate('More Apps')}</Text>
      </Pressable>
      <Pressable
        style={styles.fauxApp}
        onPress={() => {
          Linking.openURL(
            'mailto:kmrtradio@alexanderburdiss.com?subject=KMRT%20Radio%20Feedback',
          );
        }}
      >
        <Ionicon name="mail" size={32} color={colors.text} />
        <Text style={styles.fauxAppText}>{translate('Send Feedback')}</Text>
      </Pressable>
      <Pressable
        style={styles.fauxApp}
        onPress={() => {
          Linking.openURL('https://github.com/aburdiss/KmrtRadio');
        }}
      >
        <Ionicon name="code-slash" size={32} color={colors.text} />
        <Text style={styles.fauxAppText}>{translate('Open Source')}</Text>
      </Pressable>
      <View style={styles.footerContainer} importantForAccessibility="no">
        <View style={styles.iconContainer}>
          <Ionicon
            accessibilityLabel={translate('React Native Icon')}
            style={styles.icon}
            name="logo-react"
            size={24}
            color={colors.reactColor}
          />
          <View>
            <View style={styles.javascriptBackground} />
            <MaterialCommunityIcon
              accessibilityLabel={translate('JavaScript Icon')}
              style={styles.icon}
              name="language-typescript"
              size={26}
              color={colors.typescriptColor}
            />
          </View>
        </View>
        <Text style={styles.footerText}>
          {translate('Made with ❤️ in Dayton, Ohio')}
        </Text>
        <Text style={styles.footerText}>{DeviceInfo.getVersion()}</Text>
      </View>
    </View>
  );
}

HomePage.propTypes = {
  setScreenPage: PropTypes.func,
};

const styles = StyleSheet.create({
  fauxApp: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  fauxAppText: {
    paddingLeft: 8,
    fontSize: 18,
  },
  javascriptBackground: {
    backgroundColor: colors.white,
    height: 19,
    width: 18,
    marginLeft: 7,
    marginTop: 4,
    zIndex: -1,
    position: 'absolute',
  },
  iconContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 4,
  },
  icon: {
    paddingHorizontal: 3,
  },
  footerContainer: {
    paddingTop: 30,
    alignItems: 'center',
    paddingBottom: 30,
  },
  footerText: {
    paddingTop: 10,
  },
});
