import { tracks } from '../../Model/Model';

export function getYearsForMonth(month) {
  return Object.keys(tracks[month]);
}
