import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Card from '../components/Card';
import Color from '../constant/color';
import Input from '../components/Input';

const StartGameScreen = props => {
  return (
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
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="reset"
              color={Color.primary}
              onPress={() => {
                console.log('reset');
              }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="confirm"
              color={Color.accent}
              onPress={() => {
                console.log('confirm');
              }}
            />
          </View>
        </View>
      </Card>
    </View>
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
});

export default StartGameScreen;
