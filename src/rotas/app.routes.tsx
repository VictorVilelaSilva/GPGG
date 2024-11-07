import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {TelaLogin} from '../screens/Groups/index';
import {TelaCadastro} from '../screens/Groups/TelaCadastro';
import {TelaInicial} from '../screens/Groups/logou';
import home from '../components/assets/Vector.png';
import logout from '../components/assets/logout.png';

import {Platform} from 'react-native';
import {LogOut} from '../screens/LogOut/index';
import AsyncStorage from '@react-native-community/async-storage';
import {TelaAtualizar} from '../screens/Editar/TelaAtualizar';
import { useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Entypo,MaterialCommunityIcons,Feather,FontAwesome5  } from '@expo/vector-icons';


const {Navigator,Screen} = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();




export const setToken = async (token: string)=>{
    await AsyncStorage.setItem('useToken',token);
};


export const clearToken= async ()=>{
    await AsyncStorage.clear();
};

export const removeToken= async ()=>{
    await AsyncStorage.removeItem('useToken');
    
};


export const getToken = async ()=>{
    const userToken = await AsyncStorage.getItem('useToken');
    return userToken;
};

export function AppRoutes(){
  
  return(
    <Navigator screenOptions = {{headerShown: false}}>
      <Screen name="telalogin" component = {TelaLogin}/>
      <Screen name="telacadastro" component = {TelaCadastro}/>

    </Navigator>
  );

}

export function AppRoutesBottomTab(){
  
  return(
     <BottomTab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ceae37',
        tabBarInactiveTintColor: '#7C7C7C',
        tabBarStyle : {
          backgroundColor: "#000000",
          borderTopWidth: 0
       }
   
 
      }}>
      <BottomTab.Screen name="Home" component = {TelaInicial} options = {{ tabBarIcon: ({ color })=>(<FontAwesome5 name="home" size={22} color={color} />)}} 
       
      />
  
      <BottomTab.Screen name="TelaAtualizar" component = {TelaAtualizar} options = {{ tabBarIcon: ({ color })=>(<Feather name="user" size={22} color={color}/>)}}  />
      <BottomTab.Screen name="LogOut" component = {LogOut}  options = {{ tabBarIcon: ({ color } ) => (<MaterialCommunityIcons name="logout" size={22} color={color} />)}}/>

    </BottomTab.Navigator>
  );

}
