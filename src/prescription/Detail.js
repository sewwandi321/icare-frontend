import React, { Component } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LatoText from '../components/LatoText'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Ionicons from "react-native-vector-icons/Ionicons"
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Audio } from "expo-av"
import { connect } from 'react-redux'
import actions from '../store/actions'
import AntDesign from "react-native-vector-icons/AntDesign"

import * as Speech from 'expo-speech';

class Detail extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            selectedImage: props.route.params.image,
            text: "prescription word "+props.route.params.data.join(" \n "),
            // text:props,
            sound: null
        }
    }

    async componentDidMount() {
      
        // await Audio.setAudioModeAsync({
        //     allowsRecordingIOS: false,
        //     // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        //     playsInSilentModeIOS: true,
        //     // interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        //     shouldDuckAndroid: true,
        //     staysActiveInBackground: true,
        //     playThroughEarpieceAndroid: true
        // })
        // this.sound = new Audio.Sound()

        // const status = {
            // shouldPlay: true
        // }

        // this.sound.loadAsync(require("../../assets/Test.wav"), status, false)

    }
    saveData = () => {
        this.props._setListData([...this.props.dataList, { image: this.state.selectedImage, description: this.state.text }])
        this.props.navigation.navigate("ListScreen_pres",{
            token: this.props.route.params.token,
            user_id: this.props.route.params.user_id
        })
    }

    playSound = async () => {
        console.log('Loading Sound');
        Speech.speak(this.state.text);
        console.log('Playing Sound');
    }


    render() {
        console.log("----------------------------------------------------------")
        // console.log(this.props.route.params.data.predictedout)
        console.log("curr state ",this.state.text)
        console.log("----------------------------------------------------------")
        return (
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ backgroundColor: "white", paddingTop: getStatusBarHeight() + 10, paddingHorizontal: 20, }} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: heightPercentageToDP(100) - getStatusBarHeight() }} >
                    <View style={{ justifyContent: "center" }} >
                        <View style={{ position: "absolute", zIndex: 10 }} >
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                                <Ionicons name="arrow-back" size={35} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center" }} >
                            <LatoText text={"ICARE"} fontSize={28} fontName="Poppins-Bold" marginRight={10} />
                            <FontAwesome5 name="hospital-user" color={"#23527C"} size={26} />
                        </View>
                    </View>

                    <LatoText text={"Medicine Prescription Identifier"} color={"#23527C"} fontSize={widthPercentageToDP(5)} marginTop={20} />

                    <View style={{ alignItems: "center", flex: 1 }} >
                        <Image style={{ width: "100%", height: heightPercentageToDP(30), borderRadius: 20, marginTop: 20 }} source={{ uri: this.props.route.params.image }} resizeMode="stretch" />


                        <View style={{flexDirection:"row", alignItems:"center", marginTop:20}} >
                            <LatoText text={"Read the text loud"} fontSize={20} />
                            <AntDesign onPress={this.playSound} name="play" size={28} style={{marginLeft:10}} color="#23527C" />
                            {/* <LatoText onPress={this.playSound} text={"Play"}color="#23527C" fontName={"Poppins-Bold"}  fontSize={20} marginLeft={15} /> */}
                        </View>
                        <View style={{ width: "100%" }} >
                            <TextInput
                                value={this.state.text}
                                onChangeText={e => this.setState({ text: e })}
                                placeholder={this.props.route.params.data.predictedout}
                                multiline={true}
                                numberOfLines={10}
                                style={{ minHeight: 200, textAlignVertical: 'top', backgroundColor: "#F6F6F6", width: "100%", borderRadius: 12, marginTop: 20, padding: 20 }} />
                        </View>
                        <TouchableOpacity onPress={this.saveData} style={{ width: "100%", height: 50, backgroundColor: "#23527C", marginTop: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }} >
                            <LatoText text={"SAVE"} fontSize={18} color="#FFF" />
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
const mapDispatch = dispatch => {
    return {
        _setListData: payload => dispatch(actions.setDataList(payload))
    }
}

export default connect(state => state, mapDispatch)(Detail)