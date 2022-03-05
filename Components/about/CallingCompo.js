import React from 'react';
import {View, StyleSheet} from 'react-native';

import Companyoverview from './CompanyOverview';
import Companyglance from './CompanyGlance';
import Ourbusiness from './OurBusiness';
import Leadership from './Leadership';
import Aboutvideo from './AboutVideo';

const Callingcompo = ({compNum}) => {

    if(compNum==1){
        return (
            <View>
                 <Companyoverview />
            </View>
        );
    }
    else if(compNum==2){
        return (
            <View>
                <Companyglance />
            </View>
        );
    }
    else if(compNum==3){
        return (
            <View>
                <Ourbusiness />
            </View>
        );
    }
    else if(compNum==4){
        return (
            <View>
                <Leadership />
            </View>
        );
    }
    else if(compNum==5){
        return (
            <View>
                  <Aboutvideo />
            </View>
        );
    }
    else{
        return null
    }
    
}

const styles = StyleSheet.create({})

export default Callingcompo;
