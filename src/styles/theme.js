
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        color: 'white',
        bgGradient: 'linear-gradient(90deg, rgba(96,140,116,1) 0%, rgba(55,101,98,1) 53%, rgba(30,76,87,1) 100%)'
      }
    }
  }
})