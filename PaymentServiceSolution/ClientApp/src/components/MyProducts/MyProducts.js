import { ProductManage } from "./ProductManage/ProductManage";
import "./myProducts.css";

export const MyProducts = ({ products }) => {
  return (
    <section className="myProducts">
      <h1 className="myProducts-h1">Managment Page</h1>
      <div className="cards-container">
        {products.map((x) => (
          <ProductManage key={x.id} {...x} />
        ))}
      </div>
    </section>
  );
};
