import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
//import Icon from 'react-native-elements';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const renderListItem = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText style={styles.fontSizeFromGameScreenProp}>
        {' '}
        {listLength - itemData.index}. guess is{' '}
      </BodyText>
      <BodyText style={styles.fontSizeFromGameScreenProp}>
        {' '}
        {itemData.item}{' '}
      </BodyText>
    </View>
  );
};

// -------->>>>>>>>>>>>>>>>>>>>> COMPONENT

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoise);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const {userChoise, onGameOver} = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoise, onGameOver, pastGuesses.length]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoise) ||
      (direction === 'greather' && currentGuess > props.userChoise)
    ) {
      Alert.alert("don't say lie !", 'You know the truth', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    //setRounds(curRounds => curRounds + 1); //bu aslında count sayıyor
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          Lower
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greather')}>
          {/* <Icon name="rowing" /> */} Greather
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index),
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          // showsVerticalScrollIndicator={false} for hidden scroll
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  listContainer: {
    width: '60%',
    flex: 1,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    //alignItems: 'center',
  },
  listItem: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#aeaeae',
    padding: 7,
    marginVertical: 15,
    backgroundColor: '#ffffee',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    //fontSize: 15,
  },
  fontSizeFromGameScreenProp: {
    fontSize: 18,
  },
});

export default GameScreen;
