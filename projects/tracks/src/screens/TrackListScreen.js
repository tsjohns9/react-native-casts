import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TrackListScreen = (props) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => {
          props.navigation.navigate('TrackDetailScreen');
        }}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
