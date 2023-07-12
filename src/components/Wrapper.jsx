import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const Wrapper = ({children}) => {
    const [data, setData] = useState([]);


  return (
    
    <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#eff3ff', '#d4defa','#b5c6f7', '#717dac']}
        style={styles.container}
      >       
       {children}
        </LinearGradient>
    </View>
    
  )
}

export default Wrapper

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,        
        //alignItems:'center',
        
    },
    
})