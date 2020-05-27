import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Dstyles from '../constant/default-styles';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Color from '../constant/color';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={Dstyles.titleBold}>GAME OVER SCREEN</TitleText>

      <View style={styles.imageContainer}>
        <Image
          fadeDuration={5000}
          style={styles.image1}
          resizeMode="cover"
          source={require('../assets/original.png')}
          // source={{
          //   uri: 'https://i.picsum.photos/id/96/536/354.jpg',
          // }}
        />
      </View>
      <View style={styles.resultTextContainer}>
        <BodyText style={styles.resultText}>
          Your phone need{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess to the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>{' '}
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
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
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image1: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: Color.accent,
  },
  resultTextContainer: {marginHorizontal: 30, marginVertical: 15},
  resultText: {textAlign: 'center', fontSize: 25},
});

export default GameOverScreen;
