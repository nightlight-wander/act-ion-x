import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import { addToWatchLater,removeFromWatchLater } from "../../services/watchLaterServices";
import { useVideoActions } from "../../context/VideoActionsContext";

const VideoCard = ({ videoObj }) => {
    const {videoActStates:{watchLater},videoActDispatch}=useVideoActions();
    const {eToken}=useAuth();
    const navigate=useNavigate();
    
    const onWatchLater=(e,videoObj)=>{
        e.stopPropagation();
        eToken?!isVideoFound(watchLater,videoObj)?addToWatchLater(videoObj,eToken,videoActDispatch):removeFromWatchLater(videoObj,eToken,videoActDispatch):navigate("/login");
    }
    const isVideoFound=(watchLater,selectedVideo)=>{
        return watchLater.find(videoItem=>videoItem._id===selectedVideo._id);
    }

    return (
        <div className={`${VideosStyles.videoWrapper}`}>
            <div className={`${VideosStyles.videoBackground}`}>
                <Link to={`/video/${videoObj._id}`}>
                    <img src={videoObj.thumbnail} alt={videoObj.title} className={`${VideosStyles.videoImg}`}></img>
                </Link>
            </div>
            <div className={`${VideosStyles.videoTitle}`}><h2>{videoObj.title}</h2></div>
            <span className={`${VideosStyles.videoCreator}`}>{videoObj.creator}</span>
            <div className={`${VideosStyles.videoIcon}`}>
                <span className={` material-icons material-icons-outlined`} onClick={(e)=>onWatchLater(e,videoObj)}>
                    watch_later
                </span>
                <span class="material-icons">
                    add_circle
                </span>
            </div>
        </div>
        
    )
}

export { VideoCard };