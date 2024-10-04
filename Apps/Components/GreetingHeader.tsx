import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "../../tw"; // Assuming you're using Tailwind CSS for React Native
import { useNavigation } from "@react-navigation/native";

const GreetingHeader = ({ name }) => {
  const navigation= useNavigation();
  return (
    <View style={tw`flex-row justify-between items-center mt-5`}>
      {/* Greeting Text */}
      <Text style={tw`font-500 leading-[19px] text-20px`}>
        {name}
      </Text>

      {/* Language Switcher */}
      <TouchableOpacity style={tw`flex-row items-center`}>
        <Image
          source={require("../../assests/images/Icon-right.png")}
          style={tw`w-6 h-6 mr-2`}
        />
        <Text style={tw`text-gray-700`}>EN</Text>
        <Image
          source={require("../../assests/images/down_icon.png")}
          style={tw`w-6 h-6`}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GreetingHeader;

