import "./news-letter.css"
import NewsLetterImage from "../../images/newsletterimage.jpg"
const NewsLetter =() =>{

    return(<div className="news-letter">
        <div className="news-letter-container">
            <div className="news-letter-image-wrapper">
                <img src={NewsLetterImage} alt="new-letter" className="news-letter-image" />
            </div>
            <div className="news-letter-content">
                <h2 className="new-letter-content-title">
                    Your Tunis itinerary is waiting
                </h2>
                <p className="news-letter-content-desc">
                Recieve a curated 48-hour itinerary featuring the most iconic
                experience in Tunisia, straight to your inbox.
                </p>
                <div className="news-letter-inputs">
                    <input type="text" placeholder="Your Email" className="news-letter-input"></input>
                    <button className="news-letter-btn">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>);
}
export default NewsLetter;