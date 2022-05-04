import { Link } from "react-router-dom";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";

const VideoCard = ({ videoObj }) => {
    return (
        <Link to={`/video/${videoObj._id}`}><div className={`${VideosStyles.videoWrapper}`}>
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
        </Link>
    )
}

export { VideoCard };