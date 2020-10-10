//import liraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InicioSesion from "./InicioSesion";
import CerrarSesion from "./CerrarSesion";

const Stack = createStackNavigator();
// create a component

const RutasNoAutorizadas = () => {
  return (
    <Stack.Navigator headerMode="float">
      <Stack.Screen
        name="InicioSesion"
        component={InicioSesion}
        options={{ title: "Iniciar Sesión" }}
      />
      <Stack.Screen
        name="CerrarSesion"
        component={CerrarSesion}
        options={{ title: "Cerrar Sesión" }}
      />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default RutasNoAutorizadas;
