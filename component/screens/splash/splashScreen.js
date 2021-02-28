import React from 'react'
import { Title } from 'react-native-paper';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native'

function splashScreen(props){

    setTimeout(() => {
        props.navigation.replace("MianScreen")
    }, 3000);

    return(
        <View style={styles.container}>
            <Image style={styles.main} source={require("../splash/logo.jpg")}/>
        </View>
       
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        width:"70%",
        height: "70%",
        resizeMode:'contain'
        
      
        
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    text:{
        fontSize:40,
        color:'red',
        fontWeight:'bold'
    }
})
export default splashScreen;