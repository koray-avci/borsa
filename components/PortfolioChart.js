import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useFocusEffect } from '@react-navigation/native';
import { getPortfolioNameData } from '../api/data';

export default function PortfolioScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '', title: '',},
  ]);

  useFocusEffect(
    useCallback(() => {
      const fetchDataFromApi = async () => {
        try {
          const fetchedData = await getPortfolioNameData();
          const formattedItems = fetchedData.map(item => ({ label: item.title, value: item.id }));
          setItems(formattedItems);
          if (formattedItems.length > 0) {
            setValue(formattedItems[0].value);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchDataFromApi();
    },[])
)

console.log(items)

  const screenWidth = Dimensions.get('window').width;

  const data = [
    // {
    //   name: 'A hissesi',
    //   population: 500,
    //   color: 'rgba(131, 167, 234, 1)',
    //   legendFontColor: '#7F7F7F',
    //   legendFontSize: 15,
    // },
    // {
    //   name: 'B hissesi',
    //   population: 11,
    //   color: '#F00',
    //   legendFontColor: '#7F7F7F',
    //   legendFontSize: 15,
    // },
    // {
    //   name: 'C hissesi',
    //   population: 35,
    //   color: 'yellow',
    //   legendFontColor: '#7F7F7F',
    //   legendFontSize: 15,
    // },
    // {
    //   name: 'D hissesi',
    //   population: 88,
    //   color: '#000',
    //   legendFontColor: '#7F7F7F',
    //   legendFontSize: 15,
    // },
    // {
    //   name: 'F hissesi',
    //   population: 116,
    //   color: 'rgb(0, 0, 255)',
    //   legendFontColor: '#7F7F7F',
    //   legendFontSize: 15,
    // },
  ];

  const totalPopulation = data.reduce((sum, item) => sum + item.population, 0);

  console.log('data', data)

  return (
    <View style={styles.portfolioContainer}>
      <DropDownPicker
        style={styles.dropdownStyle}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Portfoy Seçiniz"
      />
      <Text style={styles.title}>Portfoy Dağılımı</Text>
      <PieChart
        style={styles.pieChart}
        width={screenWidth}
        data={data}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        absolute
        hasLegend={false}
        center={[90, 0]}
      />

      <View style={styles.legendContainer}>
        {data.map((item, index) => {
          const percentage = ((item.population / totalPopulation) * 100).toFixed(2);
          return (
            <View key={`portfolio-chart ${item.name}`} style={styles.legendItem}>
              <View style={[styles.legendColorBox, { backgroundColor: item.color }]} />
              <Text style={styles.legendText}>
                {item.name}: {percentage}%
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  portfolioContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    marginStart: 15
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 10,
  },
  legendColorBox: {
    flexDirection: 'row',
    width: 16,
    height: 16,
    marginRight: 5,
    borderRadius: 10
  },
  legendText: {
    flexDirection: 'row',
    fontSize: 15,
    color: '#7F7F7F',
  },
  dropdownStyle: {
    marginVertical: 5
  }
})