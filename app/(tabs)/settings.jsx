import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from "react-native";

import SettingItem from '../../components/SettingItem';
import { timeOptions, typeOptions } from "../../constants/settingsOptions";
import icons from '../../constants/icons';

export let time = 20;
export let type = "";

export default function Settings() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.settingsCont}>
          <SettingItem 
            icon={icons.clock2}
            title="Time limit (clock mode)" 
            onValueChange={value => time = value} 
            items={timeOptions} 
            placeholder={{ label: "20 sec", value: 20 }} 
          />

          <SettingItem 
            icon={icons.game2} 
            title="Type of anime to guess" 
            onValueChange={value => type = value} 
            items={typeOptions} 
            placeholder={{ label: "Any", value: "" }} 
          />
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
    width: "100%"
  },
  title: {
    backgroundColor: "#3A3A3A",
    color: "#FFFFFF",
    paddingVertical: 12,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Varela"
  },
  settingsCont: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 12
  }
});
