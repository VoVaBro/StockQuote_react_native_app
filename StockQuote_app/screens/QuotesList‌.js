import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useHttp } from '../hooks/useHttp'

import PaginationBtns from '../components/PaginationBtns'
import SybolCardLisl from '../components/SybolCardLisl'


const QuotesList = () => {

  const [quotesData, setQuotesData] = useState([])


  const [currentQuotes, setCurrentQuotes] = useState(1);
  const [qutesPerPage, setQutesPerPage] = useState(15);

  const indexOfLastQuotes = currentQuotes * qutesPerPage;
  const indexOfFirstQuotes = indexOfLastQuotes - qutesPerPage;

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
    <View style={{flex: 1}}>

      <SybolCardLisl quotesData={quotesData}/>

      <PaginationBtns current={currentQuotesList.length} total={quotesData.length}/>
    </View>
  );
}


export default QuotesList