import React, { useEffect, useState, useRef } from 'react'
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native'
import { DataTable } from 'react-native-paper';
import database from '@react-native-firebase/database'
import { Item } from 'native-base';




function CompanyFindStudent({route}) {
  
  const {name, email ,marks, rollNumber} = route.params




  const [user, setUser] = useState("")


  return(
<View style={{flex:1, alignItems:'center', justifyContent:'flex-start'}}>
  <View style={{flex:2,}}>
  <Text style={{fontSize:40, color:'#fece2f', fontWeight:'bold'}}>LIST OF STUDENTS</Text>
<Text style={{fontSize:40, color:'red', fontWeight:'bold'}}>NAME: {name}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>ROLL Number: {rollNumber}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>CGPA: {marks}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>EMAIL: {email}</Text>
  </View>

</View>

  )
  
}
export default CompanyFindStudent;