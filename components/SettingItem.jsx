import { View, Text, Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function SettingItem({ icon, title, items, onValueChange, placeholder }) {

  return (
    <View>
      <Image 
        style={styles.icon} 
        source={icon} 
      />

      <Text>{title}</Text>

      <RNPickerSelect 
        onValueChange={onValueChange} 
        items={items} 
        placeholder={placeholder} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40
  }
});
