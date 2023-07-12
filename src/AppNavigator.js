import { useRoute, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react'
import Detail from './screens/Detail'
import Home from './screens/Home'
import ListScreen from './screens/ListScreen'
import Sound from './screens/Sound'
import Started from './screens/Started'

import Detail_blister from './blister/Detail'
import Home_blister from './blister/Home'
import ListScreen_blister from './blister/ListScreen'
import Sound_blister from './blister/Sound'

import Detail_pill from './pill/Detail'
import Home_pill from './pill/Home'
import ListScreen_pill from './pill/ListScreen'
import Sound_pill from './pill/Sound'

import Detail_lab_report from './lab_report/Detail'
import Home_lab_report from './lab_report/Home'
import ListScreen_lab_report from './lab_report/ListScreen'
import Sound_lab_report from './lab_report/Sound'

import Detail_pres from './prescription/Detail'
import Home_pres from './prescription/Home'
import ListScreen_pres from './prescription/ListScreen'
import Sound_pres from './prescription/Sound'

import Login from './logreg/Login'
import Register from './logreg/Register'

import Charts from './screens/chart'

// import Drawer from './screens/drawerNav'

import { StyleSheet, Text, View } from 'react-native'
import {DrawerContent} from './screens/DrawContent';
import AnalysisScreen from './screens/AnalysisScreen';
import ProfileScreen from './screens/ProfileScreen';
/*<View style={StyleSheet.container}>
<CustomBtn onPress={() => this.props.navigation.navigate("ListScreen")} title="Demo 1-Bilster Idetifer"/>
</View>*/


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root(){
    const route = useRoute();
    console.log(route.params.token)
    return (
    
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
       <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
       <Drawer.Screen name="AnalysisScreen" component={AnalysisScreen} />
     </Drawer.Navigator>
 
    )
 }
class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                 <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
                    {/* <Stack.Screen name="CustomBtnn" component={CustomBtn} /> */}

                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    
                    <Stack.Screen options={{ headerShown: false}} name="Root" component={Root} />
                    <Stack.Screen options={{title:'Profile'}} name="Profile" component={ProfileScreen} />
                    <Stack.Screen options={{title:'Analysis'}} name="Analysis" component={AnalysisScreen} />

                    <Stack.Screen name="Started" component={Started} />
                    <Stack.Screen name="ListScreen_lab_report" component={ListScreen_lab_report} />
                    <Stack.Screen name="Home_lab_report" component={Home_lab_report} />
                    <Stack.Screen name="Detail_lab_report" component={Detail_lab_report} />

                    <Stack.Screen name="ListScreen_blister" component={ListScreen_blister} />
                    <Stack.Screen name="Home_blister" component={Home_blister} />
                    <Stack.Screen name="Detail_blister" component={Detail_blister} />

                    <Stack.Screen name="ListScreen_pill" component={ListScreen_pill} />
                    <Stack.Screen name="Home_pill" component={Home_pill} />
                    <Stack.Screen name="Detail_pill" component={Detail_pill} />

                    <Stack.Screen name="ListScreen_pres" component={ListScreen_pres} />
                    <Stack.Screen name="Home_pres" component={Home_pres} />
                    <Stack.Screen name="Detail_pres" component={Detail_pres} />

                    <Stack.Screen name="Charts" component={Charts} />

                    <Stack.Screen name="Sound" component={Sound} />
                </Stack.Navigator> 
                
            </NavigationContainer>

            
        )
    }
}

export default AppNavigator