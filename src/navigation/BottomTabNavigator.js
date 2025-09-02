import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

// Updated import paths
import DashboardScreen from "../screens/DashboardScreen";
import CategoryScreen from "../screens/CategoryScreen";
import BookingScreen from "../screens/BookingScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Category":
              iconName = "category";
              break;
            case "Booking":
              iconName = "book-online";
              break;
            case "Explore":
              iconName = "explore";
              break;
            case "Profile":
              iconName = "person";
              break;
          }
return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4a148c", // Purple for active tabs
        tabBarInactiveTintColor: "#757575", // Darker gray for inactive tabs
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff", // White background
          elevation: 10, // Stronger shadow
          height: 70, // Slightly taller
          paddingBottom: 0, // Ensure no extra bottom padding
          paddingTop: 8, // Space above icons
          borderTopWidth: 0, // No border
          borderTopLeftRadius: 20, // Rounded top corners
          borderTopRightRadius: 20,
          position: 'absolute', // Floating effect
          left: 0, // Full width
          right: 0,
          bottom: 0, // Stick to bottom
        },
        tabBarItemStyle: {
          marginHorizontal: 6, // Space between tabs
          borderRadius: 12, // Rounded active tab background
          paddingVertical: 6, // Better vertical spacing
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600', // Semi-bold labels
          marginBottom: 4, // Space between icon & text
        },
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
