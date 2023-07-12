import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const GradientButton = ({handlePress, text, style, textStyle, color}) => {
    
  return (
    <TouchableOpacity onPress={handlePress} style={style} >
         <LinearGradient                            
                //colors={[MD2Colors.green900, MD2Colors.green800, MD2Colors.green700, MD2Colors.green800, MD2Colors.green900]}
                colors={
                    ['#58618a', '#636c99', '#727caf', '#636c99', '#58618a']
                }
                style={style? style : styles.button}>

                <Text style={textStyle? textStyle: styles.buttonText } >
                    {text}
                </Text>
                </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton

const styles = StyleSheet.create({
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        alignContent:'center',
        //marginHorizontal:10,
        //textAlign:'center'
    },
    button:{
        width:170,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        borderRadius:15

    }
})