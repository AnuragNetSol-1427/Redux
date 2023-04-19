import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CounterControllers = ({setCounterValue, customValueParentState}) => {
  console.log(customValueParentState)
    const incrementValue = () => {
        setCounterValue((tempValue)=>{
          // console.log(tempValue)
            // return tempValue + 1;
            return parseInt(tempValue) + parseInt(customValueParentState);
        })
        // console.log("in");
    }
    const decrementValue = () => {
        setCounterValue((tempValue)=>{
          // console.log(tempValue)
            // return tempValue - 1;
            return tempValue - customValueParentState;
        })
        // console.log("de");
    }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '70%',
      }}>
      <TouchableOpacity style={{backgroundColor: 'blue', padding: 10}} onPress={()=>decrementValue()}>
        <Text style={{fontSize: 20, color: 'white'}}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: 'blue', padding: 10}} onPress={()=>incrementValue()}>
        <Text style={{fontSize: 20, color: 'white'}}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterControllers;
