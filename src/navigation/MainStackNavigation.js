import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Detail from "../screens/Details";
import Settings from "../screens/Settings";
import Feed from "../screens/Feed";

const screenOptions = {
  gestureEnabled: true,
  headerStyle: {
    backgroundColor: "#101010"
  },
  headerTitleStyle: {
    fontWeight: "bold"
  },
  headerTintColor: "#ffd700",
  headerBackTitleVisible: false
};

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ ...screenOptions }}
      headerMode="float"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home screen" }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.item.name
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings screen" }}
      />
    </Stack.Navigator>
  );
};

const FeedStack = createStackNavigator();

const FeedStackNavigator = () => {
  return (
    <FeedStack.Navigator
      screenOptions={{ ...screenOptions }}
      headerMode="float"
    >
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{ title: "Feed screen" }}
      />
    </FeedStack.Navigator>
  );
};

export { MainStackNavigator, FeedStackNavigator };
