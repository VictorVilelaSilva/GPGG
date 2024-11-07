import { StatusBar } from 'react-native';
import { TelaLogin } from './src/screens/Groups';
import { TelaCadastro } from './src/screens/Groups/TelaCadastro';

import { TelaInicial } from './src/screens/Groups/logou2';
import {AuthContextProvider} from './src/context/context';


import { Routes, } from './src/rotas/index';

import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Loading1, Loading2 } from './src/components/Loading/index';
import theme from './src/theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      <AuthContextProvider>
        {fontsLoaded ? < Routes /> : <Loading1 />}
      </AuthContextProvider>
    </ThemeProvider>
  );
}
