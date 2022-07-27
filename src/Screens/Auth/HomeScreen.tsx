import React from 'react';
import {StyleSheet ,View, Text, TouchableOpacity} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {logout} from '../../Redux/reducer';
import {
  ExampleAction
} from '../../Redux/action'
import {COLORS} from '../../Constants/colors';

export interface ILoginScreenProps {
}

const HomeScreen = (props: ILoginScreenProps)=> {
  const {isAuthenticated, isLoading, data} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();

  const Logout=()=>{
    if(isAuthenticated){
      dispatch(logout())
    }
  }
  const getData=()=>{
    if(isAuthenticated){
      dispatch(ExampleAction())
    }
  }
  return (
    <View style={styles.Container}>
        {isLoading?         
        <Text style={{color:COLORS.black}}>Loading</Text>
            :
        <>
        <Text style={{color:COLORS.black}}>Home Screen</Text>

        <TouchableOpacity onPress={()=>Logout()}>
          <Text style={{color:COLORS.black}}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>getData()}>
          <Text style={{color:COLORS.black}}>Get data</Text>
        </TouchableOpacity>
        </>
        }
    </View>

  );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
}) 
export default HomeScreen

