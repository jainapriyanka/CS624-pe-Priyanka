import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TextInput, TouchableOpacity} from 'react-native'

import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class Country extends React.Component {
  static navigationOptions = (props) => {
    const { country } = props.route.params
    return {
      title: country.country,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
      }
    }
  }
  state = {
    name: '',
    info: ''
  }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  addValue = () => {
    if (this.state.name === '' || this.state.info === '') return
    const { country } = this.props.route.params
    const value = {
      name: this.state.name,
      info: this.state.info
    }
    this.props.route.params.addValue(value, country);
    this.setState({ name: '', info: '' });
  }
  render() {
    const { country } = this.props.route.params
    console.log('props: ', this.props)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!country.values.length && { flex: 1 }]}>
          <View style={[styles.valuesContainer, !country.values.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !country.values.length && <CenterMessage message='No currencies for this country!' />
            }
            {
               country.values.map((value, index) => (
                <View key={index} style={styles.valueContainer}>
                  <Text style={styles.valueName}>{value.name}</Text>
                  <Text style={styles.valueInfo}>{value.info}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
        <TextInput
          onChangeText={val => this.onChangeText('name', val)}
          placeholder='Currency name'
          value={this.state.name}
          style={styles.input}
          placeholderTextColor='white'
        />
        <TextInput
          onChangeText={val => this.onChangeText('info', val)}
          placeholder='Currency info'
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor='white'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addValue}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  valuesContainer: {
    paddingBottom: 104
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  valueContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  valueName: {
    fontSize: 20
  },
  valueInfo: {
    color: 'rgba(0, 0, 0, .5)'
  }
})

export default Country