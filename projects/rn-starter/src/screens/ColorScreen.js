import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log('colors: ', colors);
  return (
    <View>
      <Button title="Add a Color" onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});
