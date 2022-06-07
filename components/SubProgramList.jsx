import {SafeAreaView, View, Text, Image, StyleSheet, Dimensions,  TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";
// const windowWidth = window.innerWidth;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;




const SubProgramList = (props) => {
    // console.log("props", props);
    const {subProgram, navigation} = props
    console.log("subProgram", subProgram);
    // const navigation = useNavigation()
    const handlePress = (subProgram)=>{
        console.log("subProgram", subProgram);
        navigation.navigate("Sous Programme", {subProgram: subProgram})
    }

    return (
    <TouchableOpacity style={styles.pressZone} onPress={()=>handlePress(subProgram)}>
          <Text style={styles.title} >{subProgram.title}</Text>
            <Image
                    style={styles.poster_image}
                    source={{uri:subProgram.poster_image}}
            />
    </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    pressZone: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 18,
    },

    poster_image: {
        flex: 1,
    // width: width,
    height: width/2,

    // resizeMode : 'contain'
  },


})
export default SubProgramList;

