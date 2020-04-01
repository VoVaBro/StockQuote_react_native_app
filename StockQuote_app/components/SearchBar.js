import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


 const SearchBar = () => {

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

export default SearchBar