import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const ShowScreen = (props) => {
  const { id } = props.navigation.state.params;
  const { state } = useContext(Context);
  const blog = state.find((x) => x.id === id) || {};

  return (
    <View>
      <Text>
        {blog.title} - {blog.id}
      </Text>
      <Text>{blog.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditScreen', {
            id: navigation.getParam('id'),
          });
        }}
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({});
