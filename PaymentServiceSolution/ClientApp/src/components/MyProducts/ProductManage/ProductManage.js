import './productManage.css'

export const ProductManage = ({id, imageUrlLink, bookCoverBackImg, name, description, price, companyName, paymentLink}) => {
    return (
      <div className="main-prod-mana">
        <div className="prod-mana">
          <div className="prod-img">
            <img src={imageUrlLink} />
          </div>
          <div className="right-side-prod">
            <h3>{name}</h3>
            <div className="prod-mana-btns">
                <button className="details-btn" onClick={() => {
                    document.getElementsByClassName('details-dialog')[0].style.display = 'block';
                }}>Details</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
        <div className="details-dialog">
            <div className='details-imgs'>
                <img src={imageUrlLink} />
                <img src={bookCoverBackImg} />
            </div>
            <div className='details-info'>
                <h3>{name}</h3>
                <p className='de-desc'>{description}</p>
                <p className='de-price'>{price}</p>
                <p className='de-comp'>{companyName}</p>
            </div>
        </div>
        <div className="edit-dialog">
        </div>
        <div className="delete-dialog">
        </div>
      </div>
    );
}