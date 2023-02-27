import styles from './Cards.module.css';

function Cards({ title, price, image, onCart, onFavorite }) {
  return (
    <div className={styles.cards}>
      <img
        onClick={onFavorite}
        src="./img/like.png"
        className={styles.favorite}
        alt="like button"
      ></img>
      <img width={200} height={200} src={image} alt={title} />
      <p>{title}</p>
      <div className={styles.cardBottom}>
        <div className={styles.priceButton}>
          <span> Цена:</span>
          <b>{price + ' USD'}</b>
        </div>
        <img
          onClick={onCart}
          className={styles.addButton}
          alt="add to cart button"
          src="./img/plus.png"
        />
      </div>
    </div>
  );
}

export default Cards;
