import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Tutorial extends Component {
  render() {
    console.log('before the debug statement');
    debugger;
    console.log('after the debug statement');
    console.log('a third statement');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Debugging lesson
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

