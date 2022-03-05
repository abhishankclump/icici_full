/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';
import AntIcon from 'react-native-vector-icons/EvilIcons';
import { RadioButton, Checkbox } from 'react-native-paper';
//import CheckBox from '@react-native-community/checkbox';



const ShareModal = ({ visible, closeCallback, shareOptionCallback, navigation }) => {
    const [checked, setChecked] = React.useState('');
    const [togle, setTogle] = React.useState(false);
    //const [isSelected, setSelection] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)


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
                                
                                <View style={{ justifyContent: 'center', padding:10,alignItems:'center',position:"absolute",alignSelf:"center",backfaceVisibility:"visible" }}>
                            
            

            

                        </View>

                                <View style={{marginTop:20}}>

                                
                            <View style={{ marginTop: 20 }}>
                    
                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', textAlign:'center' }}>One Time (Lumpsum)</Text>
                                    

    
                                <Text style={{ textAlign: 'center', color: '#C0C0C0', fontSize: 14, fontWeight: '400', marginTop: 5 }}>Your transaction was Successful for Dream House</Text>
                                <Text style={{ textAlign: 'center', color: '#C0C0C0', fontSize: 12, fontWeight: '400', marginTop: 5 }}>ID: 123456788 | 12-03-2021.09.30AM | ARN-00201</Text>

                               
                                    <View style={{ flexDirection: 'row',marginTop:20 }}>


                                        <Text style={{ marginLeft:30, fontSize: 14, color: '#C0C0C0', fontWeight: '600' }}>Scheme</Text>
                                        <View style={{marginLeft:220}}>
                                        <Text style={{ fontSize: 14, color: '#C0C0C0', fontWeight: 'bold' }}> Amount</Text>
                                        </View>


                                    </View>

                                    

                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <Text style={{marginLeft:30,color:'darkorange',fontWeight:'bold',fontSize:16}}>Hybrid</Text>
                                        <View style={styles.verticalline}></View>
                                        <Text style={{marginLeft:10,color:'darkorange',fontWeight:'bold',fontSize:16}}>Balance Advantage</Text>
                                            
                                        
                                    </View>

                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <Text style={{marginLeft:30,color:'black',fontWeight:'600',fontSize:16}}>Balanced Advantage Fund</Text>
                                        <Text style={{marginLeft:90,color:'black',fontWeight:'600',fontSize:16}}>₹10,000</Text>

                                    </View>

                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <View style={{borderRadius:20,backgroundColor:'#DCDCD2',marginLeft:30,paddingHorizontal:10}}>
                                        <Text>Direct</Text>
                                        </View>
                                        <View  style={{borderRadius:20,backgroundColor:'#DCDCDC',marginLeft:20,paddingHorizontal:10}}>
                                        <Text>Divided half yearly</Text>
                                        </View>

                                        
                                    </View>

                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <Text style={{marginLeft:30,color:'darkorange',fontWeight:'bold',fontSize:16}}>Hybrid</Text>
                                        <View style={styles.verticalline}></View>
                                        <Text style={{marginLeft:10,color:'darkorange',fontWeight:'bold',fontSize:16}}>Balance Advantage</Text>
                                            
                                        
                                    </View>

                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <Text style={{marginLeft:30,color:'black',fontWeight:'600',fontSize:16}}>Balanced Advantage Fund</Text>
                                        <Text style={{marginLeft:90,color:'black',fontWeight:'600',fontSize:16}}>₹10,000</Text>

                                    </View>

                                    <View style={{flexDirection:'row',marginTop:10}}>
                                        <View style={{borderRadius:20,backgroundColor:'#DCDCD2',marginLeft:30,paddingHorizontal:10}}>
                                        <Text>Direct</Text>
                                        </View>
                                        <View  style={{borderRadius:20,backgroundColor:'#DCDCDC',marginLeft:20,paddingHorizontal:10}}>
                                        <Text>Divided half yearly</Text>
                                        </View>
                                        

                                        
                                    </View>

                                    

                                    
                                   

                                    

                                    <View style={{flexDirection:'row',marginTop:50}}>
                                        <Text style={{fontSize:16,fontWeight:'600',color:'black',marginLeft:30}}>Total</Text>
                                        <Text style={{fontSize:16,fontWeight:'600',color:'black',marginLeft:240}}>₹20,000</Text>
                                    </View>

                                <View style={{flexDirection:'row',marginHorizontal:50,marginTop:30}}>
                                    <Text style={{fontSize:14,color:'#C0C0C0',fontWeight:'bold'}}>You can view transaction history.</Text>
                                    <Text  onPress={()=>navigation.navigate("SecondTime")}style={{fontSize:14,color:'darkorange',fontWeight:'bold'}}>View Here</Text>
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
export default ShareModal;

const styles = StyleSheet.create({

    verticalline: {
        borderLeftColor: 'gray',
        borderLeftWidth: .5,
        height: '100%',
        marginLeft:10
    },
})

