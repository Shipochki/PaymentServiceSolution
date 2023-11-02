
import './homeProduct.css'

export const HomeProduct = ({imageUrlLink, name, description, companyName, bookCoverBackImg}) => {
    return (
      <div className="home-card-prod">
        <div className="images">
          <div class="card">
            <div class="wrapper">
              <img
                src={imageUrlLink}
                class="book-image"
              />
            </div>
            <img src={require(`./${name}.png`)}
              class="character"
            />
          </div>
        </div>
        <div className="home-card-info">
          <p className="home-card-title">{name}</p>
          <p className="home-card-desc">{description}</p>
          <p className="home-card-compName">{companyName}</p>
        </div>
      </div>
    );
}