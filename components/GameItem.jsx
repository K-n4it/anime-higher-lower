import { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import ButtonComponent from "./ButtonComponent";

import icons from "../constants/icons";

export default function GameItem({ key, title, vsTitle, answer, background, showAnswerState, handleTab }) {

  const [showAnswer, setShowAnswer] = useState(showAnswerState);
  const [titleLength, setTitleLength] = useState(0);

  useEffect(() => {
    const checkTitleLength = () => setTitleLength(title.length);

    checkTitleLength();
  }, []);

  return (
    <View style={styles.container}>
      
      <ImageBackground 
        source={{ uri: background }} 
        style={styles.imageContainer} 
        imageStyle={styles.image} 
        resizeMode="cover"
      >

        <Text style={[{ 
          fontSize: titleLength > 25 ? 20 : 25 
        }, 
        styles.title
        ]}>
          {title.length > 35 ? `${title.substring(0, 35)}...` : title}
        </Text>
        <Text style={styles.subText}>has a</Text>

        {showAnswer ? (
          <View style={styles.containerInfo}>
            <Text style={styles.number}>{answer}</Text>
            <Text style={styles.subText}>score currently</Text>
          </View>
        ) : (
          <View style={styles.containerInfo}>
            <ButtonComponent 
              title="Higher" 
              onPress={() => handleTab(true, setShowAnswer)} 
              icon={icons.up} 
              size={45} 
              color="#FFFFFF"
            />

            <ButtonComponent 
              title="Lower" 
              onPress={() => handleTab(false, setShowAnswer)} 
              icon={icons.down} 
              size={45} 
              color="#FFFFFF"
            />
            <Text style={styles.subText}>Votes than {vsTitle}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
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
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 2,
    fontFamily: "Varela"
  },
  containerInfo: {
    paddingHorizontal: 4,
    alignItems: "center"
  },
  subText: {
    color: "#FFFFFF",
    marginTop: 2,
    fontSize: 15,
    fontFamily: "VarelaRound"
  },
  number: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00C6CF"
  },
});
