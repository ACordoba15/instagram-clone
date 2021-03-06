/* eslint-disable react/prop-types */
//import liraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Busqueda from "./Busqueda";
import Publicaciones from "./Publicaciones";
import Comentarios from "./Comentarios";
import Perfil from "./Perfil";

const Stack = createStackNavigator();

// create a component
const StackBusqueda = ({ nombreRutaInicial }) => {
  return (
    <Stack.Navigator initialRouteName={nombreRutaInicial} headerMode="float">
      <Stack.Screen name="Busqueda" component={Busqueda} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Publicaciones" component={Publicaciones} />
      <Stack.Screen name="Comentarios" component={Comentarios} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackBusqueda;
