import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerContent} from './DrawContent';
import AnalysisScreen from './AnalysisScreen';
import ProfileScreen from './ProfileScreen';


import axios from 'axios';
const baseUrl = 'http://192.168.1.100:8000/';



class Drawer extends Component {
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


   
    render() {
        // console.log(this.props.route.params.token)
        const Drawer = createDrawerNavigator();
        return (
          <NavigationContainer>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="AnalysisScreen" component={AnalysisScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
        )
    }
}

export default Drawer