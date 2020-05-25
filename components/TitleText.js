import React from 'react';
import {StyleSheet, Text} from 'react-native';

//Our text component
const TextTitle = props => {
  return <Text style={{...styles.body, ...props.style}}>{props.children}</Text>;
};

export default TextTitle;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Courgette-Regular',
    fontSize: 25,
  },
});
