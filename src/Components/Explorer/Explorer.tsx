import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Text from '../../BaseComponents/Text/Text';
import { colors } from '../../Model/Model';
import BackButton from './BackButton/BackButton';

export default function Explorer() {
  const [screenPage, setScreenPage] = useState('Home');
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        {
          {
            Home: (
              <View>
                <Pressable
                  style={styles.fauxApp}
                  onPress={() => setScreenPage('About')}
                >
                  <Ionicon name="globe" size={32} color={colors.text} />
                  <Text style={styles.fauxAppText}>About</Text>
                </Pressable>
                <Pressable
                  style={styles.fauxApp}
                  onPress={() => setScreenPage('Licenses')}
                >
                  <Ionicon name="globe" size={32} color={colors.text} />
                  <Text style={styles.fauxAppText}>Licenses</Text>
                </Pressable>
              </View>
            ),
            About: (
              <View>
                <BackButton onPress={() => setScreenPage('Home')} />
                <Text>About</Text>
              </View>
            ),
            Licenses: (
              <View>
                <BackButton onPress={() => setScreenPage('Home')} />
                <Text>Licenses</Text>
              </View>
            ),
          }[screenPage]
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#808080',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderBottomWidth: 3,
    borderBottomColor: '#adadaa',
    borderRightWidth: 3,
    borderRightColor: '#adadaa',
  },
  fauxApp: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  fauxAppText: {
    paddingLeft: 4,
    fontSize: 18,
  },
  screen: {
    backgroundColor: colors.screen,
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: '#adadaa',
    borderLeftWidth: 2,
    borderLeftColor: '#adadaa',
    height: '100%',
  },
});
