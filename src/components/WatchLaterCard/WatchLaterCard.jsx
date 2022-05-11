import { useAuth } from "../../context/AuthContext";
import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import PlayListStyles from "../../pages/Playlists/Playlists.module.css";
import { removeFromWatchLater } from "../../services/watchLaterServices";

const WatchLaterCard = ({ watchListObj }) => {
    const { videoActDispatch } = useVideoActions();
    const { eToken } = useAuth();
    return (
        <div className={`${PlayListStyles["playlists-wrapper"]}`}>
                <div className={`${VideosStyles.videoBackground}`}>
                    <img src={watchListObj.thumbnail} alt={watchListObj.title} className={`${VideosStyles.videoImg}`}></img>
                </div>
                <div className={`${VideosStyles.videoTitle}`}><h2>{watchListObj.title}</h2></div>
                <span className={`${VideosStyles.videoCreator}`}>{watchListObj.creator}</span>
                <button className={`${VideosStyles["cross-box"]}`} onClick={() => removeFromWatchLater(watchListObj, eToken, videoActDispatch)}>
                    <span className={`${VideosStyles["cross-icon"]}`}>×</span>
                </button>
        </div>
    )
}

export { WatchLaterCard }; 