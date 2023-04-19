import { View } from 'react-native'
import React, { useState } from 'react'
import CounterScreen from './src/screens/CounterScreen'
import CounterCustomSet from './src/components/CounterCustomSet'

const App = () => {

  const [customValueParentState, setCustomValueParentState] = useState(1)

  // console.log(customValueParentState)

  return (
    <View style={{flex: 1}}>
      <CounterScreen customValueParentState={customValueParentState} />
      <CounterCustomSet setCustomValueParentState={setCustomValueParentState} />
    </View>
  )
}

export default App