/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Modal from 'react-native-modal';


const Cpsix = ({ visible, closeCallback, navigation }) => {
    



    return (
        <Modal
            isVisible={visible}
            statusBarTranslucent
            transparent
            onBackdropPress={closeCallback}
            onBackButtonPress={closeCallback}
            style={{ margin: 0, justifyContent: 'flex-end' }}>
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === 'android' ? undefined : 'position'}
                keyboardShouldPersistTaps="handled">
                <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            height: 'auto',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: "#fff"
                        }}>

                        <View
                            style={{
                                height: 580, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            <View
                                style={{ height: "60%", marginHorizontal: 30, marginTop: 30 , padding:60 }}>
                                <Image
                                    style={{ width: "100%", height: "100%" }}
                                    source={require('../assets/img/passchange.png')}
                                />
                            </View>
                            <Text style={{marginTop:15,marginHorizontal:50,textAlign:"center",fontWeight:"700",height:40,fontSize:20 , color:'black'}}>Successful!</Text>
                            <Text style={{marginTop:1,marginHorizontal:50,textAlign:"center",fontWeight:"600",height:60,fontSize:18}}>Successfully Password Changed</Text>
                           
                            <TouchableOpacity onPress={()=>navigation.navigate("MainScreen")}
                                style={{ height: "8%", marginHorizontal: 30,backgroundColor:"#FA9000" ,marginTop:5,borderRadius:30 }}>
                            <Text style={{marginTop:10,marginHorizontal:50,textAlign:"center",fontWeight:"700",fontSize:18,color:"#fff"}}>Home</Text>
                              
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default Cpsix;


