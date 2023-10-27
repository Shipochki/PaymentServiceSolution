export const Product = ({ id, name, descirption, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{descirption}</p>
      <p>{price}</p>
    </div>
  );
};
