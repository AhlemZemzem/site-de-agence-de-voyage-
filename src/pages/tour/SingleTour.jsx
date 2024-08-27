import {useParams} from "react-router-dom";
import Rating from "../../components/tours/Rating"
import { toursList } from "../../data";
import "./single-tour.css";
import BookNow from "../../components/tours/BookNow";

const SingleTour = () => {
    const {id} =useParams();
    const tour =  toursList.find(t => t.id === parseInt(id)); //parseInt(id)== +id

    return(<section className="tour">
            <div className="tour-step">
                United Arab Tunisia <i className="bi bi-chevron-right"></i>
                 Things to do in Tunis<i className="bi bi-chevron-right"></i> Safari

            </div>
            <div className="tour-category">ADVENTURE</div>
            <h1 className="tour-title">Tunis:{tour.title}</h1>
            <div className="tour-info">
                <Rating rating={tour.rating} reviews={tour.reviews} />
                <div className="tour-provider">
                    Activity Provider : <span>Ahlem Zemzem</span>
                </div>
            </div>
            <div className="tour-img-wrapper">
                <img src={tour.image} alt={tour.title} className="tour-img" />
                 <BookNow  priceFrom={tour.priceFrom}/>
            </div>
            <p className="tour-description">
            A safari in Tunisia offers a unique adventure through its diverse landscapes,
             ranging from the vast expanses of the Sahara Desert to national parks rich in
              biodiversity. Visitors can explore the dunes of the Grand Erg Oriental by 4x4,
              go on camel treks, and spend starry nights in traditional Bedouin camps. In addition
             to natural wonders, safaris also include cultural visits to the ancient troglodyte
             dwellings of Matmata and the ksour of Tataouine, as well as maritime excursions around
             the picturesque islands of Kerkennah and Djerba.
            </p>
            <div className="tour-more-inforamtion">
                <h2 className="tour-info-title">About  this activity</h2>
                <div className="tour-info-item">
                   <div className="tour-info-item-title">
                   <i style={{color:'#2ecc71'}} className="bi bi-calendar3"></i>
                   Free Cancellation
                   </div>
                   <p className="tour-info-item-desc">
                    Cancel up to 24 hours in advance to  recieve a full refund
                   </p>
                </div>
                <div className="tour-info-item">
                   <div className="tour-info-item-title">
                   <i style={{color:'#3498db'}} className="bi bi-calendar-plus-fill"></i>
                   Reserve now & pay later
                   </div>
                   <p className="tour-info-item-desc">
                    Keep your travel plan flexible -- book your spot and pay nothing today.
                   </p>
                </div>
                <div className="tour-info-item">
                   <div className="tour-info-item-title">
                   <i style={{color:'#e74c3c'}} className="bi bi-virus"></i>
                   Covid -19 precautions
                   </div>
                   <p className="tour-info-item-desc">
                    Special health and safety  measures are in place .check your activity
                    voucher once you book for full details.
                   </p>
                </div>
                <div className="tour-info-item">
                   <div className="tour-info-item-title">
                   <i className="bi bi-clock-history"></i>
                   Duration 4 - 7 hours 
                   </div>
                   <p className="tour-info-item-desc">
                    check availability to see staring times.

                   </p>
                </div>
                <div className="tour-info-item">
                   <div className="tour-info-item-title">
                   <i  className="bi bi-person-check"></i>
                   Live tour Guide
                   </div>
                   <p className="tour-info-item-desc">
                    English
                     
                   </p>
                </div>
            </div>
            </section>
    );
}

export default SingleTour;