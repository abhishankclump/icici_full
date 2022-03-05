/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';

import Iconic from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/Ionicons';
import Moon from 'react-native-vector-icons/Feather';
import Switching from 'react-native-vector-icons/Fontisto';
import Linkurl from 'react-native-vector-icons/MaterialIcons';
import Poweroff from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const More = ({ visible, closeCallback, shareOptionCallback }) => {
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
                                height: 300, borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                            }}>
                            
                            <View style={{flexDirection:'row' , justifyContent:'center' , alignItems:'center', marginBottom:20}}>
                                <Text style={{ marginTop: 15, marginHorizontal: 30, textAlign: "center", fontWeight: "700", fontSize: 20, color: 'black' }}>More</Text>
                                <TouchableOpacity onPress={closeCallback} style={{position:'absolute' , right:20 , top:10 , backgroundColor:'#F4F5FA' , justifyContent:'center', alignItems:'center', borderRadius:50 , height:40, width:40, textAlign:'center'}}>
                                <Text style={{fontSize:20, fontWeight:'700' , color:'black'}}>X</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.allrow}>

                            
                            <View style={styles.singlerow}>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><AntDesign size={25} name='user' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>Profile</Text>
                                </View>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><Iconic size={25} name='eye' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>Statement</Text>
                                </View>
                               
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><MaterialCommunityIcons size={25} name='information-variant' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>About us</Text>
                                </View>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><Iconic size={25} name='eye' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>SIP & more</Text>
                                </View>
                            </View>

                            <View style={styles.singlerow}>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><Iconic size={25} name='ios-settings-outline' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>Service</Text>
                                </View>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><Linkurl size={25} name='link' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>NAV & divident</Text>
                                </View>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><Share size={25} name='md-share-social-outline' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,fontWeight:'600' , textAlign:'center' , marginTop:5, color:'black'}}>Share</Text>
                                </View>
                                <View style={styles.item}>
                                    <TouchableOpacity style={styles.singleicon}><Poweroff size={25} name='power-off' color="black" /></TouchableOpacity>
                                    <Text style={{fontWeight:'600' ,textAlign:'center' , marginTop:5, color:'black'}}>Logout</Text>
                                </View>
                            </View>

                            </View>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Modal>
    );
};
export default More;



const styles = StyleSheet.create({
    allrow:{
       
    },
    singlerow:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10,
    },
    item:{
        height:100,
        width:100,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    singleicon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        width:60,
        borderRadius:500,
        elevation:8,
        backgroundColor:'white',
    }
})
