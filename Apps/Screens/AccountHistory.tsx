import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from '../../tw';

export default function AccountHistory() {
  return (
    <ScrollView style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#F9FAFB" }]}>
      <View style={tw`p-4`}>
        <View style={tw`flex-row items-center mb-6`}>
          <TouchableOpacity style={tw`mr-4`}>
            <Text style={tw`text-blue-500 text-2xl`}>←</Text>
          </TouchableOpacity>
          <Text style={tw`text-xl font-semibold`}>Micah</Text>
        </View>

        <View style={tw`bg-white rounded-lg p-4 mb-6`}>
          <Text style={tw`text-sm text-gray-600 mb-1`}>Spending</Text>
          <Text style={tw`text-2xl font-bold`}>$12.50</Text>
        </View>

        <View style={tw`bg-white rounded-lg p-4 mb-6`}>
          <Text style={tw`text-sm text-gray-600 mb-1`}>Spend Anywhere</Text>
          <Text style={tw`text-2xl font-bold`}>$5.50</Text>
        </View>

        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-lg font-semibold`}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={tw`text-blue-500`}>View all</Text>
            </TouchableOpacity>
          </View>
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={tw`mb-4`}>
              <Text style={tw`font-medium`}>
                {item % 2 === 0
                  ? "Credit of $4 for the completion of Reading tips task"
                  : "You added $17.35 to this wallet"}
              </Text>
              <Text style={tw`text-sm text-gray-500`}>12/8/23 at 6:53 AM</Text>
            </View>
          ))}
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-lg font-semibold mb-4`}>Spending Categories</Text>
          {[
            { name: "Any Restaurant", amount: "$0.00" },
            { name: "Any Gas station", amount: "$2.50" },
            { name: "Any Sort club", amount: "$1.00" },
          ].map((category, index) => (
            <View key={index} style={tw`bg-white rounded-lg p-4 mb-2`}>
              <Text style={tw`text-gray-600`}>{category.name}</Text>
              <Text style={tw`text-lg font-semibold`}>{category.amount}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={tw`bg-white border border-blue-500 rounded-lg p-4`}>
          <Text style={tw`text-blue-500 text-center font-semibold`}>Add categories</Text>
        </TouchableOpacity>
      </View>

    
    </ScrollView>
  );
}