import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import { Header } from "../../components/Header/Header";
import { useVideos } from "../../context/VideosContest";
import VideosStyles from "./VideoListing.module.css";
import axios from "axios";
import { useEffect } from "react";

const VideoListing = () => {
  const {setCategories, category,setVideos,videos,selectGenre,isGenres} = useVideos();

  useEffect(()=>{
    const fetchVideos=async()=>{ 
        try{
          const { data: { categories } } = await axios.get("/api/categories");
          const {data:{videos}}=await axios.get("/api/videos");
          const videosByCat=categories.map((catObj)=>{
            return videos.filter((curVideoObj)=>{
              return curVideoObj.category===catObj.category
            })
          })
          setCategories(()=>categories);
          const videosByGenre=[...videosByCat[category]].filter(videoObj=>selectGenre.includes(videoObj.genreName))
          isGenres===true?setVideos(()=>videosByGenre):setVideos(()=>videosByCat[category]);
        }catch(error){
          console.log(error);
        }
    }
    fetchVideos();
    // eslint-disable-next-line
},[category,isGenres,selectGenre])

// const filterVideosByGenre = (videos,selectGenre,isGenres)=>{
//   if(isGenres===true){
//     return videos.filter((videoObj)=>selectGenre.includes(videoObj.genreName));
//   }else{
//     return videos
//   }
// }
// const videosByGenre=filterVideosByGenre([...videos],selectGenre,isGenres);
  
  
  return (
    <>
      <Header />
      <div className={`${VideosStyles.videosWrapper}`}>
        {videos.map((videoObj) => {
          return <div className={`${VideosStyles.videoWrapper}`}>
            <div className={`${VideosStyles.videoBackground}`}><img src={videoObj.thumbnail} alt={videoObj.title} className={`${VideosStyles.videoImg}`}></img></div>
            <div className={`${VideosStyles.videoTitle}`}><h2>{videoObj.title}</h2></div>
            <span className={`${VideosStyles.videoCreator}`}>{videoObj.creator}</span>
            <div className={`${VideosStyles.videoIcon}`}>
            <span className={` material-icons material-icons-outlined`}>
              watch_later
            </span>
            <span className={`material-icons`}>
              favorite_border
            </span>
            </div>
            
          </div>
        })}
      </div>
      <GenreSlider/>
      <BottomNav/>
    </>

  )
}

export { VideoListing };