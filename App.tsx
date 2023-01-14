import React, { useContext, useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import * as RNLocalize from 'react-native-localize';
import TrackPlayer from 'react-native-track-player';

import {
  setupPlayer,
  addInitialTracks,
  playbackService,
} from './trackPlayerServices';

import Loading from './src/Screens/Loading/Loading';
import Home from './src/Screens/Home/Home';
import Themes from './src/Screens/Themes/Themes';
import More from './src/Screens/More/More';

import { setI18nConfig, translate } from './src/translations/TranslationModel';

import { getTracks } from './src/utils/getTracks';
import NavigationButton from './src/Components/NavigationButton/NavigationButton';
import { AppContext } from './src/Contexts/AppContext';
import AppBackground from './src/BaseComponents/AppBackground/AppBackground';

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
  const pagerRef = useRef<PagerView>(null);
  const [pageSelected, setPageSelected] = useState(0);

  const { state } = useContext(AppContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

  const handleLocalizationChange = () => {
    setI18nConfig()
      // @ts-ignore
      .then(() => this.forceUpdate())
      .catch((error: any) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (state.month && state.year && !isPlayerReady) {
      async function setup() {
        let isSetup = await setupPlayer();

        await playbackService();

        const tracks = getTracks(state.month, state.year);

        const queue = await TrackPlayer.getQueue();
        if (isSetup && queue.length <= 0) {
          await addInitialTracks(tracks);
        }

        setIsPlayerReady(isSetup);
      }

      setup();
    }
  }, [isPlayerReady, state.month, state.year]);

  if (!isPlayerReady) {
    return <Loading />;
  }

  return (
    <>
      <AppBackground />
      <SafeAreaView style={styles.container}>
        <View style={styles.navigationButtonsContainer}>
          <View style={styles.keyboard}>
            <NavigationButton
              onPress={() => {
                pagerRef?.current?.setPage(0);
              }}
              active={pageSelected === 0}
            >
              {translate('Radio')}
            </NavigationButton>
            <NavigationButton
              onPress={() => {
                pagerRef?.current?.setPage(1);
              }}
              active={pageSelected === 1}
            >
              {translate('Themes')}
            </NavigationButton>
            <NavigationButton
              onPress={() => {
                pagerRef?.current?.setPage(2);
              }}
              active={pageSelected === 2}
            >
              {translate('More')}
            </NavigationButton>
          </View>
        </View>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={(event) => {
            setPageSelected(event.nativeEvent.position);
          }}
        >
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  keyboard: {
    flexDirection: 'row',
    backgroundColor: '#808080',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#adadaa',
    borderRightWidth: 3,
    borderRightColor: '#adadaa',
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pagerView: {
    flex: 1,
  },
});
