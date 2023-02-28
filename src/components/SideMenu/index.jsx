import { HiArrowSmRight, HiXCircle } from 'react-icons/hi';
import styles from './SideMenu.module.css';

function SideMenu({ items = [], onCloseCart }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.SideMenu}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>Корзина</h2>
          <HiXCircle onClick={onCloseCart} />
        </div>

        <div className={styles.cartItems}>
          {items.map((obj) => (
            <div className={styles.cartCards}>
              <img width={70} src={obj.image} alt={obj.title} />
              <div className={styles.cartTitle}>
                <p>{obj.title}</p>
                <h3 style={{ marginTop: 10 }}>{obj.price + ' USD'}</h3>
              </div>
              <HiXCircle style={{ right: 0 }} />
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
