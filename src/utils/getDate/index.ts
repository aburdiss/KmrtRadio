import { months } from '../../Model/Model';

/**
 * @function getDate
 * @description Gets the month and year from a passed in date string. This was
 * created because I was having a problem with React Native's JS runtime
 * environment not accepting strings as Date() constructors, and my data has
 * human readable dates that I need to convert to actual dates, but only needed
 * months and years. This function pulls the month and year then from a string
 * like "January 8, 2023" and returns an object with those properties.
 * Created 1/6/23
 * @param {string} dateString The human readable date string, with or without
 * a day ("January, 2023" and "January 8, 2023" are both acceptable)
 * @returns {Object} An object with "month" and "year" of the passed in string
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.1
 */
export function getDate(dateString: string): { month?: string; year?: string } {
  if (!dateString) {
    return {};
  }
  const month = months.filter((m) => dateString.includes(m))?.pop();
  const year = dateString.split(', ').pop();
  return { month, year };
}
