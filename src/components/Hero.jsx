import { useEffect, useState } from 'react';
import MyCard from './MyCard';
import { Box, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { FaDollarSign } from "react-icons/fa";

export default function Hero() {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('category');
  const [currentPrice, setCurrentPrice] = useState(500);
  const [searchTerm, setSearchTerm] = useState('');
  let debounceTimer;
  let searchDebounceTimer;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setCurrentProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [currentCategory, currentPrice, searchTerm]);

  function applyFilters() {
    let filteredProducts = products;
    if (currentCategory !== 'category') {
      filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    filteredProducts = filteredProducts.filter(product => product.price <= currentPrice);
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setCurrentProducts(filteredProducts);
  }

  function handleCategoryChange(event) {
    setCurrentCategory(event.target.value);
  }

  function handlePriceChange(value) {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      setCurrentPrice(value);
    }, 500);
  }

  function handleSearchChange(event) {
    const value = event.target.value;
    if (searchDebounceTimer) {
      clearTimeout(searchDebounceTimer);
    }
    searchDebounceTimer = setTimeout(() => {
      setSearchTerm(value);
    }, 500);
  }

  function Filter() {
    return (
      <Box
        id="filters-container"
        padding="30px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="30px"
      >
        <Input
          id="text"
          placeholder='Search for a product'
          defaultValue={searchTerm}
          onChange={handleSearchChange}
          size='md'
          borderRadius='25px'
          border='1px'
          borderColor='gray.300'
          backgroundColor='white'
          _hover={{ borderColor: 'teal.400' }}
          _focus={{ borderColor: 'teal.400' }}
        />
        <Select value={currentCategory} onChange={handleCategoryChange} backgroundColor='white'>
          <option value="category">Category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men&apos;s Clothing</option>
          <option value="women's clothing">Women&apos;s Clothing</option>
        </Select>
        <Slider onChange={handlePriceChange} defaultValue={currentPrice} min={0} max={1000}>
          <SliderTrack>
            <SliderFilledTrack bg='tomato' />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color='tomato' as={FaDollarSign} />
          </SliderThumb>
        </Slider>
      </Box>
    );
  }

  return (
    <div style={{backgroundColor: '#F9F9F9'}}>
      <Filter />
      <Box
        id="heroContainer"
        display="grid"
        gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
        gap="4"
        width="full"
      >
        {currentProducts.map((product, index) => (
          <MyCard key={index} className="card" title={product.title} desc={product.description} image={product.image} price={product.price} />
        ))}
      </Box>
    </div>
  );
}
