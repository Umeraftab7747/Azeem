import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Header, Button } from "../components";

export const Screenone = () => {
  return (
    <View style={styles.Container}>
      <SafeAreaView />
      <Header txt={"screen 1"} />
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
