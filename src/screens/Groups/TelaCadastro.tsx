import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { ContainerInput, Container, Texto3, Formulario } from './style';
import { Header } from '../../components/Header/index';
import { HiglLight } from '../../components/highlight/index';
import { Button } from '../../components/Button/index';
import { Input } from '../../components/InputCadastro/index';
import { Background } from '../../components/Background/index';
import { Alert } from 'react-native';

import { api } from '../../utils/api';
import axios, { AxiosError } from 'axios';

import React, { useState } from 'react';

export function TelaCadastro() {
  const [usuario, setusuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickName] = useState('');
  const [menssagem, setMenssagem] = useState('');
  let [isLoading, setIsLoading] = useState(false);

  async function cadastrar() {
    var userObj = { Usuario: usuario, senha: senha, email, NickName: nickname };
    var jsonBody = JSON.stringify(userObj);
    setIsLoading(true);

    try {
      const { data, headers } = await api.post('/cadastrarUsuarios', userObj);
      Alert.alert(
        'Dados Inseridos com sucesso!',
        'Volte para tela de Login e entre em sua conta'
      );
      setIsLoading(false);
    } catch (error: any) {
      console.log('Algo deu errado', error.message);
      Alert.alert('Algo aconteceu', 'Não foi possivel atualizar seus dados');
    }

    console.log(jsonBody);
  }
  return (
    <Background>
      <Container>
        <Header />
        <Formulario>
          <HiglLight tittle="Junte-se a nós" />
          <ContainerInput>
            <Texto3>Usuario: </Texto3>
            <Input
              placeholder="Usuario"
              autoCapitalize="none"
              autoCorrect={true}
              onChangeText={(event) => setusuario(event)}
            />
          </ContainerInput>

          <ContainerInput>
            <Texto3>Senha: </Texto3>
            <Input
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={true}
              onChangeText={(event) => setSenha(event)}
            />
          </ContainerInput>

          <ContainerInput>
            <Texto3>Email: </Texto3>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={true}
              onChangeText={(event) => setEmail(event)}
            />
          </ContainerInput>

          <ContainerInput>
            <Texto3>Nick dentro do jogo: </Texto3>
            <Input
              placeholder="NickName"
              autoCapitalize="none"
              onChangeText={(event) => setNickName(event)}
            />
          </ContainerInput>
          <Button
            tittle="Cadastrar"
            onPress={cadastrar}
            isLoading={isLoading}
          />
        </Formulario>
      </Container>
    </Background>
  );
}
