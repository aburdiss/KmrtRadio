import React, { useContext, useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import type { StatusBarStyle } from 'react-native';
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
import { isIos } from './src/utils/isIos';
import AppBackground from './src/BaseComponents/AppBackground/AppBackground';
import NavigationButton from './src/Components/NavigationButton/NavigationButton';
import { AppContext } from './src/Contexts/AppContext';
import { colors } from './src/Model/Model';
import { THEMES } from './src/Model/themes';

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
 * @since 7/14/23
 * @version 1.0.2
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

  const LIGHT_STATUS_BAR = 'light-content';
  const DARK_STATUS_BAR = 'dark-content';

  return (
    <>
      <AppBackground />
      {isIos() && (
        <StatusBar
          barStyle={
            {
              [THEMES.KMRT]: DARK_STATUS_BAR,
              [THEMES.JAZZ]: DARK_STATUS_BAR,
              [THEMES.NEON]: LIGHT_STATUS_BAR,
              [THEMES.JUKEBOX]: DARK_STATUS_BAR,
              [THEMES.SUMMER]: DARK_STATUS_BAR,
              [THEMES.ICE_CREAM]: DARK_STATUS_BAR,
            }[state.theme ?? THEMES.KMRT] as StatusBarStyle
          }
        />
      )}
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
    paddingVertical: 20,
  },
  keyboard: {
    flexDirection: 'row',
    backgroundColor: colors.electronicDark,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: colors.electronicLight,
    borderRightWidth: 3,
    borderRightColor: colors.electronicDark,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pagerView: {
    flex: 1,
  },
});
