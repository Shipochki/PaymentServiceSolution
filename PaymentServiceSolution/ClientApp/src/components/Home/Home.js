import { HomeProduct } from "./HomeProduct/HomeProduct.js";
import "./home.css"

export const Home = ({topProducts}) => {

  return (
    <div className="main-home">
      <div>
      <h1>Best Sellers</h1>
      <div className="top3">
      {topProducts.map((x, i) => (
          <HomeProduct key={x.id} {...x} />
        ))}
      </div>
      </div>
    </div>
  );
};
