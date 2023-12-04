import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import City from './src/Cities/City'
import AddCity from './src/AddCity/AddCity'
import Countries from './src/Countries/Countries'
import AddCountry from './src/AddCountry/AddCountry'
import Country from './src/Countries/Country'

import { colors } from './src/theme'

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function CitiesStackScreen ({navigation, route}){
    return (
      <stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
      }}>
      <stack.Screen name="Cities" component={Cities} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}} />
      <stack.Screen name="City" component={City} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}}/>    
      </stack.Navigator>
    );
}

function CountriesStackScreen ({navigation, route}){
    return (
      <stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
      }}>
      <stack.Screen name="Countries" component={Countries} initialParams={{
        countries: route.params.countries,
        addCountry: route.params.addCountry,
        addValue: route.params.addValue}} />
      <stack.Screen name="Country" component={Country} initialParams={{
        countries: route.params.countries,
        addCountry: route.params.addCountry,
        addValue: route.params.addValue}}/>
      </stack.Navigator>
    );
}


export default class App extends Component {
  state = {
    cities: [],
    countries: []
  }
  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
  addCountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id
    })
    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ]
    this.setState({
      cities
    })
  }

  addValue = (value, country) => {
    const index = this.state.countries.findIndex(item => {
      return item.id === country.id
    })
    const chosenCountry = this.state.countries[index]
    chosenCountry.values.push(value)
    const countries = [
      ...this.state.countries.slice(0, index),
      chosenCountry,
      ...this.state.countries.slice(index + 1)
    ]
    this.setState({
      countries
    })
  }
  
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="CitiesNav" initialParams={{cities: this.state.cities,addCity: this.addCity,addLocation: this.addLocation}} component={CitiesStackScreen} />
          <Tab.Screen name="AddCity"   initialParams={{cities: this.state.cities,addCity: this.addCity,addLocation: this.addLocation}} component={AddCity} />
          <Tab.Screen name="CountriesNav" initialParams={{countries: this.state.countries, addCountry: this.addCountry,addValue: this.addValue }} component={CountriesStackScreen} />
          <Tab.Screen name="AddCountry" initialParams={{countries: this.state.countries, addCountry: this.addCountry,addValue: this.addValue}} component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}