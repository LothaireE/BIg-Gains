import {  ImageBackground,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    RefreshControl,} from "react-native";
// import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { useState, useEffect } from "react";


// ****************** mon code debut ******************


// export default function HomeScreen() {
//    return (
//     <SafeAreaView style={styles.container}>
//         <View style={styles.containerContent}>
//             <Text>Home screen</Text>
//         </View>  
//         <StatusBar/>
//     </SafeAreaView>

//    )
// }

// const styles = StyleSheet.create({
//     container: {
//         color: "blue",
//         backgroundColor: "red",
//       },
//     containerContent: {
//         backgroundColor: "red"
//     }
// })

// ****************** mon code fin ******************


const AppButton = (props) => {
    return (
      <TouchableOpacity
        onPress={props.handlePress}
        style={[
          // styles.programmes,
          {
            backgroundColor: props.background,
            height: props.height,
          },
        ]}
      >
        <View style={[styles.blocHeader]}>
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.programmeImage}
            resizeMode="cover"
          >
            <Text
              // style={[styles.title, { alignSelf: props.titlePosition }]}
              style={[
                styles.title,
                { alignSelf: props.index % 2 ? "flex-start" : "flex-end" },
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit={true}
            >
              {props.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={[styles.blocDescription, { backgroundColor: "#f8f8f8" }]}>
          <Icon style={styles.icon} type="feather" name={props.icon} />
          <Text
            style={styles.description}
            numberOfLines={1}
            ellipsizeMode="tail"
            selectable={true}
            adjustsFontSizeToFit={false}
          >
            {props.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const HomeScreen = (props) => {
    const { navigation } = props;
    const [data] = useState([
      {
        _id: "609d57d819e6846e473d4fc3",
        name: "Débutant",
        level: 1,
        description: "Commencez tout en douceur!",
        poster_image: "https://i.ibb.co/42gmhCq/MAIN-DEBUTANT.png",
        background: "green",
        titlePosition: "flex-end",
        icon: "chevrons-up",
      },
      {
        _id: "609d582219e6846e473d4fc4",
        name: "Intérmédiaire",
        level: 2,
        description: "Lancez vous des défis et allez plus loin!",
        poster_image: "https://i.ibb.co/s6V5r1d/MAIN-INTERMEDIAIRE.png",
        background: "red",
        titlePosition: "flex-start",
        icon: "activity",
      },
      {
        _id: "609d584019e6846e473d4fc6",
        name: "Avancé",
        level: 3,
        description: "Repoussez vos limites!",
        poster_image: "https://i.ibb.co/D57J8TW/MAIN-AVANCE.png",
        background: "blue",
        titlePosition: "flex-end",
        icon: "heart",
      },
    ]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [itemHeight, setItemHeight] = useState();
    const handlePress = (_id, level, name, background) => {
      navigation.navigate("Sous Programmes", {
        _id: _id,
        level: level,
        name: name,
        mainColor: background,
      });
    };
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
    const onRefresh = () => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#8000ff" style={{ flex: 1 }} />
        ) : (
          <FlatList
            onLayout={(event) => {
              {
                const { x, y, width, height } = event.nativeEvent.layout;
                setItemHeight(height / data.length);
              }
            }}
            contentContainerStyle={{ flexGrow: 1 }}
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={true}
            data={data}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }
            renderItem={({ item, index }) => (
              <AppButton
                height={itemHeight}
                background={item.background}
                title={item.name}
                description={item.description}
                icon={item.icon}
                titlePosition={item.titlePosition}
                index={index}
                handlePress={() =>
                  handlePress(item._id, item.level, item.name, item.background)
                }
                image={item.poster_image}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      padding: 20,
      backgroundColor: "#f0f0f0",
    },
  
    blocHeader: {
      flex: 4,
    },
    blocDescription: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 25,
      color: "white",
      fontWeight: "300",
      margin: 8,
      textTransform: "uppercase",
    },
    description: {
      textAlignVertical: "center",
    },
    icon: {
      marginHorizontal: 8,
    },
    programmeImage: {
      flex: 1,
    },
  });
  
  export default HomeScreen;