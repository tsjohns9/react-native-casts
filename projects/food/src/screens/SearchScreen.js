import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      {!!error && <Text>{error}</Text>}
      <SearchBar value={input} onChange={setInput} onSubmit={() => searchApi(input)} />
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
