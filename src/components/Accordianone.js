import React, { useState } from 'react';
import MainAccordian from "./MainAccordian"
import ShareModal from "./Model"
export default function Accordianone({shareCallback,closeShareModalCallback,shareOptionCallback,isShareModalVisible,navigation}) {
    
    return (<>
       <MainAccordian navigation={navigation} shareCallback={shareCallback}/>
       <ShareModal
            visible={isShareModalVisible}
            shareOptionCallback={shareOptionCallback}
            closeCallback={closeShareModalCallback}
      />
    </>);
}



