import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display the app icon */}
      <Image source=
      {require('./assets/icon.png')} style={styles.icon} />
      
      {/* Display the app header */}
      <Text style={styles.header}>CoreComponents Mobile App</Text>
      
      {/* User input field for their favorite course */}
      <Text style={styles.label}>Favorite Course:</Text>
      <TextInput style={styles.input} placeholder="CS624" />

      {/* Display the list of core courses */}
      <Text style={styles.label}>Core Courses:</Text>
      <Text>CS 504 Software Engineering</Text>
      <Text>CS 506 Programming for Computing</Text>
      <Text>CS 519 Cloud Computing Overview</Text>
      <Text>CS 533 Computer Architecture</Text>
      <Text>CS 547 Secure Systems and Programs</Text>
      <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text>DS 510 Artificial Intelligence for Data Science</Text>
      <Text>DS 620 Machine Learning</Text>

      {/* Display the list of depth of study courses */}
      <Text style={styles.label}>Depth of Study Courses:</Text>
      <Text>CS 628 Full Stack Development - Mobile App</Text>
      <Text>CS 624 Full Stack Development - Dev App</Text>

      {/* Display the capstone course */}
      <Text style={styles.label}>Capstone Course:</Text>
      <Text>CS 624 Full Stack Development - Dev App</Text>

      {/* Link to access CityU's catalog */}
      <Text style={styles.link}>Access CityU's catalog</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', // Set the background color to blue
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default App;
