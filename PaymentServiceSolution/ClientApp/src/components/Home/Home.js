import { Product } from "../Product/Product";
import "./home.css"

export const Home = ({topProducts}) => {

  return (
    <div>
      <div className="top3">
      {topProducts.map((x) => (
          <Product key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
