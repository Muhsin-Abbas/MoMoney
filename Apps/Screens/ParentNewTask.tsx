import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView,Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons
import tw from "../../tw"; // Tailwind CSS for styling
import { useNavigation } from "@react-navigation/native";
import HeaderWithBackButton from "../Components/HeaderWithBackButton";
import MoneyCategory from "../Components/MoneyCategory";

const ParentNewTask = () => {
    const [roundupPurchase, setRoundupPurchase] = React.useState(false);
  const childrenData = [
    { name: "Pin", image: require("../../assests/images/avatthree.png") },
    { name: "New", image: require("../../assests/images/avattwo.png") },
    { name: "Limit", image: require("../../assests/images/avat.png") },
    { name: "Spendings", image: require("../../assests/images/avatone.png") },
  ];
  const navigation = useNavigation();
  const notifications = [
    {
      message: "Add money to wallet for next allowance for Micah",
      time: "5:32 PM",
      image: require("../../assests/images/Avatars.png"),
    },
    {
      message: "Reactivate Omar’s card",
      time: "4:11 AM",
      image: require("../../assests/images/Avatars.png"),
    },
  ];

  return (
    <ScrollView
      style={[tw`flex-1 bg-gray-100 p-4`, { backgroundColor: "#F9FAFB" }]}
    >
      {/* Header with Back Button */}
      <HeaderWithBackButton title={"Micah’s Card"} />

      {/* Card Display */}
      <TouchableOpacity onPress={()=>navigation.navigate('Parent-Tansections')}
        style={tw`mt-6 mx-auto items-center justify-center w-[330px] h-[174px]`}
      >
        <Image
          source={require("../../assests/images/MasterCard.png")}
          style={tw`w-[330px] h-[174px]`}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <MoneyCategory children={childrenData} />

      <View style={tw`h-0.3 bg-gray-300 mb-4 mt-5`} />


      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-14px font-rubik font-medium ml-2`}>Your money in total</Text>
        <Text style={tw`text-[24px] font-500 font-rubik`}>$33.70</Text>
      </View>
      <View style={tw`flex-row justify-between items-center`}>
        {/* Left Side: Credit Card Status Text */}
        <Text style={tw`text-14px font-rubik`}>Credit card is on</Text>

       
        <Switch
          value={roundupPurchase}
          onValueChange={(value) => setRoundupPurchase(value)}
          thumbColor={roundupPurchase ? "#FFFFFF" : "#FFFFFF"}
          trackColor={{ false: "#767577", true: "#007BFF" }} 
        />
      </View>
    </ScrollView>
  );
};

export default ParentNewTask;
