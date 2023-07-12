import * as React from 'react';
import { SafeAreaView, StyleSheet, Button, Text, View } from 'react-native';
import { 
    Avatar,
    Title,
    Caption,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import {
     DrawerContentScrollView,
     DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native'


export function DrawerContent(props){
    const route = useRoute();
    // console.log(route.params.token)
    // console.log(route.params.user_id)

    function chart_go(){
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

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                 <View style={styles.userInfoSection}>
                   <View>
                     <Avatar.Image 
                      source ={require('../images/prof.jpg')}
                      size={50}
                     />
                     <View>
                        <Title style={styles.title}>{route.params.user_id.username}</Title>
                     </View>
                   </View>
                 </View>
                    <Drawer.Section style={styles.bottomDrawerSection}>
                      <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="home-outline"
                             color={color}
                             size={size}
                             />
                         )}
                        label="Home"
                         onPress={() => {props.navigation.navigate('Started',{
                          token: route.params.token,
                          user_id: route.params.user_id
                         })}}
                       /> 
                     </Drawer.Section>

                     <Drawer.Section style={styles.bottomDrawerSection}>
                      <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="account-outline"
                             color={color}
                             size={size}
                             />
                         )}
                        label="Profile"
                         onPress={() => {props.navigation.navigate('ProfileScreen',{
                          token: route.params.token,
                          user_id: route.params.user_id
                         })}}
                       /> 
                     </Drawer.Section>

                     <Drawer.Section style={styles.bottomDrawerSection}>
                      <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="arrow-right-thin-circle-outline"
                             color={color}
                             size={size}
                             />
                          )}
                         label="Analysis"
                          onPress={() => {chart_go}}
                        /> 
                      </Drawer.Section>

                      <Drawer.Section style={styles.bottomDrawerSection}>
                      <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="bookmark-outline"
                             color={color}
                             size={size}
                             />
                         )}
                        label="Bookmarks"
                         onPress={() => {}}
                       /> 
                     </Drawer.Section>

                     <Drawer.Section style={styles.bottomDrawerSection}>
                      <DrawerItem
                         icon={({color, size}) => (
                             <Icon
                             name="settings-helper"
                             color={color}
                             size={size}
                             />
                         )}
                        label="Settings"
                         onPress={() => {}}
                       /> 
                     </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
               <DrawerItem
                 icon={({color, size}) => (
                    <Icon
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                 )}
                 label="Sign Out"
                 onPress={() => {}}
                /> 
            </Drawer.Section>
           
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    drawerSection:{
    marginTop: 15,
    },
    bottomDrawerSection:{
       marginBottom: 15,
       borderTopColor: '#f4f4f4',
       borderTopWidth: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',    
      //justifyContent: 'center',
    },
  });