import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
//import Topbar from './Topbar';
//import MobileTwo from "../../Components/SelectItemToChange"
import Header from '../components/Topbar';
// import RadioButtonRN from 'radio-buttons-react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';

const Card = ({ navigation }) => {

    // const data = [
    //     {
    //       label: 'data'
    //      },

    //     ];
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    const sen = "ICICI bank itd\nA/C no **************123 "
    const aco = "ICICI bank itd A/C no\n**************123 "
    const sym = "Common payment for Lumpsum & SIP"
    const word = "Lorem lpsum is simply dummy text of\nthe printing and typesetting industry."
    const heading = "Seprate payments for Lumpsum % SIP"
    // const last = "Note:you may take 2 years longer to match your\ngoal"
    const last = "Using Net Banking / UPI etc., for\nLumpsum and Biller Registration\nfor SIP"
    return (

        <>
            <View style={{ height: Dimensions.get('window').height }}>
                <ScrollView style={{ height: '100%', paddingBottom: 100 }}>
                    <View style={styles.container}>
                        <Header title="Check Out" navigation={navigation} />
                    </View>

                    <View style={{ borderRadius: 12, justifyContent: 'center', padding: 20, marginHorizontal: 20, backgroundColor: '#C0C0C0', marginTop: 10 }}>
                        <Text style={{ textAlign: 'center', color: 'rgb(78, 179, 121)', fontWeight: 'bold' }}>Note: your target will be reached in less time</Text>

                    </View>

                    <View style={{ margin: 20, paddingHorizontal: 10, paddingVertical: 20, borderWidth: 0, elevation: 20, backgroundColor: 'white', borderRadius: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                        <Image
                                style={styles.tinyLogo}
                                source={require('../../assets/img/tethheCopy.png')}
                            />
                        </View>
                        {/* <Text style={{fontSize:16}}>{sen}</Text> */}

                        <Text style={styles.headtwo}>₹2,56,750</Text>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 20 }}>
                            <View >
                                <Text style={{ fontSize: 13 }}>One Time</Text>
                                <Text style={{ fontSize: 10, color: '#C0C0C0' }}>(lumpsum)</Text>
                                <View style={{  marginTop: 10, marginRight: 10 }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>₹ 99,99,99,999</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 1000, borderWidth: 1, marginTop: 40, width: 20, height: 20, alignItems: 'center' }}>
                                <Text>+</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                    <Text style={{ fontSize: 13 }}>Monthly</Text>


                                </View>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 10, color: '#C0C0C0' }}>(SIP month)</Text>
                                </View>
                                <View style={{ marginRight: 10 }}>
                                    <View style={{  marginLeft: 10, marginTop: 10}}>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>₹ 10,00,000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{ marginHorizontal: 30, marginTop: 15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Lumpsum</Text>

                    </View>

                    <View style={{ borderRadius: 12, elevation: 20, backgroundColor: 'white', padding: 10, marginHorizontal: 20, marginTop: 20 }}>

                        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                            <Text style={{ color: 'darkorange', fontWeight: 'bold' }}>Hybrid</Text>
                            <View style={styles.verticalline}></View>

                            <Text style={{ color: 'darkorange', fontWeight: 'bold', marginLeft: 20 }}>Balance Advantage</Text>
                        </View>

                        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12, color: '#C0C0C0', fontWeight: 'bold' }}>ICICI Prudrntial</Text>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Balance Advantage Fund</Text>

                        </View>



                        <View style={{ borderRadius: 12, backgroundColor: '#C0C0C0', width: '40%', padding: 5, marginHorizontal: 10, marginTop: 10 }}>

                            <Text style={{ fontWeight: '500', color: 'black', textAlign: 'center' }}>Divided half yearly</Text>

                        </View>


                        <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                            <Text style={{ fontSize:24, color: 'black', fontWeight: '600' }}>₹10,000</Text>
                            <View style={{ borderRadius: 20, borderColor: 'darkorange', borderWidth: 1, justifyContent: 'center', marginLeft:150, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Edit</Text>
                            </View>

                        </View>

                        <View style={{ borderTopWidth: .5, borderColor: '#C0C0C0', marginTop: 20 }}>

                        </View>


                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20 }}>
                            <Text style={{ color: 'darkorange', fontWeight: 'bold' }}>Hybrid</Text>
                            <View style={styles.verticalline}></View>

                            <Text style={{ color: 'darkorange', fontWeight: 'bold', marginLeft: 20 }}>Balance Advantage</Text>
                        </View>


                        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12, color: '#C0C0C0', fontWeight: 'bold' }}>ICICI Prudrntial</Text>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Balance Advantage Fund</Text>

                        </View>

                        <View style={{ borderRadius: 12, backgroundColor: 'lightgrey', width: '40%', padding: 5, marginHorizontal: 10, marginTop: 10 }}>

                            <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Divided half yearly</Text>

                        </View>


                        <View style={{ marginHorizontal: 10, flexDirection: 'row', marginBottom: 20 }}>
                            <Text style={{ fontSize:24, color: 'black', fontWeight: '600' }}>₹10,000</Text>
                            <View style={{ borderRadius: 20, borderColor: 'darkorange', borderWidth: 1, justifyContent: 'center', marginLeft:150, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Edit</Text>
                            </View>

                        </View>





                    </View>





                    <View style={{ marginHorizontal: 30, marginTop: 15, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>SIP</Text>

                    </View>

                    <View style={{ borderRadius: 12, elevation: 20, backgroundColor: 'white', padding: 10, marginHorizontal: 20, marginTop: 20 }}>

                        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                            <Text style={{ color: 'darkorange', fontWeight: 'bold' }}>Hybrid</Text>
                            <View style={styles.verticalline}></View>

                            <Text style={{ color: 'darkorange', fontWeight: 'bold', marginLeft: 20 }}>Balance Advantage</Text>
                        </View>

                        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12, color: '#C0C0C0', fontWeight: 'bold' }}>ICICI Prudrntial</Text>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Balance Advantage Fund</Text>

                        </View>



                        <View style={{ borderRadius: 12, backgroundColor: 'rgb(207, 204, 202)', width: '40%', padding: 5, marginHorizontal: 10, marginTop: 10 }}>

                            <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Divided half yearly</Text>

                        </View>


                        <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                            <Text style={{ fontSize:24, color: 'black', fontWeight: '600' }}>₹10,000</Text>
                            <View style={{ borderRadius: 20, borderColor: 'darkorange', borderWidth: 1, justifyContent: 'center', marginLeft:150, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Edit</Text>
                            </View>

                        </View>

                        <View style={{ borderTopWidth: .5, borderColor: '#C0C0C0', marginTop: 20 }}>

                        </View>


                        <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 20 }}>
                            <Text style={{ color: 'darkorange', fontWeight: 'bold' }}>Hybrid</Text>
                            <View style={styles.verticalline}></View>

                            <Text style={{ color: 'darkorange', fontWeight: 'bold', marginLeft: 20 }}>Balance Advantage</Text>
                        </View>


                        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 12, color: '#C0C0C0', fontWeight: 'bold' }}>ICICI Prudrntial</Text>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Balance Advantage Fund</Text>

                        </View>

                        <View style={{ borderRadius: 12, backgroundColor: 'silver', width: '40%', padding: 5, marginHorizontal: 10, marginTop: 10 }}>

                            <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Divided half yearly</Text>

                        </View>


                        <View style={{ marginHorizontal: 10, flexDirection: 'row', marginBottom: 20 }}>
                            <Text style={{ fontSize: 24, color: 'black', fontWeight: '600' }}>₹10,000</Text>
                            <View style={{ borderRadius: 20, borderColor: 'darkorange', borderWidth: 1, justifyContent: 'center', marginLeft:150, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 14, color: 'darkorange', fontWeight: 'bold' }}>Edit</Text>
                            </View>

                        </View>





                    </View>













                    <View style={{ borderRadius: 12, elevation: 20, backgroundColor: 'white', padding: 10, marginHorizontal: 20, marginTop: 20 }}>

                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Select SIP Details </Text>


                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 12, color: '#C0C0C0', marginLeft: 40 }}>Start Date</Text>
                            <Text style={{ fontSize: 12, color: '#C0C0C0', marginLeft: 90 }}> End Date</Text>

                        </View>

                        

                            <View style={{}}>

                            <View style={{ flexDirection: 'row',marginTop:10 }}>

                                <View>

                                <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 30,textAlign:'center' }}>01-01-2020</Text>

                                </View>

                                <Image
                                    style={styles.tinyLogo1}
                                    source={require('../../assets/img/shape.png')}
                                />

<Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 30,textAlign:'center' }}>01-01-2020</Text>

<Image
                                    style={styles.tinyLogo1}
                                    source={require('../../assets/img/shape.png')}
                                />

                                

                            </View>

                            


                        </View>







                        <View style={{ flexDirection: 'row' }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                uncheckedColor={'lightgrey'}

                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <View>





                                <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold', marginTop: 10 }}>I would like my first SIP payment to</Text>

                                <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>happen immediately</Text>








                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                boxStyle={ 'red' }
                                uncheckedColor={'lightgrey'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <View style={{}}>

                                <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>Add the top up to achieve your </Text>
                                <Text style={{ marginLeft: 10, fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}>goal faster</Text>








                            </View>

                        </View>






                    </View>








                    <View style={{ borderRadius: 20, borderWidth: 1, borderColor: 'darkorange', marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', padding: 15, backgroundColor: 'darkorange', marginTop: 80 }}>
                        <TouchableOpacity onPress={()=> navigation.navigate('CheckOutOne')}>
                        <Text  style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}>Make Payment </Text>
                        </TouchableOpacity>
                    </View>















                    <View style={{ height: 100, width: 100 }}>

                    </View>
                </ScrollView>
            </View>








        </>
    )
}




const Foliolist = ({ navigation }) => {
    const [show, setShow] = useState(false)

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
                <Card  navigation={navigation} />
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
        fontSize:28,
        fontWeight: '600',
        color: 'black',
        marginTop: 15,
        textAlign: 'center'
    },
    ntone: {
        fontSize: 12,
    },
    nttwo: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500',
        marginTop: 5,

    },
    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .5,
        height: '80%',
        marginLeft: 20
    },
    tinyLogo: {
        width: 56,
        height: 50,
        alignContent: 'center',
        //alignItems:'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //height:"100%",
    },
    tinyLogo1: {
        width: 18,
        height: 20,
       // position:"absolute",
       marginLeft:10
    }
})

export default Foliolist;
