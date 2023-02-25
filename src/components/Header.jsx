import { ImCart, ImUser } from 'react-icons/im';

function Header() {
  return (
    <header>
      <div className="headerLeft">
        <img width={60} height={50} src="/img/logo.png" alt="" />
        <div className="headerInfo">
          <h3> Sneaker shop</h3>
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
  );
}

export default Header;
