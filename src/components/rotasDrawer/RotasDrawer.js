import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../../views/perfil/perfil';
import colecao from '../../views/colecao/colecao';
import item from '../../views/item/item';
import RotasPrincipalStack from '../rotasStack/RotasPrincipalStack';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
    return(
      <Drawer.Navigator initialRouteName='Inicial'>
      <Drawer.Screen name="Inicial" component={RotasPrincipalStack} />
      <Drawer.Screen name="Colecao" component={colecao} />
      <Drawer.Screen name="Item" component={item} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator> 
    );
  }

  export default RotasDrawer;