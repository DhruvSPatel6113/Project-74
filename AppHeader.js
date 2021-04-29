import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>Story Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
  },
});
