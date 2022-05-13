import { useEffect } from "react";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import { Header } from "../../components/Header/Header";
import { useVideos } from "../../context/VideosContest";
import VideosStyles from "./VideoListing.module.css";
import { fetchVideosByCat } from "../../services/videosCatsServices";
import { VideoCard } from "../../components/VideoCard/VideoCard";

const VideoListing = () => {
  const { videoDispatch, videoStates: { category, selectGenre, isGenres, videos } } = useVideos();

  useEffect(() => {
    (fetchVideosByCat())(videoDispatch, category, selectGenre, isGenres);
    // eslint-disable-next-line
  }, [category, isGenres, selectGenre])

  return (
    <>
      <Header />
      <div className={`${VideosStyles.videosWrapper}`}>
        {videos.map((videoObj) => (
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

