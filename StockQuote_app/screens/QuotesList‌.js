import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PaginationBtns from '../components/PaginationBtns'


 const QuotesList = () => {

  return (
    <View style={styles.container}>
      <PaginationBtns/>
    </View>
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

export default QuotesList