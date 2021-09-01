import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export const Header = ({ onPress, txt }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.Iconbtn}>
        <Icon
          name="arrow-back-outline"
          type="ionicon"
          color="#ffff"
          size={45}
        />
      </TouchableOpacity>
      <View style={styles.Iconbtn2}>
        <Text style={styles.txt}>{txt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "10%",
    flexDirection: "row",
  },
  Iconbtn: {
    // backgroundColor: "white",
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Iconbtn2: {
    // backgroundColor: "white",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
