import { useEffect, useState } from "react";
import { View, Text, Alert, ImageBackground, StyleSheet } from "react-native";

import ButtonComponent from "./ButtonComponent";

import img from "../assets/images/eru_smug.png";
import arrowUp from "../assets/icons/up.png";
import arrowDown from "../assets/icons/down.png";

export default function GameItem({ key, title, vsTitle, answer, background, showAnswerState, handleTab }) {

  const [showAnswer, setShowAnswer] = useState(showAnswerState);
  const [titleLength, setTitleLength] = useState(0);

  const handleShowAnswer = () => setShowAnswer(true);

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
        <Text style={styles.subText}>has</Text>

        {showAnswer ? (
          <View style={styles.containerInfo}>
            <Text style={styles.number}>{answer}</Text> 
            <Text style={styles.subText}>Votes currently</Text>
          </View>
        ) : (
          <View style={styles.containerInfo}>
            <ButtonComponent 
              title="Higher" 
              onPress={() => handleTab(true, handleShowAnswer)} 
              icon={arrowUp} 
              size={45} 
              color="#FFFFFF"
            />

            <ButtonComponent 
              title="Lower" 
              onPress={() => handleTab(false, handleShowAnswer)} 
              icon={arrowDown} 
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
    // fontSize: 25,
    textAlign: "center",
    paddingBottom: 2
  },
  containerInfo: {
    paddingHorizontal: 4,
    alignItems: "center"
  },
  subText: {
    color: "#FFFFFF",
    marginTop: 2,
    fontSize: 15
  },
  number: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#00C6CF"
  },
})
