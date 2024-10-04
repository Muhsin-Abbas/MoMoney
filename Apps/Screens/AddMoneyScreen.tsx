import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native';
import tw from '../../tw'; // Assuming you're using Tailwind CSS for styling
import HeaderWithBackButton from '../Components/HeaderWithBackButton'; 

const AddMoneyScreen = () => {
    const navigation = useNavigation();
  const [amount, setAmount] = useState('$  5,000');

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      {/* Reusable Header with Back Button */}
      <HeaderWithBackButton title="Add Money" />

      {/* Enter Amount Section */}
      <View style={tw`mt-6`}>
        <Text style={tw`font-rubik text-gray-600 mb-2 font-600 text-14px`}>Enter an Amount</Text>
        <TextInput
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
          style={tw` rounded-md p-3 text-center text-lg text-gray-700 bg-gray-100`}
        />
      </View>

      {/* Add Money Button */}
      <TouchableOpacity 
        style={tw`bg-blue-500 mt-9 p-3 rounded-full justify-center items-center`}
        onPress={() => navigation.navigate('Auto-Fund')}
      >
        <Text style={tw`text-white font-bold text-lg`}>Add money</Text>
      </TouchableOpacity>

    
    </View>
  );
};

export default AddMoneyScreen;
