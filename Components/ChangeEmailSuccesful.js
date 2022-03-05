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

const MobileFive = ({ visible, closeCallback, shareOptionCallback , navigation }) => {
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
                                height: 500, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            <View
                                style={{ height: "60%", marginHorizontal: 30, padding:60 }}>
                                <Image
                                    style={{ width: "100%", height: "100%" }}
                                    source={require('../assets/img/passchange.png')}
                                />
                            </View>
                            <Text style={{marginTop:15,marginHorizontal:50,textAlign:"center",fontWeight:"700",height:40,fontSize:20 , color:'black'}}>Successful!</Text>
                            <Text style={{marginTop:1,marginHorizontal:20,textAlign:"center",fontWeight:"600",height:60,fontSize:18}}>Successfully Email Address changed</Text>
                           
                            

                            <View style={{ flexDirection: 'row', justifyContent:'space-around' ,  marginTop: 10,marginBottom:10,marginHorizontal:20 }}>
                                <TouchableOpacity onPress={closeCallback}
                                    style={{ padding:10,width:170, backgroundColor: "white", borderRadius: 30, borderWidth: 1, borderColor:'#FA9000' , alignItems:'center' , justifyContent: 'center' }}>
                                    <Text style={{  textAlign: "center", fontWeight: "700", fontSize: 18, color:'#FA9000' }}>Continue Editing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate("MainScreen")}
                                    style={{ padding:10,width:170, backgroundColor: "#FA9000", borderRadius: 30, alignItems:'center' , justifyContent: 'center' }}>
                                    <Text style={{  textAlign: "center", fontWeight: "700", fontSize: 20, color: "#fff" }}>Home</Text>
                                </TouchableOpacity>
                            </View>



                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default MobileFive;


