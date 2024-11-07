import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { UserDTO } from '../dtos/userDTO';
import axios, { AxiosError } from 'axios';
import {
  getToken,
  removeToken,
  clearToken,
  setToken,
} from '../rotas/app.routes';
import { api } from '../utils/api';
import { Alert } from 'react-native';
import { API_KEY } from '../../env';

///VARIAVEIS GLOBAIS E FUNCOES
export type AuthContextDataProps = {
  user: UserDTO;
  handleTokenLogin: (newToken: string) => void;
  handleUser: (newUser: UserDTO) => void;
  isLoged: boolean;
  token: string;
  verificarLogin: (usuario: string, senha: string) => Promise<void>;
  AtualizarUsuario: (
    idUsuario: any,
    usuario: any,
    senha: any,
    email: any,
    nickname: any
  ) => Promise<void>;
  LogOut: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setUseToken] = useState('');
  const [user, setUser] = useState({} as UserDTO);
  let [isLoading, setIsLoading] = useState(false);
  const [isLoged, setIsLoged] = useState(false);

  // DESLOGA O USER
  async function LogOut() {
    setUseToken('');
    setToken('');
    setUser({} as UserDTO);
    await removeToken();
    setIsLoged(false);
  }
  // console.log(user.Usuario, token);

  // VERIFICA SE ESTA LOGADO
  async function VerifyLoged() {
    const tokenLoged = await getToken();

    if (!tokenLoged) {
      console.log('Não guardou');
      return;
    }
    api.defaults.headers['authorization'] = tokenLoged;
    const userInfo = await getuserInfos();
    if (userInfo) {
      await setToken(tokenLoged);
      setIsLoged(true);
      setUseToken(tokenLoged);
      // console.log('puuID ja logado:', userInfo.puuId);
      const matchesID = await getmatchesID(userInfo.puuId);
      setUser({ ...userInfo, matchesID });
    }
  }

  useEffect(() => {
    VerifyLoged();
  }, []);

  // PEGA INFORMAÇOES DO USUARIO DO BANCO
  const getuserInfos = async () => {
    try {
      const { data } = await api.get(`/usuario`);
      // console.log('info users:', data);
      return data;
    } catch (e) {
      const error = e as AxiosError;
      // console.log('error get', error.message);
    }
  };

  //PEGA OS ID DAS PARTIDAS
  const getmatchesID = async (puuId: string) => {
    // console.log('puuId dentro da func partidas', puuId);
    try {
      const { data } = await axios.get(
        `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=0&count=50&api_key=${API_KEY}`
      );
      // console.log('partidas dentro da func', data);
      return data;
    } catch (e) {
      const error = e as AxiosError;
      // console.log('erro dentro da func pega partidar', error);
    }
  };

  async function verificarLogin(usuario: any, senha: any) {
    var userObj = { Usuario: usuario, senha: senha };

    var jsonBody = JSON.stringify(userObj);

    setIsLoading(true);
    try {
      const { data, headers } = await api.post(`/login`, userObj);
      const token = headers['x-access-token'];
      // console.log('Usuario e senha correta');
      setToken(token);
      setIsLoged(true);
      handleTokenLogin(token);
      api.defaults.headers['authorization'] = token;
      const userInfo = await getuserInfos();
      const matchesID = await getmatchesID(userInfo.puuId);
      handleUser({ ...userInfo, matchesID });
    } catch (error: any) {
      // console.log('senha ou user incorreto', error.message);
      Alert.alert(
        'Usuario ou Senha incorreto!',
        'Insira o usuario e a senha correta'
      );
    }
    setIsLoading(false);
  }

  async function AtualizarUsuario(
    idUsuario: any,
    usuario: any,
    senha: any,
    email: any,
    nickname: any
  ) {
    var userObj = {
      idUsuario,
      Usuario: usuario,
      senha: senha,
      email,
      NickName: nickname,
    };
    // console.log('id', userObj);
    setIsLoading(true);
    try {
      const { data, headers } = await api.put(
        `/atualizarUsuario/${idUsuario}`,
        userObj
      );

      // const token = headers['x-access-token'];
      // setToken(token);
      // handleTokenLogin(token);


      const userInfo = await getuserInfos();
      // console.log('userInfo:', userInfo);
      const matchesID = await getmatchesID(userInfo.puuId);
      handleUser({ ...userInfo, matchesID });
      Alert.alert('Dados Atualizados');
    } catch (error: any) {
      // console.log('senha ou user incorreto', error.message);
      Alert.alert('Algo aconteceu', 'Não foi possivel atualizar seus dados');
    }
    setIsLoading(false);
  }

  async function handleTokenLogin(newToken: string) {
    setUseToken(newToken);
    setToken(newToken);
  }
  function handleUser(newUser: UserDTO) {
    setUser(newUser);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        handleTokenLogin,
        isLoged,
        handleUser,
        token,
        verificarLogin,
        AtualizarUsuario,
        LogOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useContextGlobal = () => {
  return useContext(AuthContext);
};
