import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "../../tw"; // Tailwind CSS for styling
import { useNavigation } from "@react-navigation/native";
import HeaderWithBackButton from "../Components/HeaderWithBackButton";

const ParentTransections = () => {
  const navigation = useNavigation();

  // Sample Data for Spending, Transactions, and Categories
  const transactions = [
    {
      description: "You added $17.35 to this wallet",
      date: "12/8/23 at 6:53 AM",
    },
    {
      description: "Credit of $4 for the completion of Reading tips task",
      date: "12/8/23 at 6:53 AM",
    },
  ];

  const categories = [
    { name: "Any Restaurant", amount: "$0.00" },
    { name: "Any Gas station", amount: "$2.50" },
    { name: "Any Sort club", amount: "$1.00" },
  ];

  return (
    <ScrollView
      style={[tw`flex-1 bg-gray-100 p-3`, { backgroundColor: "#F9FAFB" }]}
    >
      {/* Header with Back Button */}
      <HeaderWithBackButton title={"Micah"} />

      {/* Spending Section */}
      <View style={tw`bg-gray-100 rounded-lg p-4 mb-3 mt-5`}>
        <Text style={tw`text-14px font-rubik `}>Spending</Text>
        <Text style={tw`text-20px font-rubik `}>$12.50</Text>
      </View>
      <View style={tw`bg-gray-100 rounded-lg p-4 mb-4`}>
        <View>
          <Text style={tw`text-14px font-rubik`}>Spend Anywhere</Text>
          <Text style={tw`text-20px font-rubik`}>$5.50</Text>
        </View>
      </View>

      {/* Recent Transactions Section */}
      <View style={tw`rounded-lg mb-4 mt-3`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`font-rubik font-medium text-18px font-rubik`}>
            Recent Transactions
          </Text>
          <TouchableOpacity>
            <Text style={tw`text-green-500 underline`}>View all</Text>
          </TouchableOpacity>
        </View>
        {transactions.map((transaction, index) => (
          <View key={index} style={tw`mt-4`}>
            <Text
              style={tw`text-gray-900 font-rubik text-14px mt-2 leading-18px`}
            >
              {transaction.description}
            </Text>
            <Text style={tw`text-gray-400 mt-1`}>{transaction.date}</Text>
            <Text
              style={tw`text-gray-900 font-rubik text-14px mt-2 leading-18px`}
            >
              {transaction.description}
            </Text>
            <Text style={tw`text-gray-400 mt-1`}>{transaction.date}</Text>
          </View>
        ))}
      </View>

      {/* Spending Categories Section */}
      <View style={tw`mb-4 mt-4`}>
        <Text
          style={tw`font-rubik text-[20px] font-medium leading-[23.7px] text-left mb-4`}
        >
          Spending Categories
        </Text>

        {categories.map((category, index) => (
          <View
            key={index}
            style={tw`mb-4 bg-white rounded-lg h-[78px] justify-center pl-5`}
          >
            <Text style={tw`text-gray-500 text-14px font-rubik`}>
              {category.name}
            </Text>
            <Text style={tw`font-bold font-rubik text-20px mt-1`}>
              {category.amount}
            </Text>
          </View>
        ))}
      </View>

      {/* Add Categories Button */}
      <TouchableOpacity onPress={()=>navigation.navigate("Tansections")}
        style={tw`border border-blue-500 rounded-full py-2 p-3 items-center mt-4 mb-5`}
      >
        <Text style={tw`text-blue-500 font-bold text-15px`}>Add categories</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ParentTransections;
