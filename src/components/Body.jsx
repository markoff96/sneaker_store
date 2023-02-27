import { ImSearch } from 'react-icons/im';
import Card from './Card';

function Body() {
  return (
    <>
      <div className="headerSearch">
        <h1>Все кроссовки</h1>
        <div className="searchBlock">
          <ImSearch />
          <input className="search" placeholder="Search..." />
        </div>
      </div>
      <div className="content">
        <Card />
      </div>
    </>
  );
}

export default Body;
