// App.js or Navigation Setup File
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChildTabNav from './ChildTabNav';
import ChildSignInScreen from '../../Screens/ChildSignInScreen';
import ChildPocketSave from "../../Screens/ChildScreens/ChildPocketSave";
import OnboardingChild from '../../Screens/OnboardingChild'
import ChildCreateScreen from '../../Screens/ChildCreateScreen';

const Stack = createStackNavigator();

const ChildStackNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='OnboardingChild' component={OnboardingChild} options={{headerShown:false}}/>
        <Stack.Screen name='ChildCreateScreen' component={ChildCreateScreen} options={{headerShown:false}}/>
        <Stack.Screen name='ChildSignInScreen' component={ChildSignInScreen} options={{headerShown:false}} />
        <Stack.Screen name="Child_Home" component={ChildTabNav} options={{ headerShown: false }}/>
        <Stack.Screen
        name="Pocket_save"
        component={ChildPocketSave}
        options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
  );
};

export default ChildStackNav;
