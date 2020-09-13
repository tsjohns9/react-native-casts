import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={props.onChange}
        placeholder="Search"
        style={styles.inputStyle}
        value={props.value}
        onEndEditing={props.onSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 5,
  },
});
