import './App.css';
import { Children, useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SideMenu from './components/SideMenu';
import Cards from './components/Cards';
import { ImSearch } from 'react-icons/im';

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isAdded, setAdded] = useState(false);

  const onPlusBtn = () => {
    setAdded(!isAdded);
  };

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
      {/* <SideMenu /> */}
      <Header />
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
                onPlusBtn={onPlusBtn}
                likeBtn={isAdded ? './img/like.png' : './img/plus.png'}
                addButton={isAdded ? './img/checked.png' : './img/plus.png'}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default App;
