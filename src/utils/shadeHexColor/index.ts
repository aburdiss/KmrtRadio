/* eslint-disable no-bitwise */

/**
 * @function shadeHexColor
 * @description Shades a hex color by a given percent.
 * @param {string} color A hex color to be shaded
 * @param {number} percent The amount that you want to darken or lighten the
 * given hex color, between 0 and 1
 * @returns {string} The inputted color shaded by the inputted percent
 *
 * @see {https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)#stackoverflow-archive-begin}
 * @since 3/3/23
 */
export function shadeHexColor(color: string, percent: number): string {
  var f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}
