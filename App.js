import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WatchListScreen from './screens/WatchListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MarketsScreen from './screens/MarketsScreen';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import PortfolioScreen from './screens/PortfolioScreen';
import { AntDesign } from '@expo/vector-icons';
import InputPortfolioScreen from './screens/InputPortfolioScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarLabel: 'Takip Listesi',
        tabBarActiveTintColor: '#278664',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIcon: ({ color, size }) => (
          <Feather name="list" size={size} color={color} />
        ),
      }} name="İzleme Ekranı" component={WatchListScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Piyasalar',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarActiveTintColor: '#278664',
        tabBarInactiveTintColor: 'black',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="line-chart" size={size} color={color} />
        ),
      }} name="Piyasalar" component={MarketsScreen} />
      <Tab.Screen options={{
        tabBarLabel: 'Portfoy',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarActiveTintColor: '#278664',
        tabBarInactiveTintColor: 'black',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="piechart" size={size} color={color} />
        )
      }} name="Portfoy Ekranı" component={PortfolioScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
          name="Tabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      <Stack.Screen options={{headerBackTitle:'İptal'}} name="InputPortfolio" component={InputPortfolioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
