import React,{useState} from 'react';
import { View, StyleSheet, Text, Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
import Header from '../components/Topbar';

import Icon from 'react-native-vector-icons/AntDesign';
const Card = ({navigation}) => {
    //const [checked, setChecked] = React.useState('');
    //const sen = "When you turn 34,the expected value\nof your goal will be"
    const last = "Note:you may take 2 years longer to match your\ngoal"
    const [checked, setChecked] = React.useState('');
    const sen = "ICICI bank itd\nA/C no **************123 "
    return (

        <>   
        <View> 
          <ScrollView>
          <View style={styles.container}>
      <Header title="Payment distribution" />
      </View>

      <View style={{marginHorizontal:40,marginTop:20}}>
          <Text style={{fontSize:14,color:'black',fontWeight:'bold',}}>You have select payment method as biller</Text>
          <Text style={{fontSize:14,color:'black',fontWeight:'bold',}}>for your dream house Investment</Text>
          <Text style={{fontSize:16,color:'black',fontWeight:'bold',marginTop:30}}>Bank Account</Text>

      </View>

      <View style={{ alignItems: 'flex-start', marginHorizontal: 30, flexDirection: 'row',borderRadius:20,elevation:20,backgroundColor:'white',padding:20,marginTop:20,marginBottom:20 }}>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../../assets/img/icici.png')}
                            />

                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, marginLeft: 20 }}>{sen}</Text>
                        </View>

                        <View style={{marginHorizontal:30}}>
                            <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>Rajesh</Text>
                        </View>
                        <View style={{marginHorizontal:30,flexDirection:'row',marginTop:10}}>
                            <Text style={{color:'#C0C0C0'}}>AJDB12N123</Text>
                            <View style={styles.verticalline}></View>
                            <Text style={{marginLeft:10,color:'#C0C0C0'}}>Folio: 123456789</Text>

                        </View>

                        <View style={{ alignItems: 'flex-start', marginHorizontal: 30,borderRadius:20,elevation:20,backgroundColor:'white',padding:20,marginTop:20,marginBottom:20 }}>
                            
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>Monthly (SIP)</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginTop:10}}>3 Scheme's</Text>

                                <View style={{ justifyContent: 'center', padding:10,marginLeft:130,paddingHorizontal:30 }}>
                            <Icon name='checkcircle' size={20} color={'limegreen'}></Icon>
            


            

                        </View>
                               

                            </View>
                            <Text style={{ fontSize:25, color: 'black', fontWeight: 'bold',marginBottom:20 }}>₹30,000</Text>
                        </View>



                        <View style={{ alignItems: 'flex-start', marginHorizontal: 30,borderRadius:20,elevation:20,backgroundColor:'white',padding:20,marginTop:10,marginBottom:20 }}>
                            
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>One Time(Lumpsum)</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{marginTop:10}}>2 Scheme's</Text>
                                <View style={{ borderRadius:20, borderColor: 'darkorange', borderWidth: 1, justifyContent: 'center', padding:10,marginLeft:130,paddingHorizontal:30 }}>
                            <Text style={{ fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Pay</Text>
            


            

                        </View>
                        

                            </View>
                            <Text style={{ fontSize:25, color: 'black', fontWeight: 'bold',marginBottom:20 }}>₹10,000</Text>
                        </View>

        

                

                            </ScrollView>


                            </View>


      

                



        </>
    )
}




const Foliolist = ({navigation}) => {
    const [show,setShow]=useState(false)

    return (
        <View>
            {/* <Topbar navigation={navigation} title="Folio list" /> */}
            <View style={{ backgroundColor: 'white', paddingHorizontal: 5 }}>

                {/* <View style={{paddingHorizontal:20, marginVertical:10}}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '700' }}>Rajesh</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 17 }}>AJDB12N123</Text>
                        <View style={{ borderLeftColor: 'gray', borderLeftWidth: 1, marginHorizontal: 10 }}></View>
                        <TouchableOpacity onPress={() => {setShow(true) }}>
                     
                        <Text style={{ fontSize: 17 }}>Share:75%</Text>
                        </TouchableOpacity>

                    </View>
                </View> */}
                {/* <Card /> */}
                <Card />
            </View>
              {/* <MobileTwo visible={show} closeCallback={() =>setShow(false)} navigation={navigation} /> */}
        </View>
    );
}

const styles = StyleSheet.create({

    headone: {
        fontSize: 18,
        color: 'black',
    },
    headtwo: {
        fontSize: 32,
        fontWeight: '600',
        color: 'black',
        marginTop: 15,
        textAlign:'center'
    },
    ntone: {
        fontSize:12,
    },
    nttwo: {
        fontSize:14,
        color: 'black',
        fontWeight: '500',
        marginTop: 5,
        
    },
    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .5,
        height: '100%',
        marginLeft:10
    },
    tinyLogo:{
      width:100,
      height:100,
      alignContent:'center',
      //alignItems:'center',
      justifyContent:'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //height:"100%",
    },
    tinyLogo1: {
        width: 40,
        height: 40
    }
})

export default Foliolist;
