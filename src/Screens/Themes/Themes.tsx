import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Text from '../../BaseComponents/Text/Text';
import CassetteBoxTop from '../../Components/CassetteBoxTop/CassetteBoxTop';

import { colors } from '../../Model/Model';
import { shadeHexColor } from '../../utils/shadeHexColor';
import { ACTIONS, AppContext } from '../../Contexts/AppContext';
import { THEMES } from '../../Model/themes';
import { translate } from '../../translations/TranslationModel';

/**
 * @function Themes
 * @component
 * @description A page on the app that allows you to choose your theme.
 * Created 1/8/23
 * @returns {JSX.Element} JSX render instructions
 *
 * @copyright 2023 Alexander Burdiss
 * @author Alexander Burdiss
 * @since 1/14/23
 * @version 1.0.0
 */
export default function Themes() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <View style={styles.containerOuter}>
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{translate('Tape Collection')}</Text>
          </View>
          <ScrollView style={styles.scrollview}>
            <View style={styles.scrollviewInner}>
              <CassetteBoxTop
                label={translate('Dept Store')}
                color={colors.primary0}
                onPress={() => {
                  dispatch({ type: ACTIONS.SET_THEME, theme: THEMES.KMRT });
                }}
                active={state.theme === THEMES.KMRT}
              />
              <CassetteBoxTop
                label={translate('Ice Water')}
                color={'#0CCDDB'}
                onPress={() => {
                  dispatch({ type: ACTIONS.SET_THEME, theme: THEMES.JAZZ });
                }}
                active={state.theme === THEMES.JAZZ}
              />
              <CassetteBoxTop
                label={translate('Roller Disco')}
                color={'#E433D0'}
                onPress={() => {
                  dispatch({ type: ACTIONS.SET_THEME, theme: THEMES.NEON });
                }}
                active={state.theme === THEMES.NEON}
              />
              <CassetteBoxTop
                label={translate('Jukebox')}
                color={'#DE5433'}
                onPress={() => {
                  dispatch({ type: ACTIONS.SET_THEME, theme: THEMES.JUKEBOX });
                }}
                active={state.theme === THEMES.JUKEBOX}
              />
              <CassetteBoxTop
                label={translate('Sunscreen')}
                color={'#f9ff9b'}
                onPress={() => {
                  dispatch({ type: ACTIONS.SET_THEME, theme: THEMES.SUMMER });
                }}
                active={state.theme === THEMES.SUMMER}
              />
              <CassetteBoxTop
                label={translate('Banana Split')}
                color={'#F1A9BE'}
                onPress={() => {
                  dispatch({
                    type: ACTIONS.SET_THEME,
                    theme: THEMES.ICE_CREAM,
                  });
                }}
                active={state.theme === THEMES.ICE_CREAM}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: shadeHexColor(colors.black, 0.1),
    margin: 16,
    padding: 16,
    paddingTop: 30,
    borderRadius: 8,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderRightColor: colors.electronicLight,
    borderBottomColor: colors.electronicLight,
    maxWidth: 420,
    width: '100%',
  },
  containerInner: {
    backgroundColor: shadeHexColor(colors.black, 0.25),
    borderTopWidth: 6,
    borderTopColor: colors.black,
    borderLeftWidth: 6,
    borderLeftColor: colors.black,
    height: '100%',
  },
  containerOuter: {
    alignItems: 'center',
    padding: 16,
  },
  scrollview: {
    padding: 16,
  },
  scrollviewInner: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 12,
    textAlign: 'right',
    fontStyle: 'italic',
    color: colors.white,
  },
  titleContainer: {
    position: 'absolute',
    top: -24,
    width: '100%',
  },
});
