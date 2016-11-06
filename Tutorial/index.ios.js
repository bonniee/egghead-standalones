import React from 'react';
import {
  AppRegistry
} from 'react-native';

// Pick which lesson you want
import DebuggingTutorial from './debugging';
import PlatformSpecific from './PlatformSpecific';
import LodashExample from './lodash-example';

AppRegistry.registerComponent(
  'Tutorial', () => LodashExample);
