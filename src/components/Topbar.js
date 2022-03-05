import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Iconic from 'react-native-vector-icons/FontAwesome5';
export default function Topbar({title,navigation}) {
    return (<>
    {(title == "Profile")? (
    <View style={styles.h00p}>
          <View style={styles.h01p}>
            <View style={styles.h012Leftp}>
              <TouchableOpacity
               onPress={() => navigation.goBack()}
                style={styles.h0121p}
                >
                <Iconic size={25} name="arrow-left" color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.textp}>
              <Text style={{fontSize: 18, fontWeight: 'bold',color:"#fff"}}>
                {title}
              </Text>
            </View>
          </View>
        </View>
    )
        :
        (
        <View style={styles.h00}>
          <View style={styles.h01}>
            <View style={styles.h012Left}>
              <TouchableOpacity
               onPress={() => navigation.goBack()}
                style={styles.h0121}
                >
                <Iconic size={25} name="arrow-left" color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.text}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {title}
              </Text>
            </View>
          </View>
        </View>
        )
    
    }
     
    </>
   
    )
}
const styles = StyleSheet.create({
    h00: {
      width: '100%',
      height: 85,
      backgroundColor: '#fff',
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 3,
    },
    h00p: {
      width: '100%',
      height: 85,
      backgroundColor: 'darkorange',
      borderBottomColor: 'lightgrey',
    },
    h01: {
      width: '100%',
      height: 80,
    },
    h012Left: {
      position: 'absolute',
      left: 25,
      top: 23,
      width: 40,
      height: 40,
      padding: 5,
      backgroundColor: '#fff',
    },
    h0121: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    text: {
      height: '100%',
      marginHorizontal: 75,
      justifyContent: 'center',
    },

    h01p: {
      width: '100%',
      height: 80,
    },
    h012Leftp: {
      position: 'absolute',
      left: 25,
      top: 23,
      width: 40,
      height: 40,
      padding: 5,
      backgroundColor: 'darkorange',
    },
    h0121p: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor:"darkorange"
    },
    textp: {
      height: '100%',
      marginHorizontal: 75,
      justifyContent: 'center',
      color:"#fff"
    },
  
  });