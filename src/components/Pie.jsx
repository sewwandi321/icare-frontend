import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";  
  import Entypo from '@expo/vector-icons/Entypo'


  const data = [
    {
      name: "Total",
      population: 21500000,
      color: "#e9e9e9",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "TG",
      population: 2800000,
      color: "#490cab",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "VLDL",
      population: 527612,
      color: "#5809af",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "HDL",
      population: 8538000,
      color: "#7208b9",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "LDL",
      population: 11920000,
      color: "#b619a0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Cholesterol Ratio",
      population: 11920000,
      color: "#f62788",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

const Pie = () => {
    

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
  return (
    <View style={styles.container}  >
      <View style={{flexDirection:'row', marginLeft:20}} >
          <Entypo name='pie-chart' size={23} />
          <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10, marginTop:30 }} >CHOLESTROL ANALYZE</Text>
        </View>
      <View style={styles.title}>
        
        <Text style={{color:'gray'}} >Year 2022</Text>
        <Text style={{fontWeight:'bold'}} >More densely populate</Text>
      </View>
        <PieChart
            data={data}
            width={370}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"-20"}
            center={[20, 10]}                    
            
            />
    </View>
  )
}

export default Pie

const styles = StyleSheet.create({
  title:{
    marginTop:40,
    marginLeft:20,
  }
})