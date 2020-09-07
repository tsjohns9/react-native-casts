import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend #1', age: '20' },
    { name: 'friend #2', age: '21' },
    { name: 'friend #3', age: '22' },
    { name: 'friend #4', age: '23' },
    { name: 'friend #5', age: '24' },
    { name: 'friend #6', age: '25' },
    { name: 'friend #7', age: '26' },
    { name: 'friend #8', age: '27' },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
