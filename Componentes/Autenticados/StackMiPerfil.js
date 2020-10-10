/* eslint-disable react/prop-types */
//import liraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerPerfil from "./DrawerPerfil";
import Perfil from "./Perfil";
import Publicaciones from "./Publicaciones";
import Comentarios from "./Comentarios";

const Stack = createStackNavigator();

// create a component
const StackMiPerfil = ({ nombreRutaInicial }) => {
  return (
    <Stack.Navigator initialRouteName={nombreRutaInicial} headerMode="float">
      <Stack.Screen name="Drawer Perfil" component={DrawerPerfil} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Publicaciones" component={Publicaciones} />
      <Stack.Screen name="Comentarios" component={Comentarios} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackMiPerfil;
