import {
  View,
  TouchableOpacity,Alert
} from 'react-native';


import { Container, Texto1, Texto2,Formulario } from './style';
import {api} from '../../utils/api';
import { Header } from '../../components/Header/index';
import { HiglLight } from '../../components/highlight/index';
import { Button } from '../../components/Button/index';
import { Input } from '../../components/Input/index';
import { Background } from '../../components/Background/index';
import {useContextGlobal} from '../../context/context';
import { useNavigation } from '@react-navigation/native';
import{setToken } from '../../rotas/app.routes';
import axios, { AxiosError } from 'axios';


import React, { useState } from 'react';

export function TelaLogin() {
  let [isLoading,setIsLoading] =useState(false);
  const [usuario, setusuario] = useState('');
  const [senha, setSenha] = useState('');
  const { user,verificarLogin } = useContextGlobal();
  const navigation = useNavigation();
  
  async function handleLogin(){
    setIsLoading(true)
    await verificarLogin(usuario,senha);
    setIsLoading(false)
  }
  return (
    <Background>
      <Container>
        <Header />
        <Formulario>
          <HiglLight tittle="Iniciar sessão" />
          <Input
            placeholder="Usuario"
            autoCapitalize="none"
            autoCorrect={true}
            onChangeText={(event) => setusuario(event)}

          />
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(event) => setSenha(event)}
          />
          <View>
            <Texto1>Nao possui uma conta ?</Texto1>
            <TouchableOpacity onPress={() => navigation.navigate('telacadastro')} >
              <Texto2>Cadastre-se</Texto2>
            </TouchableOpacity>
          </View>
        
          <Button 
          tittle ="Conectar"
          onPress = {handleLogin}
          isLoading = {isLoading}
          />
        </Formulario>
      </Container>
    </Background>
  );
}
