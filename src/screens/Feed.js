import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

Feed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebebeb"
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Feed;
