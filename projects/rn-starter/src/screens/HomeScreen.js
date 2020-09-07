import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Whatup</Text>
      <Button onPress={() => navigation.navigate('Components')} title="Go to components demo" />
      <Button onPress={() => navigation.navigate('List')} title="Go to list demo" />
      <Button onPress={() => navigation.navigate('ImageScreen')} title="Go to image screen" />
      <Button onPress={() => navigation.navigate('Counter')} title="Go to counter screen" />
      <Button onPress={() => navigation.navigate('Color')} title="Go to color screen" />
      <Button onPress={() => navigation.navigate('ColorSquares')} title="Go to color squares" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
