import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChildHomeScreen from "../../Screens/ChildScreens/ChildHomeScreen";
const Stack = createStackNavigator();


export default function ChildHomeScreenNav() {
  return (
    <Stack.Navigator>    
      <Stack.Screen
        name="Child-Home"
        component={ChildHomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
