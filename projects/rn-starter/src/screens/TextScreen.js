import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>The input is: {text}</Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
