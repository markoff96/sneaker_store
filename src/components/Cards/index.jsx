import styles from './Cards.module.css';

function Cards({ title, price, image, onPlusBtn, addButton, likeBtn }) {
  return (
    <div className={styles.cards}>
      <img
        src={'./img/like.png'}
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
          onClick={onPlusBtn}
          src={addButton}
          className={styles.addButton}
          alt="add in cart button"
        ></img>
      </div>
    </div>
  );
}

export default Cards;
