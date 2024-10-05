import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import ChildLearnScreen from "../../Screens/ChildScreens/ChildLearnScreen";
import ChildQuestion from "../../Screens/ChildScreens/ChildQuestions";
import ChildQuestionTwo from "../../Screens/ChildScreens/ChildQuestionTwo";
import ChildQuestionThree from "../../Screens/ChildScreens/ChildQuestionThree";
import ChildCongrats from "../../Screens/ChildScreens/ChildCongrats";

const Stack = createStackNavigator();


export default function ChildLearnNav() {
  return (
    <Stack.Navigator>    
      <Stack.Screen
        name="ChildLearnScreen"
        component={ChildLearnScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="ChildQuestion"
        component={ChildQuestion}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ChildQuestionTwo"
        component={ChildQuestionTwo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChildQuestionThree"
        component={ChildQuestionThree}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChildCongrats"
        component={ChildCongrats}
        options={{
          headerShown: false,
        }}
      />
        {/* <Stack.Screen
        name="Child_Edit"
        component={ChildEditCard}
        options={{
          headerShown: false,
        }}
      /> */}
      
    </Stack.Navigator>
  );
}
