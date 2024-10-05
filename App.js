
import React, { useEffect, useState } from "react";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';
import MainNavigation from './Apps/Navigations/MainNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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

  return <MainNavigation />;
}