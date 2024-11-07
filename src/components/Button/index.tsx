import {TouchableOpacity,TouchableOpacityProps} from 'react-native';
import {Container,Tittle, ButtonTypeStyleProps} from './style';
import { ActivityIndicator, Colors } from 'react-native-paper';




type Props = TouchableOpacityProps &{
  tittle: string;
  tipo?: ButtonTypeStyleProps;
  isLoading?: boolean;
}


export function Button({tittle,tipo,isLoading,...rest}:Props){

  return(
    
    <Container 
    type = {tipo}
    disabled = {isLoading}
    {...rest}>  
      {isLoading ? 
      <ActivityIndicator animating={true} color={Colors.white} />
      :
      (<Tittle>
        {tittle}
      </Tittle>)}
    </Container>
  );
}