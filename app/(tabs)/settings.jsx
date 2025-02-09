import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from "react-native";

import SettingItem from '../../components/SettingItem';
import { 
  timeOptions, 
  typeOptions, 
  guessOptions 
} from "../../constants/settingsOptions";

export let time = 15;
export let type = "";

export default function Settings() {

  // const { time, type, guess } = useGlobalContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.settingsCont}>
        <SettingItem 
          title="Time limit (clock mode)" 
          onValueChange={value => time = value} 
          items={timeOptions} 
          placeholder={{ label: "15 sec", value: 15 }} 
        />

        <SettingItem 
          title="Type of anime to guess" 
          onValueChange={value => type = value} 
          items={typeOptions} 
          placeholder={{ label: "Any", value: "" }} 
        />

        {/* <SettingItem 
          title="Guess by" 
          onValueChange={value => guess = value} 
          items={guessOptions} 
          placeholder={{ label: "Score", value: "score" }} 
        /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    height: "100%",
    backgroundColor: "#0F0F0F"
   },
   container: {
    flex: 1,
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    backgroundColor: "#3A3A3A",
    color: "#FFFFFF",
    paddingVertical: 12,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  settingsCont: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 12
  }
});
