import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeIcon from "./components/HomeIcon";
import { MainStackNavigator, FeedStackNavigator } from "./MainStackNavigation";

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeNavigator") {
            return (
              <HomeIcon
                name={
                  focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline"
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === "FeedNavigator") {
            return (
              <Ionicons
                name={focused ? "ios-list-box" : "ios-list"}
                size={size}
                color={color}
              />
            );
          }
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="HomeNavigator" component={MainStackNavigator} />
      <Tab.Screen name="FeedNavigator" component={FeedStackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainTabNavigation;
