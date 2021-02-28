import React, { useEffect, useState, useRef } from 'react'
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native'
import { TextInput, Button  } from 'react-native-paper';
import database from '@react-native-firebase/database'
import { Item } from 'native-base';




function manageActivity({route}) {
  
  const {name, email ,marks, rollNumber} = route.params

function deleteData(){
    database().ref('Users').child("Students").remove();
console.log("Removed")    
}

  const [user, setUser] = useState("")


  return(
<View style={{flex:1, alignItems:'center', justifyContent:'flex-start'}}>
  <View style={{flex:2,}}>
  <Text style={{fontSize:40, color:'#fece2f', fontWeight:'bold'}}>LIST OF STUDENTS</Text>
<Text style={{fontSize:40, color:'red', fontWeight:'bold'}}>NAME: {name}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>ROLL Number: {rollNumber}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>CGPA: {marks}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>EMAIL: {email}</Text>

<Button style={{height:'5%',marginTop:20}} mode="contained" onPress={() => deleteData()}>
            Delete Data
            
        </Button>
  </View>

</View>

  )
  
}
export default manageActivity;