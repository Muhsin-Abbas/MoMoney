
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';  // Tailwind CSS for styling
import { useNavigation } from '@react-navigation/native';
const ParentPocketSave = () => {
    const navigation= useNavigation();
  return (
    <View style={tw`flex-1 bg-white justify-center items-center px-8`}>
      
      {/* Icon at the top */}
      <View style={tw`mb-8`}>
        <View style={tw`w-24 h-24 rounded-2xl bg-[#F0F4FA] justify-center items-center`}>
          <Image 
            source={require('../../../assests/images/Avatars.png')}  // Use your user icon image path
            style={tw`w-12 h-12`}
          />
        </View>
      </View>
      
      {/* Text Section */}
      <View style={tw`mb-16 items-center`}>
        <Text style={tw`text-lg font-semibold mb-2`}>How does this work?</Text>
        <Text style={tw`text-gray-500 text-center`}>Save whenever you can. Withdraw whenever you want.</Text>
      </View>

      {/* Buttons */}
      <View style={tw`flex-row justify-between w-full`}>
        {/* Go back button */}
        <TouchableOpacity style={tw`border-2 border-blue-500 rounded-full px-6 py-3 w-1/2 mr-2 justify-center items-center`}>
          <Text style={tw`text-yellow-500 font-semibold`}>Go back</Text>
        </TouchableOpacity>

        {/* Create Pocket button */}
        <TouchableOpacity 
        style={tw`bg-blue-500 rounded-full px-6 py-3 w-1/2 ml-2 justify-center items-center`} 
        >
          <Text style={tw`text-black font-semibold`}>Create Pocket</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ParentPocketSave;
