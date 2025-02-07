import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

import GameItem from "../../components/GameItem";
import { getAnimeItem, validateItem } from "../../service/jikan";

export default function Game() {

    const [animeItems, setAnimeItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { score, setScore } = useGlobalContext();

    const addAnimeItem = async () => {

      setIsLoading(true);

      animeItems.shift();

      const newAnimeItem = await validateItem(getAnimeItem);
      const newAnimeItems = [...animeItems, newAnimeItem];

      setAnimeItems(newAnimeItems);
      setIsLoading(false);

      // console.log("anime 1: " + newAnimeItem.title);

      // condificiones para que la pantalla se recargue:
      // 1. que el id del anime sea exactamente igual en ambos objetos, lo que indicaría que ambos son el mismo anime
      // 2. que la propiedad score o favorites sea igual a null
    };

    const compareNums = async playerAnswer => {
      // switch case here
      const isHigher = animeItems[1].score > animeItems[0].score;

      // let isHigher;

      // switch (guess) {
      //   case "popularity":
      //     const isHigher = await animeItems[1].popularity > animeItems[0].popularity;
      //     break;
      
      //   default:
      //     break;
      // }

      if (playerAnswer !== isHigher) {
        router.replace("gameover");
      }

      addAnimeItem();
    };

    const increaseScore = () => {
      const newScore = score + 1;
      setScore(newScore);
    };

    const handleTab = async (playerAnswer, setShowAnswer) => {
      try {
        setShowAnswer();
        setTimeout(() => compareNums(playerAnswer), 2000);
        increaseScore();
        // console.log("tipo: ", type, "adivinar: ", guess);
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
        setIsLoading(false);
      };

      // const defineGuess = () => {
      //   let answer;

      //   switch (guess) {
      //     case "popularity":
      //       answer = item.popularity;
      //       break;
        
      //     default:
      //       break;
      //   }
      // };

      addItemsStart();
      // console.log("tipo: ", type, "adivinar: ", guess);
    }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.info}>
          <Text style={styles.infoText}>Score: {score} </Text>
          {/* <Text style={styles.infoText}>High Score: </Text> */}
        </View>

        <View style={styles.itemsContainer}>
        {
          animeItems.map((item, index, array) => 
            <GameItem 
              key={item.id} 
              title={item.title} 
              vsTitle={index > 0 && array[index - 1].title} 
              answer={item.score} 
              // answer={item[guess]} 
              background={item.images.jpg.large_image_url} 
              showAnswerState={index === 0 ? true : false} 
              handleTab={handleTab}
            />
          )
        }

        {/* <GameItem 
            showAnswer={true} 
            title={"random name"} 
            vsTitle={"a"} 
            answer={20}
          />

          <GameItem 
            showAnswer={false} 
            title={"random name"} 
            vsTitle={"d"}
          /> */}
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
          VS
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
    // justifyContent: "center",
    alignItems: "center"
  },
  info: {
    width: "100%",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "flex-start",
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
    // padding: 20,
    width: 80,
    height: 80,
    borderRadius: 50,
    top: "37%",
    // position: "relative",
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
})
