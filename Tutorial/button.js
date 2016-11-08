import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress()}
        underlayColor="white"
        activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Tap me
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class Tutorial extends Component {
  constructor() {
    super();
    this.state = { taps: 0 };
  }

  tap = () => {
    this.setState({
      taps: this.state.taps + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.taps} taps
        </Text>

        <Button onPress={() => this.tap()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderRadius: 20,
    borderWidth: 10,
    borderColor: '#33AAFF',
    backgroundColor: '#33AAFF',
    padding: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: "bold",
    fontSize: 24
  }
});

