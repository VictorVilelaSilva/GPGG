import { HeaderLogou } from '../../components/Header/index';
import { Background } from '../../components/Background/index';
import { StatusBar } from 'react-native';
import { Card } from '../../components/card/index';
import { useContextGlobal } from '../../context/context';
import { useRoute } from '@react-navigation/native';
import { styles } from './style';
import React, { useEffect } from 'react';
import { getToken } from '../../rotas/app.routes';

import { MatchList } from './style';

import { View, ScrollView } from 'react-native';

export function TelaInicial() {
  const { user } = useContextGlobal();

  useEffect(() => {
    var token;
    async function fetchToken() {
      token = await getToken();
      
    }
    fetchToken();
  });
  // console.log("partdias tela logou",user.matchesID)
  return (
    <Background>
      <ScrollView>
        <HeaderLogou puuId={user.puuId} riotId= {user.RiotId}/>
        {user.matchesID?.map((partida: string) => (
          <Card matche={partida} puuId={user.puuId}/>
        ))}
      </ScrollView>
    </Background>
  );
}
