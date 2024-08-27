import "./banner.css"
import SkyScrapper from "../../images/skyscrapper.jpg"
const Banner = () => {
  return (<div className="banner">
    <div className="banner-wrapper">
        <div className="banner-layout">
            <h1 className="banner-layout-title">
                TUNIS IS WAITING FOR YOU
            </h1>
        </div>
        <img src={SkyScrapper} alt="tunis-banner" className="banner-img" />
    </div>
  </div>);
}
export default Banner;