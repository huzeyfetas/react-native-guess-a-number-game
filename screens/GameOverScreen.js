import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Dstyles from '../constant/default-styles';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={Dstyles.header}>GAME OVER SCREEN</Text>
      <Text style={Dstyles.title}>
        Number of rounds : {props.roundsNumber}{' '}
      </Text>
      <Text style={Dstyles.titleBold}>User's Number : {props.userNumber} </Text>
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
