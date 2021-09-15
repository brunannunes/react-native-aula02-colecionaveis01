import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import inicial from '../../views/inicial/inicial';
import colecao from '../../views/colecao/colecao';
import item from '../../views/item/item';
import estiloRotasStack from './estlioRotasStack';

const Stack = createStackNavigator();

const RotasPrincipalStack = () => {
    return(
        <Stack.Navigator initialRouteName="Inicial">

        <Stack.Screen 
        name="Inicial" 
        component={inicial}
        options={
          {
            cardStyle: estiloRotasStack.screenInicial,
            headerShown: false
          }
        }
        />
        <Stack.Screen 
        name="colecao"
        component={colecao} 
        options={
          {
            cardStyle: estiloRotasStack.screenColecao,
            headerShown: false
          }
        }
        />
        <Stack.Screen 
        name="item" 
        component={item} 
        options={
          {
            cardStyle: estiloRotasStack.screenItem,
            headerShown: false
          }
        }
        />
    </Stack.Navigator>
    );
}
export default RotasPrincipalStack;