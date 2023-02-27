import { ImCart, ImUser } from 'react-icons/im';

function Header() {
  return (
    <header>
      <div className="headerLeft">
        <img width={60} height={50} src="/img/logo.png" alt="site logo" />
        <div className="headerInfo">
          <h3>random shop</h3>
          <p>Магазин </p>
        </div>
      </div>
      <ul className="headerRight">
        <li>
          <ImCart className="cart" />
          <span>99999 USD</span>
        </li>
        <li>
          <ImUser className="profileLogo" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
