import { useEffect } from "react";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import { Header } from "../../components/Header/Header";
import { useVideos } from "../../context/VideosContest";
import VideosStyles from "./VideoListing.module.css";
import { fetchVideosByCat } from "../../services/videosCatsServices";

const VideoListing = () => {
  const {videoDispatch,videoStates:{category,selectGenre,isGenres,videos}} = useVideos();

  useEffect(()=>{
    (fetchVideosByCat())(videoDispatch,category,selectGenre,isGenres);
    // eslint-disable-next-line
},[category,isGenres,selectGenre])

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