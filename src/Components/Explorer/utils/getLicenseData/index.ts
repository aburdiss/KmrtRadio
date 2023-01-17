import { extractNameFromGithubUrl } from '../extractNameFromGithubUrl';
import { sortDataByKey } from '../sortDataByKey';
import { capitalize } from '../../../../utils/capitalize';

/**
 * @function getLicenseData
 * @description Takes a JSON object of License data, formatted from the
 * npm-license-crawler package, and returns a formatted, sorted array of
 * license data.
 * Created 1/16/23
 * @param {Object} data Raw npm-license-crawler data
 * @returns {Object[]} Formatted data to use in the Licenses component
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/16/23
 * @version 1.0.0
 */
export function getLicenseData(data: Object) {
  let licenseData = Object.keys(data).map((key) => {
    // @ts-ignore
    let { licenses, ...license } = data[key];

    let name, version;
    if (String(key[0]) === '@') {
      [, name, version] = key.split('@');
    } else {
      [name, version] = key.split('@');
    }

    let username =
      extractNameFromGithubUrl(license.repository) ||
      extractNameFromGithubUrl(license.licenseUrl);

    let userUrl;
    let image;
    if (username) {
      username = capitalize(username);
      image = `http://github.com/${username}.png`;
      userUrl = `http://github.com/${username}`;
    }

    return {
      key,
      name,
      image,
      userUrl,
      username,
      licenses: licenses.slice(0, 405),
      version,
      ...license,
    };
  });
  sortDataByKey(licenseData, 'username');
  return licenseData;
}
