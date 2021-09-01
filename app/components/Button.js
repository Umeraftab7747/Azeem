import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    width: "50%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  txt: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
