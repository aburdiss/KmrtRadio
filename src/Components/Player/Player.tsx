import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';
import { Picker } from '@react-native-picker/picker';

import Text from '../../BaseComponents/Text/Text';

import { getYearsForMonth } from '../../utils/getYearsForMonth';
import { translate } from '../../translations/TranslationModel';

import { colors, tracks } from '../../Model/Model';

import { addTracks } from '../../../trackPlayerServices';
import { getTracks } from '../../utils/getTracks';
import { AppContext, ACTIONS } from '../../Contexts/AppContext';
import PlayerButton from './PlayerButton/PlayerButton';
import Cassette from '../Cassette/Cassette';

/**
 * @function Player
 * @component
 * @description The Cassette player for the application. This component handles
 * the main part of the app, with changing the music, controlling the music,
 * and adding new tracks to the player.
 * Created 1/6/23
 * @returns {JSX.Elemnt} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.1.0
 */
export default function Player() {
  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;

  const { state, dispatch } = useContext(AppContext);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      dispatch({
        type: ACTIONS.SET_TRACK_INDEX,
        trackIndex: event.nextTrack,
      });
    }
  });

  useEffect(
    function updateTrack() {
      if (state.month && state.year) {
        const newTracks = getTracks(state.month, state.year);
        console.log('update', newTracks);
        addTracks(newTracks);
      }
    },
    [state.year, state.month],
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.playerBrand}>テープアスン 2000</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Cassette month={state.month} year={state.year} playing={isPlaying} />
      </View>
      <View style={styles.screen}>
        <View style={styles.pickerContainer}>
          <View style={styles.pickerMonth}>
            <Picker
              selectedValue={state.month}
              onValueChange={(itemValue) => {
                dispatch({
                  type: ACTIONS.SET_MONTH_AND_YEAR,
                  month: itemValue,
                  year: getYearsForMonth(itemValue)[0],
                });
              }}
            >
              {Object.keys(tracks).map((month) => {
                return (
                  <Picker.Item
                    label={translate(month)}
                    value={month}
                    key={month}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={styles.pickerYear}>
            <Picker
              selectedValue={state.year}
              onValueChange={(itemValue) =>
                dispatch({ type: ACTIONS.SET_YEAR, year: itemValue })
              }
            >
              {getYearsForMonth(state.month)?.map((year) => {
                return <Picker.Item label={year} value={year} key={year} />;
              })}
            </Picker>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PlayerButton
          label={translate('Back')}
          icon="play-back-sharp"
          onPress={() => TrackPlayer.skipToPrevious()}
        />
        <PlayerButton
          label={isPlaying ? translate('Pause') : translate('Play')}
          icon={isPlaying ? 'pause-sharp' : 'play-sharp'}
          onPress={() => {
            if (isPlaying) {
              TrackPlayer.pause();
            } else {
              TrackPlayer.play();
            }
          }}
        />
        <PlayerButton
          label={translate('Next')}
          icon="play-forward-sharp"
          onPress={() => TrackPlayer.skipToNext()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(43, 44, 48)',
    backgroundColor: 'rgb(26, 25, 30)',
    borderWidth: 2,
    flex: 1,
    padding: 16,
    margin: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonInner: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.electronicDark,
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderBottomColor: colors.electronicLight,
    borderRightWidth: 3,
    borderRightColor: colors.electronicLight,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  imageContainer: {
    marginHorizontal: 1,
    padding: 16,
    backgroundColor: colors.electronicLight,
  },
  pickerContainer: {
    flexDirection: 'row',
  },
  pickerMonth: {
    flex: 1,
  },
  pickerYear: {
    width: 120,
  },
  playerBrand: {
    fontSize: 12,
  },
  screen: {
    marginVertical: 8,
    backgroundColor: colors.screen,
    borderTopWidth: 2,
    borderTopColor: colors.electronicLight,
    borderLeftWidth: 2,
    borderLeftColor: colors.electronicLight,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
