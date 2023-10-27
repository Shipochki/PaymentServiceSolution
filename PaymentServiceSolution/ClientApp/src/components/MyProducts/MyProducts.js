import { Product } from "../Product/Product"

export const MyProducts = ({products}) => {
    return (
        <section className="products">
            <h1>My Products</h1>

            {products.map(x =>
                <Product key={x.id} {...x}/>)}
        </section>
    )
}