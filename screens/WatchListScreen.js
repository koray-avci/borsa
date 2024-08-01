import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, Touchable, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Table from '../components/Table'
import Share from '../components/Share'
import { favoritesFetchData } from '../api/data'


export default function WatchListScreen() {
    const [watchList, setWatchList] = useState(true)
    const [favoritesData, setFavoritesData] = useState([])
    const [deleteLoading,setDeleteLoading] = useState(false)



        useFocusEffect(
            useCallback(() => {
                const favoritesFetchDataFromApi = async () => {
                    try {
                        const fetchedData = await favoritesFetchData();
                        setFavoritesData(fetchedData);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                };
    
                 favoritesFetchDataFromApi();
            },[deleteLoading])
        )
        
        console.log(favoritesData)

    return (
        <>
            <Table />
            {favoritesData.length > 0 ?  (
                <FlatList
                    data={favoritesData}
                    renderItem={({ item }) => {
                        return <Share setDeleteLoading={setDeleteLoading} item={favoritesData} watchList={watchList} symbol={item.symbol} price={item.price} change={item.change} id={item.id} />;
                    }}
                />
            ) : (
                <View style={styles.container}>
                    <Text style={styles.text}>Takip Listesinde Hisseniz Bulunmamaktadır.</Text>
                </View>
            )}

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        color: 'grey',
        fontWeight: 'bold',
        opacity: 0.4
    }
})