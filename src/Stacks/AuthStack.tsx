import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../Constants';
import {LoginScreen} from '../Screens';

const Auth = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: COLORS.black,
  },
  contentStyle: {
    backgroundColor: COLORS.background,
  },
};

const AuthStack = () => {
  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen name="LoginScreen" component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;