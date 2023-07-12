import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LatoText from '../components/LatoText'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { widthPercentageToDP } from 'react-native-responsive-screen'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

import axios from 'axios';

import {
    TOKEN
  } from "../actions/types";

const baseUrl = 'http://192.168.1.100:8000/';

export const tokenConfig = (getState) => {
    const token = getState;

    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    
      if (token) {
        config.headers["Authorization"] = `Token ${token}`;
      }
    
      return config;
    };

class Started extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: "",
            token: this.props.route.params.token
        }
    }

    pill_go = () => {
        // this.props._setListData([...this.props.dataList, { image: this.state.selectedImage, description: this.state.text }])
        this.props.navigation.navigate("Home_pill",{
            token:this.props.route.params.token,
            user_id:this.props.route.params.user_id
        })
    }

    pres_go = () => {
        // this.props._setListData([...this.props.dataList, { image: this.state.selectedImage, description: this.state.text }])
        this.props.navigation.navigate("Home_pres",{
            token:this.props.route.params.token,
            user_id:this.props.route.params.user_id
        })
    }

    lab_report_go = () => {
        // this.props._setListData([...this.props.dataList, { image: this.state.selectedImage, description: this.state.text }])
        this.props.navigation.navigate("Home_lab_report",{
            token:this.props.route.params.token,
            user_id:this.props.route.params.user_id
        })
    }

    blister_go = () => {
        // this.props._setListData([...this.props.dataList, { image: this.state.selectedImage, description: this.state.text }])
        this.props.navigation.navigate("Home_blister",{
            token:this.props.route.params.token,
            user_id:this.props.route.params.user_id
        })
    }

    chart_go = () => {
        // this.props._setListData([...this.props.dataList, { image: this.state.selectedImage, description: this.state.text }])
        axios
        .get(baseUrl+'ml/lab_report_details/'+this.props.route.params.user_id.id + '/')
            .then((res) => {
                if ((res.data.error = "None")) {
                    // console.log(res.data.cholesterol);
                    this.props.navigation.navigate("Charts",{
                        token:this.props.route.params.token,
                        user_id:this.props.route.params.user_id,
                        dataa:res.data
                    })
                } else {
                    this.state.error = "Invalid data";
                    this.state.password = "";
                    this.state.email = "";

                }
            })
            .catch((err) => {});
        
        
    }

   
    render() {
        // console.log(this.props.route.params.token)
        // console.log(TOKEN)
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: getStatusBarHeight() + 10, paddingHorizontal: 20 }} >
                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center" }} >
                    <LatoText text={"ICARE"} fontSize={28} fontName="Poppins-Bold" marginRight={10} />
                    <FontAwesome5 name="hospital-user" color={"#23527C"} size={26} />
                </View>
                <LatoText text={"Create your own wonders"} color={"#23527C"} fontSize={widthPercentageToDP(5)} marginTop={20} />

                <TouchableOpacity onPress={this.pill_go} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                    <LatoText text={"pill identification"} fontSize={18} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.pres_go} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                    <LatoText text={"priscription identification"} fontSize={18} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.blister_go} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                    <LatoText text={"blister identification"} fontSize={18} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.lab_report_go} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                    <LatoText text={"lab report identification"} fontSize={18} color="#FFF" />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.chart_go} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                    <LatoText text={"lab report charts"} fontSize={18} color="#FFF" />
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={this.props.navigation.navigate("PiCharts")} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                    <LatoText text={"Analize"} fontSize={18} color="#FFF" />
                </TouchableOpacity> */}


                {/* <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }} >
                    <FontAwesome5 onPress={this.pickCamera} name="camera" color={"#23527C"} size={widthPercentageToDP(30)} />
                    <LatoText text={"or"} fontSize={18} />
                    <FontAwesome5 onPress={() => this.pickImage()} name="image" color={"#23527C"} size={widthPercentageToDP(30)} />
                    <LatoText width={"80%"} textAlign="center" text={"Import the backside image of the medicine blister package."} fontSize={18} />
                </View> */}
            </View>
        )
    }
}

export default Started