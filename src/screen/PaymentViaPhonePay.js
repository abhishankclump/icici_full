import React,{useState} from 'react';
import { View, StyleSheet, Text, Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
import Header from '../components/Topbar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import Thankyou from "./ThankyouPageBiller"

const Card = ({navigation}) => {
    //const [checked, setChecked] = React.useState('');
    //const sen = "When you turn 34,the expected value\nof your goal will be"
    const last = "Note:you may take 2 years longer to match your\ngoal"
    const [checked, setChecked] = React.useState('');
    const sen = "ICICI bank itd\nA/C no **************123 "
    const [show,setShow]=useState(false)

    return (

        <>   
        <View> 
          <ScrollView>
          <View style={styles.container}>
          <Header title="Payment via UPI"navigation={navigation} />
      
      </View>

      <View style={{alignItems:'center',marginTop:150}}>
      <Image
                                style={styles.tinyLogo1}
                                source={require('../../assets/img/phonepay.png')}
                            />

      </View>

      <View style={{marginTop:20}}>
          <Text onPress={() => { setShow(true)  }} style={{fontSize:16,color:'black',fontWeight:'bold',textAlign:'center'}}>Open your Phonepay app and complete</Text>
          <Text style={{fontSize:16,color:'black',fontWeight:'bold',textAlign:'center'}}>the payment</Text>

          <View style={{marginTop:20,borderRadius:20,borderColor:'#C0C0C0',borderWidth:.5,padding:20,marginHorizontal:70}}>
              <Text onPress={()=> navigation.navigate('SecondTime')} style={{color:'$C0C0C0',textAlign:'center',fontSize:14}}>Your UPI id:111111112@ybl</Text>
          </View>

          <View style={{marginTop:40,marginHorizontal:20}}>
          <Progress.Bar progress={0.2} width={340} color={'orange'} height={5} backgroundColor={'#FFECD5'} borderWidth={0} />
        </View>

        <View style={{flexDirection:'row',marginLeft:70,marginTop:10}}>
        <Icon name='clock-time-seven-outline' size={18} color={'#C0C0C0'}></Icon>
        <Text style={{color:'#C0C0C0',marginLeft:10}}>Approve payment within 03:00 mins</Text>

        </View>
      </View>

      

     

                        

                       
                            </ScrollView>


                            </View>


      

                

                            <Thankyou visible={show} closeCallback={() => {setShow(false)}} navigation={navigation}/>


        </>
    )
}




const Foliolist = ({navigation}) => {
    // const [show,setShow]=useState(false)

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
                <Card navigation={navigation} /> 
                 {/* {/* <Card /> */}
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
        width: 80,
        height: 80,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Foliolist;
