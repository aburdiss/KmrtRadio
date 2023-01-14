import { tracks } from './Model';

describe('tracks dates are all formatted correctly', () => {
  const months = Object.keys(tracks);
  months.forEach((month) => {
    const years = Object.keys(tracks[month]);
    years.forEach((year) => {
      tracks[month][year].forEach((track) => {
        test(track.date, () => {
          var timestamp = Date.parse(track.date);

          expect(isNaN(timestamp)).toBeFalsy();
        });
      });
    });
  });
});
