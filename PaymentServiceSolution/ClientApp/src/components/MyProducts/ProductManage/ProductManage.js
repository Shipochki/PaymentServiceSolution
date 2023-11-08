import { useContext } from 'react';
import './productManage.css'
import { AuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditProductFromKeys = {
  Id: "id",
  Name: "name",
  ImageUrlLink: "imageurllink",
  Description: "description",
  Price: "price",
  CompanyId: "companyid",
  BookCoverBack: "bookcoverback"
};

export const ProductManage = ({id, imageUrlLink, bookCoverBackImg, name, description, price, companyName, paymentLink}) => {
  const { onEditProductSubmit, onDeleteSubmit } = useContext(AuthContext)

  const { values, changeHandler, onSubmit } = useForm(
    {
      [EditProductFromKeys.Id]: id,
      [EditProductFromKeys.Name]: name,
      [EditProductFromKeys.Description]: description,
      [EditProductFromKeys.ImageUrlLink]: imageUrlLink,
      [EditProductFromKeys.Price]: price,
      [EditProductFromKeys.CompanyId]: localStorage.id,
      [EditProductFromKeys.BookCoverBack]: bookCoverBackImg,
    },
    onEditProductSubmit
  );

    return (
      <div id={id} className="main-prod-mana">
        <div className="prod-mana">
          <div className="prod-img">
            <img src={imageUrlLink} />
          </div>
          <div className="right-side-prod">
            <h3>{name}</h3>
            <div className="prod-mana-btns">
              <button
                className="details-btn"
                onClick={() => {
                  document
                    .getElementById(`${id}`)
                    .getElementsByClassName("details-dialog")[0].style.display =
                    "flex";
                }}
              >
                Details
              </button>
              <button
                className="edit-btn"
                onClick={() => {
                  document
                    .getElementById(`${id}`)
                    .getElementsByClassName("edit-dialog")[0].style.display =
                    "flex";
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  document
                    .getElementById(`${id}`)
                    .getElementsByClassName("delete-dialog")[0].style.display =
                    "flex";
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="details-dialog">
          <div className="details-imgs">
            <img className="details-dialog-img" src={imageUrlLink} />
            <img className="details-dialog-img" src={bookCoverBackImg} />
          </div>
          <div className="details-info">
            <h3>{name}</h3>
            <p className="de-desc">
              <b>Description:</b> {description}
            </p>
            <p className="de-price">
              <b>Price: $ {price}</b>
            </p>
            <p className="de-comp">
              <b>Company:</b> {companyName}
            </p>
          </div>
          <button
            className="details-dialog-btn"
            onClick={() => {
              document
                .getElementById(`${id}`)
                .getElementsByClassName("details-dialog")[0].style.display =
                "none";
            }}
          >
            X
          </button>
        </div>
        <div className="edit-dialog">
          <form id="editProduct" method="post" onSubmit={onSubmit}>
            <div className="container" id="editProd">
              <h1>Edit Product</h1>

              <label htmlFor="text">Name:</label>
              <input
                type="text"
                id="name"
                name={EditProductFromKeys.Name}
                placeholder="Bike"
                value={values[EditProductFromKeys.Name]}
                onChange={changeHandler}
              />

              <label htmlFor="text">ImageUrlLink:</label>
              <input
                type="text"
                id="imageUrlLink"
                name={EditProductFromKeys.ImageUrlLink}
                value={values[EditProductFromKeys.ImageUrlLink]}
                onChange={changeHandler}
              />

              <label htmlFor="text">BookCoverBackLink:</label>
              <input
                type="text"
                id="bookcoverback"
                name={EditProductFromKeys.BookCoverBack}
                value={values[EditProductFromKeys.BookCoverBack]}
                onChange={changeHandler}
              />

              <label htmlFor="text">Description:</label>
              <textarea
                type="text"
                id="desc"
                name={EditProductFromKeys.Description}
                placeholder="desc"
                value={values[EditProductFromKeys.Description]}
                onChange={changeHandler}
              />

              <label htmlFor="number">Price:</label>
              <input
                type="number"
                id="price"
                name={EditProductFromKeys.Price}
                placeholder="5.99"
                value={values[EditProductFromKeys.Price]}
                onChange={changeHandler}
              />

              <input
                className="btn submit"
                type="submit"
                value="Edit"
                onClick={() => {
                  document
                    .getElementById(`${id}`)
                    .getElementsByClassName("edit-dialog")[0].style.display =
                    "none";
                }}
              />
            </div>
          </form>
          <button
            className="details-dialog-btn"
            onClick={() => {
              document
                .getElementById(`${id}`)
                .getElementsByClassName("edit-dialog")[0].style.display =
                "none";
            }}
          >
            X
          </button>
        </div>
        <div className="delete-dialog">
          <div className="delete-dialog-div">
            <h2>Are you sure, you want to delete ?</h2>
            <div className="book-info">
              <p>{name}</p>
              <img src={imageUrlLink} />
            </div>
            <div className="okay-reject-btns">
              <button className="details-dialog-delete-btn" onClick={() => {
                document
                .getElementById(`${id}`)
                .getElementsByClassName("delete-dialog")[0].style.display =
                "none";
                onDeleteSubmit(id);
              }}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                className="close-dialog-btn"
                onClick={() => {
                  document
                    .getElementById(`${id}`)
                    .getElementsByClassName("delete-dialog")[0].style.display =
                    "none";
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}