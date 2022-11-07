import { Text,FlatList,TextInput, Button, View, StyleSheet,TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native'
import React, { Component, useState,useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Formular1Detail(props) {

  const data = props.route.params.data;
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState([]) ;
  const [loading, setLoading] = useState(true);


  // const loadComment = () => { 
  //   fetch('http://192.168.25.107:8000/api/Baseball/commentfeed/', {
  //     method: 'GET'
  //    }) 
  //    .then(resp => resp.json())
  //    .then(comment => {
  //       setComent(comment.results)
  //       setLoading(false)
  //    })
  //    .catch(error => Alert.alert('Error', error.message))
  //  }

  // useEffect(() => {
  //    loadComment();
  //   }, [])
    

  // const CommentDelete = (data) =>{
  //   fetch(`http://192.168.25.107:8000/api/predictions/commentfeed${data.id}/`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'aplication/json'
  //     }
  //   })
  // }
  return (
    <View >
      <View style={styles.background}>
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.innerHeaderContainer}>
                <View style={styles.photoContainer}>
                  <View style={styles.innerPhotoContainer}>
                    <TouchableOpacity>
                    <Image
                      style={styles.photo}
                      source={{uri: data.user.image}}/>
                    </TouchableOpacity>
                  </View>
                </View>              
                <View style={styles.info}>
                  <View style={styles.userDetails}>
                    <Text style={styles.userName}>{data.user.first_name}
                      <Text style={styles.userHandleAndTime}>  @{data.user.username} ·{data.timestamp}   :{}</Text>
                      <Text></Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.innerClubContainer}>
                    <TouchableOpacity>
                    <Image
                      style={styles.photo}
                      source={{uri: data.user.Formula1}}/>
                    </TouchableOpacity>
                </View> 
                
              </View>
              <View style={styles.BodyContainer}>
              <View style={styles.tweetBodyContainer}>
                <View style={styles.tweetTextContainer}>
                  <Text style={styles.tweetText}> {data.content}</Text>
                </View>
                <View>
                {data.image !== null ? <Image
                    style={styles.stretch}
                    source={{uri: data.image}}
                    /> : <Image
                    style={{height: "auto"}}
                    source={{uri: data.image}}
                    />}
                </View>
                <View>
                  <View style={styles.tweetActionsContainer}>
                    <TouchableOpacity style={styles.likeButton} onPress={() => setLiked((isLiked) => !isLiked)}>
                    <MaterialCommunityIcons
                      name={liked ? "heart" : "heart-outline"}
                      size={20}
                      color={liked ? "red" : "black"}
                    />
                      <Text style={[styles.likeButtonIcon, {color:"rgb(136, 153, 166)",fontWeight: "bold" }]}>{data.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commentButton}>
                      <MaterialCommunityIcons name="reply" style={styles.commentButtonIcon} size={25} color={'rgb(136, 153, 166)'} />
                      <Text style={styles.commentsCount}>56</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.retweetButton}>
                      {/* <EvilIcons name={'retweet'} size={25} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/> */}
                      <MaterialCommunityIcons name="repeat" size={25} color={'rgb(136, 153, 166)'} />
                      <Text style={[styles.retweetButtonIcon, {color:"rgb(136, 153, 166)",fontWeight:"bold"}]}>0</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.shareButton}>
                      {/* <SimpleLineIcons name={'share'} size={16} color={'rgb(136, 153, 166)'}/> */}
                      <MaterialCommunityIcons name="share-variant" size={16} color={'rgb(136, 153, 166)'} />

                    </TouchableOpacity>
                  </View>
                </View>                  
              </View>
              </View>
           
            </View>
          </View>
          </View>
          <TextInput style={styles.input}
                    label="content"
                    // value={content}
                    mode= 'outlined'
                    multiline
                    numberOfLines={2}
                    placeholder= "Reply"
                    // onChangeText={text => setContent(text)}
                  /> 
      
    </View>
    )
}



const styles = StyleSheet.create({
  background:{
    backgroundColor: "#09899b",
  }, 
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    borderBottomColor: "black",
    // borderBottomWidth: 2,
    paddingBottom:10,
    paddingTop: 5,
    margin:50,
    // marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginLeft: 7.5,
    marginRight: 7.5,
    // flexDirection: "column",
  },
  isReplyContainer: {

    borderColor: "green",
    flexDirection: "row",
    borderWidth: 0,
    height: 20,
    // marginTop: 5
  },
  innerContainer: {
    borderColor: "green",
    flexDirection: "column",
    borderWidth: 0,
    height: "auto",
    // alignItems: 'center',
  },
  photoContainer: {
    borderColor: "yellow",
    flexDirection: "column",
    marginLeft: 10,
    // borderWidth: 1,
  },
  innerPhotoContainer: { 
    // height: 50, 
    borderColor: "black",
    // flexDirection: "row",
    // borderBottomWidth: 1,
    alignItems: "center" ,
  },
  innerClubContainer: { 
    // height: 70,
    borderColor: "black",
    justifyContent: 'flex-start',
    // flexDirection: "row", 
    // borderBottomWidth: 1,
    // alignItems: "center",
    left: 60,
    // borderLeftWidth: 1
  },

  innerHeaderContainer: { 
    // backgroundColor: '#FFf',
    // backgroundColor: '#B6D0E2',
    // borderRadius: 10,
    // alignItems:'center',
    borderColor: "#09899b",
    // borderWidth: 1,
    // borderBottomWidth: 1,
    flexDirection:'row',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    // borderLeftWidth: 1,
    // justifyContent: 'space-between',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginTop: 15
  },
  info: {
    width:'50%',
    // flex: 0.77,
    borderColor: "yellow",
    // flexDirection: "column",
    borderWidth: 0
  },
  userDetails: {
    borderColor: "blue",
    // borderWidth: 1,
    marginBottom: 0,
    // marginTop: 10,
    marginLeft: 10,
  },
  userName: { color: "black", fontWeight: "bold", fontSize:16, },
  userHandleAndTime: {
    // color: "rgb(136, 153, 166)",
    fontWeight: "bold",
    color: "#09899b",
    fontSize:15,
    marginLeft: 5,
    
    fontStyle: 'italic',
  },
  BodyContainer:{
    alignItems: 'center',

  },
  tweetBodyContainer:{
    borderColor: "red", 
    // borderWidth: 1,
    width: '90%',
    justifyContent: 'center',

  },
  tweetTextContainer: { borderColor: "blue", borderWidth: 0, },
  tweetText: { color: "black", paddingRight: 10, fontSize:18,  },
  tweetActionsContainer: {
    borderColor: "blue",
    borderWidth: 0,
    marginTop: 5,
    flexDirection: "row",
    paddingBottom: 5,
    justifyContent: 'space-between',
    borderColor: "#09899b",
    borderTopWidth: 0.3,
    width:"70%",
  },
  commentButton: {
    paddingLeft: 0,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  commentButtonIcon: {
    margin: 0,
    borderColor: "red",
    borderWidth: 0
  },
  commentsCount: {
    position: "absolute",
    left: 27,
    color: "rgb(136, 153, 166)",
  },
  retweetButton: {
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  retweetButtonIcon: {
    position: "absolute",
    left: 27,  
  },
  likeButton: {
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0
  },
  likeButtonIcon: {
    position: "absolute",  
    marginLeft: 3,
    left: 27,
  },
  shareButton: {
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0, 
  },
  stretch: {
      width:"100%",
      height: 250,
      // height: '50%',
      resizeMode: 'cover',
      maxHeight: 500,                         
      // maxWidth: '100%',
      // position: 'relative',
      // aspectRatio: 1, // <-- this
      // resizeMode: 'contain', //optional
      // height: 'auto',
      // resizeMode: 'contain',
      // flex: 1,
      // aspectRatio: 1,
      // height: undefined,
    },
    input:{
      // margin: 10,
      borderColor: "red",
      borderWidth: 2,
      position: "absolute",
      margin: 0,
      flex: 1,
      padding:10,
      alignItems: 'center',
      justifyContent: 'center',
      // marginTop: "90%",
      // marginBottom: 100,
    },
})