import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Header from "../Components/Header";
import ChildrenList from "../Components/ChildrenList";
import TaskSection from '../Components/TaskSection';
import Notifications from '../Components/Notification';
import SavingGoals from '../Components/SavingGoals';
import tw from "../../tw";

const HomeScreen = () => {
  const childrenData = [
    { name: 'Micah', image: require('../../assests/images/Avatars.png') },
    { name: 'Omar', image: require('../../assests/images/Avatars1.png') },
    { name: 'Ahmad', image: require('../../assests/images/Avatars2.png') },
    { name: 'Omair', image: require('../../assests/images/Avatars.png') },
    { name: 'Omair', image: require('../../assests/images/Avatars.png') },
    { name: 'Omair', image: require('../../assests/images/Avatars.png') },
  ];
  const navigation = useNavigation();
  const handleAddMoneyPress = () => {
    navigation.navigate('Money'); // Navigate to AddMoneyScreen
  };
  return (
    <ScrollView style={[tw`bg-gray-100 mt-6`, { backgroundColor: "#F9FAFB" }]}>
      <View style={tw`p-3`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text
            style={tw`font-rubik text-16px font-400 leading-19px text-left text-gray-700`}
          >
            Hello, Samanta
          </Text>
          <TouchableOpacity style={tw`flex-row items-center`}>
            <Image
              source={require("../../assests/images/Icon-right.png")}
              style={tw`w-6 h-6 mr-2`}
            />
            <Text style={tw`text-gray-700`}>EN</Text>
            <Image
              source={require("../../assests/images/down_icon.png")}
              style={tw`w-6 h-6 mr-1 `}
            />
          </TouchableOpacity>
        </View>
        <Header onAddMoneyPress={handleAddMoneyPress}/>
        <View style={tw`mt-4`}>
          <Text
            style={tw`text-black font-bold text-lg`}
          >
            My Children
          </Text>
        </View>

          <ChildrenList children={childrenData} />
          <TaskSection />
         <Notifications /> 
        <SavingGoals />  
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
