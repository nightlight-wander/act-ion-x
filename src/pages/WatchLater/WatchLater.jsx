import { WatchLaterCard } from "../../components/WatchLaterCard/WatchLaterCard";
import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import {Header} from "../../components/Header/Header"
import { BottomNav } from "../../components/BottomNav/BottomNav";

const WatchLater = () => {
  const {videoActStates:{watchLater}}=useVideoActions();
  return (
    <div>
      <Header/>
      <div className={`${VideosStyles.videosWrapper}`}>
      {watchLater&& watchLater.map((watchListObj)=>{
        return <WatchLaterCard watchListObj={watchListObj}/>
      })}
      </div>
      <BottomNav/>
    </div>
  )
} 

export {WatchLater};