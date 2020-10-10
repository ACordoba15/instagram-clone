/* eslint-disable react/prop-types */
//import liraries
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MiPerfil from "./MiPerfil";
import Configuracion from "./Configuracion";

const Drawer = createDrawerNavigator();

// create a component
const DrawerPerfil = ({ nombreRutaInicial }) => {
  return (
    <Drawer.Navigator
      initialRouteName={nombreRutaInicial}
      drawerPosition="right"
      headerMode="float"
    >
      <Drawer.Screen
        name="MiPerfil"
        component={MiPerfil}
        options={{ drawerLabel: "Perfil", title: "Mi Perfil" }}
      />
      <Drawer.Screen
        name="Configuracion"
        component={Configuracion}
        options={{ drawerLabel: "Configuración" }}
      />
    </Drawer.Navigator>
  );
};

//make this component available to the app
export default DrawerPerfil;
