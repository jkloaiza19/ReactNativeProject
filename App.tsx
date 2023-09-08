/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type {PropsWithChildren} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import { ThemeProvider } from '@rneui/themed'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

import RootNavigation from './src/navigation/RootNavigation'
import { Provider } from 'react-redux'
import store from './store'

type SectionProps = PropsWithChildren<{
  title: string;
}>

// Register fontAwesome icons
library.add(fab, fas, faSquareCheck, faMugSaucer)

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    </SafeAreaProvider> 
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
