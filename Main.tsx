import {NavigationContainer} from '@react-navigation/native';
import React,{useEffect}  from 'react';
import {IMainProps} from './src/Models'
import { StyleSheet, Text, View, Image } from 'react-native';
import AppStack from './src/Stacks/AppStack';
import AuthStack from './src/Stacks/AuthStack';
import { StatusBar } from 'expo-status-bar';
import {favicon} from './src/Assets/index'
import {useAppDispatch, useAppSelector} from './src/Redux/store';
import {authenticateUser} from './src/Redux/reducer';


const Main = (props: IMainProps) => {
  const {isAuthenticated} = useAppSelector(state => state.global);   

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {isAuthenticated ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Main