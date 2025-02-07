import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// import icons from "../constants/icons";

export default function ButtonComponent({ title, icon, onPress, size, color }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[{ 
          width: size * 2.4, 
          height: size, 
          borderColor: color 
        }, 
        styles.button
      ]}>
        <Image 
          style={styles.icon} 
          source={icon} 
        />

          <Text style={styles.text}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#ffcc5a",
    borderWidth: 2,
    // borderColor: "#FFFFFF",
    // borderRadius: "30%",
    margin: 4,
    flexGrow: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  icon: {
    resizeMode: "contain",
    width: 22,
    height: 22
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  }
});
