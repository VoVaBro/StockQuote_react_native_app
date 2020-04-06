import React, { useState, useEffect, useCallback, useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useHttp } from '../hooks/useHttp'
import { AppContext } from '../context/SearchContext'


import PaginationBtns from '../components/PaginationBtns'
import SybolCardLisl from '../components/SybolCardLisl'
import SearchBar from '../components/SearchBar'


const QuotesList = ({ navigation }) => {

  const { searchValye, setRealTimeQuotesList } = useContext(AppContext)



  const [quotesData, setQuotesData] = useState([])
  const [reload, setRelaod] = useState(false)


  const [indexOfFirstQuotes, setFirstIndex] = useState(0);
  const [indexOfLastQuotes, setLastIndex] = useState(50);



  const currentQuotesList = quotesData.slice(indexOfFirstQuotes, indexOfLastQuotes);

  const { request, loading } = useHttp()


  const fetchData = useCallback(async () => {
    let quotes = await request('https://quotes.instaforex.com/api/quotesList')
    setQuotesData(quotes.quotesList)
    setRealTimeQuotesList(quotes.quotesList)
  }, [request])


  // useEffect(() => {
  //   fetchData()
  // }, [])

  useEffect(() => {

    const handleSearch = (text) => {

      if (text == '') {
        fetchData()
        setRelaod(false)
      } else {

        const newData = quotesData.filter(item => {
          const itemData = `${item.symbol.toUpperCase()}`

          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1
        });
        setRelaod(true)
        setQuotesData(newData)
      }

    }

    handleSearch(searchValye)
  }, [searchValye.length])



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
          reload={reload}
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