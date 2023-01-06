/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

import TrackPlayer from 'react-native-track-player';

import { playbackService } from './trackPlayerServices';

const appName = 'KmartRadio';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
