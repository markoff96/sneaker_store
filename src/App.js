import './App.css';
import { useEffect, useState } from 'react';
import { Cards, SideMenu, Body, Header, Router, Favorites } from './index';
import { Routes, Route } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import axios from 'axios';

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [cartIems, setCartItems] = useState([]);

  useEffect(() => {
    (async function getProductData() {
      const response = await fetch('https://fakestoreapi.com/products');
      setCardsInfo(await response.json());

      (async function getSaveCart() {
        const savedCart = await fetch(
          'https://63f891ac5b0e4a127de8c5e0.mockapi.io/cart'
        );
        setCartItems(await savedCart.json());
      })();

      try {
        const errChec = await fetch('https://fakestoreapi.com/products');
      } catch (errChec) {
        console.log('Downloading error', errChec);
      }
    })();
  }, []);

  const addToCart = (obj) => {
    axios.post('https://63f891ac5b0e4a127de8c5e0.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`https://63f891ac5b0e4a127de8c5e0.mockapi.io/cart/${id}`);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <SideMenu
          items={cartIems}
          onCloseCart={() => setCartOpened(false)}
          onRemoveCart={onRemoveCart}
        />
      )}

      <Header onClickCartOpen={() => setCartOpened(true)} />
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/"
          element={
            <Body>
              {' '}
              <div className="content">
                {isLoading ? (
                  <h1>Loading</h1>
                ) : (
                  cardsInfo
                    .filter((obj) =>
                      obj.title.toLowerCase().includes(inputVal.toLowerCase())
                    )
                    .map((obj) => (
                      <Cards
                        key={obj.id}
                        title={obj.title}
                        price={obj.price}
                        image={obj.image}
                        onPlus={(obj) => addToCart(obj)}
                      />
                    ))
                )}
              </div>
            </Body>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
