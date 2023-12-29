import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    fonts: {
      heading: `'Geist', sans-serif`,
      body: `'Geist', sans-serif`,
    },
    colors: {
      black: '#000000', // Color de fondo negro
      white: '#FFFFFF', // Color de fondo blanco
      customColor: '#721cff', // Reemplaza 'your-color' con el código de color deseado
    },
    styles: {
      global: {
        body: {
          bg: 'black', // Utiliza el color personalizado para el fondo
          color: 'white', // Utiliza el color blanco para la fuente
        },
      },
    },
  },
  {
    config,
  }
);

export default theme;
