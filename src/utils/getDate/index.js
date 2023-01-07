import { months } from '../../Model/Model';

export function getDate(dateString) {
  if (!dateString) {
    return undefined;
  }
  const month = months.filter((m) => dateString.includes(m))?.pop();
  const year = dateString.split(', ').pop();
  return { month, year };
}
