import { tracks } from './Model';

describe('tracks dates are all formatted correctly', () => {
  const years = Object.keys(tracks);
  years.forEach((year) => {
    tracks[year].forEach((track) => {
      test(track.date, () => {
        var timestamp = Date.parse(track.date);

        expect(isNaN(timestamp)).toBeFalsy();
      });
    });
  });
});
