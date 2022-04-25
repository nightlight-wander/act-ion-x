import HomeStyles from "./Home.module.css";
// import {Link} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { useVideos } from "../../context/VideosContest";
// import { getVideosData } from "../../utilities/getVideosData";


const Home = () => {
  const { categories, setCategories, genres, setGenres,category,setCategory,videos,setVideos,selectGenre,setSelectGenre} = useVideos();

const fetchVideosData=async()=>{
  try{
    const { data: { categories } } = await axios.get("/api/categories");
    const {data:{videos}}=await axios.get("/api/videos");
    const specificVideos=categories.map((catObj)=>{
      return videos.filter((curVideoObj)=>{
        return curVideoObj.category===catObj.category
      })
    })
    console.log(specificVideos[category]);
    setCategories(()=>categories);
    setVideos(()=>specificVideos[category]);
  }catch(error){
    console.log(error);
  }
}

useEffect(()=>{
  fetchVideosData();
},[category])



// console.log(videos);


  const catGenreHandler = (selectedCat) => {
    const genresArray = categories.reduce((curTotal, curObj) => {
      return curObj.category === categories[Number(selectedCat)].category ? curObj.genre : curTotal
    },[])
    console.log(genres)
    setGenres(() => [...genresArray]);
    // const catFound=categories.find(categoryItem=>categoryItem._id===selectedCat._id)
    setCategory(()=>selectedCat);
  }

  const genreHandler=(genreObj)=>{
    const selectedGenres=genres.reduce((curTotal,curObj)=>curObj.genreName===genreObj.genreName?genreObj:curTotal,[]);
    setSelectGenre(()=>[...selectGenre,selectedGenres]);
    console.log(selectGenre);
  }

  // const videosByGenre=()=>{
  //   setVideos(()=>videos.filter(videoObj.genreName.includes(selectGenre.genreName)));
  // }


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

      <div className={`${HomeStyles.genreSlider} flex-center`}>
        {/* <div key={genreObj._id} className={`${HomeStyles.genreNamesWrapper}`}> */}
        {/* </div> */}
      <button  className={`${HomeStyles.genreBtn} ${HomeStyles.genreAllBtn}`}>All</button>
        {genres.map(genreObj => {
          return <button className={`${HomeStyles.genreBtn}`} onClick={()=>genreHandler(genreObj)}>{genreObj.genreName}</button>
          
        })}
      </div>

      <nav className={`${HomeStyles.actionsCat} flex-center`}>
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} >
          <span className="material-icons">
            restart_alt
          </span>
          <span className={`${HomeStyles.actionsName}`} >Home</span>
        </button>
        
        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} onClick={() => catGenreHandler(0)}>
          <span className="material-icons">
            science
          </span>
          Sci-Code
        </button>

        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} onClick={() => catGenreHandler(1)}>
          <span className="material-icons">
            sports_soccer
          </span>
          Dynamics
        </button>

        <button className={`${HomeStyles.actions} flex-col flex-vCenter`} onClick={() => catGenreHandler(2)}>
          <span className="material-icons">
            emoji_nature
          </span>
          Soundscapes
        </button>
      </nav>

    </div>
  )
}

export { Home }; 
