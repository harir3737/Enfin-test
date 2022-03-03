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

const data = {"email":"admin","password":"qwerty"}

const [emailstatus,setEmailStatus] = useState("")

const [passwordstatus,setPasswordStatus] = useState("")

const [wrongemailtext,setWrongEmailText] = useState("")

const [wrongpasswordtext,setWrongPasswordText] = useState('')
 
const [email,setEmail] = useState("")

const [password,setPassword] = useState("")

const checkDetails=()=>{
  if(data["email"]!=email && data["password"]!=password)
  {
    if(email.length==0 && password.length==0){
      setWrongEmailText('')
      setWrongPasswordText(" ")
    }
    else{
    setWrongEmailText("email is invalid")
    setWrongPasswordText("password is incorrect")
    }
  }
  else if(data["email"]==email && data["password"]==password){
    setWrongEmailText('')
    setWrongPasswordText('')
    navigation.navigate('home')
  }
  
}


const emailEmptyValidator=()=>{
  if(!email.trim())
  {
    setEmailStatus("email feild can not be empty")
  }
  else{
    setEmailStatus("")
  }
}

const passwordEmptyValidator = () =>{
  if(!password.trim())
  {
    setPasswordStatus("password feild can not be empty")
  }
  else{
    setPasswordStatus("")
  }
}



  return (
    <KeyboardAvoidingView>
      <View style={styles.vew}>
        <Image source={require('../assets/logo1.jpg')} style={styles.logo} />
        <Text style={styles.welcometxt}>Welcome Back,</Text>
        <Text style={styles.signintocontinue}>Sign into continue</Text>

        <Text style={styles.email}>Email</Text>

        <TextInput style={styles.txtip} onChangeText={(Text)=>{setEmail(Text);emailEmptyValidator()}} onBlur={()=>emailEmptyValidator()}/>
        <Text style={{color:"red",bottom:"7%",right:"18%"}}>{emailstatus}</Text>
        <Text style={{color:"red",bottom:"10%",right:"29%"}}>{wrongemailtext}</Text>


        <Text style={styles.password}>Password</Text>

        <TextInput style={styles.txtip2} onChangeText={(Text)=>{setPassword(Text);passwordEmptyValidator()}} onBlur={()=>passwordEmptyValidator()}/>
        <Text style={{color:"red",bottom:"5%",right:"15%"}}>{passwordstatus}</Text>
        <Text style={{color:"red",bottom:"7%",right:"23%"}}>{wrongpasswordtext}</Text>



        <TouchableHighlight style={styles.touch} onPress={()=>{emailEmptyValidator();checkDetails();passwordEmptyValidator()}}>
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
