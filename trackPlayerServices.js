import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
} from 'react-native-track-player';
import { seekToCurrentTime } from './src/utils/seekToCurrentTime';

/**
 * @file
 * @see https://blog.logrocket.com/react-native-track-player-complete-guide/
 */

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    isSetup = true;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return isSetup;
  }
}

export async function addInitialTracks(tracks) {
  if (tracks) {
    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
  }
}

export async function addTracks(tracks) {
  if (tracks) {
    await TrackPlayer.reset();
    await TrackPlayer.add(tracks);
    await seekToCurrentTime();
    await TrackPlayer.play();
  }
}

export async function playbackService() {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener('remote-next', async () => {
    await TrackPlayer.skipToNext();
    await seekToCurrentTime();
  });

  TrackPlayer.addEventListener('remote-previous', async () => {
    await TrackPlayer.skipToPrevious();
    await seekToCurrentTime();
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy();
  });
}
