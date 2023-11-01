import { Product } from "../Product/Product.js"

import './catalog.css'

export const Catalog = ({allProducts}) => {


    return(
        <div className="catalog">
        {allProducts.map((x) => (
          <Product key={x.id} {...x} />
        ))}
      </div>
    )
}