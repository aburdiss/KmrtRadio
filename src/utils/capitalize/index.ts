/**
 * @function capitalize
 * @description Capitalizes the first letter of the string passed in.
 * Created 9/11/21 for ScalePractice
 * @param {string} inputString Any string to capitalize the first character in
 * @returns {string} A capitalized version of the inputted string
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/16/23
 * @version 1.0.0
 */
export function capitalize(inputString: string) {
  if (typeof inputString !== 'string') {
    return undefined;
  }
  const firstLetter = inputString[0];
  const restOfString = inputString.slice(1);
  return `${firstLetter.toUpperCase()}${restOfString}`;
}
