import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = (props) => {
  const { state, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(post) => `${post.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ShowScreen', { id: item.id });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash-2" size={24} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  title: {
    fontSize: 18,
  },
});
