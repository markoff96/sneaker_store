import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SideMenu from './components/SideMenu';

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  useEffect(() => {
    (async function getProductData() {
      const response = await fetch('https://fakestoreapi.com/products;');
      setCardsInfo(await response.json());
      try {
        const errCheck = await response;
        console.log(errCheck + 'successful');
      } catch (err) {
        console.log('Error dow');
      }
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
      <SideMenu />
    </div>
  );
}

export default App;
