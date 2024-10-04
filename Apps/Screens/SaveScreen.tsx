import React from "react";
import { View, Text, TouchableOpacity, ScrollView,Image } from "react-native";
import tw from "../../tw";
import GreetingHeader from "../Components/GreetingHeader";
import { useNavigation } from "@react-navigation/native";


const PocketItem = ({ title, total, completed }) => (
  <View
    style={tw`bg-white rounded-lg mb-4 flex-row justify-between items-center`}
  > 
    <View style={tw`flex-1`}>
      <Text style={tw`text-14px font-semibold mb-2`}>{title}</Text>
      <Text style={tw`text-12px text-gray-600 mb-2`}>
        ${completed} of ${total} tasks are completed
      </Text>
      <View style={tw`bg-gray-200 h-1 rounded-full`}>
        <View
          style={[tw`bg-blue-500 h-1 rounded-full`, { width: `${(completed / total) * 100}%` }]}
        />
      </View>
    </View>
    <View
      style={tw`bg-pink-100 w-10 h-10 rounded-full ml-4 items-center justify-center`}
    >
      <Image source={require('../../assests/images/Avatars.png')} style={tw `w-[48px] h-[48px]`}/>
    </View>
  </View>
);

export default function SaveScreen() {
  const navigation= useNavigation();

  const pocketData = [
    { title: "Summer school fee", total: 50, completed: 0 },
    { title: "Vacation for kids", total: 1000, completed: 500 },
  ];

  return (
    <ScrollView style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#F9FAFB" }]}>
      <View style={tw`p-4`}>
        {/* Greeting Header */}
        <GreetingHeader name={"Save"} />

        {/* Savings Balance Section */}
        <View style={tw`bg-white rounded-lg p-4 mb-6 mt-5`}>
          <Text style={tw`text-10px font-rubik text-gray-600 mb-2`}>Savings Balance</Text>
          <Text style={tw`text-16px font-bold mb-4`}>$4.00</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Create-Pocket")}
            style={tw`bg-blue-500 rounded-full flex-row justify-center w-[126px] h-[36px] items-center`}
          >
            <Text style={tw`text-white text-lg font-semibold mr-2`}>+</Text>
            <Text style={tw`text-white text-12px font-semibold`}>Add Pocket</Text>
          </TouchableOpacity>
        </View>

        {/* Combined Pocket Section */}
        <View style={tw`bg-white rounded-lg p-4 mb-6`}>
          <Text style={tw`text-16px font-bold mb-4`}>Your Pockets</Text>
          
          {/* Render Pocket Items */}
          {pocketData.map((pocket, index) => (
            <PocketItem key={index} {...pocket} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
