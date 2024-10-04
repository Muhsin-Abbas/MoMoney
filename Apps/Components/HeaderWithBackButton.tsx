import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import tw from '../../tw'; 

const HeaderWithBackButton = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-row items-center mb-4 mt-6`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>

        <Image source={require('../../assests/images/back.png')} style={tw `w-[30px] h-[30px]`}/>
      </TouchableOpacity>
      <Text style={tw`ml-4 font-rubik text-20px font-500 text-left`}>{title}</Text>
    </View>
  );
};

export default HeaderWithBackButton;
