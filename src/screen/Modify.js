import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Header from '../components/Topbar';
import SucessScreen from "./SucessScreen"

import MobileTwo from "../../Components/SelectItemToChange"
const Card = ({navigation}) => {
    const [checked, setChecked] = React.useState('');
    const [show,setShow]=useState(false)
    return (

        <>

        <View style={{borderRadius:12,marginHorizontal:20,elevation:15,backgroundColor:'white',padding:20,marginTop:30}}>
            <View style={{ flexDirection: 'row' }}>
                <Text onPress={()=> navigation.navigate('SelectFolio')} style={{color:'darkorange',fontWeight:'bold',}}>Hybrid</Text>
                <View style={styles.verticalline}></View>
                <Text style={{color:'darkorange',fontWeight:'bold',marginLeft:10}}>Balance Advantage</Text>

                <View style={{}}>
                    <Image
                        style={styles.tinyLogo1}
                        source={require('../../assets/img/group28.png')}
                    />

                </View>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/img/oval.png')}
                    />

                </View>

            </View>

            <View>
                <Text style={{fontSize:12,color:'#C0C0C0',fontWeight:'bold'}}>ICICI Prudrntial</Text>
                <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Balanced Advantage Fund</Text>

            </View>

            <View style={{backgroundColor:'lightgrey',borderRadius:12,width:'70%',marginLeft:10,marginTop:10}}>
                <Text style={{marginLeft:2,color:'black',fontWeight:'bold'}}>Share of total investment: 20%</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,marginTop:10 }}>
                    <View>
                        <Text style={styles.ntone}>Current Value </Text>
                        <Text style={styles.nttwo}>₹ 3,00,000</Text>
                    </View>
                    <View style={styles.verticalline}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.ntone}>1 Day</Text>

                            <Text style={{ color: 'green', fontWeight: '500', marginLeft: 10 }}>+1.6%</Text>
                        </View>
                        <Text style={styles.nttwo}>₹ 4,500</Text>
                    </View>
                    <View style={styles.verticalline}></View>
                    <View style={{ flexDirection: 'column',marginRight:10 }}>
                        <Text style={[styles.ntone, { textAlign: 'right' }]}>XIRR</Text>
                        <Text style={[styles.nttwo, { textAlign: 'right' }]}>10.5%</Text>
                    </View>
                </View>


            </View>

           


            <View style={{borderRadius:12,marginHorizontal:20,elevation:15,backgroundColor:'white',padding:20,marginTop:30}}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{color:'darkorange',fontWeight:'bold',}}>Hybrid</Text>
                <View style={styles.verticalline}></View>
                <Text style={{color:'darkorange',fontWeight:'bold',marginLeft:10}}>Balance Advantage</Text>

                <View style={{}}>
                    <Image
                        style={styles.tinyLogo1}
                        source={require('../../assets/img/group28.png')}
                    />

                </View>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/img/oval.png')}
                    />

                </View>

            </View>

            <View>
                <Text style={{fontSize:12,color:'#C0C0C0',fontWeight:'bold'}}>ICICI Prudrntial</Text>
                <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Balanced Advantage Fund</Text>

            </View>

            <View style={{backgroundColor:'lightgrey',borderRadius:12,width:'70%',marginLeft:10,marginTop:10}}>
                <Text style={{marginLeft:2,color:'black',fontWeight:'bold'}}>Share of total investment: 20%</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,marginTop:10 }}>
                    <View>
                        <Text style={styles.ntone}>Current Value </Text>
                        <Text style={styles.nttwo}>₹ 3,00,000</Text>
                    </View>
                    <View style={styles.verticalline}></View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.ntone}>1 Day</Text>

                            <Text style={{ color: 'green', fontWeight: '500', marginLeft: 10 }}>+1.6%</Text>
                        </View>
                        <Text style={styles.nttwo}>₹ 4,500</Text>
                    </View>
                    <View style={styles.verticalline}></View>
                    <View style={{ flexDirection: 'column',marginRight:10 }}>
                        <Text style={[styles.ntone, { textAlign: 'right' }]}>XIRR</Text>
                        <Text style={[styles.nttwo, { textAlign: 'right' }]}>10.5%</Text>
                    </View>
                </View>


            </View>

            <View style={{borderRadius:30,backgroundColor:'darkorange',padding:15,marginHorizontal:20,marginTop:70}}>
{/* <TouchableOpacity onPress={()=> navigation.navigate('MappedSchemeNext')}> */}
<TouchableOpacity onPress={() => {
                                setShow(true)
                            }}>

<Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:14}}> Map 2 Schemes </Text>


</TouchableOpacity>


</View>

<SucessScreen visible={show} closeCallback={() => {setShow(false)}} navigation={navigation}/>




        </>

        
    )
}




const Foliolist = ({ navigation }) => {
    // const [show, setShow] = useState(false)

    return (
        <View>
            <Header navigation={navigation} title="Modify" />
            <View style={{ backgroundColor: 'white', paddingHorizontal: 5 }}>
                <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '700' }}>Rajesh</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize:14,color:'#C0C0C0' }}>AJDB12N123</Text>
                        <View style={{ borderLeftColor: 'gray', borderLeftWidth: 1, marginHorizontal: 10 }}></View>
                        <TouchableOpacity >

                            <Text style={{ fontSize:14,color:'#C0C0C0' }}>Folio: 123456789</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                
                {/* <Card /> */}
                <Card navigation={navigation} />
            </View>
            {/* <MobileTwo visible={show} closeCallback={() => setShow(false)} navigation={navigation} /> */}
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
        marginTop: -10,
    },
    ntone: {
        fontSize:14,
        color:'#C0C0C0'
    },
    nttwo: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        marginTop: 5,
    },
    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .9,
        height: '80%',
        marginLeft:10
    },
    tinyLogo1:{
        marginLeft:60
    },
    tinyLogo:{
        marginLeft:20
    }

})

export default Foliolist;
