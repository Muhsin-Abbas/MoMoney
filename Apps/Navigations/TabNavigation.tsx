import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParentTaskScreen from "../Screens/ParentTaskScreen";
import SaveScreen from "../Screens/SaveScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import StackHomeScreen from "./HomeScreenNav";
import ChildSaveNav from "../Navigations/ChildNav/ChildSaveNav";
import ParentLearnNav from "./ParentLearnNav";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007BFF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackHomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 1 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assests/icons/home.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ParentTaskScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 1 }}>
              Task
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assests/icons/task.png")}
              style={{ width: size, height: size, tintColor: color }}
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
            <Text style={{ color: color, fontSize: 12, marginBottom: 1 }}>
              Save
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assests/icons/calendar.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="learn"
        component={ParentLearnNav}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 1 }}>
              learn
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assests/icons/calendar.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginBottom: 1 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assests/icons/user.png")}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
