
import './homeProduct.css'

export const HomeProduct = ({imageUrlLink, name, description, companyName}) => {
    return (
        <div className="home-card-prod">
            <img src={imageUrlLink}/>
            <div className="home-card-info">
                <p className="home-card-title">{name}</p>
                <p className="home-card-desc">{description}</p>
                <p className="home-card-compName">{companyName}</p>
            </div>
        </div>
    )
}