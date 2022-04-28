import HomeStyles from "./Home.module.css";
import { useVideos } from "../../context/VideosContest";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import axios from "axios";
import { useEffect } from "react";



const Home = () => {
  const { categories,setCategories} = useVideos();

  useEffect(()=>{
    (async()=>{
        try{
          const { data: { categories } } = await axios.get("/api/categories");
         
          setCategories(()=>categories);
        }catch(error){
          console.log(error);
        }
    })()
    // eslint-disable-next-line
},[categories])

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
            {/* {catObj.genre.map(genreArraysOfObs=>{
              return <div className={`${HomeStyles.randomText} ${HomeStyles.randomMargin}`}>{genreArraysOfObs.genreName}</div>
            })} */}
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
