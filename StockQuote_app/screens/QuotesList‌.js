import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useHttp } from '../hooks/useHttp'


import PaginationBtns from '../components/PaginationBtns'
import SybolCardLisl from '../components/SybolCardLisl'
import SearchBar from '../components/SearchBar'


const QuotesList = ({ navigation }) => {

  const [quotesData, setQuotesData] = useState([])


  const [indexOfFirstQuotes, setFirstIndex] = useState(0);
  const [indexOfLastQuotes, setLastIndex] = useState(50);


  const currentQuotesList = quotesData.slice(indexOfFirstQuotes, indexOfLastQuotes);

  const { request, loading } = useHttp()


  const fetchData = useCallback(async () => {
    let quotes = await request('https://quotes.instaforex.com/api/quotesList')

    setQuotesData(quotes.quotesList)

  }, [request])



  useEffect(() => {
    fetchData()
  }, [])

  




  if (loading) {

    return (
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
        <ActivityIndicator syze='large' color='black' />
      </View>
    )

  } else {

    return (
      
        <View style={{ flex: 1 }}>
          <SybolCardLisl quotesData={currentQuotesList} navigation={navigation} />

          <SearchBar />

          <PaginationBtns
            setFirstIndex={setFirstIndex}
            setLastIndex={setLastIndex}
            current={indexOfLastQuotes}
            total={quotesData.length}
            indexOfFirstQuotes={indexOfFirstQuotes}
            indexOfLastQuotes={indexOfLastQuotes}
          />
        </View>
      
    );
  }
}


export default QuotesList