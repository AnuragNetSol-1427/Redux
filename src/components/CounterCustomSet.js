import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const CounterCustomSet = ({setCustomValueParentState}) => {
    const [customValue, setCustomValue] = useState('1')

    const applyChangesInState = (text) => {
        setCustomValue(text)
        setCustomValueParentState(text)
        // console.log(text)
    }
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput value={customValue} style={{borderWidth: 1, width: '80%'}} onChangeText={(text)=> applyChangesInState(text) } />
    </View>
  )
}

export default CounterCustomSet