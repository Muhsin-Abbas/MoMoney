import { View, Text } from "react-native";
import React,{useCallback, useEffect, useState} from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./Apps/Screens/YourScreen";
// import ParentSignInScreen from "./Apps/Screens/ParentSignInScreen";
// import ChildSignInScreen from "./Apps/Screens/ChildSignInScreen";
import ExploreStackNav from './Apps/Navigations/ExploreStackNav'
import ChildStackNav from './Apps/Navigations/ChildNav/ChildStackNav'
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isParent,setIsParent] = useState(0)
  useEffect(() => {
    async function prepare() {
      try {

        await Font.loadAsync({
          Rubik_400Regular, 
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync(); 
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* {userType === null ? (
        <OnboardingScreen setUserType={setUserType} />
      ) : userType === 'parent' ? (
        <ExploreStackNav />
      ) : ( */}
        <ChildStackNav />
      {/* )} */}
    </NavigationContainer>
  );
}
