//import libraries
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Nuevo from "./Nuevo";
import StackInicio from "./StackInicio";
import StackBusqueda from "./StackBusquedas";
import StackSeguidores from "./StackSeguidores";

const Tab = createBottomTabNavigator();
// create a component
const RutasAutenticadas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        // Se hace la validación de que si está en el componente comentarios
        // No muestre el bottomTab
        options={({ ...args }) => {
          if (args.route.state) {
            if (
              args.route.state.routes[args.route.state.routes.length - 1]
                .name === "Comentarios"
            ) {
              return { tabBarVisible: false };
            }
          }
          return { tabBarVisible: true };
        }}
        name="Inicio"
      >
        {/* De esta forma se puende enviar valores por props, 
        se envía el nombre del componente */}
        {(props) => <StackInicio {...props} nombreRutaInicial="Inicio" />}
      </Tab.Screen>
      <Tab.Screen name="Busqueda">
        {/* Renderizamos componentes Stack para el ruteo de la aplicación */}
        {(props) => <StackBusqueda {...props} nombreRutaInicial="Busqueda" />}
      </Tab.Screen>
      <Tab.Screen name="Nuevo" component={Nuevo} />
      <Tab.Screen name="Seguidores">
        {(props) => (
          <StackSeguidores {...props} nombreRutaInicial="Seguidores" />
        )}
      </Tab.Screen>
      <Tab.Screen name="Perfil">
        {(props) => <StackInicio {...props} nombreRutaInicial="DrawerPerfil" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

//make this component available to the app
export default RutasAutenticadas;
