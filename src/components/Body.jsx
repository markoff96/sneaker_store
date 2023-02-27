function Body(props) {
  return (
    <>
      <div className="headerSearch">
        <h1>Все товары</h1>
        {props.children}
      </div>
      <div className="content"></div>
    </>
  );
}

export default Body;
