import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { AppContext } from '../context/SearchContext'

import RealTimeCard from '../components/RealTimeCard'

const RealTimeQuotes = (props) => {


  const { realTimeQuotesList } = useContext(AppContext)


  return (
    <FlatList
      data={realTimeQuotesList}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <RealTimeCard  title={item.symbol}  />}
      keyExtractor={item => item.symbol}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RealTimeQuotes