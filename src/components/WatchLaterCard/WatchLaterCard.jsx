import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import { removeFromWatchLater } from "../../services/watchLaterServices";

const WatchLaterCard = ({ watchListObj }) => {
    const { videoActDispatch } = useVideoActions();
    const { eToken } = useAuth();
    return (
        <div className={`${VideosStyles.videoWrapper}`}>
                <div className={`${VideosStyles.videoBackground}`}>
                <Link to={`/video/${watchListObj._id}`}>
                    <img src={watchListObj.thumbnail} alt={watchListObj.title} className={`${VideosStyles.videoImg}`}></img>
                </Link>
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