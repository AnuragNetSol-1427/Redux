import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CounterView from '../components/CounterView'
import CounterControllers from '../components/CounterControllers'

const CounterScreen = ({customValueParentState}) => {

  const [counter, setCounter] = useState(0)

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CounterView counterValue={counter} />
      <CounterControllers setCounterValue={setCounter} customValueParentState={customValueParentState} />
    </View>
  )
}

export default CounterScreen