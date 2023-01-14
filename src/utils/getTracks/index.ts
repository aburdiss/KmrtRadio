import { tracks } from '../../Model/Model';

/**
 * @see https://react-native-track-player.js.org/docs/api/objects/track
 */
export function getTracks(month, year) {
  const currentMonthTracks = tracks[month][year];
  let allTracks = currentMonthTracks?.map((track) => {
    return {
      id: track.date,
      url: track.src,
      artwork: track.img,
      title: track.date,
      artist: 'KMRT Radio',
    };
  });

  return allTracks;
}
