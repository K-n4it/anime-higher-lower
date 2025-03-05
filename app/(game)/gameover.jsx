import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";

import { useGlobalContext } from "../../context/GlobalProvider";
import { getAnimeItem, validateItem } from "../../service/jikan";
import ButtonComponent from "../../components/ButtonComponent";
import icons from "../../constants/icons";

export default function GameOver() {

  const { score, setScore } = useGlobalContext();
  const [animeImage, setAnimeImage] = useState("");

  useEffect(() => {
    const getAnimeImage = async () => {
      const animeItem = await validateItem(getAnimeItem);
      const animeImage = animeItem.images.jpg.large_image_url;
  
      setAnimeImage(animeImage);
    };

    getAnimeImage();
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{ uri: animeImage }} 
        style={styles.imageContainer} 
        imageStyle={styles.image} 
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.scoreText}>Your Score: </Text>
            <Text style={styles.scoreNumber}>{score}</Text>
            <Text style={styles.messageText}>Message</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <ButtonComponent 
              title="Play again" 
              onPress={() => {
                router.replace("game");
                setScore(0);
              }} 
              icon={icons.game} 
              size={60} 
              color="#FFFFFF"
            />

            <ButtonComponent 
              title="Back to main screen" 
              onPress={() => {
                router.replace("main");
                setScore(0);
              }} 
              icon={icons.back} 
              size={60} 
              color="#FFFFFF"
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    height: "100%",
    backgroundColor: "#0F0F0F"
   },
   imageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  image: { 
    opacity: .6, 
    paddingHorizontal: 4
  },
   container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  infoContainer: {
    marginBottom: 10,
  },
  scoreText: {
    color: "#FFFFFF",
    padding: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "VarelaRound"
  },
  scoreNumber: {
    color: "#1999FF",
    paddingBottom: 20,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "VarelaRound"
  },
  messageText: {
    color: "#FFFFFF",
    paddingBottom: 20,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "VarelaRound"
  }
});
