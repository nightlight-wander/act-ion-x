import { WatchLaterCard } from "../../components/WatchLaterCard/WatchLaterCard";
import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import {Header} from "../../components/Header/Header"
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { useVideos } from "../../context/VideosContest";
import { Loader } from "../../components/Loader/Loader";

const WatchLater = () => {
  const {videoActStates:{watchLater}}=useVideoActions();
  const {videoStates:loader}=useVideos();
  return (
    <div>
      <Header/>
      <div className={`${VideosStyles.videosWrapper}`}>
      {loader?<Loader/>:watchLater&& watchLater.map((watchListObj)=>{
        return <WatchLaterCard watchListObj={watchListObj} key={watchListObj._id}/>
      })}
      </div>
      <BottomNav/>
    </div>
  )
} 

export {WatchLater};