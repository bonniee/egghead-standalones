import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Video from 'react-native-video';

export default class VideoExample extends Component {
  render() {
    return (
      <Video source={require('./assets/clouds.mp4')}
             muted={true}                  // Mutes the audio entirely.
             paused={false}                 // Pauses playback entirely.
             resizeMode="cover"             // Fill the whole screen at aspect ratio.
             repeat={true}                  // Repeat forever.
             style={styles.backgroundVideo} />

    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

