import { Image, Text, View } from "react-native";
import style from "./style";

const Header = () => {
  return (
    <View style={style.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={style.logo}
      />
      <Image
        source={require("../../assets/images/menu.png")}
        style={style.menu}
      />
    </View>
  );
};

export default Header;
