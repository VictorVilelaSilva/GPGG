import {Container,Tittle,SubTittle} from './style';

type Props = {
  tittle: string;

}


export function HiglLight({tittle}: Props){
  return(
    <Container>
      <Tittle>
        {tittle}
      </Tittle>

    </Container>
  );
}