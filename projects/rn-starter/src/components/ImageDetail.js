import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const ImageDetail = (props) => {
  console.log('props: ', props);
  return (
    <View>
      <Image source={props.source} />
      <Text>{props.title}</Text>
      <Text>Image Score - {props.score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
