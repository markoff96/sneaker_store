import { ImPlus, ImHeart } from 'react-icons/im';

function Cards({ title, price, image }) {
  return (
    <div className="cards">
      <ImHeart className="favorite" />
      <img width={200} height={200} src={image} alt={title} />
      <p>{title}</p>
      <div className="cardBottom">
        <div className="priceButton">
          <span> Цена:</span>
          <b>{price + ' USD'}</b>
        </div>
        <button>
          <ImPlus className="button" />
        </button>
      </div>
    </div>
  );
}

export default Cards;
