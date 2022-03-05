import * as React from 'react';
import { View, Text } from 'react-native';
import ReadMore from 'react-native-read-more-text';



import {StyleSheet} from 'react-native';



 
const _renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
      Read more
    </Text>
  );
}

const _renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
      Show less
    </Text>
  );
}

const _handleTextReady = () => {
  // ...
}

const Myreadmore = (props) => {

  let text = props.mytext
  

  return (
    <View>
    <View style={styles.cardLabel}>
      <Text style={styles.cardLabelText}>
        Description
      </Text>
    </View>

    <View style={styles.card}>
      <View style={styles.cardBody}>
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={_renderTruncatedFooter}
          renderRevealedFooter={_renderRevealedFooter}
          onReady={_handleTextReady}>
          <Text style={styles.cardText}>
            {text}
          </Text>
        </ReadMore>
      </View>
    </View>
  </View>
  );
}



export default Myreadmore;


const styles =StyleSheet.create({

})
 


