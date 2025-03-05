import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

import GameItem from "../../components/GameItem";
import { getAnimeItem, validateItem } from "../../service/jikan";
import { isTimeOut } from "../(tabs)/main";
import { time } from "../(tabs)/settings";

export default function Game() {

    const [animeItems, setAnimeItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCountdownOn, setIsCountdownOn] = useState(false);
    const [timer, setTimer] = useState(time);

    const { score, setScore } = useGlobalContext();

    const addAnimeItem = async () => {

      animeItems.shift();

      const newAnimeItem = await validateItem(getAnimeItem);
      const newAnimeItems = [...animeItems, newAnimeItem];

      setAnimeItems(newAnimeItems);
    };

    const compareNums = async playerAnswer => {

      const isHigher = animeItems[1].score > animeItems[0].score;

      if (playerAnswer !== isHigher) router.replace("gameover");
      else increaseScore();

      addAnimeItem();
    };

    const increaseScore = () => {
      const newScore = score + 1;
      setScore(newScore);
    };

    const handleTab = (playerAnswer, setShowAnswer) => {
      setIsCountdownOn(false);
      try {
        setShowAnswer(true);
        setTimeout(() => {
          compareNums(playerAnswer);
          setTimer(time);
          setIsCountdownOn(true);
        }, 2000);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      const addItemsStart = async () => {
        setAnimeItems([]);

        var newAnimeItem;
        var newAnimeItems = [];

        for (let i = 0; i < 2; i++) {
          newAnimeItem = await validateItem(getAnimeItem);
          newAnimeItems = [...newAnimeItems, newAnimeItem];
        }

        setAnimeItems(newAnimeItems);
      };

      addItemsStart();
      setIsLoading(false);
      setIsCountdownOn(true);
    }, []);

    useEffect(() => {

      let interval = null;
        
      if (isCountdownOn) {
        interval = setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(interval);
      }
      else interval = null;

      if (timer === 0) router.replace("gameover");

    }, [timer, isCountdownOn]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.info}>
          <Text style={styles.infoText}>Score: {score} </Text>
        </View>

        <View style={styles.itemsContainer}>
        {
          animeItems.map((item, index, array) => 
            <GameItem 
              key={item.id} 
              title={item.title} 
              vsTitle={index > 0 && array[index - 1].title} 
              answer={item.score} 
              background={item.images.jpg.large_image_url} 
              showAnswerState={index === 0 ? true : false} 
              handleTab={handleTab}
            />
          )
        }

        </View>

        <View style={styles.indicator}>
          <ActivityIndicator 
            style={styles.activityIndicator} 
            animating={isLoading} 
            size="large" 
          />
          <Text style={[{ 
            display: isLoading ? "none" : "flex"
          }, 
          styles.indicatorText
          ]}>
            {isTimeOut && !isLoading ? timer : "VS"}
          </Text>
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
    width: "100%",
    flex: 1,
    alignItems: "center"
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  itemsContainer: {
    width: "100%",
    top: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 0
  },
  indicator: {
    backgroundColor: "#FFFFFF",
    width: 80,
    height: 80,
    borderRadius: 50,
    top: "37%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  activityIndicator: {
    position: "absolute"
  },
  indicatorText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
