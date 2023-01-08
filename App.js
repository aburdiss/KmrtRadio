import React, { useContext, useEffect, useRef, useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import * as RNLocalize from 'react-native-localize';
import TrackPlayer from 'react-native-track-player';
import { Svg, Rect, Defs, Pattern } from 'react-native-svg';

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
import { colors } from './src/Model/Model';
import { AppContext } from './src/Contexts/AppContext';

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

  const { state } = useContext(AppContext);

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
      <View style={styles.background}>
        <Svg>
          <Defs>
            <Pattern
              id="pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(33 -47) scale(4.5) rotate(28)"
              viewBox="0 0 100 20"
            >
              <Rect width="1" height="1" x="13" y="0" fill={colors.primary1} />
              <Rect width="1" height="1" x="2" y="1" fill={colors.primary1} />
              <Rect width="1" height="1" x="16" y="2" fill={colors.primary1} />
              <Rect width="1" height="1" x="8" y="3" fill={colors.primary2} />
              <Rect width="1" height="1" x="5" y="5" fill={colors.primary1} />
              <Rect width="1" height="1" x="15" y="6" fill={colors.primary5} />
              <Rect width="1" height="1" x="2" y="7" fill={colors.primary5} />
              <Rect width="1" height="1" x="6" y="9" fill={colors.primary2} />
              <Rect width="1" height="1" x="18" y="9" fill={colors.primary2} />
              <Rect width="1" height="1" x="13" y="10" fill={colors.primary1} />
              <Rect width="1" height="1" x="1" y="11" fill={colors.primary1} />
              <Rect width="1" height="1" x="11" y="14" fill={colors.primary1} />
              <Rect width="1" height="1" x="15" y="14" fill={colors.primary1} />
              <Rect width="1" height="1" x="5" y="15" fill={colors.primary1} />
              <Rect width="1" height="1" x="1" y="18" fill={colors.primary5} />
            </Pattern>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#pattern)" />
        </Svg>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.navigationButtonsContainer}>
          <NavigationButton
            onPress={() => {
              pagerRef?.current?.setPage(0);
            }}
          >
            {translate('Radio')}
          </NavigationButton>
          <NavigationButton
            onPress={() => {
              pagerRef?.current?.setPage(1);
            }}
          >
            {translate('Themes')}
          </NavigationButton>
          <NavigationButton
            onPress={() => {
              pagerRef?.current?.setPage(2);
            }}
          >
            {translate('More')}
          </NavigationButton>
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
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: colors.background3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pagerView: {
    flex: 1,
  },
});
