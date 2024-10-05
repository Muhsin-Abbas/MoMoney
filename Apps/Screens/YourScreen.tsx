import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import tw from "../../tw";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(""); // Default to empty string
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <View style={tw`bg-gray-100 w-[350px] p-4 w-[340px] rounded-lg mt-25`}>

        {/* Title */}
        <Text style={tw`text-[18px] font-bold text-center mb-8`}>Who are you?</Text>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsFocused(true)}
          style={[
            tw`w-[310px] border rounded-lg bg-white h-[60px] pt-1`,
            isFocused ? tw`border-blue-500` : tw`border-gray-300`,
          ]}
        >
          <Picker
            selectedValue={selectedValue}
            style={tw`h-12 px-4 text-gray-600`}
            onValueChange={(itemValue) => {
              setSelectedValue(itemValue);
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            {/* Show the initial label only if nothing is selected */}
            {selectedValue === "" && (
              <Picker.Item
                label="Select to customize your experience"
                value=""
                color="gray"
              />
            )}
            <Picker.Item label="I am a Parent" value="parent" />
            <Picker.Item label="I am a Child" value="child" />
          </Picker>
        </TouchableOpacity>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={tw`bg-customBlue w-[300px] h-[50px] justify-center rounded-full mt-25`}
        onPress={() => {
          if (selectedValue === "parent") {
            navigation.navigate("ParentFlow", { 
              screen: "OnboardingParent",
              params: { userType: "parent" }
            });
          } else if (selectedValue === "child") {
            navigation.navigate("ChildFlow", { 
              screen: "OnboardingChild",
              params: { userType: "child" }
            });
          }
        }}
        disabled={!selectedValue} // Disable button if no option is selected
      >
        <Text style={tw`text-center text-white text-lg font-bold`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
