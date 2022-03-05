import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView, TouchableOpacity, Image, Switch } from "react-native";
import Header from '../components/Topbar';
import { RadioButton } from 'react-native-paper';
import * as Progress from 'react-native-progress';
import url from "../constant/Api.json";
import axios from 'react-native-axios';


export default function PollTwo({navigation}) {
    const [checked, setChecked] = React.useState();

    useEffect(() => {
        handleCmsQuiz()
    }, [])
    
    const handleCmsQuiz = () => {
    
    
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer pVunGm65Rgl2mzET5WYl4hXIwGNF");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://apigwu.icicipruamc.com/v1/api/cmsquizzespolls", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        
    
    
    
    
    }
    
    
    
    

    return (

        <View style={styles.container}>
            <Header title="Quiz" navigation={navigation} />
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 12, marginRight: 12 }}>
                <View>
                    <Progress.Bar progress={0.2} width={270} color={'orange'} height={6} backgroundColor={'#FFECD5'} borderWidth={0} />
                </View>
                <Text> 1/5 </Text>
            </View>


            <View style={{ marginHorizontal: 30,}}>

                <Text style={styles.item0}>Who will win IPL cup ?</Text>




                <View style={{ borderRadius: 12, elevation: 10, backgroundColor: 'white', height: 60, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ width: 40, }}>
                            <RadioButton color="orange"

                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Answer</Text>
                    </View>
                </View>

                <View style={{ borderRadius: 12, elevation: 10, backgroundColor: 'white', height: 60, justifyContent: 'center', marginTop: 18 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ width: 40, }}>
                            <RadioButton color="orange"

                                value="first"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Answer</Text>
                    </View>
                </View>


                <View style={{ borderRadius: 12, elevation: 10, backgroundColor: 'white', height: 60, justifyContent: 'center', marginTop: 18 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ width: 40, }}>
                            <RadioButton color="orange"

                                value="first"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Answer</Text>
                    </View>
                </View>


                <View style={{ borderRadius: 12, elevation: 10, backgroundColor: 'white', height: 60, justifyContent: 'center', marginTop: 18 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ width: 40, }}>
                            <RadioButton color="orange"

                                value="first"
                                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Answer</Text>
                    </View>
                </View>




            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignItems: 'flex-end' }}></Text>
                <Text></Text>


            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 18, marginLeft: 25, marginTop: 200 }}>
                <View style={{ width: '50%', marginRight: 10 }}>



                    <TouchableOpacity
                        style={{ height: 50, backgroundColor: "white", marginTop: 10, borderRadius: 30, borderColor: 'darkorange', borderWidth: 1, marginBottom: 12, width: '95%' }}>
                        <Text style={{ marginTop: 7, textAlign: "center", fontWeight: "700", fontSize: 20, color: "darkorange", }}>Back</Text>

                    </TouchableOpacity>

                </View>

                <View style={{ width: '50%', marginRight: 4 }}>

                    <TouchableOpacity onPress={()=>navigation.navigate("serveyOne")}
                        style={{ height: 50, backgroundColor: "orange", marginTop: 10, borderRadius: 30, width: '95%' }}>
                        <Text style={{ marginTop: 7, textAlign: "center", fontWeight: "700", fontSize: 20, color: "#fff" }}>Next</Text>

                    </TouchableOpacity>

                </View>


            </View>





        </View>


    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //height:"100%",
    },
    item0: {
        fontSize: 18,
        marginTop: 11,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 12,
        marginHorizontal: 10
    },
    item: {

        backgroundColor: 'white',
        fontSize: 24,


    },
    nextbtn: {
        color: 'black',
        marginTop: 20,
        borderRadius: 40,
        fontSize: 18,
        backgroundColor: '#FEF4F5',
        height: 50,

        bottom: -250,
        width: '80%',
        marginLeft: 40,
    },
    nextbtn1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        color: '#fff',
        // marginTop: 20,
        borderRadius: 40,
        height: 50,


    },

});