
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../tw"; // Assuming you're using Tailwind for styling
import { useNavigation, useRoute } from "@react-navigation/native";

const ChildScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); 
  const { userType } = route.params; 

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-[24px] font-bold text-center mb-5`}>Who are you?</Text>

    
      {userType === "child" && (
        <View style={tw`bg-gray-100 w-[300px] h-[50px] justify-center rounded-lg mb-5`}>
          <Text style={tw`text-center text-[16px] text-gray-700`}>
                  I am a Child
          </Text>
        </View>
      )}


      {/* Example button to navigate to other screens */}
      <TouchableOpacity
        style={tw`bg-customBlue w-[300px] h-[50px] justify-center rounded-full`}
        onPress={() => {
          navigation.navigate("ChildCreateScreen");
        }}
      >
        <Text style={tw`text-center text-white text-lg font-bold`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChildScreen;
