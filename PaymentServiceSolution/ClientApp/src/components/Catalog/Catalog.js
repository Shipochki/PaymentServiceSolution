import { useContext } from "react";
import { useForm } from "../../hooks/useForm.js";
import { Product } from "../Product/Product.js"

import './catalog.css'
import { AuthContext } from "../../contexts/AuthContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        <div className="catalog-main-place">
        <div className="search">
          <form id="seacrch" method="POST" onSubmit={onSubmit}>
            <input
              type="text"
              id="text"
              name={searchFormhKeys.Text}
              placeholder="Company..."
              value={values[searchFormhKeys.Text]}
              onChange={changeHandler}
            ></input>

            <button id="btn" className="btn submit" type="submit"> <FontAwesomeIcon icon={faSearch}/></button>
           
          </form>
        </div>
        <div className="catalog">
          {allProducts.map((x) => (
            <Product key={x.id} {...x} />
          ))}
        </div>
        </div>
      </div>
    );
}