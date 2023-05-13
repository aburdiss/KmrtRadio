import TrackPlayer from 'react-native-track-player';

/**
 * @function seekToCurrentTime
 * @description A utility that handles seeking the track to whatever the
 * current amount of minutes on the real time clock is, so that the app feels
 * more like a radio instead of a music app.
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 5/13/23
 * @version 1.0.0
 */
export async function seekToCurrentTime() {
  const CURRENT_TIME = new Date().toLocaleTimeString('en-us', {
    minute: 'numeric',
    second: 'numeric',
  });
  const NUMBER_OF_SECONDS_TO_SEEK =
    Number(CURRENT_TIME.split(':')[0]) * 60 +
    Number(CURRENT_TIME.split(':')[1]);
  await TrackPlayer.seekTo(NUMBER_OF_SECONDS_TO_SEEK);
}
