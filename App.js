import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

import Header from './components/Header';

const App: () => React$Node = () => {
  return (
    <View style={styles.screen}>
      {console.log('******PPOJECT STARTED******')}
      <Header title="Guess A Number" />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#DEF2FF',
    flex: 1,
  },
});

export default App;
