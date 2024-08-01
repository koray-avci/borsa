import { FlatList, Pressable, RefreshControl, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import Table from '../components/Table'
import Share from '../components/Share'
import { useEffect, useState } from 'react';
import { getStockData } from '../api/data';

export default function MarketsScreen() {

  function generateRandomId(min = 1, max = 1000000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
 



  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const fetchedData = await getStockData();
        const stockDataArray = fetchedData.data;
        const dataWithId = stockDataArray.map(item => ({
          ...item,
          id: generateRandomId()
        }));
        setData(dataWithId);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setRefreshing(false);
      }
    };

    fetchDataFromApi();

  }, [refreshing]);


  const handleRefresh = () => {
    setRefreshing(true)
  }
 



  return (
    <>
      <Table />
      <Pressable>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <Share data={item} symbol={item.name} price={item.price} change={item.change} id={item.id} />;
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({})