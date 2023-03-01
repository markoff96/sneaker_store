import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SideMenu from './components/SideMenu';
import Cards from './components/Cards';
import { ImSearch } from 'react-icons/im';

import axios from 'axios';

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [cartIems, setCartItems] = useState([]);

  const savedItems = (res) => {
    axios
      .get('https://63f891ac5b0e4a127de8c5e0.mockapi.io/cart')
      .then(setCartItems(res));
  };

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
        const errCheck = await response.type;
        console.log(errCheck, 'Downloaded successful');
      } catch (error) {
        console.error('Downloading error', error);
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
      <Body>
        <div className="searchBlock">
          <ImSearch />
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="search"
            placeholder="Search..."
          />
        </div>
      </Body>
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
    </div>
  );
}

export default App;
