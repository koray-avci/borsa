import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function InputPortfolioScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerInputContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Hisse Kodu</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Alış Fiyatı</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={styles.bodyInputContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Adet / Miktar</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Alış Tarihi</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent:'center',
    alignItems:'center',
    padding:15,
  },
  inputContainer: {
    margin: 10,
  },
  input: {
    backgroundColor: 'red',
  },
  headerInputContainer:{
    flexDirection:'row',
  },
  bodyInputContainer:{
    flexDirection:'row',
  }
})