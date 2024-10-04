import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "twrnc"; // Using Tailwind for styling
import { useNavigation } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';


const ChildProfileCard = () => {
  const navigation = useNavigation();

  // Card Data
  const cardData = {
    email: "micha.okoro@example.com",
    fullName: "Amarachi Okoro",
    dateCreated: "Friday, Sep 25, 2025",
    cardDetails: "**** **** **** 1732",
    cardIcon: require("../../../assests/icons/calendar.png"),
  };

  return (
    <View style={tw`flex-1 bg-[#FFFAF0] p-4`}>
      {/* Profile Header */}
      <Text style={tw`text-2xl font-bold mb-3 mt-4`}>Profile</Text>

      {/* Profile Image with Edit Icon */}
      <View style={tw`items-center mb-5`}>
        <View style={tw`relative`}>
          <Image
            source={require("../../../assests/images/Avatars.png")}
            style={tw`w-27 h-27 rounded-full`}
          />
          <TouchableOpacity
            style={tw`absolute bottom-0 right-0 bg-white p-2 rounded-full`}
          >
            <Image
              source={require("../../../assests/icons/user.png")} // Use your camera icon path
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`bg-white rounded-4x mb-4`}>
        {/* MASTER CARD */}
        <View
          style={tw`mx-auto items-center justify-center w-[330px] h-[174px]`}
        >
          <Image
            source={require("../../../assests/images/MasterCard.png")}
            style={tw`w-[330px] h-[174px]`}
            resizeMode="contain"
          />
        </View>

        <View style={tw`mt-2 p-2`}>
          <View style={tw`flex-row items-center justify-between `}>
            <Text style={tw`text-gray-600 text-14px`}>Your money is total</Text>
            <Text style={tw`text-black font-600 text-24px ml-8.5`}>$34.00</Text>
          </View>
        </View>
      </View>

      {/* Card Details */}
      <TouchableOpacity
        style={tw`bg-white rounded-xl p-4 flex-row justify-between items-center`}
        onPress={() => navigation.navigate("Child_Edit")}
      >
        <View style={tw`flex-row items-center`}>
          <View style={tw`bg-[#F0F2F5] rounded-full p-2 mr-2`}>
            <Image
              source={cardData.cardIcon} // Dynamic card icon
              style={tw`w-6 h-6`}
            />
          </View>
          <View>
            <Text style={tw`text-gray-600 text-16px font-500`}>View Card</Text>
            <Text style={tw`text-black font-400 text-14px`}>
              {cardData.cardDetails} {/* Use dynamic data */}
            </Text>
          </View>
        </View>
        {/* <Image
          source={cardData.cardIcon} // Dynamic card icon
          style={tw`w-6 h-6 mr-2`}
        /> */}
        <AntDesign name="right" size={24} color="black" style={tw`w-6 h-6`}/>

      </TouchableOpacity>
    </View>
  );
};

export default ChildProfileCard;
