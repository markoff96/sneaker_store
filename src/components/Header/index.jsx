import { ImCart, ImUser } from 'react-icons/im';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <div className={styles.headerLeft}>
        <Link to="/">
          <img width={60} height={50} src="/img/logo.png" alt="site logo" />
        </Link>
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
          <Link to="/favorites">
            <img src="./img/like.png" alt="favorite page button" width={20} />
          </Link>
        </li>
        <li>
          <ImUser className={styles.profileLogo} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
