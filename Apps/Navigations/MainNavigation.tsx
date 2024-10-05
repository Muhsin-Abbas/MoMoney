import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../../Apps/Screens/YourScreen';
import ParentStack from '../../Apps/Navigations/ExploreStackNav';
import ChildStack from '../../Apps/Navigations/ChildNav/ChildStackNav';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="YourScreen" component={OnboardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ParentFlow" component={ParentStack} options={{headerShown:false}}/>
        <Stack.Screen name="ChildFlow" component={ChildStack} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;