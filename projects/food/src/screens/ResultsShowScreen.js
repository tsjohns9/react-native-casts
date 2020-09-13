import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (e) {
      console.log('ERROR: ', e);
      setError(e);
    }
  };

  if (!result) return null;

  return (
    <View>
      {!!error && <Text>{error}</Text>}
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
