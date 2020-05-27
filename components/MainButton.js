import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Color from '../constant/color';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: Color.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'CaveatBrush-Regular',
    fontSize: 18,
  },
});

export default MainButton;
