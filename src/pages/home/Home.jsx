import { toursList } from "../../data";
import { useState } from 'react';
import HeroHeader from '../../components/hero-header/HeroHeader';
import Services from '../../components/services/Services';
import { paginate } from "../../utils/pagination"
import TourList from '../../components/tours/TourList';
import Pagination from '../../components/pagination/Pagination';
import NewsLetter from '../../components/news/NewsLetter';
import SortInput from '../../components/sort-input/SortInput';
import Banner from '../../components/banner/Banner';



const Home = () => {

    const [currentPage,setCurrentPage] = useState(2);
    const [sortItem,setSortItem] = useState("recomended");
    
  // sort tour 
  
  const sortedTourList =
   sortItem === "low"
   ?toursList.sort((a,b) =>a.priceFrom - b.priceFrom)
   : sortItem ==="high"
   ?toursList.sort((a,b) =>b.priceFrom - a.priceFrom)
   :toursList.sort((a,b) => b.rating - a.rating);
  
  
   const {pages,orderedTourList}=paginate(toursList.length,sortedTourList,currentPage);


    return(<div>
          <HeroHeader/>
       <Services />
       <SortInput setSortItem={setSortItem} sortItem={sortItem} toursLength={toursList.length} />
       <TourList toursList={orderedTourList} />
       <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
       <Banner />
       <NewsLetter />
    </div>
    );
}

export default Home;