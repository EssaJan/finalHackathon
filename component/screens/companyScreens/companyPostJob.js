import React, {useState} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { Form,   } from 'native-base';
import { TextInput, Button  } from 'react-native-paper';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';

function companyPostJob(){
    
    const[jobTitle, setTitle] = useState('')
    const[jobDescription, setJobDes] = useState('')
    const[jobExperience, setExperience] = useState('')
    const[jobCompany, setCompany] = useState('')


    let job={
        title:jobTitle,
        description:jobDescription,
        experience:jobExperience,
        company:jobCompany
    }
   
  

   function postJob(){
    database().ref("Users").child("Jobs").push(job)
    setTitle("")
    setExperience("")
    setJobDes("")
    setCompany("")
    alert("Job Posted")
}
    return(
        <ScrollView>
        <View style={styles.container}>
     
            <View style={styles.main}></View>
            <View style={styles.main1}>
           
            <Text style={{fontSize:30, color:'black', fontWeight:'bold' ,  marginLeft:5, marginRight:5}}>POST A JOB</Text>

                <Form style={styles.form}> 
           <TextInput style={styles.input} label = "Job title" value={jobTitle}  onChangeText={setTitle} outlined keyboardType="email-address" /> 
           <TextInput style={styles.input} label = "jobDescription" value={jobDescription} onChangeText={setJobDes} outlined keyboardType="default"  /> 
           <TextInput style={styles.input} label = "Experience" value={jobExperience} onChangeText={setExperience} outlined keyboardType="phone-pad"  /> 
           <TextInput style={styles.input} label = "Experience" value={jobCompany} onChangeText={setCompany} outlined keyboardType="phone-pad"  /> 
         

           <Button style={{height:'15%',}} mode="contained" onPress={() => postJob()}>
            Post Job
            
        </Button>

            </Form>
         
          
           </View>
            <View style={styles.main2}></View>
        </View>
                </ScrollView>
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

export default companyPostJob;