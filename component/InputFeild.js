import { View, Text,TextInput,StyleSheet,Dimensions} from 'react-native'
import React from 'react'

const {height,width}=Dimensions.get('window')

const InputFeild = ({style,onBlur,onChangeText,text}) => {
  return (
        <View>
        <Text style={styles.text}>{text}</Text>
        <TextInput style={[style,styles.txtip]} onChangeText={onChangeText} onBlur={onBlur}/>
        </View>
  )
}
const styles=StyleSheet.create({
    txtip: {
        width: width-85,
        borderBottomColor: '#abb0b8',
        borderBottomWidth: 0.9,
    },
    text:{
        marginRight: '70%',
        fontWeight: 'bold',
    }
})

export default InputFeild