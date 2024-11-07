import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import {API_KEY} from '../../../env';
import { View,Text } from 'react-native';



import {Container,Win,Lose,ContainerAll,Informacoes,Score,HeroiRunas,Itens, Heroi,Runas,Item,Runa,FundoContaierVerde,ContainerTexto} from './style'


type Props = {
  matche: string;
  puuId:string;

}

export function Card({matche,puuId}: Props){
  const[heroi, setHeroi] = useState('');
  const[spell1, spel1Cap] = useState('');
  const[spell2, spell2Cap] = useState('');
  const[item1, item1Cap] = useState('');
  const[item2, item2Cap] = useState('');
  const[item3, item3Cap] = useState('');
  const[item4, item4Cap] = useState('');
  const[item5, item5Cap] = useState('');
  const[item6, item6Cap] = useState('');
  const[item7, item7Cap] = useState('');
  const[kills, killsCap] = useState('');
  const[mortes, mortesCap] = useState('');
  const[assist, assistCap] = useState('');
  const[resultMatch, setResultMatch] = useState(false);

  const [refreshing, setRefreshing] = useState(true);


  const getImgs = async (matche: string,puuId:string)=>{

    const {data} = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matche}?api_key=${API_KEY}`);
    const posicao = data.metadata.participants.indexOf(puuId);
    setRefreshing(true);
    setHeroi(data.info.participants[posicao].championName)
    console.log(heroi);
    spel1Cap(data.info.participants[posicao].summoner1Id)
    spell2Cap(data.info.participants[posicao].summoner2Id)

    let teste = data.info.participants[posicao].win

    console.log(typeof teste); 

    console.log(data.info.participants[posicao].win);

    setResultMatch(data.info.participants[posicao].win);
    switch (data.info.participants[posicao].summoner1Id) {
      case 1:
        spel1Cap("SummonerBoost");
        break;
      case 3:
        spel1Cap("SummonerExhaust");
        break;
      case 4:
        spel1Cap("SummonerFlash");
        break;
      case 6:
        spel1Cap("SummonerHaste");
        break;
      case 7:
        spel1Cap("SummonerHeal");
        break;
      case 11:
        spel1Cap("SummonerSmite");
        break;
      case 12:
        spel1Cap("SummonerTeleport");
        break;
      case 13:
        spel1Cap("SummonerMana");
        break;
      case 14:
        spel1Cap("SummonerDot");
        break;
      case 21:
        spel1Cap("SummonerBarrier");
        break;
      case 32:
        spel1Cap("SummonerSnowball");
        break;
      default:
        spel1Cap("SummonerUnknown");
        break;  
      }
      switch (data.info.participants[posicao].summoner2Id) {
      case 1:
        spell2Cap("SummonerBoost");
        break;
      case 3:
        spell2Cap("SummonerExhaust");
        break;
      case 4:
        spell2Cap("SummonerFlash");
        break;
      case 6:
        spell2Cap("SummonerHaste");
        break;
      case 7:
        spell2Cap("SummonerHeal");
        break;
      case 11:
        spell2Cap("SummonerSmite");
        break;
      case 12:
        spell2Cap("SummonerTeleport");
        break;
      case 13:
        spell2Cap("SummonerMana");
        break;
      case 14:
        spell2Cap("SummonerDot");
        break;
      case 21:
        spell2Cap("SummonerBarrier");
        break;
      case 32:
        spell2Cap("SummonerSnowball");
        break;
      default:
        spell2Cap("SummonerUnknown");
        break;  
      }
    item1Cap(data.info.participants[posicao].item0)
    item2Cap(data.info.participants[posicao].item1)
    item3Cap(data.info.participants[posicao].item2)
    item4Cap(data.info.participants[posicao].item3)
    item5Cap(data.info.participants[posicao].item4)
    item6Cap(data.info.participants[posicao].item5)
    item7Cap(data.info.participants[posicao].item6)
    killsCap(data.info.participants[posicao].kills)
    mortesCap(data.info.participants[posicao].deaths)
    assistCap(data.info.participants[posicao].assists)
  }



  useEffect(() => {
    setRefreshing(false);
    getImgs(matche,puuId); // Chama a função getImgs quando o componente é montado ou o valor de matche é atualizado
    setRefreshing(false);

  },[matche,puuId]);

  return(

   
  
    <ContainerAll>
    <Container>

      <Informacoes>
       <HeroiRunas>
        <Heroi source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${heroi}.png`}}/>
        <Runas>
          <Runa source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/${spell1}.png`}} />
          <Runa source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/${spell2}.png`}}/>

        </Runas>

       </HeroiRunas>
       <Score> {kills}/{mortes}/{assist}</Score>

      </Informacoes>
      <Itens>
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item1}.png`}}/>
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item2}.png`}} />
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item3}.png`}}/>
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item4}.png`}}/>
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item5}.png`}}/>
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item6}.png`}}/>
        <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/${item7}.png`}}/>
      </Itens>


      </Container>
      <ContainerTexto>
        {resultMatch ? <Win>WIN</Win> :<Lose>LOSE</Lose> }  
      </ContainerTexto>
    </ContainerAll>


  );
}

export function Card2(){
  const teste = true
  

  return(
    <ContainerAll>
      <Container>
        <Informacoes>
         <HeroiRunas>
          <Heroi source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png`}}/>
          <Runas>
            <Runa source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/SummonerBoost.png`}} />
            <Runa source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/spell/SummonerBoost.png`}}/>
          </Runas>
  

         </HeroiRunas>


         <Score> </Score>


        </Informacoes>

        <Itens>
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}}/>
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}} />
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}}/>
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}}/>
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}}/>
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}}/>
          <Item source = {{uri:`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/item/2.png`}}/>

        </Itens>
      </Container>
      <ContainerTexto>
        {teste ? <Win>WIN</Win> :<Lose>LOSE</Lose> }  
      </ContainerTexto>
    </ContainerAll>




  );
}