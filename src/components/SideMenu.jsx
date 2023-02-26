import { HiArrowSmRight, HiXCircle } from 'react-icons/hi';

function SideMenu() {
  return (
    <div className="overlay">
      <div className="SideMenu">
        <div>
          <h2>Корзина</h2>
          <HiXCircle />
        </div>

        <div className="cartItems">
          <img
            width={100}
            height={100}
            src="/img/sneakers1.jpeg"
            alt="cartImg"
          />

          <div>
            <p className="cartItemsP">Кроссовки мужские NIKE</p>
            <b>12 999 RUB</b>
          </div>
          <HiXCircle />
        </div>

        <div className="resultAmmount">
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
          <button className="orderButton">
            Оформить заказ <HiArrowSmRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
