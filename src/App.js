// import './App.css';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Products, Cart } from './components';

const ProductData = [
  { id: 1, name: 'Keyboard', price: 800, quantity: 0 },
  { id: 2, name: 'Mouse', price: 500, quantity: 0 },
  { id: 3, name: 'Headphone', price: 300, quantity: 0 },
  { id: 4, name: 'Lamp', price: 1500, quantity: 0 },
  { id: 5, name: 'Chair', price: 3000, quantity: 0 },
];
const cartData = [
  { id: 3, name: 'Headphone', price: 300, quantity: 2 },
  { id: 5, name: 'Chair', price: 3000, quantity: 1 },
]
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [a, seta] = useState(0);

  const fetchProducts = async () => {
    setProducts(ProductData);
  };
  const fetchCart = async () => {
    setCart(cartData);
  };

  const totalAmount = () => {
    var total;
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
      total = total + (cart[i].price * cart[i].quantity)  
    }
    console.log('total',total);
    seta(total)
  }
console.log('a',a);
  const handleAddToCart = async (productId) => {
    var item = ProductData.find(({id}) => id===productId )
    var checkAlreadyAdded = cart.find(({id}) => id===productId )
    if(checkAlreadyAdded){
      checkAlreadyAdded.quantity++;
      setCart([...cart]);
      return;
    }
    item.quantity++;
    setCart([...cart,item]);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    var item = cart.find(({id}) => id===lineItemId )
    if(quantity==0)
      item.quantity--
    else
      item.quantity++

    if(item.quantity==0){
      const filteredCart = cart.filter((item) => item.id !== lineItemId);
      setCart(filteredCart);
      return;
    }
    setCart([...cart]);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const filteredCart = cart.filter((item) => item.id !== lineItemId);
    setCart(filteredCart);
    return;
  };
 
  const handleCheckout =  () => {

  };

  const handleEmptyCart =  () => {
     setCart([]);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    totalAmount();
  }, []);

  return (
    <>
      <Typography  variant="h5" gutterBottom>Inventory</Typography>
      <div style={{ display: 'flex' }}>
        <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
        <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} subtotal checkoutEvent={handleCheckout}/>
      </div>
    </>
  );
}

export default App;
