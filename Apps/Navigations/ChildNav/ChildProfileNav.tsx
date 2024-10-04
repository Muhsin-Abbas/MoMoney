import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import ChildProfile from "../../Screens/ChildScreens/ChildProfileScreen";
import ChildProfileCard from "../../Screens/ChildScreens/ChildProfileCard";
import ChildEditCard from "../../Screens/ChildScreens/ChildEditCard";

const Stack = createStackNavigator();


export default function ChildProfileNav() {
  return (
    <Stack.Navigator>    
      <Stack.Screen
        name="Child_Profile"
        component={ChildProfile}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Profile_Card"
        component={ChildProfileCard}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Child_Edit"
        component={ChildEditCard}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
}
