import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import{MaterialCommunityIcons} from "@expo/vector-icons";

import Mamifero from "./Mamifero";
import Passaro from "./Passaro";
import Reptil from "./Reptil";
import Home from "./Home";

const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >

    <Tab.Screen name="Home"component={Home} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "grass" color={'#2de14e'} size={38}/>}}/>
    <Tab.Screen name="Reptil"component={Reptil} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "snake" color={'#446600'} size={38}/>}}/>
    <Tab.Screen name="Passaro"component={Passaro} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "bird" color={'#0088a8'} size={38}/>}}/>
    <Tab.Screen name="Mamifero"component={Mamifero} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "cat" color={'#612c00'} size={38}/>}}/>

    </Tab.Navigator>
  );
}