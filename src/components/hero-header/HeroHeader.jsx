import"./hero-header.css"
const HeroHeader = () => {
    return(<div className="hero-header">
        <div className="search-box">
            <div className="input-wrapper">
              <i className=" bi bi-search"></i>
              <input className="Search-box-input" type="search" placeholder="what are you looking for"/>

            </div>
         <button className="Search-box-btn">Search</button>
        </div>
        <div className="hero-header-title">
            <h3>TUNIS</h3>
            <h1>DESERT SAFARIS</h1>

        </div>
    </div>

    );
}
export default HeroHeader