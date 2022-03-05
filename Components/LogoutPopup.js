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
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const Logoutpopup = ({ visible, closeCallback, shareOptionCallback }) => {
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
                                height: 150, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                paddingHorizontal: 10,

                            }}>
                            <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center'}}>
                                <Text style={{ marginTop: 15, marginHorizontal: 30, textAlign: "center", fontWeight: "700", fontSize: 20, color: 'black' }}>Are you sure you want to logout</Text>
                                <TouchableOpacity onPress={closeCallback} style={{marginRight:20 , marginTop:20 , backgroundColor:'#F4F5FA' , justifyContent:'center', alignItems:'center', borderRadius:50 , height:40, width:40,  marginTop:10 , textAlign:'center'}}>
                                <Text style={{fontSize:20, fontWeight:'700'}}>X</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 30 }}>
                                <TouchableOpacity onPress={closeCallback}
                                    style={{ height: 40, backgroundColor: "white", borderRadius: 30, borderWidth: 1, justifyContent: 'center' }}>
                                    <Text style={{ marginHorizontal: 50, textAlign: "center", fontWeight: "700", fontSize: 20, }}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={closeCallback}
                                    style={{ height: 40, backgroundColor: "orange", borderRadius: 30, justifyContent: 'center' }}>
                                    <Text style={{ marginHorizontal: 50, textAlign: "center", fontWeight: "700", fontSize: 20, color: "#fff" }}>Logout</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};

export default Logoutpopup;
