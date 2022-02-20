import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import useTranslations from '../useTranslations'

const Login = () => {
  const { t, changeLanguage } = useTranslations()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t.phoneNumber}</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>{t.password}</Text>
      <TextInput style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.sign}>{t.signIn}</Text>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => changeLanguage('tr')}
          style={styles.buttonBetween}
        >
          <Text style={styles.sign}>tr</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('en')}
          style={styles.buttonBetween}
        >
          <Text style={styles.sign}>en</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('ge')}
          style={styles.buttonBetween}
        >
          <Text style={styles.sign}>ge</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    padding: 16,
    borderRadius: 4,
    fontSize: 18,
    backgroundColor: 'whitesmoke',
    height: 50,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#13b707',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    fontSize: 20,
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonBetween: {
    backgroundColor: '#13b707',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
})

export default Login
