import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App
