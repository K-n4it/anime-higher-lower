import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import LinearGradient from "react-native-linear-gradient";

import ButtonComponent from "../../components/ButtonComponent";
import { useGlobalContext } from "../../context/GlobalProvider";
import { getAnimeItem } from "../../service/jikan";

import icons from "../../constants/icons";

export default function Main() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} className="w-full justify-center items-center min-h-[85vh] px-4">
        <Text style={styles.title}>
          The 
          <Text style={styles.titleOrange}> anime </Text> 
          <Text style={styles.titleBlue}>Higher </Text> 
          and 
          <Text style={styles.titleRed}> Lower</Text> 
          <Text style={styles.titleOrange}> GAME</Text>
        </Text>

        <View style={styles.intContainer}>
          <Text style={styles.message} className="text-bold">
            Can you guess the most popular anime on myanimelist?
            Get ready player!
           </Text>

           <View>
              <ButtonComponent 
                title="Normal mode" 
                icon={icons.game} 
                onPress={() => router.push("game")} 
                size={60} 
                color="#00C6CF"
              />

              <ButtonComponent 
                title="Beat the clock mode" 
                icon={icons.clock} 
                onPress={() => router.push("game")} 
                size={60} 
                color="#00C6CF"
              />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  safeArea: { 
    height: "100%",
    backgroundColor: "#0F0F0F"
   },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  intContainer: {
    padding: 20,
    alignItems: "center",
    // transform: [{rotateX: "10deg"}]
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "900",
    textAlign: "center"
  },
  titleOrange: { color: "#F6B161" },
  titleBlue: { color: "#00C6CF" },
  titleRed: { color: "#FF2D2D" },
  message: {
    backgroundColor: "#3A3A3A",
    color: "#FFFFFF",
    minWidth: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#F2ECFF",
    borderRadius: 5,
    fontSize: 20,
    textAlign: "center"
  }
});
