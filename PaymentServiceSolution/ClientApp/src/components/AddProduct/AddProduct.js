import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import "./addProduct.css"

const AddProductFromKeys = {
  Name: "name",
  ImageUrlLink: "imageurllink",
  Description: "description",
  Price: "price",
  CompanyId: "companyid",
};

export const AddProduct = () => {
  const { onAddProductSubmit } = useContext(AuthContext);

  const { values, changeHandler, onSubmit } = useForm(
    {
      [AddProductFromKeys.Name]: "",
      [AddProductFromKeys.Description]: "",
      [AddProductFromKeys.ImageUrlLink]: "",
      [AddProductFromKeys.Price]: "",
      [AddProductFromKeys.CompanyId]: localStorage.id,
    },
    onAddProductSubmit
  );

  return (
    <section id="add-product" className="sction-product">
      <form id="addProduct" method="post" onSubmit={onSubmit}>
        <div className="container" id="addProd">
          <h1>Add Product</h1>

          <label htmlFor="text">Name:</label>
          <input
            type="text"
            id="name"
            name={AddProductFromKeys.Name}
            placeholder="Bike"
            value={values[AddProductFromKeys.Name]}
            onChange={changeHandler}
          />

          <label htmlFor="text">ImageUrlLink:</label>
          <input
            type="text"
            id="imageUrlLink"
            name={AddProductFromKeys.ImageUrlLink}
            value={values[AddProductFromKeys.ImageUrlLink]}
            onChange={changeHandler}
          />

          <label htmlFor="text">Description:</label>
          <textarea
            type="text"
            id="desc"
            name={AddProductFromKeys.Description}
            placeholder="desc"
            value={values[AddProductFromKeys.Description]}
            onChange={changeHandler}
          />

          <label htmlFor="number">Price:</label>
          <input
            type="number"
            id="price"
            name={AddProductFromKeys.Price}
            placeholder="5.99"
            value={values[AddProductFromKeys.Price]}
            onChange={changeHandler}
          />

          <input className="btn submit" type="submit" value="Add" />
        </div>
      </form>
    </section>
  );
};
