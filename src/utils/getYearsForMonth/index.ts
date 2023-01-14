import { tracks } from '../../Model/Model';

export function getYearsForMonth(month: string) {
  return Object.keys(tracks[month]);
}
