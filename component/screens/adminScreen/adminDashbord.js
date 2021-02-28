import  React from 'react';
import {View, StyleSheet, Alert} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon, Title  } from 'native-base';
import { TextInput,  } from 'react-native-paper';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
// import Dialog, { DialogContent } from 'react-native-popup-dialog';

    
function companyDashbord({route, navigation}) {
    const {email,_name, address, number} = route.params


    function LogOut(){
        auth().signOut().then(() => {
            // Sign-out successful.
            console.log("Sign Out")
            navigation.navigate("adminLogin")
          }).catch((error) => {
            // An error happened.
            console.log(error)
          }); 
    }
    function ManageActivity(){
      database().ref('Users').child("Students")
      .once('value', function(data){
       data.forEach((childSnapshot) => {
         var childData = childSnapshot.val();
         var name = childData.name
         var email = childData.email 
         var rollNumber = childData.rollNumber
         var marks = childData.marks
         console.log("Name===>", number)
         navigation.navigate("ManageActivity",{
         name: name,
         email:email,
         rollNumber:rollNumber,
         marks:marks
         })
         });
       })
    }
    return(
        <Container style={{backgroundColor:'black', flex:1}}>
        <Container style={{backgroundColor:'red', flex:1, borderTopRightRadius:80,borderWidth:1,alignItems:'center', justifyContent:'center'}}>
            <Text style={styles.textMain}>WELCOME</Text>
            
        </Container>
        <View >
        <Container style={{backgroundColor:'#fff', flex:1}}>
  
          <Text style={styles.text} >Name: {_name}</Text>
            <Text style={styles.text} >Email:{email} </Text>
            <Text style={styles.text} >Number:{number}</Text>
            <Text style={styles.text} >address:{address}</Text>

            <Button>

            </Button>

  
           
        </Container>
        </View>
      
        
        <Content />
        <Footer>

       <FooterTab>
        
         <Button active onPress={()=>ManageActivity()}>
           <Text>Manage Activities</Text>
         </Button>
         <Button active onPress={()=>LogOut()}>
           <Text>Logout</Text>
         </Button>
       </FooterTab>
     </Footer>
        {/* <Button  mode="outlined" onPress={() => console.log("Hello")}>
         Log Out
     </Button> */}
       
     </Container>
 )
}

const styles = StyleSheet.create({
 textMain:{
     color:'#fece2f',
     fontWeight:'bold'
     ,fontSize:40,
 },
 text:{
     color:'#C44900',
     fontWeight:'bold',
     fontSize:25,
     marginTop:10,
     marginLeft:10,
     justifyContent:'flex-end'

 }
})
   
export default companyDashbord;