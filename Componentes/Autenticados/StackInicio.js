/* eslint-disable react/prop-types */
//import liraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./Inicio";
import Publicaciones from "./Publicaciones";
import Comentarios from "./Comentarios";
import Perfil from "./Perfil";
import DrawerPerfil from "./DrawerPerfil";

const Stack = createStackNavigator();

// create a component
const StackInicio = ({ nombreRutaInicial }) => {
  return (
    <Stack.Navigator initialRouteName={nombreRutaInicial} headerMode="float">
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Publicaciones" component={Publicaciones} />
      <Stack.Screen name="Comentarios" component={Comentarios} />
      <Stack.Screen name="DrawerPerfil" component={DrawerPerfil} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackInicio;
