import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SideMenu from './components/SideMenu';
import Cards from './components/Cards';
import { ImSearch } from 'react-icons/im';

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
      try {
        const errCheck = await response.type;
        console.log(errCheck, 'Downloaded successful');
      } catch (error) {
        console.error('Downloading error', error);
      }
    })();
  }, []);

  return (
    <div className="wrapper">
      {cartOpened && (
        <SideMenu items={cartIems} onCloseCart={() => setCartOpened(false)} />
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
                onPlus={(obj) => {
                  setCartItems((prev) => [...prev, obj]);
                }}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default App;
