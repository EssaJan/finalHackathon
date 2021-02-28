import React from 'react'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import { Surface, Text, Title, Button } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';


function mainScreen(props){
    return(
       
        <View style={styles.container}>
     
            <View style={styles.main}></View>
            <View style={styles.main1}>
           
            <Text style={{fontSize:30, color:'#fece2f', fontWeight:'bold' ,  marginLeft:5, marginRight:5}}>WELCOME</Text>

                <Form style={styles.form}> 
      
           <Button style={{height:'15%',marginBottom:"5%"}} mode="contained" onPress={() => props.navigation.navigate("adminLogin")}>
            ADMIN
            
        </Button>
        <Button style={{height:'15%', marginBottom:"5%"}} mode="contained" onPress={() => props.navigation.navigate("CompanyLogin")}>
            COMPANY
            
        </Button>
        <Button style={{height:'15%',marginBottom:"5%"}} mode="contained" onPress={() => props.navigation.navigate("StudentLogin")}>
            STUDENT
            
        </Button>
            </Form>
         
          
           </View>
            <View style={styles.main2}></View>
        </View>
            
    )
}const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },
    main:{
        flex:1,
        
    },
    main1:{
        flex:6,
        // backgroundColor:'green'
        marginTop:50
    },
    main2:{
        flex:1,
        // backgroundColor:'orange'
    },
    input:{
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2,
        marginBottom:10,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    form:{
        marginLeft:5,
        marginRight:5
    },
    button:{
        height:'100%'
    }
})


export default mainScreen