import {Container, LoadIndicator} from './styles';
import loading from '../assets/loading.json';
import LottieView from 'lottie-react-native';
import { Background } from '../../components/Background/index';


export function Loading1(){
  return(
    <Container>
      <LoadIndicator />
    </Container>
  )
 
}

export function Loading2(){
  return(
    <Background>
      <LottieView source = {loading} autoPlay loop />
    </Background>
  )
 
}