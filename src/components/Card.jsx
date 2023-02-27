import { ImPlus, ImHeart } from 'react-icons/im';

function Card() {
  return (
    <div className="card">
      <ImHeart className="favorite" />
      <img
        width={200}
        height={200}
        src="/img/sneakers1.jpeg"
        alt="здесь будет тайтл из апи"
      />
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
