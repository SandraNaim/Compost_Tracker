import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Landing_page from './Landing_page';
import Register_page from './Register_page';
import Login_page from './Login_page';
import Register_page2 from './Register_page2';
import Compost_bin from './Compost_bin';
import Fill_component from './Fill_component';
import Climate_control from './Climate_control';

const App = () => {
  return (
    <>
    <Climate_control/>
    </>
  );
};

export default App;
