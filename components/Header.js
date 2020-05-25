import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Color from '../constant/color';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%', //bu 100 de 100 vermek aklıma gelmiyor FIXME:
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 32,
    fontFamily: 'Courgette-Regular',
  },
});

export default Header;
