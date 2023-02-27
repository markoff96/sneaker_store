import styles from './Body.module.css';

function Body(props) {
  return (
    <>
      <div className={styles.body_search}>
        <h1>Все товары</h1>
        {props.children}
      </div>
      <div className={styles.content}></div>
    </>
  );
}

export default Body;
