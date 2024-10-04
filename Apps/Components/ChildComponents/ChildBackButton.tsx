import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'; 

const ChildBack = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-row items-center mb-4 mt-6`}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw ` h-[8] w-[8] rounded-full bg-[#FDD831] items-center justify-center`}>
        <AntDesign name="left" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={tw`ml-4 font-rubik text-20px font-500 text-left`}>{title}</Text>
    </View>
  );
};

export default ChildBack;
