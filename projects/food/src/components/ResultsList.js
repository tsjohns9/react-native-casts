import React from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = (props) => {
  if (!props.results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={props.results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ResultsShow', {
                  id: item.id,
                })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});
