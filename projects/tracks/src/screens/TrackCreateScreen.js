import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

import '../_mockLocation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [error] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error && <Text style={styles.error}>Please enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
});
