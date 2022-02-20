import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Login from './screens/Login'
import TranslationsProvider from './TranslationProvider'

export default function App() {
  return (
    <View style={styles.container}>
      <TranslationsProvider>
        <Login />
      </TranslationsProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23023f',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
