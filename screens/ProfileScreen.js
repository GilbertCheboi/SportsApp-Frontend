import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { Image, Avatar, Divider } from "react-native-elements";
// import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {

    const navigation =useNavigation();

  return (
    <ScrollView>
      <Image
        // source={{ uri: profile ? profile.cover.filename : null }}
        style={styles.cover}
      />
      <Avatar
        rounded
        size="large"
        // source={{
        // //   uri: profile ? profile.avatar.filename : null,
        // }}
        containerStyle={styles.avatar}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Kioko</Text>
        <Text style={styles.username}>@benawamalines</Text>
        <Text style={styles.bio}>Man fro kitui coming to concur nairobi. so help me God. Make you laugh</Text>
        <Text style={styles.location}>
          {/* <EvilIcons name="location" size={16} /> */}
          Kanairo
        </Text>
        <Text style={styles.regDate}>
          <MaterialCommunityIcons name="update" size={16} />Jan 2020
          {/* {" " + moment.unix(profile.regDate).format("MMMM YYYY")} */}
        </Text>
        <Text style={styles.follow}>391
          {/* {followers ? followers.length : 94}{" "} */}
          <Text style={styles.followers}>Followers </Text>291
          {/* {following ? following.length : 7}{" "} */}
          <Text style={styles.following}>Following </Text>
        </Text>
      </View>
      <TouchableOpacity 
      onPress={ () => navigation.navigate('editpr' )}>
      
      <Text style={styles.edit_button}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.button}
        onPress ={ () => navigation.navigate('not')}
      >
        <Text>Get started with FunZone</Text>
      </TouchableOpacity>
      <Divider />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {},
    cover: {
      width: "100%",
      height: 100,
    },
    avatar: {
      marginLeft: 20,
      marginTop: -40,
      borderWidth: 3,
      borderColor: "white",
      borderStyle: "solid",
    },
    profileInfo: {
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    bio: {
      marginTop: 10,
      marginBottom: 10,
      marginRight: 100,
    },
    name: {
      fontSize: 20,
      fontWeight: "900",
      lineHeight: 21,
    },
    username: {
      color: "#657786",
    },
    location: {
      color: "#657786",
    },
    regDate: {
      color: "#657786",
    },
    follow: {
      fontSize: 16,
    },
    followers: {
      marginRight: 10,
    },
    edit_button: {
        backgroundColor: 'red',
    },
  });





// import React, { useContext } from "react";
// import { NavigationEvents } from "react-navigation";
// import {
//   View,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { Text, Image, Avatar, Divider } from "react-native-elements";
// import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
// import ListItem from "../components/ListItem";
// import moment from "moment";
// import { Context as TweetContext } from "../context/TweetContext";
// const ProfileScreen = () => {
//   const { state, fetchProfileTweet } = useContext(TweetContext);
//   const { profile, username, followers, following } = state.user;

//   return (
//     <ScrollView>
//       <NavigationEvents onWillFocus={() => fetchProfileTweet(username)} />
//       <Image
//         // source={{ uri: profile ? profile.cover.filename : null }}
//         style={styles.cover}
//       />
//       <Avatar
//         rounded
//         size="large"
//         source={{
//         //   uri: profile ? profile.avatar.filename : null,
//         }}
//         containerStyle={styles.avatar}
//       />
//       <View style={styles.profileInfo}>
//         <Text style={styles.name}>Kioko</Text>
//         <Text style={styles.username}>@benawamalines</Text>
//         <Text style={styles.bio}>Man fro kitui coming to concur nairobi. so help me God. Make you laugh</Text>
//         <Text style={styles.location}>
//           <EvilIcons name="location" size={16} />
//           Kanairo
//         </Text>
//         <Text style={styles.regDate}>
//           <MaterialIcons name="date-range" size={16} />
//           {" " + moment.unix(profile.regDate).format("MMMM YYYY")}
//         </Text>
//         <Text style={styles.follow}>
//           {followers ? followers.length : 94}{" "}
//           <Text style={styles.followers}>Followers </Text>
//           {following ? following.length : 7}{" "}
//           <Text style={styles.following}>Following </Text>
//         </Text>
//       </View>
//       <Divider />
//       {/* <FlatList
//         data={state.tweet}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() => navigation.navigate("SingleTweet", { item })}
//             >
//               <ListItem
//                 avatar={item.avatar}
//                 _id={item._id}
//                 userId={item.userId}
//                 username={item.username}
//                 name={item.name}
//                 content={item.content}
//                 image={item.img}
//                 timestamp={item.timestamp}
//                 likes={item.likes}
//                 user={state.user}
//               />
//             </TouchableOpacity>
//           );
//         }}
//       /> */}
//     </ScrollView>
//   );
// };
// // ProfileScreen.navigationOptions = {
// //   tabBarOptions: {
// //     showLabel: false,
// //   },
// //   tabBarIcon: <Feather name="mail" size={30} color="#636E72" />,
// // };
// const styles = StyleSheet.create({
//   container: {},
//   cover: {
//     width: "100%",
//     height: 100,
//   },
//   avatar: {
//     marginLeft: 20,
//     marginTop: -40,
//     borderWidth: 3,
//     borderColor: "white",
//     borderStyle: "solid",
//   },
//   profileInfo: {
//     marginLeft: 10,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   bio: {
//     marginTop: 10,
//     marginBottom: 10,
//     marginRight: 100,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "900",
//     lineHeight: 21,
//   },
//   username: {
//     color: "#657786",
//   },
//   location: {
//     color: "#657786",
//   },
//   regDate: {
//     color: "#657786",
//   },
//   follow: {
//     fontSize: 16,
//   },
//   followers: {
//     marginRight: 10,
//   },
//   following: {},
// });
// export default ProfileScreen;