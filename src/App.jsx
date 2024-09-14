import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <Hero/>
    </ChakraProvider>
  );
}

export default App
