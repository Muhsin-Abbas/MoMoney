import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "../../tw"; // Assuming you're using Tailwind for styling
import { useNavigation } from "@react-navigation/native";
// import ChildSignInScreen from "./ChildSignInScreen";

const ChildCreateScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={tw`flex-1 bg-white px-6 pt-10`}>
      {/* Close button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={tw`text-lg`}>✕</Text>
      </TouchableOpacity>

      {/* Create Account Header */}
      <Text style={tw`text-[28px] font-bold text-customBlue mb-8 mt-8`}>
        Create your account
      </Text>

      {/* Full Name Input */}
      <Text style={tw`text-sm mb-2`}>Full Name</Text>
      <TextInput
        style={tw`bg-gray-100 p-3 rounded-lg mb-4`}
        placeholder="Enter full name here"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email Input */}
      <Text style={tw`text-sm mb-2`}>Email Address (Optional)</Text>
      <TextInput
        style={tw`bg-gray-100 p-4 rounded-lg mb-4`}
        placeholder="Enter email address here"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={tw`text-sm mb-2`}>Password</Text>
      <TextInput
        style={tw`bg-gray-100 p-4 rounded-lg mb-4`}
        placeholder="Enter password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Create Account Button */}
      <TouchableOpacity
        style={tw`bg-customBlue w-full h-[50px] justify-center rounded-lg mt-13 rounded-full`}
        onPress={() => {
          navigation.navigate("ChildSignInScreen");
        }}
      >
        <Text style={tw`text-center text-white text-[15px] font-bold`}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChildCreateScreen;
