import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

// Replace Dashboard with a TabNavigator
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

// New screens
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import BookAppointmentScreen from "./src/screens/BookAppointmentScreen";
import BookSummaryScreen from "./src/screens/BookSummaryScreen"; 
import PaymentScreen from "./src/screens/PaymentScreen"; // ✅ Added Payment Screen
import ReelDetailScreen from "./src/screens/ReelDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
        <Stack.Screen name="ReelDetail" component={ReelDetailScreen} />


        {/* Product Details Screen */}
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

        {/* Book Appointment Screen */}
        <Stack.Screen name="BookAppointment" component={BookAppointmentScreen} />

        {/* Book Summary Screen */}
        <Stack.Screen name="BookSummary" component={BookSummaryScreen} />

        {/* ✅ Payment Screen */}
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
