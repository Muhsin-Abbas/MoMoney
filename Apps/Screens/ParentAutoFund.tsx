import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from '../../tw'; 
import HeaderWithBackButton from '../Components/HeaderWithBackButton';
import { useNavigation } from '@react-navigation/native';

export default function ParentAutoFund() {
    const navigation= useNavigation();
  const [customAmount, setCustomAmount] = useState('$0.00'); // State for custom amount

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      {/* Header */}
      <HeaderWithBackButton title="AutoFund" />

      {/* Amount Selection Section */}
      <Text style={tw`text-gray-700 text-left mb-2 mt-5`}>Select an amount here</Text>
      <View style={tw`flex flex-row justify-around flex-wrap`}>
        {['$10', '$20', '$50', '$75', '$100', '$150'].map((value) => (
          <TouchableOpacity
            key={value}
            style={tw`border border-gray-300 bg-white p-4 rounded-lg mb-4`}
            onPress={() => console.log(`Selected ${value}`)} // Handle selection
          >
            <Text style={tw`text-lg font-semibold`}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Enter Custom Amount Section */}
      <Text style={tw`text-gray-600 text-left mb-2`}>Enter a custom amount</Text>
      <TextInput
        value={customAmount}
        onChangeText={(text) => setCustomAmount(text)}
        keyboardType="numeric"
        style={tw`rounded-md p-3 text-center text-lg text-gray-700 bg-gray-100`}
      />

      {/* Add Money Button */}
      <TouchableOpacity 
        style={tw`bg-blue-500 mt-25 p-3 rounded-full justify-center items-center`}
        onPress={() => navigation.navigate('Parent-Fund')}
      >
        <Text style={tw`text-white font-bold text-lg`}>Add money</Text>
      </TouchableOpacity>
    </View>
  );
}
