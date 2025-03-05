import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

import { useGlobalContext } from "../../context/GlobalProvider";
import ButtonComponent from "../../components/ButtonComponent";

import icons from "../../constants/icons";
import title from "../../assets/images/title.png";

export let isTimeOut;

export default function Main() {

  const { setScore } = useGlobalContext();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} className="w-full justify-center items-center min-h-[85vh] px-4">
        <Image 
          source={title} 
          style={styles.image} 
          resizeMode="contain"
        />

        <View style={styles.intContainer}>
          <Text style={styles.message}>
            Can you guess the most popular anime on 
            <Text style={styles.highlight}> MyAnimeList? </Text>
            Get ready player!
           </Text>

           <View>
              <ButtonComponent 
                title="Normal mode" 
                icon={icons.game} 
                onPress={() => {
                  router.push("game");
                  isTimeOut = false;
                  setScore(0);
                }} 
                size={60} 
                color="#00C6CF"
              />

              <ButtonComponent 
                title="Beat the clock mode" 
                icon={icons.clock} 
                onPress={() => {
                  router.push("game");
                  isTimeOut = true;
                  setScore(0);
                }} 
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
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  image: {
    width: "100%",
    height: "20%",
  },
  intContainer: {
    padding: 20,
    alignItems: "center"
  },
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
    textAlign: "center",
    fontFamily: "VarelaRound"
  },
  highlight: { color: "#00C6CF" }
});
