import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import LatoText from '../components/LatoText'
import { useRoute } from '@react-navigation/native'
//class based

export default class ProfileScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            image: "",
            token: "",
            username: "",
        }
    }

    render(){
        // console.log(this.props)
        // const route = useRoute();
        console.log(this.props.route)
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/prof.jpg')}
                    style={{width:"100%",height:"43%"}}
                />  
                <Text
                 style={{
                     fontSize:30,
                    //  fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >John Doe</Text>

                <Text
                style={{
                    // fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                 
                    <TextInput 
                        placeholder="Age"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="BMI"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Blood Type"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View 
                onPress={()=>this.props.navigation.navigate('AnalysisScreen')}
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <LatoText width={"80%"} textAlign="center" text={"Analyze"} fontSize={18} 
                    onPress={()=>this.props.navigation.navigate('AnalysisScreen')}
                    />
                </View>
            </View>
        )
    }
}