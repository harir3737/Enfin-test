import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import React, {useState,useEffect} from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

import { useSelector,useDispatch } from 'react-redux'
import { change_user } from '../redux/userSlice';


const Login = ({navigation}) => {

const Data={"email":"hari","password":"qwerty"}

const [emailstatus,setEmailstatus]=useState("")
const[passwordstatus,setPasswordstatus]=useState("")
const[wrongemailtext,setWrongemailtext]=useState("")
const[wrongPasswordtext,setWrongpasswordtext]=useState('')

const[allow,setAllow]=useState("")

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const checkDetails=()=>{
  if(Data["email"]!=email)
  {
    if(email.length==0){
      setWrongemailtext('')
    }
    else{
    setWrongemailtext("email is invalid")
    }
  }

  if(Data["password"]!=password)
  {
    if(password.length==0){
      setWrongpasswordtext('')
    }
    else{
    setWrongpasswordtext("password is incorrect")
    }
  }
  else{
    setWrongpasswordtext('')
  }
  
}




const EmptyValidator=()=>{
  if(!email.trim())
  {
    setEmailstatus("email feild can not be empty")
  }
  else{
    setEmailstatus("")
  }
  if(!password.trim())
  {
    setPasswordstatus("password feild can not be empty")
  }
  else{
    setPasswordstatus("")
  }
  
}


  return (
    <KeyboardAvoidingView>
      <View style={styles.vew}>
        <Image source={require('../assets/logo1.jpg')} style={styles.logo} />
        <Text style={styles.welcometxt}>Welcome Back,</Text>
        <Text style={styles.signintocontinue}>Sign into continue</Text>

        <Text style={styles.email}>Email</Text>

        <TextInput style={styles.txtip} onChangeText={(Text)=>setEmail(Text)} onBlur={()=>EmptyValidator()}/>
        <Text style={{color:"red",bottom:"7%",right:"18%"}}>{emailstatus}</Text>
        <Text style={{color:"red",bottom:"10%",right:"29%"}}>{wrongemailtext}</Text>


        <Text style={styles.password}>Password</Text>

        <TextInput style={styles.txtip2} onChangeText={(Text)=>setPassword(Text)} onBlur={()=>EmptyValidator()}/>
        <Text style={{color:"red",bottom:"5%",right:"15%"}}>{passwordstatus}</Text>
        <Text style={{color:"red",bottom:"5%",right:"15%"}}>{wrongPasswordtext}</Text>



        <TouchableHighlight style={styles.touch} onPress={()=>{EmptyValidator();checkDetails();}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableHighlight>

      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  vew: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  touch: {
    width: '80%',
    height: '7%',
    backgroundColor: '#5f3ca3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20%',
  },
  logo: {
    height: '15%',
    width: '15%',
    marginRight: '70%',
    marginTop: '15%',
  },
  txtip: {
    width: '80%',
    borderBottomColor: '#abb0b8',
    borderBottomWidth: 0.9,
    marginBottom: '15%',
  },
  txtip2: {
    width: '80%',
    borderBottomColor: '#abb0b8',
    borderBottomWidth: 0.9,
    marginBottom: '10%',
  },
  email: {
    marginRight: '70%',
    fontWeight: 'bold',
  },
  password: {
    marginRight: '64%',
    fontWeight: 'bold',
  },
  welcometxt: {
    fontSize: 28,
    fontWeight: '400',
    marginRight: '32%',
    marginBottom: '3%',
    color: 'black',
  },
  signintocontinue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: '46%',
    marginBottom: '20%',
  },
});

export default Login;
