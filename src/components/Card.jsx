import { ImPlus } from 'react-icons/im';

function Card() {
  return (
    <div className="cards">
      <img width={200} height={200} src="/img/sneakers1.jpeg" alt="cartImg" />
      <p>Кроссовки мужские NIKE</p>
      <div className="cardBottom">
        <div className="priceButton">
          <span> Цена:</span>
          <b> 12 999 RUB</b>
        </div>
        <button>
          <ImPlus className="button" />
        </button>
      </div>
    </div>
  );
}

export default Card;
