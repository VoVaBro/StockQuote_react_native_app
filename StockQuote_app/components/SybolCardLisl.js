import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import SybolCard from '../components/SybolCard'

const { width, height } = Dimensions.get('screen')


const SybolCardLisl = ({ quotesData, navigation }) => {

  const showDetails = () => {
    navigation.navigate('Quotes Details')
  }
  

  return (
    <View style={styles.list}>
      <FlatList
        width={360}
        showsVerticalScrollIndicator={false}
        data={quotesData}
        renderItem={({ item }) => <SybolCard title={item.symbol} showDetails={showDetails}/>}
        keyExtractor={item => item.symbol}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    marginTop: 40,
    height: height * 0.9,
    marginLeft: 33
  }
})


export default SybolCardLisl