import { tracks, months } from '../../Model/Model';

const d = new Date();
let currentMonth = months[d.getMonth()];

/**
 * @see https://react-native-track-player.js.org/docs/api/objects/track
 */
export function getTracks(month = currentMonth, year) {
  if (year) {
    // get specific year track
  } else {
    const currentMonthTracks = tracks[month];
    let allTracks = Object.keys(currentMonthTracks)
      .reduce((arr, yr) => {
        return [...arr, ...currentMonthTracks[yr]];
      }, [])
      .map((track) => {
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
}
