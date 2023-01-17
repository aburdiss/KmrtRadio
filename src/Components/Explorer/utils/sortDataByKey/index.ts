/**
 * @function sortDataByKey
 * @description Sorts the licenses data by key.
 * [Created with help from an online article]{@link https://blog.expo.io/licenses-the-best-part-of-your-app-29e7285b544f}
 * @param {Object[]} data The list of licenses.
 * @param {string|number} key An object key inside each member of data.
 * @returns {Object[]} A sorted version of the data array that is passed in.
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 12/17/20
 * @version 1.0.1
 */
export function sortDataByKey(data: Array<any>, key: any) {
  data.sort(function (a, b) {
    return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
  });
  return data;
}
