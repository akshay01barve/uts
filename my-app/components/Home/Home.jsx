import { StyleSheet, Text, View, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback, useRef } from "react";
import data from "./Data";




const Home = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const getRandomColor = () => {
    const colors = [
      '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', 
      '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3', 
      '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#CFD8DC'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <View  >
      <View style={{backgroundColor:"#ff1744",marginBottom:15}} >
        <Text style={{fontSize:22,fontWeight:"bold",fontStyle:"italic" ,color:"#fefefe" ,padding:15}} >If You Focus You Will Learn, Without Focusing you can't learn, if You learn You can grow, Without learning you can't grow, if you Grow you can enjoy, without growing you shouldn't enjoy Reapet</Text>
      </View>
      <View style={{display:'flex',flexDirection:"row", justifyContent:"space-between"}}>
        <View><Text>SearchInput</Text></View>
        <View><Text>Filter</Text></View>
      </View>
      <View>
        <ScrollView   showsVerticalScrollIndicator
     >
          {data.map((item, key) => (
            <View  key={item.id}>
            <View style={[ { backgroundColor: getRandomColor() }]} >
            <YoutubePlayer
                height={260}
                width={370}
                videoId={item.video_link}
              />
              <Text>v</Text>
            </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

      {/* <YoutubePlayer
        height={600}
        width={500}
        play={playing}
        // videoId={"fOJlpSioC_U"}
        playList={["fOJlpSioC_U", "9IqlP-XyzyE", "iLWTnMzWtj4"]}
        allowWebViewZoom={true}
        onChangeState={onStateChange}
        webViewStyle={{backgroundColor:"blue"}}        
      /> */}
