import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import LatoText from '../components/LatoText'
//class based
import axios from 'axios';
import {
    IP
  } from "../actions/types";

const baseUrl = IP;
export default class Register extends React.Component{
    constructor (props) {
        super(props);
        this.state={
            email:'',
            username:'',
            password_1:'',
            password_2:'',
            error:''
        }
        this.register = this.register.bind(this); // you need this to be able to access state from login
    }

    register() {
        console.log('your email is', this.state.email);
        console.log('your password is', this.state.password_1);

        const email = this.state.email;
        const username = this.state.username;
        const password = this.state.password_1;
        const first_name ="";
        const last_name = "";

        const config = {
            headers: {
                "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({ email, username, password, first_name, last_name });
            axios
            .post(baseUrl+'acc/api/auth/register', body, config)
            .then((res) => {
                if ((res.data.error = "None")) {
                    console.log(res.data);
                    this.props.navigation.navigate('Login')
                } else {
                    this.state.error = "Invalid email or password";
                    this.state.password = "";
                    this.state.email = "";

                }
            })
            .catch((err) => {});
        
    }

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/logimage.png')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                 style={{
                     fontSize:30,
                    //  fontFamily:"SemiBold",
                     alignSelf:"center",
                 }}
                >ICare app</Text>

                <Text
                style={{
                    // fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    We make your life easier
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
                        onChangeText={(email) => {
                            this.setState({email})
                        }}
                        placeholder="Email"
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
                        onChangeText={(username) => {
                            this.setState({username})
                        }}
                        placeholder="username"
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
                        onChangeText={(password_1) => {
                            this.setState({password_1})
                        }}
                        secureTextEntry
                        placeholder="Password"
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
                        onChangeText={(password_2) => {
                            this.setState({password_2})
                        }}
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View 
                // onPress={()=>this.props.navigation.navigate('Login')}
                onPress={this.register}
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <LatoText width={"80%"} textAlign="center" text={"Register"} fontSize={18} 
                    // onPress={()=>this.props.navigation.navigate('Login')}
                    onPress={this.register}
                    />
                </View>
            </View>
        )
    }
}