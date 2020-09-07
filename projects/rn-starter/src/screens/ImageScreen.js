import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail source={require('../assets/forest.jpg')} title="Forest" score={5} />
      <ImageDetail source={require('../assets/beach.jpg')} title="Beach" score={6} />
      <ImageDetail source={require('../assets/mountain.jpg')} title="Mountains" score={7} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
