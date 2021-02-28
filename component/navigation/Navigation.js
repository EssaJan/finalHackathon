import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentLogin from '../screens/studentLogIn'
import Studentsignup from '../screens/studentSignUp'
import StudentDashbord from '../screens/studentDashbord'
import CompanyLogin from '../screens/companyScreens/companyLogin'
import CompanySignup from '../screens/companyScreens/companySignup'
import companyDashbord from '../screens/companyScreens/companyDashbord'
import  CompanyFindStudent from '../screens/companyScreens/companyFindStudent'
import adminLogin from  '../screens/adminScreen/adminLogin'
import adminSignup from '../screens/adminScreen/adminSignUp'
import adminDashbord from '../screens/adminScreen/adminDashbord'
import ManageActivity from '../screens/adminScreen/manageActivity';
import CompanyPostJob from '../screens/companyScreens/companyPostJob';
import SearchJob from  '../screens/searchJob'
import MianScreen from '../screens/splash/mainScreen';
import SplashScreen from '../screens/splash/splashScreen'
const Stack = createStackNavigator();
function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" options={{headerShown:false}} component={SplashScreen} />
          <Stack.Screen name="MianScreen" options={{headerShown:false}} component={MianScreen} />

          <Stack.Screen name="adminLogin" options={{headerShown:false}} component={adminLogin} />
          <Stack.Screen name="adminSignup" options={{headerShown:false}} component={adminSignup} />
          <Stack.Screen name="adminDashbord" options={{headerShown:false}} component={adminDashbord} />
          <Stack.Screen name="ManageActivity" options={{headerShown:false}} component={ManageActivity} />

          <Stack.Screen name="CompanyLogin" options={{headerShown:false}} component={CompanyLogin} />
          <Stack.Screen name="CompanySignup" options={{headerShown:false}} component={CompanySignup} />
          <Stack.Screen name="companyDashbord" options={{headerShown:false}} component={companyDashbord} />
          <Stack.Screen name="CompanyFindStudent"  component={CompanyFindStudent} />
          <Stack.Screen name="CompanyPostJob"  component={CompanyPostJob} />
          <Stack.Screen name="StudentLogin" options={{headerShown:false}} component={StudentLogin} />
          <Stack.Screen name="Studentsignup" options={{headerShown:false}} component={Studentsignup} />
          <Stack.Screen name="StudentDashbord" options={{headerShown:false}} component={StudentDashbord} />
          <Stack.Screen name="SearchJob" options={{headerShown:false}} component={SearchJob} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;