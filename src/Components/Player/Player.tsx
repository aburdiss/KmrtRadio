import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
  State,
  useProgress,
  Capability,
} from 'react-native-track-player';
import { Picker } from '@react-native-picker/picker';

import Text from '../../BaseComponents/Text/Text';
import { AppContext, ACTIONS } from '../../Contexts/AppContext';
import PlayerButton from './PlayerButton/PlayerButton';
import Cassette from '../Cassette/Cassette';

import { translate } from '../../translations/TranslationModel';
import { colors, months, tracks } from '../../Model/Model';
import { addTracks } from '../../../trackPlayerServices';

import { getYearsForMonth } from '../../utils/getYearsForMonth';
import { getTracks } from '../../utils/getTracks';
import { seekToCurrentTime } from '../../utils/seekToCurrentTime';
import { getIsSmallScreen } from '../../utils/getIsSmallScreen';
import { getIsTinyScreen } from '../../utils/getIsTinyScreen';

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
 * @since 7/14/23
 * @version 1.1.0
 */
export default function Player() {
  const SMALL_SCREEN = getIsSmallScreen();
  const TINY_SCREEN = getIsTinyScreen();

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
      marginVertical: TINY_SCREEN ? 8 : 16,
      marginHorizontal: 16,
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
      marginHorizontal: TINY_SCREEN ? -16 : 1,
      marginTop: TINY_SCREEN ? -16 : 0,
      padding: SMALL_SCREEN ? 0 : 16,
      backgroundColor: SMALL_SCREEN ? undefined : colors.electronicLight,
    },
    picker: {
      color: colors.text,
    },
    pickerContainer: {
      flexDirection: 'row',
      marginVertical: TINY_SCREEN ? -16 : 0,
    },
    pickerMonth: {
      flex: 1,
    },
    pickerYear: {
      width: 120,
    },
    playerBrand: {
      fontSize: 12,
      fontStyle: 'italic',
      textShadowColor: colors.cassetteTape,
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      color: colors.text,
    },
    screen: {
      marginVertical: TINY_SCREEN ? 0 : 8,
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

  const NEXT_DISABLED = (() => {
    if (currentQueue.length <= 1) {
      return true;
    }
    if (state.trackIndex === currentQueue.length - 1) {
      return true;
    }
    return false;
  })();

  const PREVIOUS_DISABLED = (() => {
    if (currentQueue.length <= 1) {
      return true;
    }
    if (state.trackIndex === 0) {
      return true;
    }
    return false;
  })();

  const capabilitiesArray = [Capability.Play, Capability.Pause];
  if (!PREVIOUS_DISABLED) {
    capabilitiesArray.push(Capability.SkipToPrevious);
  }
  if (!NEXT_DISABLED) {
    capabilitiesArray.push(Capability.SkipToNext);
  }
  TrackPlayer.updateOptions({
    capabilities: capabilitiesArray,
  });

  return (
    <View style={styles.container}>
      {!SMALL_SCREEN && (
        <View style={styles.topContainer}>
          <View>
            <Text style={styles.playerBrand}>TAPE-A-THON 2000</Text>
          </View>
        </View>
      )}
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
              style={styles.picker}
              selectedValue={state.month}
              dropdownIconColor={colors.text}
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
              style={styles.picker}
              dropdownIconColor={colors.text}
              selectedValue={state.year}
              onValueChange={(itemValue) =>
                dispatch({ type: ACTIONS.SET_YEAR, year: itemValue })
              }
            >
              {getYearsForMonth(state.month ?? months[0])?.map((year) => {
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
          disabled={PREVIOUS_DISABLED}
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
          disabled={NEXT_DISABLED}
        />
      </View>
    </View>
  );
}
