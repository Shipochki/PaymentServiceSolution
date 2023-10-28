import { Product } from "../Product/Product";
import "./home.css"

export const Home = ({allProducts}) => {
  return (
    <div className="home">
      {allProducts.map((x) => (
        <Product key={x.id} {...x}/>
      ))}
    </div>
  );
};
