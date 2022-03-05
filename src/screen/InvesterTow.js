import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image,Switch } from "react-native";
import Topbar from "../components/Topbar";

import { AppContextProvider,AppConsumer } from './AppContextProvider'
import { BlueGray, LightGreen } from './Themes'

import { useContext } from "react";
//import  from "../../Context/NoteContext";
import { AuthContext } from "../../Context/context";




export default function App({navigation}) {

  //const { toggleTheme } = React.useContext(AuthContext);

  

  const [people, setPeople] = useState([
    { name: "Manual dark mode", key: "1", type: "Edit" },
    { name: "Dark mode based on os", key: "2", type: "Edit" },


  ]);
  return (<>

    <View style={styles.container}>
      <Topbar navigation={navigation} title="Mode" />
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <View style={{ marginHorizontal:20 ,height: 300 }}
        >
        <View style={{flexDirection:'row' , justifyContent:'center' , marginTop:25}}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/img/groupCopy.png')}
          />
        </View>
        </View>
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.item00}>
              <TouchableOpacity
                onPress={()=>navigation.navigate("risk")}

                  >
                <Text style={styles.itemtext}>{item.name}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: "center" }}>

                <TouchableOpacity
                 style={{
                  borderColor: '#ECC816',
                  color: '#ECC816',
               
                  borderRadius: 22,
                  width: 60,
                  height: 30,
                  justifyContent: "center"
                }}>
                   <Switch
                    //onValueChange={}
                    //value={}
                   //onPress={toggleTheme()}

            
            />
                </TouchableOpacity>
              </View>
            </View>

          )}
        />
      </ScrollView>
    </View>
  </>);


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  item:{
    justifyContent:"center",
    backgroundColor: 'white',
    elevation:15,
    flexDirection:'row',
    fontSize:24,
    marginHorizontal:30,
    marginTop:10,
    borderRadius:13,
    height:80,
    marginBottom:15
  },
  itemtext:{
    width:"80%",
    backgroundColor:"white",
    fontWeight:'bold',
    color:'black',
    color:'gray',  
    fontSize:16 
    
  },
  item00:{
   width:"70%",
   height:"100%",
   justifyContent:"center"
  },
  header:{
    width:"100%",
    height:"100%",
    flexDirection:'row',


  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,

  }
});
