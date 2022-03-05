import React,{useState} from 'react';
import {View, Text} from 'react-native';
import MainAccordian from '../components/Accordianone';

const Accordian = ({navigation}) => {
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  console.log("hfhy",isShareModalVisible)
  
  return (
       
      <MainAccordian
      navigation={navigation}
        isShareModalVisible={isShareModalVisible}
        shareCallback={() => {
          setIsShareModalVisible(true);

        }}
        shareOptionCallback={(shareType) => {
          if (shareType === 'share') {
            console.log("321 on")
            actions.getVideoUserList()
            setIsShareModalVisible(false);
          } else {
            setIsShareModalVisible(false);

          }
        }}
        closeShareModalCallback={() => {
          setIsShareModalVisible(false);
        }}
      
      />
  
  );
};

export default Accordian;
