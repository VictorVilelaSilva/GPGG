import { NavigationContainer} from '@react-navigation/native';
import {AppRoutes,AppRoutesBottomTab} from './app.routes'
import {useContextGlobal} from '../context/context';


export function Routes (){
  const {isLoged,handleTokenLogin,token}= useContextGlobal();
  if(token){
    console.log("Token salvo");
  }else{
    console.log("Token não ta salvo");
  }
  return(
    <NavigationContainer>
      {isLoged ? <AppRoutesBottomTab/> : <AppRoutes/>}
    </NavigationContainer>
  );
}


