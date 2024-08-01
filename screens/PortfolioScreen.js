import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import PortfolioChart from '../components/PortfolioChart'
import PortfolioButton from '../components/PortfolioButton'
import { getPortfolioNameData, getStockData } from '../api/data'
import { useFocusEffect } from '@react-navigation/native'

export default function PortfolioScreen() {

  const [data, setData] = useState([]);
  const [postLoading, setPostLoading] = useState(false)
  // const [test, setTest] = useState([])


  useFocusEffect(
    useCallback(() => {
      const fetchDataFromApi = async () => {
        try {
          const fetchedData = await getPortfolioNameData();
          setData(fetchedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchDataFromApi();

    }, [postLoading])
  )

  // useEffect(() => {
  //   const fetchTestDataFromApi = async () => {
  //     try {
  //       const testFetchedData = await getStockData();
  //       setTest(testFetchedData);

  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchTestDataFromApi();
  // }, [])

  // const logCodesToConsole = () => {
  //   if (test && test.result) {
  //     test.result.forEach(item => {
  //       console.log("Code:", item.code);
  //     });
  //   }
  // };

  // logCodesToConsole()




  return (
    <View style={styles.screenContainer}>
      {data.length > 0 ? <PortfolioChart /> : <PortfolioButton setPostLoading={setPostLoading} />}
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  }
})