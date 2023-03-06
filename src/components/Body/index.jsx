import styles from './Body.module.css';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

function Body(props) {
  const [inputVal, setInputVal] = useState('');

  return (
    <>
      <div className={styles.body_search}>
        <h1>Все товары</h1>
        <div className="searchBlock">
          <ImSearch />
          <input
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
              props.inputData(inputVal);
            }}
            className="search"
            placeholder="Search..."
          />
        </div>
        {props.children}
      </div>
    </>
  );
}

export default Body;
