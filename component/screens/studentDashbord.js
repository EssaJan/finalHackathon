import  React from 'react';
import {View, StyleSheet, Alert} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon, Title  } from 'native-base';
import { TextInput,  } from 'react-native-paper';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';


function StudentDashbord({route, navigation}) {
    const {email,_name, marks, course, rollNumber} = route.params

    function LogOut(){
        auth().signOut().then(() => {
          // Sign-out successful.
          console.log("Sign Out")
          navigation.navigate("StudentLogin")
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }

      function findJob(){
        database().ref('Users').child("Jobs")
        .once('value', function(data){
         data.forEach((childSnapshot) => {
           var childData = childSnapshot.val();
           var title = childData.title
           var description = childData.description 
           var experience = childData.experience
           var company= childData.company
           console.log("Name===>", title)
           navigation.navigate("SearchJob",{
           title: title,
           description:description,
           experience:experience,
           company:company
           })
           });
         })
        
      }

    return(
        <Container style={{backgroundColor:'white', flex:1}}>
        <Container style={{backgroundColor:'black', flex:1, borderTopRightRadius:80,borderWidth:1,alignItems:'center', justifyContent:'center'}}>
            <Text style={styles.textMain}>WELCOME</Text>
            
        </Container>
        <View >
        <Container style={{backgroundColor:'#fff', flex:1}}>
  
          <Text style={styles.text} >Name: {_name}</Text>
            <Text style={styles.text} >Email:{email} </Text>
            <Text style={styles.text} >rollNumber:{rollNumber}</Text>
            <Text style={styles.text} >Course:{course}</Text>
            <Text style={styles.text} >marks:{marks}</Text>

  
           
        </Container>
        </View>
      
        

        <Content />
        <Footer>

       <FooterTab>
       
       {/* <Button active onPress={()=>findStudent()}>
           <Text>Find Students</Text>
         </Button> */}
         <Button active onPress={()=>findJob()}>
           <Text>Find a Job</Text>
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

    
export default StudentDashbord
    
