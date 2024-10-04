import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "../../tw";
import HeaderWithBackButton from "../Components/HeaderWithBackButton";
import { Ionicons } from "@expo/vector-icons";

const TransactionItem = ({ text, time }) => (
  <View style={tw`mb-4 mt-3`}>
    <Text style={tw`text-14px font-rubik`}>{text}</Text>
    <Text style={tw`text-sm text-gray-500`}>{time}</Text>
  </View>
);

const DateSection = ({ date, transactions }) => (
  <View style={tw`mb-6`}>
    {/* Date Section with Background Color and Padding */}
    <View style={tw`bg-gray-100 py-2 px-3 rounded-lg`}>
      <Text style={tw`text-sm text-gray-500`}>{date}</Text>
    </View>
    {/* Transactions List */}
    {transactions.map((transaction, index) => (
      <TransactionItem key={index} {...transaction} />
    ))}
  </View>
);

export default function TransactionHistory() {
  const transactionData = [
    {
      date: "Today",
      transactions: [
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
        {
          text: "Credit of $4 for the completion of Reading tips task",
          time: "6:53 AM",
        },
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
        {
          text: "Credit of $4 for the completion of Reading tips task",
          time: "6:53 AM",
        },
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
      ],
    },
    {
      date: "Yesterday",
      transactions: [
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
        {
          text: "Credit of $4 for the completion of Reading tips task",
          time: "6:53 AM",
        },
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
        {
          text: "Credit of $4 for the completion of Reading tips task",
          time: "6:53 AM",
        },
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
      ],
    },
    {
      date: "10/08/2023",
      transactions: [
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
        {
          text: "Credit of $4 for the completion of Reading tips task",
          time: "6:53 AM",
        },
      ],
    },
    {
      date: "10/08/2023",
      transactions: [
        { text: "You added $17.35 to this wallet", time: "6:53 AM" },
        {
          text: "Credit of $4 for the completion of Reading tips task",
          time: "6:53 AM",
        },
      ],
    },
  ];

  return (
    <ScrollView
      style={[tw`flex-1 bg-gray-100 p-2`, { backgroundColor: "#F9FAFB" }]}
    >
      <View style={tw`p-1`}>
        <HeaderWithBackButton title={"Transaction History"} />
        <View
          style={tw`bg-gray-100 border border-gray-300 rounded-lg mb-6 flex-row items-center px-3 mt-4`}
        >
          {/* Search Icon */}
          <Ionicons name="search" size={20} color="#A0AEC0" />

          {/* Search Input */}
          <TextInput
            style={tw`flex-1 p-2 text-base`} // flex-1 makes the input take remaining space
            placeholder="Search here..."
            placeholderTextColor="#A0AEC0"
          />
        </View>

        {transactionData.map((section, index) => (
          <DateSection key={index} {...section} />
        ))}
      </View>
    </ScrollView>
  );
}
