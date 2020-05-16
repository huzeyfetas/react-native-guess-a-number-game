import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game1111111111asdsasasdsd211</Text>
      <Card style={styles.inputContainer}>
        <Text> Input a number </Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button
            title="reset"
            onPress={() => {
              console.log('reset');
            }}
          />
          <Button
            title="confirm"
            onPress={() => {
              console.log('confirm');
            }}
          />
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
});

export default StartGameScreen;
