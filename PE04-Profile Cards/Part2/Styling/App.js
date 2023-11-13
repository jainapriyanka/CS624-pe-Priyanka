import React, { Component } from 'react';

import PropTypes from 'prop-types'; 

import update from 'immutability-helper'; 

import { Platform, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'; 

const userImage = require('./assets/user.png');

const data = [{
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: true
  }
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];


  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}> 
        <View style={[containerStyles]}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={image}/>
          </View>
          <View>
            <Text style={styles.cardName}>
              {name}
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              {occupation}
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              {description}
            </Text>
          </View>
        </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const list = this.state.data.map(function(item, index) { 
      const { image, name, occupation, description, showThumbnail } = item;
      return <ProfileCard key={'card-' + index}
                    image={image}
                    name={name}
                    occupation={occupation}
                    description={description}
                    onPress={this.handleProfileCardPress.bind(this, index)}
                    showThumbnail={showThumbnail}/>
    }, this);
    return (
      <View style={styles.container}>
        <WrapContainer>
          {list}
        </WrapContainer>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const WrapContainer = (props) => (
  <View style={[styles.wrapContainer,props.style]}> 
      {props.children}
  </View>
);

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      flex: 1
    },
    
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 5,
        backgroundColor: profileCardColor,
        width: '80%',
        height: 300,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 10
            },
            shadowOpacity: 1
          },
          android: {
            elevation: 15
          }
        })
    },
    
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 70,
        height: 70,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 10,
            },
            shadowOpacity: 1
          },
          android: {
            borderWidth: 3,
            borderColor: 'black',
            elevation: 15
          }
        })
    },
    cardImage: {
        width: 50,
        height: 50
    },
    
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 5,
            width: 5
        },
        textShadowRadius: 3 
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic', 
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    },
    
        cardThumbnail: {
          transform: [{scale: 0.2}]
      },

      wrapContainer: {
        backgroundColor: '#ededed',
        flexDirection: 'column',
        flexWrap: 'wrap',
        borderWidth: 1,
        margin: 0,
    }
});