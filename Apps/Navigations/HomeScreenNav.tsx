import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenStack from "../Screens/HomeScreen";
import ParentAutoFundTwo from "../Screens/ParentAutoFundTwo";
import AddMoneyScreen from "../Screens/AddMoneyScreen";
import ParentAutoFund from "../Screens/ParentAutoFund";
import InvestScreen from "../Screens/InvestScreen";
import SetAlloanceScreen from "../Screens/SetAlloanceScreen";
import ParentNewTask from "../Screens/ParentNewTask";
import ParentTransections from "../Screens/ParentTransections";
import TransactionHistory from "../Screens/TransactionHistory";
import CreatePocket from "../Screens/CreatePocket";
import VacationKids from "../Screens/VacationKids";
import QuizQuestion from "../Screens/QuizQuestion";
const Stack = createStackNavigator();


export default function StackHomeScreen() {
  return (
    <Stack.Navigator>    
      <Stack.Screen
        name="Home-stack"
        component={HomeScreenStack}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Money"
        component={AddMoneyScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Auto-Fund"
        component={ParentAutoFund}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Parent-Fund"
        component={ParentAutoFundTwo}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Invest"
        component={InvestScreen}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Alloance"
        component={SetAlloanceScreen}
        options={{
          headerShown: false,
        }}

      />
         <Stack.Screen
        name="Parent-Task"
        component={ParentNewTask}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Parent-Tansections"
        component={ParentTransections}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Tansections"
        component={TransactionHistory}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Create-Pocket"
        component={CreatePocket}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Vocation-Kids"
        component={VacationKids}
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
    </Stack.Navigator>
  );
}
