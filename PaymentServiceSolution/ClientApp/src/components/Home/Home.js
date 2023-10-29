import { useContext } from "react";
import { Product } from "../Product/Product";
import "./home.css"
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const searchFormhKeys ={
  Text: "text"
}

export const Home = ({allProducts}) => {
  const {onSearchCompnay} = useContext(AuthContext);
  const {values, changeHandler, onSubmit }= useForm(
    {
      [searchFormhKeys.Text]: ""
    }, onSearchCompnay
  )
  return (
    <div>
      <div className="search">
        <form id="seacrch" method="POST" onSubmit={onSubmit}>
          <input
            type="text"
            id="text"
            name={searchFormhKeys.Text}
            placeholder="Search..."
            value={values[searchFormhKeys.Text]}
            onChange={changeHandler}
          ></input>

          <input id="btn" className="btn submit" type="submit" />
        </form>
      </div>
      <div className="home">
        {allProducts.map((x) => (
          <Product key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
