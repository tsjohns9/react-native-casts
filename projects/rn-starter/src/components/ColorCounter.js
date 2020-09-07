import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color.charAt(0).toUpperCase() + props.color.slice(1)}</Text>
      <Button onPress={props.onIncrease} title={`Increase ${props.color}`} />
      <Button onPress={props.onDecrease} title={`Decrease ${props.color}`} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
