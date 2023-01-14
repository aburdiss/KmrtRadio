import { Track, tracks } from '../../Model/Model';

/**
 * @function getTracks
 * @description Gets the tracks for the passed in month and year, and returns
 * an array of objects ready to pass to React Native Track Player.
 * Created 1/6/23
 * @see https://react-native-track-player.js.org/docs/api/objects/track
 * @param {string} month The current month (default), or user selected month
 * @param {string} year The randomly selected year, or user selected year
 * @returns {Object[]} Formatted objects to pass to React Native Track Player
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.1.0
 */
export function getTracks(month: string, year: string) {
  const currentMonthTracks = tracks[month][year];
  let allTracks = currentMonthTracks?.map((track: Track) => {
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
