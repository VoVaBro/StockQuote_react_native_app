import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons'


const SearchBar = () => {

  return (
    <View style={styles.bar}>
      <TextInput
        placeholder="Search symbol ..."
        style={{ width: 300, height: 45, fontSize: 20, marginLeft: 5 }}
  
      />
      <View style={{ marginLeft: 280, marginTop: -35 }}>
        <TouchableWithoutFeedback>
          <Feather size={24} name="search" />
        </TouchableWithoutFeedback>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    width: 320,
    height: 50,
    marginTop: 0,
    backgroundColor: 'white',
    marginHorizontal: 44,
    shadowColor: "#000",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.68,
    shadowRadius: 18.00,

    elevation: 24,

  },
});

export default SearchBar