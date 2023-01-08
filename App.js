import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';
import * as RNLocalize from 'react-native-localize';
import TrackPlayer from 'react-native-track-player';

import Loading from './src/Screens/Loading/Loading';
import Home from './src/Screens/Home/Home';
import Themes from './src/Screens/Themes/Themes';
import More from './src/Screens/More/More';

import { setI18nConfig } from './src/translations/TranslationModel';

import { getTracks } from './src/utils/getTracks';
import { setupPlayer, addTracks, playbackService } from './trackPlayerServices';
import Text from './src/BaseComponents/Text/Text';

setI18nConfig();

/**
 * @function App
 * @component
 * @description The main page for the KMRT Radio Application. This app will
 * stream Kmart in-store clips from the 70s through the 90s, that are available
 * on Archive.org
 * https://archive.org/details/attentionkmartshoppers
 * Created 1/5/23 by Alexander Burdiss
 * @returns {JSX.Element} JSX render Instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/5/23
 * @version 0.0.1
 */
export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const pagerRef = useRef(null);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  const handleLocalizationChange = () => {
    setI18nConfig()
      .then(() => this.forceUpdate())
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      await playbackService();

      const tracks = getTracks('March');

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks(tracks);
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  if (!isPlayerReady) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          onPress={() => {
            pagerRef?.current?.setPage(0);
          }}
        >
          <Text>Radio</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            pagerRef?.current?.setPage(1);
          }}
        >
          <Text>Themes</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            pagerRef?.current?.setPage(2);
          }}
        >
          <Text>More</Text>
        </Pressable>
      </View>
      <PagerView style={styles.pagerView} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Home />
        </View>
        <View key="2">
          <Themes />
        </View>
        <View key="3">
          <More />
        </View>
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  pagerView: {
    flex: 1,
  },
});
