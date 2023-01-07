import React from 'react';
import { Pressable, View, Image, StyleSheet } from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';

import Text from '../../BaseComponents/Text/Text';

import { getDate } from '../../utils/getDate';
import { useCurrentTrack } from '../../utils/useCurrentTrack';
import { translate } from '../../translations/TranslationModel';

export default function Player() {
  const currentTrack = useCurrentTrack();
  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: currentTrack?.artwork }} style={styles.image} />
      </View>
      <View style={styles.screen}>
        <View>
          <View>
            <Text>{getDate(currentTrack?.id)?.month}</Text>
          </View>
          <View>
            <Text>{getDate(currentTrack?.id)?.year}</Text>
          </View>
          <Text>{currentTrack?.artist}</Text>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(176, 173, 177)',
  },
  container: {
    backgroundColor: 'rgb(183, 176, 167)',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  imageContainer: {
    marginHorizontal: 16,
    padding: 32,
    backgroundColor: 'rgb(195, 185, 171)',
  },
  screen: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
