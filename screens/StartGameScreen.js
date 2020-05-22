import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import Card from '../components/Card';
import Color from '../constant/color';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
  const [enteredValue, setenteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setenteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setenteredValue('');
    setConfirmed(false);
    console.log('reseted');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number !',
        'Your choise is not provide to conditions, number is must be between 1-99',
        [{text: 'Okey', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setenteredValue('');
    Keyboard.dismiss();
    console.log('confirm');
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = (
      <View>
        <Card style={styles.summaryContainer}>
          <Text>Your Number</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button
            title="START GAME"
            onPress={() => {
              console.warn('game will starting w8');
            }}
          />
        </Card>
      </View>
    );
    //console.warn(selectedNumber);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>

        <Card style={styles.inputContainer}>
          <Text> Input a number </Text>

          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="reset"
                color={Color.accent}
                onPress={resetInputHandler}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="confirm"
                color={Color.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '700',
  },
  inputContainer: {
    //bu css e güzel bak çok önemli backgroundcolor özellikle çok etkilymis !
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 8,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;
