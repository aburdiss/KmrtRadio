import React from 'react';
import PropTypes from 'prop-types';
import { Pressable, View, Linking, Image, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Text from '../../../../BaseComponents/Text/Text';
import { colors } from '../../../../Model/Model';

/**
 * @description A styled list item that contains links to the authors of the
 * various softwares used throughout the app, and the users who contributed
 * to them.
 * Created 1/16/23
 * [Created with help from an online article]{@link https://blog.expo.io/licenses-the-best-part-of-your-app-29e7285b544f}
 * @param {Object} props JSX props passed to this React component
 * @param {string} props.image The url of the image to display.
 * @param {string} props.userUrl The url of the author of this software.
 * @param {string} props.username The username of the author of the software
 * using this license.
 * @param {string} props.name The name of the author of the software using this
 * license.
 * @param {string} props.version The version number of the software using this
 * license.
 * @param {string} props.licenses The text to render inside the main section
 * of this license link.
 * @param {string} props.repository The url of the Github repository to link
 * to.
 * @param {string} props.licenseUrl The url to the currently referenced
 * license.
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 7/14/23
 * @version 1.0.0
 *
 * @example
 * <LicensesListItem {...item} />
 */
export default function LicensesListItem({
  image,
  userUrl,
  username,
  name,
  version,
  licenses,
  repository,
  licenseUrl,
}: any) {
  let title = name;
  if (username) {
    if (title.toLowerCase() !== username.toLowerCase()) {
      title += ` by ${username}`;
    }
  }

  return (
    <View style={styles.card}>
      {image && (
        <Pressable
          onPress={() => Linking.openURL(userUrl)}
          style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
        >
          <Image source={{ uri: image }} style={styles.image} />
        </Pressable>
      )}
      <Pressable
        onPress={() => Linking.openURL(repository)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.7 : 1,
          ...styles.item,
        })}
      >
        <View style={styles.textContainer}>
          <Text style={styles.name}>{title}</Text>
          <Pressable onPress={() => licenseUrl && Linking.openURL(licenseUrl)}>
            <Text style={styles.text}>{licenses}</Text>
          </Pressable>
          <Text style={styles.text}>{version}</Text>
        </View>
        <Ionicon
          style={styles.forwardChevron}
          color={colors.text}
          size={32}
          name={'caret-forward-circle'}
        />
      </Pressable>
    </View>
  );
}

LicensesListItem.propTypes = {
  image: PropTypes.string,
  userUrl: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string,
  version: PropTypes.string,
  licenses: PropTypes.string,
  repository: PropTypes.string,
  licenseUrl: PropTypes.string,
};

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
  },
  forwardChevron: { alignSelf: 'center' },
  item: {
    paddingVertical: 12,
    paddingRight: 12,
    marginLeft: 12,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
  },
  image: {
    aspectRatio: 1,
    width: 58,
    borderRadius: 29,
    backgroundColor: colors.white,
  },
  text: {
    marginTop: 3,
    color: colors.text,
  },
  textContainer: {
    maxWidth: '75%',
  },
});
