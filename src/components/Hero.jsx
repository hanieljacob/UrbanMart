import { useEffect, useState } from 'react';
import Card from './Card';
import './Hero.css'

export default function Hero() {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('category');
  const [currentPrice, setCurrentPrice] = useState(1000);
  let debounceTimer;

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

  function handleCategoryChange(event){
    if(event.target.value === 'category'){
      setCurrentCategory(event.target.value);
      setCurrentProducts(products);
      return;
    }
    const newProducts = products.filter((element) => {
      return event.target.value === element.category;
    });  
    setCurrentCategory(event.target.value);
    setCurrentProducts(newProducts);
  }

  function handlePriceChange(event) {
    const value = Number(event.target.value);
    document.querySelector('#price').innerHTML=`$${value}`;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      const newProducts = products.filter((element) => element.price <= value);
      document.querySelector('#priceSlider').value = value;
      setCurrentPrice(value);
      setCurrentProducts(newProducts);
    }, 3000); 
  }
  

  function Filter() {
    return (
      <div id="filters-container">
        <select value={currentCategory} onChange={handleCategoryChange}>
          <option>category</option> 
          <option>electronics</option>
          <option>jewelery</option>
          <option>men&apos;s clothing</option>
          <option>women&apos;s clothing</option>
        </select>
        <div className='price'>
          <label htmlFor='priceSlider'>Price</label>
          <input type='range' id='priceSlider' onChange={handlePriceChange} value={currentPrice} name='priceSlider' min={0} max={1000}></input>
          <p id="price">{`$${currentPrice}`}</p>
        </div>
        <input type='text' name='search' placeholder='Search for product'></input>
      </div>
    )
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
