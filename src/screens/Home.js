import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LatoText from '../components/LatoText'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { widthPercentageToDP } from 'react-native-responsive-screen'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: ""
        }
    }

    componentDidMount() {
        const perm = Camera.requestCameraPermissionsAsync();

    }

    pickImage = async () => {

        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        })
        if (!result.cancelled) {
            this.setState({ image: result?.uri })
            this.props.navigation.navigate("Detail", { image: result?.uri })
        }

    };
    pickCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: 'Images',
        })
        console.log(result, "result")
        if (!result.cancelled) {
            this.setState({ image: result?.uri })
            this.props.navigation.navigate("Detail", { image: result?.uri })
        }
        // // No permissions request is necessary for launching the image library
        // const result = await launchCamera({
        //     quality: 1,
        //     mediaType: "photo",
        // });
        // if (result?.didCancel) {

        // } else {

        //     this.setState({ image: result?.assets[0].uri })
        //     this.props.navigation.navigate("Detail", { image: result?.assets[0].uri })
        // }

    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: getStatusBarHeight() + 10, paddingHorizontal: 20 }} >
                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center" }} >
                    <LatoText text={"ICARE"} fontSize={28} fontName="Poppins-Bold" marginRight={10} />
                    <FontAwesome5 name="hospital-user" color={"#23527C"} size={26} />
                </View>
                <LatoText text={"Medicine Blister Package Identifier"} color={"#23527C"} fontSize={widthPercentageToDP(5)} marginTop={20} />
                <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }} >
                    <FontAwesome5 onPress={this.pickCamera} name="camera" color={"#23527C"} size={widthPercentageToDP(30)} />
                    <LatoText text={"or"} fontSize={18} />
                    <FontAwesome5 onPress={() => this.pickImage()} name="image" color={"#23527C"} size={widthPercentageToDP(30)} />
                    <LatoText width={"80%"} textAlign="center" text={"Import the backside image of the medicine blister package."} fontSize={18} />
                </View>


            </View>
        )
    }
}

export default Home