import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InstaScreen extends React.Component{
    render(){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.colorProp}>Instagram</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    colorProp: {
         color: '#F8158D' , fontWeight: 'bold'
    },
})