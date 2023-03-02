import styles from './Cards.module.css';
import { useState } from 'react';

function Cards({ title, price, image, onPlus, onLike, favorited }) {
  const [isAdded, setAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(favorited);

  const onClickPlus = () => {
    setAdded(!isAdded);
    onPlus({ title, price, image });
  };

  const onLikeBtn = () => {
    setIsLiked(!isLiked);
    onLike({ title, price, image });
  };
  return (
    <div className={styles.cards}>
      <img
        src={isLiked ? './img/liked.png' : './img/like.png'}
        className={styles.favorite}
        onClick={onLikeBtn}
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
          onClick={onClickPlus}
          src={isAdded ? './img/checked.png' : './img/plus.png'}
          className={styles.addButton}
          alt="add in cart button"
        ></img>
      </div>
    </div>
  );
}

export default Cards;
