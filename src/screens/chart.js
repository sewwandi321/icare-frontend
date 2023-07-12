import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import ListCountries from '../components/ListCountries';
import Pie from '../components/Pie';
import Wrapper from '../components/Wrapper';
import React, { Component } from 'react'
import Charts from './Charts';

// import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import axios from 'axios';

const baseUrl = 'http://192.168.1.100:8000/';
class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "",
            sound: null,
            token : this.props.route.params.token,
            user_id : this.props.route.params.user_id,
            resData :this.props.route.params.dataa,
        }
    }
    render() {
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',    
              //justifyContent: 'center',
            },
            header:{
                justifyContent:'center',
                flexDirection:'row'
            }
          });

        // axios
        // .get(baseUrl+'ml/lab_report_details/'+this.props.route.params.user_id.id + '/')
        //     .then((res) => {
        //         if ((res.data.error = "None")) {
        //             console.log(res.data.cholesterol);
        //             this.state.resData = res.data.cholesterol
        //             // this.navigation.navigate('Started');
        //         } else {
        //             this.state.error = "Invalid data";
        //             this.state.password = "";
        //             this.state.email = "";

        //         }
        //     })
        //     .catch((err) => {});

        console.log(this.state.resData.cholesterol)
        return (
            <View style={styles.container}>      
            <Wrapper>
            <StatusBar style="auto" /> 
            <SafeAreaView>
                
                <Pie />
                <ListCountries />
                
                {/* <Charts/> */}
                <View style={{marginBottom:10, marginHorizontal:10 }}>
                <View style={styles.header}>
                    <Entypo name='line-graph' size={23} />
                    <Text style={{fontWeight:'bold', fontSize:25, marginLeft:20,}} >Analyze</Text>
                </View>
                <LineChart
                    // change colors of lines
                    

                    data={{
                    labels: ["1", "2", "3", "4", "5", "6"],
                    legend: ["cholesterol",
                            "HDL",
                            "LDL",
                            "Triglycerides",
                            "Glucose",
                ],
                    datasets: [
                        {
                        data: [
                            this.state.resData.cholesterol[0],
                            this.state.resData.cholesterol[1],
                            this.state.resData.cholesterol[2],
                            this.state.resData.cholesterol[3],
                            this.state.resData.cholesterol[4],
                            this.state.resData.cholesterol[5]
                        ]                
                        },
                        {
                            data: [
                                this.state.resData.HDL[0],
                                this.state.resData.HDL[1],
                                this.state.resData.HDL[2],
                                this.state.resData.HDL[3],
                                this.state.resData.HDL[4],
                                this.state.resData.HDL[5]
                            ]                
                        },
                        {
                            data: [
                                this.state.resData.LDL[0],
                                this.state.resData.LDL[1],
                                this.state.resData.LDL[2],
                                this.state.resData.LDL[3],
                                this.state.resData.LDL[4],
                                this.state.resData.LDL[5]
                            ]
                        },
                        {
                            data: [
                                this.state.resData.TG[0],
                                this.state.resData.TG[1],
                                this.state.resData.TG[2],
                                this.state.resData.TG[3],
                                this.state.resData.TG[4],
                                this.state.resData.TG[5]
                            ]
                        },
                        {
                            data: [
                                this.state.resData.glucose[0],
                                this.state.resData.glucose[1],
                                this.state.resData.glucose[2],
                                this.state.resData.glucose[3],
                                this.state.resData.glucose[4],
                                this.state.resData.glucose[5]
                            ]
                        }


                    ]
                    }}
                    width={Dimensions.get("window").width*0.95} // from react-native
                    height={220}
                    //yAxisLabel="$"
                    //yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    // backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#717dac",
                    backgroundGradientTo: "#d1ddff",
                    decimalPlaces: 2, // optional, def233,233,233aults to 2dp
                    color: (opacity = 1) => `rgba(6,135,241, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(247, 247, 247, ${opacity})`,
                    style: {
                    // borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#707daf"
                    }
                    }}
                    bezier
                    style={{
                    //marginVertical: 8,
                    borderRadius: 16
                    }}
                />
            </View>

                <View style={{flexDirection:'row', }} >
                <GradientButton text={'Send Notification'} />
                <GradientButton text={'Get Precautions'} />
                </View>
            </SafeAreaView>     
            </Wrapper>
            </View>
        );
    }
}


export default Chart