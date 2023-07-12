import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const Charts = () => {
  return (
    <View style={{marginBottom:10, marginHorizontal:10 }}>
        <View style={styles.header}>
            <Entypo name='line-graph' size={23} />
            <Text style={{fontWeight:'bold', fontSize:25, marginLeft:20,}} >Diabetics Analyze</Text>
        </View>
        <LineChart
            data={{
            labels: ["1", "2", "3", "4", "5", "6"],
            legend: ["Results",
                // "Critical"
        ],
            datasets: [
                {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                ]                
                },
                // {
                //     data: [
                //         Math.random() * 100,
                //         Math.random() * 100,
                //         Math.random() * 100,
                //         Math.random() * 100,
                //         Math.random() * 100,
                //         Math.random() * 100
                //     ]                
                //     }
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
  )
}

export default Charts

const styles = StyleSheet.create({
    header:{
        justifyContent:'center',
        flexDirection:'row'
    }
})