import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from "react-native";

import SettingItem from '../../components/SettingItem';
import { 
  timeOptions, 
  typeOptions, 
  guessOptions 
} from "../../constants/settingsOptions";

export let time = 5000;
export let type = "";

export default function Settings() {

  // const { time, type, guess } = useGlobalContext();

  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <View>
          <Text className="font-psemibold">Settings</Text>
        </View>

        <View>
        <SettingItem 
          title="Time limit (clock mode)" 
          onValueChange={value => time = value} 
          items={timeOptions} 
          placeholder={{ label: "No limit", value: false }} 
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
