import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = props => {
  return <View style={{...props.style, ...styles.card}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
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
    backgroundColor: '#eeffff',
  },
});

export default Card;
