import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import Topbar from '../components/Topbar';
import AdmobOne from "../../Components/ActionSheet"
import AdmobTwo from "../../Components/CenterSheet"
// import AdmobThree from "../../Components/FullScreen"



const SetFace = ({ navigation }) => {
    const [show, setShow] = useState(true)
    const [showOne, setShowOne] = useState(false)
    const [showTwo, setShowTwo] = useState(false)



    return (
        <View>
            <Topbar navigation={navigation} title="Set Face ID" />
            <View style={{ backgroundColor: 'orange', paddingHorizontal: 5, marginHorizontal: 30, borderRadius: 35, marginTop: 600 }}>
                <View style={{ paddingHorizontal: 20, marginVertical: 10, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setShowOne(true)}>
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: '700' }}>Set face recognition</Text>

                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ paddingHorizontal: 5, marginTop: 20 }}>
                <View style={{ paddingHorizontal: 20, marginVertical: 10, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setShowTwo(true)}>
                        <Text style={{ fontSize: 18, color: 'orange', fontWeight: '700' }}>Do it later</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <AdmobOne visible={show} closeCallback={() => setShow(false)} navigation={navigation} />
            <AdmobTwo visible={showOne} closeCallback={() => setShowOne(false)} navigation={navigation} />
            {/* <AdmobThree visible={showTwo} closeCallback={() => setShowTwo(false)} navigation={navigation} /> */}


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
        fontSize: 17,
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
        height: '50%',
    }
})

export default SetFace;
