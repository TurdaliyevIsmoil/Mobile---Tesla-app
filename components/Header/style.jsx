import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    zIndex: 100,
    top: 50,
    paddingHorizontal: 20
  },
  logo: {
    width: 100,
    resizeMode: "contain",
    height: 25,
  },
  menu: {
    width: 30,
    height: 30,
  },
});
