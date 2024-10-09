import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import LearnScreen from "../Screens/LearnScreen";
import QuizQuestion from "../Screens/QuizQuestion";
import ParentQuizOne from "../Screens/ParentQuizOne";
import ParentQuizTwo from "../Screens/ParentQuizTwo";
import ParentQuizThree from "../Screens/ParentQuizThree";
import ParentQuizFour from "../Screens/ParentQuizFour";
import Congrats from "../Screens/Congrats";
import ParentQuizLevelOne from "../Screens/ParentQuizLevelOne";

const Stack = createStackNavigator();


export default function ParentLearnNav() {
  return (
    <Stack.Navigator>    
      <Stack.Screen
        name="Child_Profile"
        component={LearnScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="QuizQuestion"
        component={QuizQuestion}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="ParentQuizOne"
        component={ParentQuizOne}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="ParentQuizTwo"
        component={ParentQuizTwo}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ParentQuizThree"
        component={ParentQuizThree}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="ParentQuizFour"
        component={ParentQuizFour}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Congrats"
        component={Congrats}
        options={{
          headerShown: false,
        }}
      />
  
      <Stack.Screen
        name="ParentQuizLevelOne"
        component={ParentQuizLevelOne}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
