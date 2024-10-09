import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from '../../tw'; // Assuming you are using Tailwind setup
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function Congrats() {
  const navigation = useNavigation(); // Hook for navigation

  const handleNextLevel = () => {
    navigation.navigate('ParentQuizLevelOne'); // Navigate to the next level screen
  };

  return (
    <View style={tw`flex-1 items-center bg-gray-100 mt-10`}>
      {/* Image */}
      <Image
        source={require('../../assests/images/congrats.png')} 
        style={tw`w-80 h-80 mb-6`} 
        resizeMode="contain"
      />
      
      {/* Congratulatory Text */}
      <Text style={tw`text-24px font-600 text-center mb-6`}>
        Congratulations Micha. {'\n'} You did it 
      </Text>
      
      {/* Button */}
      <TouchableOpacity 
        style={tw`bg-blue-500 rounded-full py-3 px-8 mt-10 w-[320px] items-center`} 
        onPress={handleNextLevel} // Add onPress handler
      >
        <Text style={tw`text-black text-15px font-bold `}>Go to Next Level</Text>
      </TouchableOpacity>
    </View>
  );
}
