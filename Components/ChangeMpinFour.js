import React, { useState ,useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Topbar from '../src/components/Topbar';
import Mpinfivepopup from './ChangeMpinSuccessfull';
import axios from "react-native-axios"
import url from "../src/constant/Api.json"

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { TextInput } from 'react-native-gesture-handler';


const CELL_COUNT = 4;


const Oldpin = () => {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            name="oldmpin"
            renderCell={({ index, symbol, isFocused }) => (
                <TextInput
                    secureTextEntry
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </TextInput>
            )}
        />
    )
}


const Newpin = () => {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            name="newpin"
            renderCell={({ index, symbol, isFocused }) => (
                <TextInput
                    secureTextEntry
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </TextInput>
            )}
        />
    )
}


const Confirmpin = () => {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    const [Popup, setPopup] = useState(false);


    return (
        <View>

        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            name="confirmpin"
            renderCell={({ index, symbol, isFocused }) => (
                <TextInput
                    secureTextEntry
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </TextInput>


            )}
        />
        {/* <Mpinfivepopup visible={Popup} closeCallback={()=>setPopup(false)} /> */}
        </View>
    )
}



const ChangeMpinFour = ({navigation}) => {
    const [value, setValue] = useState('');

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        // handleSignIn()
    }, [])

    

    const handleSignIn = () => {
        axios
            .post(url.baseUrl + 'changepass',{
                "GUID":"E7E683DE-15F4-4E72-BF85-1D371E8F866B",
                "UserId":"663706",
                "OldPasscode":Valueone.oldPassword,
                "NewPasscode":Valueone.newPassword,
                "ConfirmPasscode":Valueone.confirmPassword,
                "Mode":"MP", 
                "Source":"IS"
            })
            .then(response => {
                () => navigation.navigate("Cpfour")

            })
            .catch(error => {
                () => navigation.navigate("Cpfour")
            });
};

    

    return (
        <SafeAreaView style={styles.root}>
            <Topbar navigation={navigation} title="Change Mpin" />

            <View style={styles.cellbox}>
                <Text style={{ marginHorizontal:30, color: 'black', fontSize: 18, fontWeight: '700', marginBottom: 20 }}>We have sent MPIN to your email address</Text>
                <View style={{ paddingHorizontal: 60, }}>
                    <Text style={{ fontWeight: '600', marginBottom: 5 }}>Old MPIN</Text>

                    <Oldpin />

                    <Text style={{ fontWeight: '600', marginTop: 8, color: '#FA9000', fontSize: 16, fontWeight: '700' }}>Forgot current Mpin?</Text>
                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5 }}>New MPIN</Text>

                    <Newpin />

                    <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5 }}>Confirm New MPIN</Text>

                    <Confirmpin />



                </View>
            </View>

            
        </SafeAreaView>
    );
};

export default ChangeMpinFour;



const styles = StyleSheet.create({
    root: { flex: 1 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: {},
    cell: {
        width: 45,
        height: 45,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 12,

    },
    focusCell: {
        borderColor: '#FA9000',
    },


    cellbox: {
        backgroundColor: 'white',
        elevation: 25,
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 20,
        paddingVertical: 20,
    }
});
