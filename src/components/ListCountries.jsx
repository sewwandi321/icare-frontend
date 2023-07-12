import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'

const ListCountries = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >List Countries</Text>
      <TouchableOpacity>
        <Entypo name='list' size={23} />
      </TouchableOpacity>
    </View>
  )
}

export default ListCountries

const styles = StyleSheet.create({
    container:{
        //marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20
        
    },
    title:{
        fontSize:20,
        fontWeight:'500'
    }
})