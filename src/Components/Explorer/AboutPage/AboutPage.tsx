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
      <Text>
        The KMRT Radio App streams audio that originally played in a major
        department store in America in the Early 90s.
      </Text>
      <Text />
      <Text>
        Similar to the experience you would get in the store, you cannot scrub
        these audio tracks. You can only jump around to different times.
      </Text>
      <Text />
      <Text>All Audio is sourced and streams from the Internet Archive.</Text>
    </View>
  );
}

AboutPage.propTypes = {
  setScreenPage: PropTypes.func,
};
