import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import tw from "../../tw";
import HeaderExitButton from "../Components/HeaderExit";

export default function SetAllowanceScreen() {
  return (
    <ScrollView
      style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#F9FAFB" }]}
    >
      <View style={tw`p-4`}>
        <HeaderExitButton title={"Set Allowance"} />

        <View style={tw`mb-6 mt-3`}>
          <Text style={tw`text-sm font-medium mb-2 text-16px`}>Amount</Text>
          <TextInput
            style={tw`bg-white border border-gray-300 rounded-lg p-3`}
            placeholder="Enter amount here"
          />
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-sm font-500 mb-2 text-16px`}>Repeat</Text>

          {/* Horizontal scrollable buttons */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={tw`flex-row`}>
              <TouchableOpacity
                style={tw`bg-blue-500 rounded-full px-4 py-2 mr-2`}
              >
                <Text style={tw`text-white`}>Doesn't repeat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-white border border-gray-300 rounded-full px-4 py-2 mr-2`}
              >
                <Text>Daily</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`bg-white border border-gray-300 rounded-full px-4 py-2 mr-2`}
              >
                <Text>Every weekend</Text>
              </TouchableOpacity>
              {/* Add more options if necessary */}
              <TouchableOpacity
                style={tw`bg-white border border-gray-300 rounded-full px-4 py-2 mr-2`}
              >
                <Text>Every month</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-sm font-500 mb-2 text-16px`}>Child</Text>
          <View style={tw``}>
            <Image
              source={require("../../assests/images/Avatars.png")}
              style={tw`w-[64px] h-[64px] rounded-full mr-2`}
            />
            <Text style={tw`font-400 text-12px ml-3`}>Micah</Text>
          </View>
        </View>

        <View style={tw`mb-6`}>
          <Text style={tw`text-sm font-500 mb-2 text-16px`}>Reward</Text>
          {[1, 2, 3].map((item) => (
            <View key={item} style={tw`flex-row mb-2`}>
              <View style={tw`rounded-lg p-2 mr-2 border border-gray-300`}>
                <Text>100%</Text>
              </View>
              <Text style={tw`font-Rubik font-500 text-14px`}>
                In Micah - Spend anywhere
                {"\n"}
                <Text style={tw`font-400`}>($10)</Text>
              </Text>
            </View>
          ))}
        </View>

        <View style={tw`flex-row justify-between`}>
          <TouchableOpacity
            style={tw`bg-blue-500 rounded-full p-3 mb-2 w-[155px]`}
          >
            <Text style={tw`text-white text-center font-semibold`}>
              Set Allowance
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`border border-red-500 rounded-full p-3 w-[155px] h-[50px]`}
          >
            <Text style={tw`text-center text-red-500`}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
