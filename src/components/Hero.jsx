import { useEffect, useState } from 'react';
import Card from './Card';
import './Hero.css';

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

  function handlePriceChange(event) {
    const value = Number(event.target.value);
    document.querySelector('#price').innerHTML = `$${value}`;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      setCurrentPrice(value);
    }, 500);
  }

  function handleSearchChange(event) {
    const value = event.target.value;
    document.querySelector('#text').innerHTML = value;
    if (searchDebounceTimer) {
      clearTimeout(searchDebounceTimer);
    }
    searchDebounceTimer = setTimeout(() => {
      setSearchTerm(value);
    }, 500);
  }

  function Filter() {
    return (
      <div id="filters-container">
        <select value={currentCategory} onChange={handleCategoryChange}>
          <option value="category">category</option>
          <option value="electronics">electronics</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men&apos;s clothing</option>
          <option value="women's clothing">women&apos;s clothing</option>
        </select>
        <div className='price'>
          <label htmlFor='priceSlider'>Price</label>
          <input type='range' id='priceSlider' onChange={handlePriceChange} defaultValue={currentPrice} name='priceSlider' min={0} max={1000}></input>
          <p id="price">{`$${currentPrice}`}</p>
        </div>
        <input id="text" type='text' name='search' placeholder='Search for product' defaultValue={searchTerm} onChange={handleSearchChange}></input>
      </div>
    );
  }

  return (
    <div>
      <Filter />
      <div id="heroContainer">
        {currentProducts.map((product, index) => (
          <Card key={index} className="card" title={product.title} desc={product.description} image={product.image} price={product.price}/>
        ))}
      </div>
    </div>
  );
}
