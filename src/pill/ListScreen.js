import React, { Component } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import LatoText from '../components/LatoText'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { widthPercentageToDP } from 'react-native-responsive-screen' 
import { connect } from 'react-redux'

class ListScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.route.params.token,
            user_id: this.props.route.params.user_id
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: getStatusBarHeight() + 10, paddingHorizontal: 20 }} >
                <View style={{ alignSelf: "center", flexDirection: "row", alignItems: "center" }} >
                    <LatoText text={"ICARE"} fontSize={28} fontName="Poppins-Bold" marginRight={10} />
                    <FontAwesome5 name="hospital-user" color={"#23527C"} size={26} />
                </View>
                <LatoText text={"Medicine Pill Identifier"} color={"#23527C"} fontSize={widthPercentageToDP(5)} marginTop={20} />
                <LatoText text={"Recently identified medicines"} fontSize={widthPercentageToDP(4)} marginTop={20} />
                <View style={{ flex: 0.85, }} >
                    {
                        this.props.dataList.length  == 0 && 
                        <View style={{flex:0.8, justifyContent:"center", alignItems:"center"}} >
                            <LatoText text={"No Identifier Available"} />
                            </View>
                    }
                    {
                        this.props.dataList.length > 0 &&
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.props.dataList.reverse()}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity key={index} style={{ width: "100%", height: 120, backgroundColor: "#aaa", borderRadius: 12, padding: 10, flexDirection: "row", marginTop: 15 }} >
                                    <Image style={{ width: 100, height: "100%", borderRadius: 12 }} source={{ uri: item.image }} />
                                    <View style={{ flex: 1, paddingLeft: 10, }} >
                                        <LatoText text={item?.description} />
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    }


                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Started",{
                    token: this.props.route.params.token,
                    user_id: this.props.route.params.user_id.id
                })} style={{ width: 70, height: 70, borderWidth: 1, borderColor: "#23527C", borderRadius: 40, justifyContent: "center", alignItems: "center", alignSelf: "flex-end", top:20 }} >
                    <FontAwesome5 name="camera" color={"#23527C"} size={40} />
                </TouchableOpacity>

            </View>
        )
    }
}

export default connect(state => state)(ListScreen)