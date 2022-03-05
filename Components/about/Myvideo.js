import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import currVideo from "../../assets/Video/VideoHotel.mp4"
const Myvideo = () => {
  return (
    <View style={{marginTop:20}}>
      <VideoPlayer
        video={currVideo}
        videoWidth={1600}
        videoHeight={1000}
        style={{borderRadius:6}}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Myvideo;
