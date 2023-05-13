import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
  State,
  useProgress,
} from 'react-native-track-player';
import { Picker } from '@react-native-picker/picker';

import Text from '../../BaseComponents/Text/Text';
import { AppContext, ACTIONS } from '../../Contexts/AppContext';
import PlayerButton from './PlayerButton/PlayerButton';
import Cassette from '../Cassette/Cassette';

import { translate } from '../../translations/TranslationModel';
import { colors, tracks } from '../../Model/Model';
import { addTracks } from '../../../trackPlayerServices';

import { getYearsForMonth } from '../../utils/getYearsForMonth';
import { getTracks } from '../../utils/getTracks';
import { seekToCurrentTime } from '../../utils/seekToCurrentTime';

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
  const [clickedPause, setClickedPause] = useState(false);
  const [currentQueue, setCurrentQueue] = useState([]);

  const { position, duration } = useProgress();
  const CURRENT_POSITION =
    duration === 0 ? 50 : Math.floor((position * 100) / duration);

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
        setCurrentQueue(newTracks);
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
        <Cassette
          month={state.month}
          year={state.year}
          number={`${(state.trackIndex ?? 0) + 1} / ${currentQueue.length}`}
          playing={isPlaying}
          percentPlayed={CURRENT_POSITION}
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
          onPress={async () => {
            await TrackPlayer.skipToPrevious();
            await seekToCurrentTime();
          }}
          disabled={(() => {
            if (currentQueue.length <= 1) {
              return true;
            }
            if (state.trackIndex === 0) {
              return true;
            }
            return false;
          })()}
        />
        <PlayerButton
          label={isPlaying ? translate('Pause') : translate('Play')}
          icon={
            isPlaying ? 'pause-sharp' : clickedPause ? 'play-sharp' : 'loading'
          }
          onPress={() => {
            if (isPlaying) {
              setClickedPause(true);
              TrackPlayer.pause();
            } else {
              setClickedPause(false);
              TrackPlayer.play();
            }
          }}
        />
        <PlayerButton
          label={translate('Next')}
          icon="play-forward-sharp"
          onPress={async () => {
            await TrackPlayer.skipToNext();
            await seekToCurrentTime();
          }}
          disabled={(() => {
            if (currentQueue.length <= 1) {
              return true;
            }
            if (state.trackIndex === currentQueue.length - 1) {
              return true;
            }
            return false;
          })()}
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
