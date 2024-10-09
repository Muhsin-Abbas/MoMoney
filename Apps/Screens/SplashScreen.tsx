import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import tw from "../../tw";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("YourScreen");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={tw`bg-customBlue flex-1 justify-center items-center`}>
      <Image
        source={require("../../assests/images/momoney.png")}
        style={tw`h-[45px] w-[220px]`}
        resizeMode="contain"
      />
      <Text
        style={tw`text-[16px] font-normal leading-[18.91px] text-left text-white`}
      >
        The fun way to learn, save, and grow!
      </Text>
    </View>
  );
};

export default SplashScreen;
