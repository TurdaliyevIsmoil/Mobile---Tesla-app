import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import CartItem from "./../CartItem/Index";
import styles from "./style";

const CarList = ({ cars }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        scrollEnabled={true}
        data={cars}
        renderItem={({ item, index }) => <CartItem key={index} {...item} />}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
