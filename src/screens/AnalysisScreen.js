import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Button, Text, View } from 'react-native';
import GradientButton from '../components/GradientButton';
import ListCountries from '../components/ListCountries';
import Pie from '../components/Pie';
import Wrapper from '../components/Wrapper';
import Charts from './Charts';
//import Icon from '@expo/vector-icons/AntDesign';

/*const HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="Go to Profile"
        />
      </View>
    );
  }*/
  
  /*function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
          onPress={() => navigation.navigate('Analysis')}
          title="Go back Analysis"
        />
      </View>
     
    );
  }*/
  
  const AnalysisScreen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Wrapper>
        <StatusBar style="auto" /> 
        <SafeAreaView>
          
          <Pie />
          <ListCountries />
          <Charts/>
          <View style={{flexDirection:'row', }} >
            <GradientButton text={'Send Notification'} />
            <GradientButton text={'Get Precautions'} />
          </View>
        </SafeAreaView>     
      </Wrapper>
      </View>
    );
  };

  export default AnalysisScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',    
      //justifyContent: 'center',
    },
  });