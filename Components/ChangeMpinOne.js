import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Topbar from '../src/components/Topbar';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MpinTwo from "./ChangeMpinTwo"
import Loader from "./Loder" 
import axios from 'react-native-axios';
import url from "../src/constant/Api.json";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
//import url from "../src/constant/Api.json";


const styles = StyleSheet.create({
    root: { flex: 1,backgroundColor:"#fff" },
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
        elevation: 15,
        borderRadius: 15,
        marginHorizontal: 15,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 60,
    }
});

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


const Confirmpin = ({navigation}) => {
    const [value, setValue] = useState('');
   const [showone, setShowone] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [people, setPeople] = useState([
        { name: "Know your inverstent risk", key: "1", type: "Edit",nav:"risk" },
        
    
      ]);

    if(value.length > 3){
        navigation.navigate("Mpinthree")
        }


      const handleMpin = () => {
     setShowone(true)
    axios
        .post(url.encryptedJWT, {
            headers: {
                "Authorization": "Bearer " + "GR9ZfVBgMR0AreMtBbaujULOVnjl"
            },
           "GUID":"E7E683DE-15F4-4E72-BF85-1D371E8F866B",
           "UserId":"663706",
           "OldPasscode":"1111",
           "NewPasscode":"1112",
           "ConfirmPasscode":"1112",
           "Mode":"MP", 
           "Source":"IS"
        },


        )
        .then(response => {
            console.log("response", response.status)
            if(response.status == 200) {

                axios
                    .post(url.baseUrl + "changepass", {

                        body: response.data,
                        headers: {
                            "Authorization": "Bearer GR9ZfVBgMR0AreMtBbaujULOVnjl"
                        },

                    },

                    )
                    .then(response => {
                        console.log("response main", response)
                         setShowone(false)
                        navigation.navigate("Mpinthree")

                    })
                    .catch(error => {
                        console.log("error", error)
              
                    });

            }

            else {
                console.log("error")
            }

        })
        .catch(error => {
            // () => navigation.navigate("Cpfour")

            console.log("error",error )

        });

}
    

    return (<>
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
            <Loader visible={showone}   />
    </>)
}



const ChangeMpinOne = ({navigation}) => {
    const [value, setValue] = useState('');
    const [show,setShow] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
      
    return (<>
            <SafeAreaView style={styles.root}>
            <Topbar navigation={navigation} title="Change Mpin" />
            <View style={styles.cellbox}>
                <Text style={{ fontWeight: '600', marginBottom: 5 }}>Old MPIN</Text>

                <Oldpin />
                <TouchableOpacity onPress={()=>setShow(true)}>

                <Text  style={{ fontWeight: '600', marginTop: 8, color: '#FA9000', fontSize: 16, fontWeight: '700' }}>Forgot current Mpin?</Text>
                </TouchableOpacity>
             
                <Text style={{ fontWeight: '600', marginTop: 10, marginBottom: 5 }}>New MPIN</Text>

                <Newpin />
                <Text  style={{ fontWeight: '600', marginTop: 10, marginBottom: 5 }}>Confirm New MPIN</Text>
                <Confirmpin navigation={navigation} />


            </View>

        </SafeAreaView>
        <MpinTwo visible={show} closeCallback={()=>setShow(false)}/>

        </>
);
};

export default ChangeMpinOne;