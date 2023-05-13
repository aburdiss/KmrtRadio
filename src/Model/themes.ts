import { namedColors } from './Model';

export enum THEMES {
  KMRT,
  NEON,
  SUMMER,
  ICE_CREAM,
  JAZZ,
  JUKEBOX,
}

export const kmrt = {
  appBackground: namedColors.feta,
  cassette: namedColors.brightRed,
  cassetteStripe: namedColors.hibiscus,
};

export const neon = {
  appBackground: namedColors.black,
  cassette: namedColors.neonPink,
  cassetteStripe: namedColors.neonGreen,
};

export const summer = {
  appBackground: namedColors.white,
  cassette: namedColors.summerBlue,
  cassetteStripe: namedColors.summerPink,
};

export const iceCream = {
  appBackground: namedColors.iceCreamPink,
  cassette: namedColors.iceCreamBlue,
  cassetteStripe: namedColors.iceCreamRed,
};

export const jazz = {
  appBackground: namedColors.white,
  cassette: namedColors.jazzBlue,
  cassetteStripe: namedColors.jazzPink,
};

export const jukebox = {
  appBackground: namedColors.jukeboxWhite,
  cassette: namedColors.jukeboxRed,
  cassetteStripe: namedColors.jukeboxYellow,
};
