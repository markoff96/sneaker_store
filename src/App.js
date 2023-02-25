import './App.css';
import { ImCart, ImUser, ImPlus, ImMinus } from 'react-icons/im';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={60} height={50} src="/img/logo.png" />
          <div className="headerInfo">
            <h3> Sneacker shop</h3>
            <p>Магазин </p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <ImCart className="cart" />
            <span>100 RUB</span>
          </li>
          <li>
            <ImUser className="profileLogo" />
          </li>
        </ul>
      </header>
      <h1>Все кроссовки</h1>
      <div className="content">
        <div className="cards">
          <img width={200} height={200} src="/img/sneakers1.jpeg" />
          <p>Кроссовки мужские NIKE</p>
          <div className="cardBottom">
            <div className="priceButton">
              <span> Цена:</span>
              <b> 12 999 RUB</b>
            </div>
            <button>
              <ImPlus className="button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
