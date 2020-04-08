import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { AppContext } from '../context/SearchContext'


window.navigator.userAgent = 'react-native'
import io from 'socket.io-client/dist/socket.io'

import RealTimeCard from '../components/RealTimeCard'

let socket
const ENDPOINT = 'https://qrtm1.ifxid.com:8443'

const RealTimeQuotes = (props) => {


  const { realTimeQuotesList } = useContext(AppContext)

  const [realTimeData, setData] = useState([])

  const [loading, setLoading] = useState(false)


  socket = io(ENDPOINT, { transports: ['websockets', 'polling'] })




  const subscribe = () => {

    setLoading(true)
      socket.emit('subscribe', [`GOLD`])
    setLoading(false)

  }


  const unsubscribe = () => {
    socket.emit('unsubscribe', [`GOLD`])
  }



  useEffect(() => {
    const getData = async () => {
      await subscribe()
    }
    getData()
  }, [])

  socket.on('quotes', data => {
    console.log(data)
    setData([data.msg])
  })




  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} >
        <ActivityIndicator syze='large' color='black' />
      </View>
    )
  } else {
    return (
      <View>
        <FlatList
          data={realTimeData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <RealTimeCard
            title={item.symbol}
            change={item.change}
            ask={item.ask}
            bid={item.bid}
          />}
          keyExtractor={item => item.symbol}
        />
      </View>
    );
  }
}


export default RealTimeQuotes