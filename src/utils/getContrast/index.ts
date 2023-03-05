/**
 * @function getContrast
 * @description Get the contrasting color for any hex color
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @see https://gomakethings.com/dynamically-changing-the-text-color-based-on-background-color-contrast-with-vanilla-js/
 * @param  {string} inputHexColor A hexcolor value
 * @return {string|undefined} The contrasting color (black or white), or
 * undefined if the input is not a string.
 * @since 10/14/21
 * @version 1.0.1
 * @author Alexander Burdiss
 */
export function getContrast(inputHexColor: string): string | undefined {
  if (typeof inputHexColor !== 'string') {
    return undefined;
  }

  let hexcolor = inputHexColor;

  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map((hex) => hex + hex)
      .join('');
  }

  // Convert to RGB value
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? '#000000' : '#FFFFFF';
}
