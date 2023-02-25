import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SideMenu from './components/SideMenu';

function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log('Downloading error'));
    // .finally(() =>)
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
