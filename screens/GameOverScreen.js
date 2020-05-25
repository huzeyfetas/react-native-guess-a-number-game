import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>GAME OVER SCREEN</Text>
      <Text>Number of rounds : {props.roundsNumber} </Text>
      <Text>User's Number : {props.userNumber} </Text>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffeee',
  },
});

export default GameOverScreen;
