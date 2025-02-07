// All the functions that interact with the jika api can be found in this file

import { Alert } from "react-native";

import { type } from "../app/(tabs)/settings";

export const getRandomNum = () => {

  let maxNum;

  switch (type) {
    case "filter=airing":
      maxNum = 6;      
      break;
    case "type=movie":
      maxNum = 110;
      break;
    case "type=ova":
      maxNum = 81;
      break;
    default:
      maxNum = 663;
      break;
  }

  const randomNum = Math.floor(Math.random() * maxNum++);
  return randomNum;
}

export const getAnimeItem = async () => {

  // general 663
  // airing 6
  // movie 110
  // ova 81

  const randomPage = getRandomNum();

  try {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?${type}&page=${randomPage}&sfw=true`);
    if (!res.ok) throw new Error(res);

    const json = await res.json();
    const animeArray = json.data;

    const randomAnime = Math.floor(Math.random() * animeArray.length);
    const animeItem = animeArray[randomAnime];

    // console.log(animeItem.images.jpg.large_image_url);

    return animeItem;

  } catch (error) {
    Alert.alert("Error", error.message);
  }
};

export const validateItem = async func => {
  var animeItem;
  // var test = 0;
  
  do {
    animeItem = await func();
    // test++;
  } while (
      animeItem.score === null || 
      animeItem.popularity === null || 
      animeItem.favorites === null
    );

  // console.log("numero de errores encontrados: " , test);

  return animeItem;
};
