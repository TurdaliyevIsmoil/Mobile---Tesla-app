import React from "react";
import { Button, ImageBackground, Text, View } from "react-native";
import styles from "./style";
import StyledButton from "./../UI/StyledButton/Index";

const CartItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={props.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.subtitle}>
          {props.tagline}{" "}
          <Text style={{ textDecorationStyle: "underline" }}>
            {props.taglineCTA}
          </Text>
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <StyledButton type={"primary"}>Custom order</StyledButton>
        <StyledButton type={"secondary"}>Custom order</StyledButton>
      </View>
    </View>
  );
};

export default CartItem;
