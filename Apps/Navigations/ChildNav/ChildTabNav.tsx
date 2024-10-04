import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChildProfileScreen from "../../Screens/ChildScreens/ChildProfileScreen";
import ChildLearnScreen from "../../Screens/ChildScreens/ChildLearnScreen";
import ChildTaskScreen from "../../Screens/ChildScreens/ChildTaskScreen";
import ChildHomeScreenNav from "./ChildHomeScreenNav";
import ChildProfileNav from "./ChildProfileNav";
import ChildSaveNav from "./ChildSaveNav";

const Tab = createBottomTabNavigator();

export default function ChildTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FDD831",  // Active icon color
        tabBarInactiveTintColor: "#888888", // Optional: Inactive icon color
      }}
    >
      <Tab.Screen
        name="Child_Home"
        component={ChildHomeScreenNav}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 1 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assests/icons/home.png")}
              style={{ width: size, height: size, tintColor: color }} // Set icon color
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ChildTaskScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 1 }}>
              Task
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assests/icons/task.png")}
              style={{ width: size, height: size, tintColor: color }} // Set icon color
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="save"
        component={ChildSaveNav}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 1 }}>
              Save
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assests/icons/calendar.png")}
              style={{ width: size, height: size, tintColor: color }} // Set icon color
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="learn"
        component={ChildLearnScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 1 }}>
              Learn
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assests/icons/calendar.png")}
              style={{ width: size, height: size, tintColor: color }} // Set icon color
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ChildProfileNav}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginBottom: 1 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../../assests/icons/user.png")}
              style={{ width: size, height: size, tintColor: color }} // Set icon color
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
