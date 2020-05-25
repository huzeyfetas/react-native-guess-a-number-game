import React from 'react';
import {StyleSheet, View} from 'react-native';

// You could use this card component in everywhere. just copy and paste it

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    //elevation is for android shadow
    elevation: 8,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#eeffff',
  },
});

export default Card;
