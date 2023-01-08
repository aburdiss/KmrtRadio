import { months } from '../../Model/Model';

export function getCurrentMonth() {
  return months[new Date().getMonth()];
}
