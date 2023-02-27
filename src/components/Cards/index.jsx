import { ImPlus, ImHeart } from 'react-icons/im';
import styles from './Cards.module.css';
console.log(styles);

function Cards({ title, price, image }) {
  return (
    <div className={styles.cards}>
      <ImHeart className={styles.favorite} />
      <img width={200} height={200} src={image} alt={title} />
      <p>{title}</p>
      <div className={styles.cardBottom}>
        <div className={styles.priceButton}>
          <span> Цена:</span>
          <b>{price + ' USD'}</b>
        </div>
        <button>
          <ImPlus className={styles.addButton} />
        </button>
      </div>
    </div>
  );
}

export default Cards;
