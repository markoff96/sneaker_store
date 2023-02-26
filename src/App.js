import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
// import SideMenu from './components/SideMenu';
import Cards from './components/Cards';

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async function getProductData() {
      const response = await fetch('https://fakestoreapi.com/products');
      setCardsInfo(await response.json());
    })();

    // fetch('https://fakestoreapi.com/products')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCardsInfo(data);
    //   })
    //   .catch((err) => console.log('Downloading error'));
    // // .finally(() =>)
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Body />
      <div className="content">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          cardsInfo
            // .filter((obj) =>
            //   obj.title.toLowerCase().includes(inputVal.toLowerCase())
            // )
            .map((obj) => (
              <Cards
                key={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.image}
              />
            ))
        )}
      </div>
      {/* <SideMenu /> */}
    </div>
  );
}

export default App;
