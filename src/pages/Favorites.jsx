import Cards from '../components/Cards';

function Favorites({ items, addToFavorite }) {
  return (
    <div>
      <h1>Избранное</h1>
      <div style={{ display: 'flex' }}>
        {items.map((obj) => (
          <Cards
            id={obj.id}
            key={obj.id}
            title={obj.title}
            price={obj.price}
            image={obj.image}
            favorited={false}
            addToFavorite={addToFavorite}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
