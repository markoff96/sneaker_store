import { ImCart, ImUser } from 'react-icons/im';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header>
      <div className={styles.headerLeft}>
        <img width={60} height={50} src="/img/logo.png" alt="site logo" />
        <div className="headerInfo">
          <h3>random shop</h3>
          <p>Магазин </p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li>
          <ImCart onClick={props.onClickCartOpen} className={styles.cart} />
          <span>99999 USD</span>
        </li>
        <li>
          <ImUser className={styles.profileLogo} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
