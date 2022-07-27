import React from 'react';
import {StyleSheet ,View, Text, TouchableOpacity} from 'react-native'
import {useAppDispatch, useAppSelector} from '../../Redux/store';
import {authenticateUser} from '../../Redux/reducer';

import {COLORS} from '../../Constants/colors';

export interface ILoginScreenProps {
}

const LoginScreen = (props: ILoginScreenProps)=> {
  const {isAuthenticated} = useAppSelector(state => state.global);
  const dispatch = useAppDispatch();

  const Login=()=>{
    if(!isAuthenticated){
      dispatch(authenticateUser(true))
    }
  }
  
  return (
    <View style={styles.Container}>
        <Text style={{color:COLORS.black}}>Login Screen</Text>
        
        <TouchableOpacity onPress={()=>Login()}>
          <Text style={{color:COLORS.black}}>Login</Text>
        </TouchableOpacity>
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
export default LoginScreen

