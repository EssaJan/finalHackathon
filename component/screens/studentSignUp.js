import React,{useState} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { Form,   } from 'native-base';
import { TextInput, Button  } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'



function Studentsignup(props){
    const [data, setData] = useState({
        validName:true,
        rollNumber:true,
        validMarks:true,
        validemail:true,
        validPassword:true,
        check_textInputChange:false,
        isValidEmail:true,
        isValidPassword:true,

    })



    const[textName, setName] = useState('')
    const[textRoll, setRoll] = useState('')
    const[textMarks, setMarks] = useState('')
    const [textCourse, setCourse ] = useState('')
    const[textemail, setEmail] = useState('')
    const[textPassword, setPassword] = useState('')

    function registerUser(){
        auth().createUserWithEmailAndPassword(textemail, textPassword)
        .then(() => {
            alert("Congrats! now you are registered")
            props.navigation.navigate("StudentLogin")
        // console.log('User account created & signed in!');
        })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
    alert(error)
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
    alert(error)
  });

  let User={
    name:textName,
    rollNumber:textRoll,
    marks:textMarks,
    email: textemail,
    course:textCourse,


   
}
  var key =  database().ref("Users").child("Students").push(User)

console.log(key)
    setName('')
    setRoll('')
    setMarks('')
    setEmail('')
    setPassword('')
    setCourse('')
    
    }
    const handleValidName=(val)=>{
        if(val.trim().length >= 4){
        setData({
            ...data,
            validName:true
        })
        }else{
            setData({
                ...data,
                validName:false
            })
        }
    }
    const handleValidRollNumber=(val)=>{
        if(val.length >=11){
            setData({
                ...data,
                rollNumber:true
            })
        }else{
            setData({
                ...data,
                rollNumber:false
            })
        }
    }
    const validMarks=(val)=>{
        if(val.length >=4){
            setData({
                ...data,
                validMarks:true
            })
        }else{
            setData({
                ...data,
                validMarks:false
            })
        }
    }
    const handleValidEmail=(val)=>{
        if(val.length <=0){
            setData({
                ...data,
                validemail:false
            })
        }else{
            setData({
                ...data,
                validemail:true
            })
        }
    } 

    const handleValidPaasword=(val)=>{
        if(val.length >= 8){
            setData({
                ...data,
                validPassword:true
            })
        }else{
            setData({
                ...data,
                validPassword:false
            })
        }
    }
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.main}></View>
            <View style={styles.main1}>
         
                <Form style={styles.form}>
           <TextInput style={styles.input} label = "Name" value={textName} onChangeText={setName} outlined  keyboardType="default" onEndEditing={(e)=>handleValidName(e.nativeEvent.text)} /> 
          {data.validName ? null : <Text style={{color:'red'}}>Name must be 4 character long.</Text>}
           <TextInput style={styles.input} label = "Roll Number" value={textRoll} onChangeText={setRoll}  outlined  keyboardType="number-pad" onEndEditing={(e)=>handleValidRollNumber(e.nativeEvent.text)} /> 
           {data.validPhone ? null : <Text style={{color:'red'}}>Roll number must be valid</Text>}
           <TextInput style={styles.input} label = "CGPA" value={textMarks} onChangeText={setMarks}  outlined  keyboardType="default" onEndEditing={(e)=>validMarks(e.nativeEvent.text)}/> 
           {data.validAge ? null : <Text style={{color:'red'}}>Marks can't be empty.</Text>}
           <TextInput style={styles.input} label = "Course" value={textCourse} onChangeText={setCourse} outlined  keyboardType="email-address" /> 
           <TextInput style={styles.input} label = "email" value={setEmail} onChangeText={setEmail}  outlined keyboardType="email-address"  onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}/> 
           {data.validemail ? null : <Text style={{color:'red'}}>please provide actuall email format</Text>}
           <TextInput style={styles.input} label = "password" value={textPassword} onChangeText={setPassword} outlined keyboardType="default" secureTextEntry={true} onEndEditing={(e)=>handleValidPaasword(e.nativeEvent.text)}/> 
           {data.validPassword ? null : <Text style={{color:'red'}}>password must be 8 character long.</Text>}
           <Button  mode="contained" onPress={() => registerUser()}>
            SignUp
        </Button>
        <Button  mode="outlined" onPress={() => props.navigation.navigate("StudentLogin")}>
            Already Registered Student? SignIn
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
        // backgroundColor:'blue'
    },
    main1:{
        flex:6,
        // backgroundColor:'green'
        // marginTop:50
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
        marginBottom:5,
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

export default Studentsignup;