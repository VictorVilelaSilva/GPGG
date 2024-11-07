import { NavigationContainer} from '@react-navigation/native';
import { useContextGlobal } from '../../context/context';
import { HiglLight } from '../../components/highlight/index';

import { Background } from '../../components/Background/index';
import { Container,ContainerLogOut} from './style';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import {View,Text} from 'react-native';
import { Button } from '../../components/Button/index';


export function LogOut (){
  const { user,LogOut,token,isLoged } = useContextGlobal();
  let [isLoading,setIsLoading] =useState(false);
  const navigation = useNavigation();

  
  async function logOut(){
    setIsLoading(true)
    LogOut();
    setIsLoading(false)

  }
  
  return(
    <Background>
      <Container>
        <ContainerLogOut>
          <HiglLight tittle="Deseja mesmo deslogar?" />
          <Button
              tittle ="Sim"
              onPress = {logOut}
              isLoading = {isLoading}/>
        </ContainerLogOut>
      </Container>
    </Background>
  );
}
