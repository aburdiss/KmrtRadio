/**
 * @function randomFromArray
 * @description Returns a random element from any passed in Array
 * Created 1/8/23
 * @param {*[]} array Any array to get a random element from
 * @returns {*} One element from the passed in array
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export function randomFromArray(array: Array<any>) {
  return array[Math.floor(Math.random() * array.length)];
}
