import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useHttp } from '../hooks/useHttp'

import PaginationBtns from '../components/PaginationBtns'
import SybolCardLisl from '../components/SybolCardLisl'
import SearchBar from '../components/SearchBar'


const QuotesList = () => {

  const [quotesData, setQuotesData] = useState([])


  const [indexOfFirstQuotes, setFirstIndex] = useState(0);
  const [indexOfLastQuotes, setLastIndex] = useState(50);


  const currentQuotesList = quotesData.slice(indexOfFirstQuotes, indexOfLastQuotes);

  const { request } = useHttp()


  const fetchData = useCallback(async () => {
    let res = await request('https://quotes.instaforex.com/api/quotesList?f=f')

    setQuotesData(res.quotesList)

  }, [request])


  useEffect(() => {
    fetchData()
  }, [])





  return (
    <View style={{ flex: 1 }}>

      <SybolCardLisl quotesData={currentQuotesList} />

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


export default QuotesList