import { useContext } from "react";
import { useForm } from "../../hooks/useForm.js";
import { Product } from "../Product/Product.js"

import './catalog.css'
import { AuthContext } from "../../contexts/AuthContext.js";

const searchFormhKeys ={
  Text: "text"
}

export const Catalog = ({allProducts}) => {
  const {onSearchCompnay} = useContext(AuthContext);
  const {values, changeHandler, onSubmit }= useForm(
    {
      [searchFormhKeys.Text]: ""
    }, onSearchCompnay
  )
    return (
      <div className="catalog-main">
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
        <div className="catalog">
          {allProducts.map((x) => (
            <Product key={x.id} {...x} />
          ))}
        </div>
      </div>
    );
}