import { StyleSheet, View } from 'react-native';
import store from './src/Redux/store';
import {Provider} from 'react-redux';


import Main from './Main'


const App=()=> {

  return (
    <View style={[styles.appContainer]}>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default  App