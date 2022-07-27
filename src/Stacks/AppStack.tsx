import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../Constants';
import {HomeScreen} from '../Screens/Auth';

const App = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: COLORS.black,
  },
  contentStyle: {
    backgroundColor: COLORS.background,
  },
};

const AppStack = () => {
  return (
    <App.Navigator screenOptions={screenOptions}>
      <App.Screen name="HomeScreen" component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppStack;
