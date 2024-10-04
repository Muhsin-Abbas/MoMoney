import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import ChildSaveScreen from "../../Screens/ChildScreens/ChildSaveScreen";
import ChildPocketScreen from '../../Screens/ChildScreens/ChildPocketScreen'
import ChildPocketSave from "../../Screens/ChildScreens/ChildPocketSave";
import ChildVocations from '../../Screens/ChildScreens/ChildVocations'

const Stack = createStackNavigator();


export default function ChildSaveNav() {
  return (
    <Stack.Navigator>    
      <Stack.Screen
        name="Child_Save"
        component={ChildSaveScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Child_Pocket"
        component={ChildPocketScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen 
        name="ChildPocketSave"
         component={ChildPocketSave} 
         options={{headerShown: false}}/>

<Stack.Screen 
        name="ChildVocations"
         component={ChildVocations} 
         options={{headerShown: false}}/>
      
    </Stack.Navigator>
  );
}
