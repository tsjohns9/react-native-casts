import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Box 1</Text>
      <Text style={styles.textStyle2}>Box 2</Text>
      <Text style={styles.textStyle3}>Box 3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textStyle1: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
  },
  textStyle2: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
    position: 'absolute',
    left: '42%',
    top: '10%',
  },
  textStyle3: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
  },
});
