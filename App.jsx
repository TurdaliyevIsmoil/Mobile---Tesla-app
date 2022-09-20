import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import CarList from "./components/CartList/Index";
import Header from "./components/Header/Index";
import styles from "./style";

const cars = [
  {
    name: "Model S",
    tagline: "Starting at $69,420",
    image: require("./assets/images/ModelS.jpeg"),
    taglineCTA: "Touchless Delivery",
  },
  {
    name: "Model 3",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("./assets/images/Model3.jpeg"),
  },
  {
    name: "Model X",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("./assets/images/ModelX.jpeg"),
  },
  {
    name: "Model Y",
    tagline: "Order Online for",
    taglineCTA: "Touchless Delivery",
    image: require("./assets/images/ModelY.jpeg"),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList cars={cars} />
      <StatusBar style="auto" />
    </View>
  );
}
