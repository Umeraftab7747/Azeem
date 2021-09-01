import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Header, Button } from "../components";

export const ScreenFour = () => {
  return (
    <View style={styles.Container}>
      <SafeAreaView />
      <Header txt={"screen 4"} />
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
});
