import { Product } from "../Product/Product";
import "./myProducts.css";

export const MyProducts = ({ products }) => {
  return (
    <section className="products">
      <h1 className="myProducts-h1">My Products</h1>
      <div className="cards-container">
        {products.map((x) => (
          <Product key={x.id} {...x} />
        ))}
      </div>
    </section>
  );
};
