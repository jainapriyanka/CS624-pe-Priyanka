import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// The App component represents the main application.
// It returns a View containing 3 Text components displaying name, degree and college name.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Priyanka Jaina</Text>
      <Text>MSCS</Text>
      <Text>CityU</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Styles for the components are defined using StyleSheet.create.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow', //Changes the background color of the view to yellow
    alignItems: 'center', // Center the content vertically.
    justifyContent: 'center', // Center the content horizontally.
  },
});
