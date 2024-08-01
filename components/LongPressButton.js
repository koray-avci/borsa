import { Pressable, StyleSheet, Text, View,Alert } from 'react-native'
import React, { useState } from 'react'
import { postData, deleteData, favoritesFetchData } from '../api/data';


export default function LongPressButton({ setDeleteLoading, text, symbol, change,price, id, setButtonVisible, watchList }) {






  // const handleAddPress = () => {
    
  //   const sendData = {
  //     symbol: symbol,
  //     sales: sales,
  //     buying: buying,
  //     change: change,
  //     id: id
  //   };



  //   postData(sendData)
  //     .then(response => {
  //       console.log('Başarılı:', response);
  //     })
  //     .catch(error => {
  //       console.error('Hata:', error);
  //     });


  //   setButtonVisible(false)
  // }

  const handleAddPress = async () => {
    try {
      const favorites = await favoritesFetchData();
      const checkFavorites = favorites.some(favorite => favorite.id === id);

      if (checkFavorites) {
        Alert.alert('Uyarı', 'Bu hisse zaten takip listesinde.');
        return;
      }

      const sendData = {
        symbol: symbol,
        price: price,
        change: change,
        id: id
      };

      postData(sendData)
        .then(response => {
          console.log('Başarılı:', response);
        })
        .catch(error => {
          console.error('Hata:', error);
        });

      setButtonVisible(false);
    } catch (error) {
      console.error('Hata:', error);
    }
  }


  const handleDeletePress = async (id) => {
    setDeleteLoading(true)
    await deleteData(id)
    setDeleteLoading(false)
  }


  return (
    <>
      {watchList ? (<Pressable onPress={() => handleDeletePress(id)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </Pressable>) : (<Pressable onPress={handleAddPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </Pressable>)}
    </>

  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    paddingBottom: 8,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold'
  }
})