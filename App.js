import React, { useEffect, useState } from 'react';

import TrackPlayer from 'react-native-track-player';

import Loading from './src/Screens/Loading/Loading';
import Home from './src/Screens/Home/Home';

import { getTracks } from './src/utils/getTracks';
import { setupPlayer, addTracks, playbackService } from './trackPlayerServices';

/**
 * @function App
 * @component
 * @description The main page for the Kmart Radio Application. This app will
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

  return <Home />;
}
