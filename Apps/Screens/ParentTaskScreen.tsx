import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import tw from "../../tw"; // Tailwind CSS for styling
import { useNavigation } from "@react-navigation/native";
import HeaderWithBackButton from "../Components/HeaderWithBackButton";

const TaskScreen = () => {
  const navigation = useNavigation();
  const notifications = [
    { message: "Add money to wallet for next allowance for Micah", time: "5:32 PM", image: require('../../assests/images/Avatars.png') },
    { message: "Reactivate Omar’s card", time: "4:11 AM", image: require('../../assests/images/Avatars.png') },
  ];

  return (
    <ScrollView style={[tw`flex-1 bg-gray-100 p-4`, { backgroundColor: "#F9FAFB" }]}> 
      {/* Header with Back Button */}
      <HeaderWithBackButton />
      {/* User Profile Section */}
      <View style={tw`items-center mt-4`}>
        <View style={tw`bg-red-100 rounded-full p-4`}>
          <Ionicons name="person" size={48} color="black" />
        </View>
        <Text style={tw`text-lg font-600 text-12px`}>Micah</Text>
        <Text style={tw`text-gray-600 mt-1`}>0 of 0 tasks are completed</Text>
      </View>
      <View style={tw`h-1 bg-gray-300 my-2 w-[262px] ml-8.5`} />
      {/* Assign Tasks Button */}
      <TouchableOpacity
        style={tw`mt-4 p-3 border border-blue-500 rounded-full flex-row items-center justify-center`}
       onPress={()=>navigation.navigate("NewTask")}  >
        {/* Add Icon on the Left */}
        <Image
          source={require("../../assests/images/add_icon.png")}
          style={tw`mr-2 w-[20px] h-[20px]`}
        />

        {/* Button Text */}
        <Text style={tw`text-blue-500 font-bold`}>Assign tasks</Text>
      </TouchableOpacity>

      {/* Card Display */}
      <View
        style={tw`mt-6 mx-auto items-center justify-center w-[330px] h-[174px]`}
      >
        <Image
          source={require("../../assests/images/MasterCard.png")}
          style={tw`w-[330px] h-[174px]`}
          resizeMode="contain" 
        />
      </View>

      <View style={tw`flex-row justify-between mt-4`}>
  {/* Investing Box */}
  <View style={tw`bg-white p-4 rounded-lg w-[48%]`}>
    <View style={tw`flex-row items-center`}>
    <Image source={require('../../assests/images/Chip.png')} style={tw`w-10 h-10`}   resizeMode="contain" />
      <Text style={tw`ml-3 font-600`}>Spending</Text>
    
    </View>
    
      <Text style={tw`text-14px font-600 mt-2`}>$8.50</Text>

      <Text style={tw`text-10px mt-1 font-400`}>Manage controls</Text>

   
  </View>

  {/* Allowance Box */}
  <View style={tw`bg-white p-4 rounded-lg w-[48%]`} >
    <View style={tw`flex-row items-center`}>
      <Image source={require('../../assests/images/Chip.png')} style={tw`w-10 h-10`}   resizeMode="contain" />
      <Text  style={tw`ml-3 font-600`}>Savings</Text>
    </View>
    <Text style={tw`text-14px font-600 mt-2`}>$8.50</Text>

      <Text style={tw`text-10px mt-1 font-400`}>Manage controls</Text>

  </View>
</View>

<View style={tw`flex-row justify-between mt-4`}>
  {/* Investing Box */}
  <View style={tw`bg-white p-4 rounded-lg w-[48%]`}>
    <View style={tw`flex-row items-center`}>
    <Image source={require('../../assests/images/Chip.png')} style={tw`w-10 h-10`}   resizeMode="contain" />
      <Text style={tw`ml-3 font-600`}>Investing</Text>
    
    </View>
    <TouchableOpacity style={tw`mt-2 bg-[#EBF4FF] p-2 rounded-full items-center`}
    onPress={()=>navigation.navigate("Invest")}
    >
      <Text style={tw`text-[#007BFF]`}>Get started</Text>
    </TouchableOpacity>
  </View>

  {/* Allowance Box */}
  <View style={tw`bg-white p-4 rounded-lg w-[48%]`} >
    <View style={tw`flex-row items-center`}>
      <Image source={require('../../assests/images/Chip.png')} style={tw`w-10 h-10`}   resizeMode="contain" />
      <Text  style={tw`ml-3 font-600`}>Allowance</Text>
    </View>
    <TouchableOpacity style={tw`mt-2 bg-[#EBF4FF] p-2 rounded-full items-center`}
     onPress={()=>navigation.navigate("Alloance")}
    >
  <Text style={tw`text-[#007BFF]`}>Set up</Text>
</TouchableOpacity>

  </View>
</View>



      {/* Recent History Section */}
      <View style={tw`p-2 bg-white mt-4 rounded-3x border border-gray-300`}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`font-rubik text-xl font-bold`}>Recent History</Text>
        <Text style={tw`text-green-500 border-b border-green-500`}>View all</Text>
      </View>

 
      <View style={tw`h-0.3 bg-gray-300 mb-4`} />

      {notifications.map((note, index) => (
        <View key={index} style={tw`flex-row items-center mb-3`}>
          <Image 
            source={note.image} 
            style={tw`w-8 h-8 rounded-full mr-1`} 
            resizeMode="cover"
          />
          <View style={tw`mt-1`}>
          
            <Text style={tw`font-rubik text-[14px] font-500 leading-[20px] text-left text-gray-700`}>
              {note.message}
            </Text>
            <Text style={tw`text-gray-400 text-xs`}>{note.time}</Text>
          </View>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

export default TaskScreen;
