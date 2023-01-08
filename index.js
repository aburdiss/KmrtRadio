/**
 * @format
 */

import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';

import TrackPlayer from 'react-native-track-player';

import { playbackService } from './trackPlayerServices';
import { PreferencesProvider } from './src/Contexts/AppContext';

const appName = 'KmartRadio';

function WrappedApp() {
  return (
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  );
}

AppRegistry.registerComponent(appName, () => WrappedApp);
TrackPlayer.registerPlaybackService(() => playbackService);
