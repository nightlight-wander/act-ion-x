import { useEffect } from "react";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import { Header } from "../../components/Header/Header";
import { useVideos } from "../../context/VideosContest";
import VideosStyles from "./VideoListing.module.css";
import { fetchVideosByCat } from "../../services/videosCatsServices";
import { VideoCard } from "../../components/VideoCard/VideoCard";

const VideoListing = () => {
  const { videoDispatch, videoStates: { category, selectGenre, isGenres, videos,videosByQuery,currentGenre} } = useVideos();

  useEffect(() => {
    (fetchVideosByCat())(videoDispatch, category, selectGenre, isGenres,currentGenre);
  }, [category, isGenres, selectGenre,videoDispatch,currentGenre])

  return (
    <>
      <Header />
      <div className={`${VideosStyles.videosWrapper}`}>
        {videos&&(videosByQuery??videos).map((videoObj) => (
          <VideoCard key ={videoObj._id} videoObj={videoObj}
          />
        ))}
      </div>
      <GenreSlider />
      <BottomNav />
    </>

  )
}

export { VideoListing };

