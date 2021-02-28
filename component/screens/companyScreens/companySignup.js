import React,{useState} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { Form,   } from 'native-base';
import { TextInput, Button  } from 'react-native-paper';
import auth from '@react-native-firebase/auth';import database from '@react-native-firebase/database'


function companySignup(props) {
    const [data, setData] = useState({
        validName:true,
        validType:true,
        validNumber:true,
        validAddress:true,
        validemail:true,
        validPassword:true,
        check_textInputChange:false,
        isValidEmail:true,
        isValidPassword:true,

    })

    const[textCompanyName, setCompanyName] = useState('')
    const[textCompanyNumber, setCompanyNumber] = useState('')
    const[textNumberEmployes, setCompanyNumberEmployes] = useState('')
    const [textCompanyAddress, setCompanyAddress ] = useState('')
    const[textCompanyEmail, setCompanyEmail] = useState('')
    const[textComapanyPassword, setCompanyPassword] = useState('')

    function registerCompany(){
        auth().createUserWithEmailAndPassword(textCompanyEmail, textComapanyPassword)
        .then(() => {
            alert("Congrats! now you are registered")
            props.navigation.navigate("CompanyLogin")
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
  
  let Company={
      
      name:textCompanyName,
      number:textCompanyNumber,
      employes:textNumberEmployes,
      address:textCompanyAddress,
      email: textCompanyEmail,
      
      
      
      
    }
   var key =  database().ref("Users").child("Company").push(Company)

    console.log(key)
    setCompanyName('')
    setCompanyNumber('')
    setCompanyNumberEmployes('')
    setCompanyAddress('')
    setCompanyPassword('')
    setCompanyEmail('')
    
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
    const handleValidPhone=(val)=>{
        if(val.length >=11){
            setData({
                ...data,
                validPhone:true
            })
        }else{
            setData({
                ...data,
                validPhone:false
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
    const handleValidAddress=(val)=>{
        if(val.length <= 0){
            setData({
                ...data,
                validAddress:false
            })
        }else{
            setData({
                ...data,
                validAddress:true
            })
        }
    }
    const handleCompanyType=(val)=>{
        if(val.length <= 0){
            setData({
                ...data,
                validType:false
            })
        }else{
            setData({
                ...data,
                validType:true
            })
        }
    }
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.main}></View>
            <View style={styles.main1}>
         
                <Form style={styles.form}>
           <TextInput style={styles.input} label = "Company Name" value={textCompanyName} onChangeText={setCompanyName} outlined  keyboardType="default" keyboardType="default" keyboardType="default" onEndEditing={(e)=>handleValidName(e.nativeEvent.text)} /> 
          {data.validName ? null : <Text style={{color:'red'}}>Name must be 4 character long.</Text>}
           <TextInput style={styles.input} label = "Company Number" value={textCompanyNumber} onChangeText={setCompanyNumber}  outlined  keyboardType="number-pad" onEndEditing={(e)=>handleValidPhone(e.nativeEvent.text)}/> 
           {data.validPhone ? null : <Text style={{color:'red'}}>Phone number must be valid</Text>}
           <TextInput style={styles.input} label = "Type Of Company" value={textNumberEmployes} onChangeText={setCompanyNumberEmployes}  outlined  keyboardType="default" nEndEditing={(e)=>handleValidPhone(e.nativeEvent.text)}/> 
           {data.validAge ? null : <Text style={{color:'red'}}>Company Type can't be empty.</Text>}
           <TextInput style={styles.input} label = "Company Address" value={textCompanyAddress} onChangeText={setCompanyAddress} outlined  keyboardType="email-address" onEndEditing={(e)=>handleValidAddress(e.nativeEvent.text)} /> 
           {data.validAddress ? null : <Text style={{color:'red'}}>please provied actul address.</Text>}
           <TextInput style={styles.input} label = "email" value={textCompanyEmail} onChangeText={setCompanyEmail}  outlined keyboardType="email-address" onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}  /> 
           {data.validemail ? null : <Text style={{color:'red'}}>please provide actuall email format</Text>}
           <TextInput style={styles.input} label = "password" value={textComapanyPassword} onChangeText={setCompanyPassword} outlined keyboardType="default" secureTextEntry={true} onEndEditing={(e)=>handleValidPaasword(e.nativeEvent.text)}/> 
           {data.validPassword ? null : <Text style={{color:'red'}}>password must be 8 character long.</Text>}
           <Button  mode="contained" onPress={() => registerCompany()}>
            SignUp
        </Button>
        <Button  mode="outlined" onPress={() => props.navigation.navigate("CompanyLogin")}>
            Already Registered Company? SignIn
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
 
export default companySignup;