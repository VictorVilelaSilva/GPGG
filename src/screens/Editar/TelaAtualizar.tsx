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
import React, { useState, useEffect } from 'react';
import { useContextGlobal } from '../../context/context';
import { api } from '../../utils/api';
import axios, { AxiosError } from 'axios';

export function TelaAtualizar() {
  const [usuario, setusuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickName] = useState('');
  const { user, AtualizarUsuario } = useContextGlobal();
  let [isLoading, setIsLoading] = useState(false);

  async function handleAtaulizacao() {
    setIsLoading(true);
    await AtualizarUsuario(user.idUsuario, usuario, senha, email, nickname);
    setIsLoading(false);
  }

  useEffect(() => {
    setusuario(user.Usuario);
    setSenha(user.Senha);
    setEmail(user.Email);
    setNickName(user.NickName);
    console.log('teste:', user.Senha);
  }, []);

  return (
    <Background>
      <Container>
        <Header />
        <Formulario>
          <HiglLight tittle="Atualizar dados cadastrais" />
          <ContainerInput>
            <Texto3>Usuario: </Texto3>
            <Input
              placeholder={user.Usuario}
              autoCapitalize="none"
              autoCorrect={true}
              onChangeText={(event) => setusuario(event)}
            />
          </ContainerInput>
          <ContainerInput>
            <Texto3>Senha: </Texto3>
            <Input
              placeholder="**********"
              autoCapitalize="none"
              onChangeText={(event) => setSenha(event)}
            />
          </ContainerInput>
          <ContainerInput>
            <Texto3>Email: </Texto3>
            <Input
              placeholder={user.Email}
              autoCapitalize="none"
              autoCorrect={true}
              onChangeText={(event) => setEmail(event)}
            />
          </ContainerInput>

          <ContainerInput>
            <Texto3>Nick dentro do jogo: </Texto3>
            <Input
              placeholder={user.NickName}
              autoCapitalize="none"
              onChangeText={(event) => setNickName(event)}
            />
          </ContainerInput>
          <Button
            tittle="Atualizar"
            onPress={handleAtaulizacao}
            isLoading={isLoading}
          />
        </Formulario>
      </Container>
    </Background>
  );
}
