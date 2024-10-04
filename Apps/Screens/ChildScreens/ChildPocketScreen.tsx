import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import tw from "twrnc";
// import HeaderWithBackButton from '../../Components/HeaderWithBackButton';
import { useNavigation } from "@react-navigation/native";
import ChildBack from "../../Components/ChildComponents/ChildBackButton";

export default function ChildPocketScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={[tw`flex-1 bg-gray-100`, { backgroundColor: "#FFFBEF" }]}
    >
      <View style={tw`p-4`}>
        <ChildBack title={"Create A New Pocket"} />

        <View style={tw`items-center mb-6`}>
          <View
            style={tw`bg-white w-[358px] h-20 items-center justify-center mb-2 mt-8`}
          >
            <Image
              source={require("../../../assests/images/Avatars.png")}
              style={tw`h-[48px] w-[48px]`}
            />
          </View>
          <TouchableOpacity
            style={tw`mt-5 border-2 border-yellow-300 rounded-8x p-2`}
          >
            <Text style={tw`text-yellow-300 text-12px `}> + Add Photo </Text>
          </TouchableOpacity>
        </View>

        <View style={tw`bg-white rounded-lg p-2 `}>
          {/* Form Header */}
          <Text style={tw`text-[16px] font-rubik mb-6`}>Create Pocket</Text>

          {/* Pocket Name Input */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-[14px] mb-2`}>Pocket Name</Text>
            <TextInput
              style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px`}
              placeholder="Summer school fee"
            />
          </View>

          {/* Target Amount Input */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-[14px] mb-2`}>Enter Target Amount</Text>
            <TextInput
              style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px`}
              placeholder="$5,000"
              keyboardType="numeric"
            />
          </View>

          {/* Description Input */}
          <View style={tw`mb-6`}>
            <Text style={tw`text-[14px] mb-2`}>Add Description</Text>
            <TextInput
              style={tw`bg-white border border-gray-300 rounded-lg p-3 text-14px h-14`}
              placeholder="This is a goal target towards"
              multiline
            />
          </View>
        </View>

        <TouchableOpacity
          style={tw`bg-[#FDD831] rounded-full py-4 items-center `}
          onPress={() => navigation.navigate("ChildVocations")}
        >
          <Text style={tw`text-black text-15px font-semibold`}>
            Create Pocket Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}