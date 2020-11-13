import React from 'react';
import { requireNativeComponent, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export default class FaceBookScreen extends React.Component{
    render(){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.colorProp}>FaceBook</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    colorProp: {
         color: '#4064AC' , fontWeight: 'bold'
    },
})