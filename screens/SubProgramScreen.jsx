import {SafeAreaView, View, Text, Image, StyleSheet, Dimensions,  TouchableOpacity,Button, TouchableWithoutFeedback} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useState, useCallback, useRef} from 'react';

const SubProgram = ({route}) =>{
    console.log("route==>",route.params.subProgram);
    const {_id, duration_indicator, program, title,video_url } = route.params.subProgram

    const playerRef = useRef();

// *********** code youtube doc start ***********
    const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
      console.log("state", state);
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

// *********** code youtube doc end ***********

// const [restart, setRestart] = useState()

  const handleRestart = ()=>{
      playerRef.current.seekTo(0)
  }
const handleLap =async(lap = 10)=>{
    console.log("lap",lap);
    let elapsed = await playerRef.current?.getCurrentTime()
    console.log("elapsed", elapsed);
    playerRef.current.seekTo(elapsed + lap)
}

// const handlePrevious = (event)=>{
//     console.log("handlePrevious");
// }


 return (
    <SafeAreaView>
    <View>
        <Text>{title}</Text>
        <YoutubePlayer
        ref={playerRef}
        height={300}
        play={playing}
        videoId={video_url}
        onChangeState={onStateChange}
  
      />
      <Button title={playing ? "pause" : "play"} style={styles.play} onPress={togglePlaying} />
      <Button title={"restart"} style={styles.restart} onPress={handleRestart}/>
      <View style={styles.nextPreviousBlock}>
      <TouchableWithoutFeedback style={styles.previous} onLongPress={()=>{handleLap(-10)}}>
          <Text style={styles.previousText}>go back 10 sec</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={styles.next} onLongPress={()=>{handleLap()}}>
          <Text style={styles.nextText}>skip 10 sec</Text>
      </TouchableWithoutFeedback>
      </View>
    

    <Text>lalalal</Text>
    </View>
    </SafeAreaView>
 )
}

const styles = StyleSheet.create({
    play : {
     
        
    },
    restart: {
  
        backgroundColor: "red"
    },
    nextPreviousBlock:{
        flexDirection: "row",
        justifyContent: "space-around",
       
    },
    previousText:{
        color: "red"
    },
    nextText:{
        color: "green"
    }
})
export default SubProgram;