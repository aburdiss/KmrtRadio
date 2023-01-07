import { useEffect, useRef } from 'react';
import TrackPlayer from 'react-native-track-player';

export function useCurrentTrack() {
  const trackRef = useRef(null);
  useEffect(() => {
    async function waitForTrackIndex() {
      const index = await TrackPlayer.getCurrentTrack();
      const metaData = await TrackPlayer.getTrack(index);
      trackRef.current = metaData;
    }
    waitForTrackIndex();
  });
  return trackRef.current;
}
