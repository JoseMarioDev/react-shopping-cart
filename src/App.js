import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductContext } from './contexts/ProductContext';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/CartContext';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <div className='App'>
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Navigation />
          {/* Routes */}
          <Route exact path='/' component={Products} />} />
          <Route path='/cart' render={() => <ShoppingCart />} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
