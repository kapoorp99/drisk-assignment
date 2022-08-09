import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box w='100%' display='flex'>
        <Sidebar />
        <Content />
      </Box>
    </ChakraProvider>
  );
}

export default App;
