import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from '../../tw'; 

const HeaderExitButton = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`relative items-center justify-between mb-8 mt-6`}>
      {/* Centered Title */}
      <Text style={tw`absolute left-0.6/2 -translate-x-1/2 font-rubik text-20px font-600`}>{title}</Text>

      {/* Exit button on the right */}
      <TouchableOpacity style={tw`absolute right-0`} onPress={() => navigation.goBack()}>
        <Image source={require('../../assests/images/exit.png')} style={tw`w-[25px] h-[25px]`} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderExitButton;
