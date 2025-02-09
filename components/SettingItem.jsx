import { View, Text, Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function SettingItem({ icon, title, items, onValueChange, placeholder }) {

  return (
    <View style={styles.container}>
      <Image 
        style={styles.icon} 
        source={icon} 
      />

      <Text style={styles.title}>{title}</Text>

      <RNPickerSelect 
        style={styles.picker} 
        onValueChange={onValueChange} 
        items={items} 
        placeholder={placeholder} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3A3A3A",
    width: "100%",
    paddingHorizontal: 8,
    borderRadius: 30
  },
  icon: {
    width: 40,
    height: 40
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    // fontWeight: "bold",
  },
  picker: {
    backgroundColor: "#3A3A3A"
  }
});
