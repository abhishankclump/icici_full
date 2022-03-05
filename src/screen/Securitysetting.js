import React, {useState} from "react";
import { StyleSheet, Text, View,  FlatList,Button, ScrollView,TouchableOpacity } from "react-native";
import Topbar from "../components/Topbar"
export default function Security({navigation}) {
  const[people, setPeople] = useState([
    {name: "Change password", key: "1",type:"Edit",nav:"Cpone"},
    {name: "Change 4 digit pin", key: "2",type:"Edit",nav:"ChangeMpinOne"},
    {name: "Change Email ID", key: "3",type:"Edit",nav:"Foliolist"},
    {name: "Enable/disable", key: "4",type:"View"},
    {name: "Fingerprint/Face ID", key: "5",type:"Edit",nav:"setFace"},
    {name: "Display theme", key: "6",type:"Edit"},
 
 ]);

 return (<>
   <View style={styles.container}>
    <Topbar title="Security Setting" navigation={navigation} />

    <ScrollView style={{width:"100%",height:"100%"}}>
    <FlatList
      data={people}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.item00}>
          <TouchableOpacity 
            onPress={()=>navigation.navigate(item.nav)}>
         
          <Text style={styles.itemtext}>{item.name}</Text>
          </TouchableOpacity>
          </View>
        <View style={{justifyContent:"center"}}>
         
            <TouchableOpacity 
            onPress={()=>navigation.navigate(item.nav)}
            
            style={{
              borderColor:'darkorange',
              color:'darkorange',
              borderWidth:1,
              borderRadius:22, 
              width:80,
              height:40,
              justifyContent:"center",
              
            }}>
              <Text style={{textAlign:'center',color:"orange",fontWeight:'bold'}}>{item.type}</Text>
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
    marginHorizontal:30,
    marginTop:10,
    borderRadius:13,
    height:100,
    marginBottom:15,
    padding:20,
    
  },
  itemtext:{
    width:"100%",
    backgroundColor:"white",
    fontWeight:'600',
    color:'black',
    fontSize:15,
  },
  item00:{
   width:"70%",
   height:"100%",
   justifyContent:"center",
   fontWeight:'bold'
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