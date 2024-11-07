import { Container1, ContainerInicial, Header2, Logo1 } from './style';
import { View, ImageBackground, StatusBar, Image, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useContextGlobal } from '../../context/context';
import logoImg from '../assets/Logo2.png';
import splash from '../assets/Splash.png';
import { styles, Banner } from './style';
import axios from 'axios';
import { API_KEY } from '../../../env';

import { Background } from '../../components/Background/index';

type Props = {
  puuId: string;
  riotId: string;
};

export function Header() {
  return (
    <Container1>
      <Logo1 source={logoImg} />
    </Container1>
  );
}

export function HeaderLogou({ puuId, riotId }: Props) {
  const [userName, setUserName] = useState('');
  const [userIcon, setUserIcon] = useState('');
  const [nameChamp, setNameChamp] = useState('');
  const [numberSkin, setNumberSkin] = useState('');


  const { user } = useContextGlobal();

  //PEGA INFORMAÇOES DO USUARIO DO LOL
  async function findChampionById(idHero: any) {
    try {
      const response = await axios.get(
        'http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion.json'
      );
      const championData = response.data.data;

      for (let championKey in championData) {
        const champion = championData[championKey];
        // console.log(champion.key);
        // console.log('id;', idHero);
        if (champion.key == idHero) {
          return champion.id;
        }
      }

      return null; // Retorna null se o campeão não for encontrado
    } catch (error) {
      console.error('Ocorreu um erro na busca do campeão:', error);
      return null;
    }
  }

  async function findSkins(nameChampion: any) {
    try {
      const response = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/champion/${nameChampion}.json`
      );

      const championData = response.data;

      const teste = championData.data;
      const champion = teste[nameChampion];
      const skins = (champion && champion.skins) || []; // Verifica se 'champion' e 'champion.skins' existem
      const skinNumbers: number[] = skins.map(
        (skin: { num: number }) => skin.num
      );

      return skinNumbers; // Retorna null se o campeão não for encontrado
    } catch (error) {
      console.error('Ocorreu um erro na busca do campeão:', error);
      return null;
    }
  }

  const getRiotInfos = async (puuId: any) => {
    const { data } = await axios.get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuId}?api_key=${API_KEY}`
    );

    setUserName(data.name);
    setUserIcon(data.profileIconId);
  };

  const getIdChampion = async (riotId: any) => {
    const { data } = await axios.get(
      `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${riotId}?api_key=${API_KEY}`
    );

    const idHero = data[0].championId;


    const nameChampion = await findChampionById(idHero);
    setNameChamp(nameChampion);
    if (nameChampion) {
      console.log('Champion ID:', nameChampion);
    } else {
      console.log('Campeão não encontrado.');
    }

    const numberSplash = await findSkins(nameChampion);
    if (numberSplash !== null) {
      const randomSkinNumber: number = numberSplash[Math.floor(Math.random() * numberSplash.length)];
      const randomSkinString = String(randomSkinNumber);
      setNumberSkin(randomSkinString);
      console.log(randomSkinNumber);
    }
  };

  useEffect(() => {
    getRiotInfos(puuId);
    getIdChampion(riotId);
  }, [puuId, riotId]);

  return (
    <ContainerInicial>
      <Header2>
        <Banner  source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${nameChamp}_${numberSkin}.jpg`,
            }}>
          <Image
            source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/13.11.1/img/profileicon/${userIcon}.png`,
            }}
            style={styles.icone}
          />
          <Text style={styles.text}> {userName} </Text>
        </Banner>
      </Header2>
    </ContainerInicial>
  );
}
