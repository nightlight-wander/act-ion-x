import { useEffect } from "react";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { GenreSlider } from "../../components/GenreSlider/GenreSlider";
import { Header } from "../../components/Header/Header";
import { useVideos } from "../../context/VideosContest";
import VideosStyles from "./VideoListing.module.css";
import { fetchVideosByCat } from "../../services/videosCatsServices";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Loader } from "../../components/Loader/Loader";

const VideoListing = () => {
  const {
    videoDispatch,
    videoStates: {
      category,
      isGenres,
      videos,
      videosByQuery,
      currentGenre,
      loader,
    },
  } = useVideos();

  useEffect(() => {
    fetchVideosByCat()(videoDispatch, category, isGenres, currentGenre);
  }, [category, isGenres, videoDispatch, currentGenre]);

  return (
    <>
      <Header />
      <div className={`${VideosStyles.videosWrapper}`}>
        {loader ? (
          <Loader />
        ) : (
          videos &&
          (videosByQuery ?? videos).map((videoObj) => (
            <VideoCard key={videoObj._id} videoObj={videoObj} />
          ))
        )}
      </div>
      <GenreSlider />
      <BottomNav />
    </>
  );
};

export { VideoListing };
