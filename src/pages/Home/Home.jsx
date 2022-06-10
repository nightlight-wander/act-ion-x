import HomeStyles from "./Home.module.css";
import { useVideos } from "../../context/VideosContest";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import axios from "axios";
import { useEffect } from "react";
import { GET_CATEGORIES} from "../../utilities/actions-types";



const Home = () => {
  const { videoStates:{categories},videoDispatch} = useVideos();

  useEffect(()=>{
    (async()=>{
        try{
          const { data: { categories } } = await axios.get("/api/categories");
          videoDispatch({type:GET_CATEGORIES,payload:categories});
        }catch(error){
          console.log(error);
        }
    })()
},[videoDispatch])


  return (
    <div>
      <section className={HomeStyles.topSection}>
        <h1 className={`text-render`}>Fall asleep while listening to amazing stories.</h1>
        <button className={`${HomeStyles.linkBtn}`}>Start</button>
      </section>
      <h2 className={`${HomeStyles.catsHeading} text-render`}>Dive into intensities of yourself</h2>

      <section className={`${HomeStyles.catsWrapper} flex-center`} >
        {categories.map(catObj => {
          return <div key={catObj._id}>
            <img src={catObj.catImg} className={`${HomeStyles.catImg}`} style={{ height: "220px", width: "220px", maxInlineSize: "100%", objectFit: "contain cover" }} alt={catObj.category}>
            </img>
          </div>
 
        }
        )}
      </section>
      <GenreSlider/>
      <BottomNav />
    </div>
  )
}

export { Home }; 
