import { ImSearch } from 'react-icons/im';

import { useState } from 'react';

function Body() {
  const [inputVal, setInputVal] = useState('');
  return (
    <>
      <div className="headerSearch">
        <h1>Все товары</h1>
        <div className="searchBlock">
          <ImSearch />
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="content"></div>
    </>
  );
}

export default Body;
