import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc"; // Using Tailwind for styling
import { useNavigation } from "@react-navigation/native";
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const ChildProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-[#FFFAF0] p-4`}>
      {/* Profile Header */}
      <Text style={tw`text-2xl font-bold mb-3 mt-4`}>Profile</Text>

      {/* Profile Image with Edit Icon */}
      <View style={tw`items-center mb-6`}>
        <View style={tw`relative`}>
          <Image
            source={require("../../../assests/images/Avatars.png")} // Use your profile image path
            style={tw`w-27 h-27 rounded-full`}
          />
          <TouchableOpacity
            style={tw`absolute bottom-0 right-0 bg-white p-2 rounded-full shadow`}
          >
            <Image
              source={require("../../../assests/icons/user.png")} // Use your camera icon path
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Details */}
      <View style={tw`bg-white rounded-xl p-4 mb-4`}>
        <View style={tw`flex-row justify-between items-center mb-6`}>
          <View style={tw`flex-row items-center`}>
         
            <Fontisto name="email" size={24} color="black"  style={tw`w-6 h-6 mr-5`}/>

            <View>
              <Text style={tw`text-gray-600 text-12px`}>Email </Text>
              <Text style={tw`text-black font-rubik text-14px`}>
                micha.okoro@example.com
              </Text>
            </View>
          </View>


          <Feather name="copy" size={24} color="black" style={tw`w-6 h-6 mr-2`}/>
        </View>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require("../../../assests/icons/user.png")} // Name icon path
              style={tw`w-6 h-6 mr-2`}
            />
            <View>
              <Text style={tw`text-gray-600 text-12px`}>Full Name</Text>
              <Text style={tw`text-black font-400 text-14px`}>
                Amarachi Okoro
              </Text>
            </View>
          </View>
          {/* <Image
            source={require("../../../assests/icons/user.png")} // Name icon path
            style={tw`w-6 h-6 mr-2`}
          /> */}
          <Feather name="copy" size={24} color="black" style={tw`w-6 h-6 mr-2`}/>

        </View>

        <View style={tw`mt-2 flex-row items-center`}>
          <View style={tw``}>
            <Image
              source={require("../../../assests/icons/calendar.png")} // Date icon path
              style={tw`w-6 h-6 mr-2`}
            />
          </View>
          <View>
          <Text style={tw`text-gray-600 text-12px`}>Date Created</Text>
          <Text style={tw`text-black font-sem text-14px`}>
            Friday, Sep 25, 2025
          </Text>
          </View>
        </View>
      </View>

      {/* Card Details */}
      <TouchableOpacity
        style={tw`bg-white rounded-xl p-4 shadow flex-row justify-between items-center`}
        onPress={()=>navigation.navigate('Profile_Card')}
      >
        <View style={tw`flex-row items-center`}>
       
          <View style={tw`bg-[#F0F2F5] rounded-full p-2 mr-2`}>
            <Image
              source={require("../../../assests/icons/calendar.png")} 
              style={tw`w-6 h-6`} 
            />
          </View>
          <View>
            <Text style={tw`text-gray-600 text-12px`}>Card details</Text>
            <Text style={tw`text-black font-400 text-14px`}>
              **** **** **** 1732
            </Text>
          </View>
        </View>
        {/* <Image
          source={require("../../../assests/icons/user.png")} // Update to correct path
          style={tw`w-6 h-6 mr-2`} // Card icon on the right side
        /> */}
        <AntDesign name="right" size={24} color="black" style={tw`w-6 h-6`}/>
      </TouchableOpacity>
    </View>
  );
};

export default ChildProfileScreen;
