// // App.js or Navigation Setup File
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from '../Screens/SplashScreen';
// import YourScreen from '../Screens/YourScreen';
// import SelectScreen from '../Screens/SelectScreen';
// import HomeScreen from './HomeScreenNav';
// import ParentCreateScreen from '../Screens/ParentCreateScreen'
// import OnboardingParent from '../Screens/OnboardingParent'
// import ParentSignInScreen from '../Screens/ParentSignInScreen';
// import OnboardingChild from '../Screens/OnboardingChild';
// import TabNavigation from './TabNavigation';
// import ChildCreateScreen from '../Screens/ChildCreateScreen';
// import ChildSignInScreen from '../Screens/ChildSignInScreen';
// import NewTasks from '../Screens/NewTasks';
// import QuizQuestion from '../Screens/QuizQuestion';
// // import ChildPocketSave from '../Screens/ChildScreens/ChildPocketSave'
// const Stack = createStackNavigator();

// const ExploreStackNav = () => {
//   return (
   
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
//         <Stack.Screen name="YourScreen" component={YourScreen} options={{headerShown:false}}/>
//         <Stack.Screen name="SelectScreen" component={SelectScreen} options={{headerShown:false}}/>
//         <Stack.Screen name="OnboardingParent" component={OnboardingParent}  options={{headerShown:false}}/>
//         <Stack.Screen name='ParentCreateScreen' component={ParentCreateScreen} options={{headerShown:false}}/>
//         {/* <Stack.Screen name='ChildSignInScreen' component={ChildSignInScreen} options={{headerShown:false}} /> */}
//         <Stack.Screen name='ChildCreateScreen' component={ChildCreateScreen} options={{headerShown:false}} />
//         <Stack.Screen name='OnboardingChild' component={OnboardingChild} options={{headerShown:false}}/>
//         <Stack.Screen name="ParentSignInScreen" component={ParentSignInScreen}  options={{headerShown:false}}/>
//         <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
//         <Stack.Screen name="NewTask" component={NewTasks} options={{ headerShown: false }} />
//       </Stack.Navigator>
//   );
// };

// export default ExploreStackNav;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import YourScreen from '../Screens/YourScreen';
import SelectScreen from '../Screens/SelectScreen';
import HomeScreen from './HomeScreenNav';
import ParentCreateScreen from '../Screens/ParentCreateScreen'
import OnboardingParent from '../Screens/OnboardingParent'
import ParentSignInScreen from '../Screens/ParentSignInScreen';
import OnboardingChild from '../Screens/OnboardingChild';
import TabNavigation from './TabNavigation';
import ChildCreateScreen from '../Screens/ChildCreateScreen';
import ChildSignInScreen from '../Screens/ChildSignInScreen';
import NewTasks from '../Screens/NewTasks';
import QuizQuestion from '../Screens/QuizQuestion';


const Stack = createStackNavigator();

const ExploreStackNav = () => {
  return (
         <Stack.Navigator>
        <Stack.Screen name="YourScreen" component={YourScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OnboardingParent" component={OnboardingParent}  options={{headerShown:false}}/>
        <Stack.Screen name='ParentCreateScreen' component={ParentCreateScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ParentSignInScreen" component={ParentSignInScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="NewTask" component={NewTasks} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default ExploreStackNav;