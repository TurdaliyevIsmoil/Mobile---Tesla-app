import React from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import styles from "./style";

const StyledButton = ({ children, type }) => {
  const backgroundColor = type === "primary" ? "#e3e3e2" : "#383b3f";
  const textColor = type === "primary" ? "#383b3f" : "#e3e3e2";
  console.log(Dimensions.get("window").height);
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
