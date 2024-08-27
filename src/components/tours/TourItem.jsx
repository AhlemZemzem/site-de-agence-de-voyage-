import { Link } from "react-router-dom";


import Rating from "./Rating";

const TourItem =({item})=>{
    return(<div className="tour-item">
     <img src={item.image} alt={item.title} className="tour-item-img"/>
      <span className="tour-item-label">ADVENTURES</span>
       <div className="tour-item-body">
        <div className="tour-item-title">
            {item.title}
        </div>
        <div className="tour-item-duration">
            <span>{item.duration}</span> <i className="bi bi-dot"></i>
            Pickup available
        </div>
        <div className="tour-item-place">
            <i className="bi bi-geo-alt-fill"></i>
            <span>{item.place}</span>
        </div>
        <Rating  rating={item.rating} reviews={item.reviews}/>
        <div className="item-hotels"><i class="bi bi-percent"></i>{item.hotels}</div>
        <div className="tour-item-price">
            <strong> {item.priceFrom} TND </strong>
             <i className="offre">{item.offre}</i>
            </div>
            <Link to={`/tour/${item.id}`} className="tour-item-link">See More</Link>
        </div>
    </div>
);
};
export default TourItem;