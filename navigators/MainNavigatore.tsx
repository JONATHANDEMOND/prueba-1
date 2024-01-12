import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from '../screens/InicioScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import PerfilStack from '../screens/PerfilStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Inicio'>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="TabScreen" component={MyTabs}/>
    
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Welcome'>

      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilStack} />
      <Tab.Screen name="StackScreen" component={MyStack} />
    </Tab.Navigator>
  );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}