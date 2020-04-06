import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { AppContext } from '../context/SearchContext'


const { width } = Dimensions.get('screen')


const SearchBar = () => {

  const { getSearchValue } = useContext(AppContext)

  const [search, setSearch] = useState('')


  const handleChange = (t) => {
    if (!t){
      getSearchValue(search)
    } else {
       getSearchValue(t)
    }
  }

  // const getSearch = (value) => {
  
  //     getSearchValue(value)
      
  // };




  return (
    <View style={styles.bar}>
      <TextInput
        onChangeText={(text) => handleChange(text)}
        placeholder="Search symbol ..."
        style={{ width: 300, height: 45, fontSize: 20, marginLeft: 5 }}

      />
      <View style={{ marginLeft: width <= 320 ? 190 : 280, marginTop: -35 }}>
        <TouchableOpacity>
          <Feather size={24} name="search" />
        </TouchableOpacity>
      </View >
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    width: width <= 320 ? 230 : 320,
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