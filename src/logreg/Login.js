import React ,{useState } from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
// import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

import {
    IP
  } from "../actions/types";

const baseUrl = IP;

export default class Login extends React.Component{

    constructor (props) {
        super(props);
        this.state={
            email:'',
            password:'',
            error:''
        }
        this.login = this.login.bind(this); // you need this to be able to access state from login
    }

    login() {
        console.log('your email is', this.state.email);
        console.log('your password is', this.state.password);

        const email = this.state.email;
        const password = this.state.password;

        const config = {
            headers: {
                "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({ email, password });
            axios
            .post(baseUrl+'acc/api/auth/login', body, config)
            .then((res) => {
                if ((res.data.error = "None")) {
                    console.log(res.data);
                    // move to the next page
                    // TOKEN = res.data.token;
                    this.props.navigation.navigate('Root', {
                        token: res.data.token,
                        user_id: res.data.user,
                    });
                    // this.navigation.navigate('Started');
                } else {
                    this.state.error = "Invalid email or password";
                    this.state.password = "";
                    this.state.email = "";

                }
            })
            .catch((err) => {});
        
    }

    render(){
        const {navigate} = this.props.navigation

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
                    we make yor life easier
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
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        onChangeText={(email) => {
                            this.setState({email})
                        }}
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
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput onChangeText={(password) => {
                            this.setState({password})
                        }}
                        placeholder="Password"
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text 
                    onPress={this.login}
                    style={{
                        color:"white",
                        // fontFamily:"SemiBold"
                    }}>Already a member</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    // fontFamily:"SemiBold",
                    paddingVertical:30
                }}>New User</Text>

                <Text 
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    // fontFamily:"SemiBold",
                    paddingVertical:30
                }}>{this.state.error}</Text>
            </View>
        )
    }
}