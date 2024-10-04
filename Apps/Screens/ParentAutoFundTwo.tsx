import React, { useState } from 'react';
import { View, Text, TextInput , TouchableOpacity, Image } from 'react-native';
import HeaderWithBackButton from '../Components/HeaderWithBackButton';
import tw from '../../tw'; 

export default function ParentAutoFundTwo() {
  const [customAmount, setCustomAmount] = useState('$0.00'); 
  const walletData = [
    { name: "From my Wallet", balance: "$79.50", newBalance: "$74.00" },
    { name: "To Micah’s Wallet", balance: "$17.50", newBalance: "$23.00" },
  ];

  return (
    <View style={tw`flex-1 bg-white p-4`}>
          {/* Header */}
      <HeaderWithBackButton title="AutoFund" />

      {/* Custom Amount Input Section */}
      <Text style={tw`text-gray-800 font-500 text-14px mb-1 mt-6`}>Enter a custom amount</Text>
      <TextInput
        value={customAmount}
        onChangeText={(text) => setCustomAmount(text)}
        keyboardType="numeric"
        style={tw`rounded-md p-3 text-center text-lg text-gray-700 bg-gray-100 mb-4`}
      />

      {/* Wallet Selection Section */}
      {walletData.map((wallet, index) => (
        <View key={index} style={tw`mb-4 p-4 bg-gray-100 rounded-md flex-row justify-between items-center`}>
          <View>
            <Text style={tw`font-bold text-10px`}>{wallet.name}</Text>
            <Text style={tw`text-gray-700 text-14px font-500`}>
              {wallet.balance} (new balance -{" "}
              <Text style={tw`text-green-500`}>{wallet.newBalance}</Text>)
            </Text>
          </View>
          <TouchableOpacity>
           <Image source={require('../../assests/images/down.png')} style={tw `w-[8] h-[8]`}/>
           </TouchableOpacity>
        </View>
      ))}

      {/* Confirm Button */}
      {/* <TouchableOpacity
        style={tw`bg-blue-500 mt-6 p-3 rounded-full justify-center items-center`}
        onPress={() => console.log('Confirm Amount')}
      >
        <Text style={tw`text-white font-bold text-lg`}>Confirm Amount</Text>
      </TouchableOpacity> */}
    </View>
  );
}
