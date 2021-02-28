import React, {useState} from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { Form,   } from 'native-base';
import { TextInput, Button  } from 'react-native-paper';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';

function adminLogin(props) {
    function Signin() {
        auth().signInWithEmailAndPassword(textAdminEmail, textAdminPassword)
        .then((userCredential) => {
            var admin = userCredential.user;
            var email = admin.email
        
            console.log("AdminEmail==>>>",email)
            database().ref('Users').child("Admin").orderByChild('email').equalTo(email).once('value', function(data){
                data.forEach((childSnapshot) => {
                    var childData = childSnapshot.val();
                    var _name = childData.name
                    var address =childData.address
                    var number = childData.number
                    console.log("Data=====>",_name)
                  
                    props.navigation.navigate("adminDashbord",{
                      email:email,
                      _name:_name,
                      address:address,
                      number:number

                 

                      
                })   
                    // ...
                  });
               
       
            
        })
       
    
   
    })
    .catch((error) => {
      alert(error)
    });

        
    setAdminEmail(""),
    setAdminPassword("")
    

        
    }
    

    const[textAdminEmail, setAdminEmail] = useState('')
    const[textAdminPassword, setAdminPassword] = useState('')
    return(
        <ScrollView>
        <View style={styles.container}>
     
            <View style={styles.main}></View>
            <View style={styles.main1}>
           
            <Text style={{fontSize:30, color:'#fece2f', fontWeight:'bold' ,  marginLeft:5, marginRight:5}}>ADMIN SIGN IN TO CONTINUE,</Text>

                <Form style={styles.form}> 
           <TextInput style={styles.input} label = "email"  outlined keyboardType="email-address" value={textAdminEmail} onChangeText={setAdminEmail} /> 
           {/* {data.validEmail ? null : <Text style={{color:'red'}}>please provide actuall email format</Text>} */}
           <TextInput style={styles.input} label = "password"  outlined keyboardType="default" secureTextEntry={true} value={textAdminPassword} onChangeText={setAdminPassword} /> 
            {/* {data.validPassword ? null : <Text style={{color:'red'}}>password must be 8 character long.</Text>} */}
           <Button style={{alignItems:'flex-start'}}  mode="text" onPress={() => console.log('forget Button pressed')}>
            Forgot password

        </Button>
           <Button style={{height:'15%',}} mode="contained" onPress={() => Signin()}>
            SignIn
            
        </Button>
        <Button mode="outlined" onPress={() => props.navigation.navigate("adminSignup")}>
            New User? Register
            
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
export default adminLogin;