import React, { useEffect, useState, useRef } from 'react'
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native'
import { DataTable } from 'react-native-paper';
import database from '@react-native-firebase/database'
import { Item } from 'native-base';




function SearchJob({route}) {
  
  const {title, description , experience, company} = route.params




  const [user, setUser] = useState("")


  return(
<View style={{flex:1, alignItems:'center', justifyContent:'flex-start'}}>
  <View style={{flex:2,}}>
  <Text style={{fontSize:40, color:'black', fontWeight:'bold', alignItems:'center', justifyContent:'center'}}>Jobs</Text>
<Text style={{fontSize:30, color:'red', fontWeight:'bold'}}>Title: {title}</Text>
<Text style={{fontSize:30, color:'red', fontWeight:'bold'}}>description: {description}</Text>
<Text style={{fontSize:30, color:'red', fontWeight:'bold'}}>Experience: {experience}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>Company: {company}</Text>
  </View>

</View>

  )
  
}
export default SearchJob;