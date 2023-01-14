import React, { useContext, useEffect } from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';
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

import { tracks } from '../../Model/Model';

import { addTracks } from '../../../trackPlayerServices';
import { getTracks } from '../../utils/getTracks';
import { AppContext, ACTIONS } from '../../Contexts/AppContext';

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
        <Image
          source={{
            uri: tracks?.[state.month]?.[state.year]?.[state.trackIndex]?.img,
          }}
          style={styles.image}
        />
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
            {/* <Text>{getDate(currentTrack?.id)?.month}</Text> */}
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
            {/* <Text>{getDate(currentTrack?.id)?.year}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => TrackPlayer.skipToPrevious()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{translate('Back')}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (isPlaying) {
              TrackPlayer.pause();
            } else {
              TrackPlayer.play();
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            {isPlaying ? translate('Pause') : translate('Play')}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => TrackPlayer.skipToNext()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{translate('Next')}</Text>
        </Pressable>
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
  buttonText: {
    textAlign: 'center',
    color: 'rgb(176, 173, 177)',
  },
  container: {
    backgroundColor: 'rgb(183, 176, 167)',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  imageContainer: {
    marginHorizontal: 1,
    padding: 32,
    backgroundColor: 'rgb(195, 185, 171)',
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
    backgroundColor: '#56635C',
    borderColor: '#EAEAEA',
    borderWidth: 5,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
