import { HiArrowSmRight, HiXCircle } from 'react-icons/hi';
import styles from './SideMenu.module.css';

function SideMenu({ items = [], onCloseCart }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.SideMenu}>
        <div>
          <h2>Корзина</h2>
          <HiXCircle onClick={onCloseCart} />
        </div>

        <div className={styles.cartItems}>
          {items.map((obj) => (
            <div className={styles.cartItems}>
              <img width={100} src={obj.image} alt={obj.title} />
              <p>{obj.title}</p>
              <h3>{obj.price}</h3>
            </div>
          ))}
        </div>

        <div className={styles.resultAmmount}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b> 14 888 RUB</b>
            </li>
            <li>
              <span>Доставка:</span>
              <div></div>
              <b> 500 RUB</b>
            </li>
          </ul>
          <button className={styles.orderButton}>
            Оформить заказ <HiArrowSmRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
