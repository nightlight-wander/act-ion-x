import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import { addToWatchLater, removeFromWatchLater } from "../../services/watchLaterServices";
import { useVideoActions } from "../../context/VideoActionsContext";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";
import { ModalForm } from "../ModalForm/ModalForm";
import { PlayListsBox } from "../../components/PlayListsBox/PlayListsBox"

const VideoCard = ({ videoObj }) => {
    const { videoActStates: { watchLater }, videoActDispatch } = useVideoActions();
    const [modal, setModal] = useState(false);
    const { eToken } = useAuth();
    const navigate = useNavigate();

    const onWatchLater = (e, videoObj) => {
        e.stopPropagation();
        eToken ? !isVideoFound(watchLater, videoObj) ? addToWatchLater(videoObj, eToken, videoActDispatch) : removeFromWatchLater(videoObj, eToken, videoActDispatch) : navigate("/login");
    }
    const isVideoFound = (watchLater, selectedVideo) => {
        return watchLater.find(videoItem => videoItem._id === selectedVideo._id);
    }

    const modalHandle=()=>{
        eToken?setModal(true):navigate("/login"); 
    }

    return (
        <>
        <div className={`${VideosStyles.videoWrapper}`}>
            <div className={`${VideosStyles.videoBackground}`}>
                <Link to={`/video/${videoObj._id}`}>
                    <img src={videoObj.thumbnail} alt={videoObj.title} className={`${VideosStyles.videoImg}`}></img>
                </Link>
            </div>
            <div className={`${VideosStyles.videoTitle}`}><h2>{videoObj.title}</h2></div>
            <span className={`${VideosStyles.videoCreator}`}>{videoObj.creator}</span>
            <div className={`${VideosStyles.videoIcon}`}>
                <span className={` ${isVideoFound(watchLater,videoObj) ? `${VideosStyles.activeIfNotFound}` : ""} material-icons material-icons-outlined `} onClick={(e) => onWatchLater(e, videoObj)}>
                    watch_later
                </span>
                
                <span className="material-icons" onClick={() => modalHandle()}>
                    add_circle
                </span>
            </div>
           
        </div>
        <PlaylistModal show={modal} close={() => setModal(false)} >
                    <ModalForm />
                    <PlayListsBox videoObj={videoObj} />
        </PlaylistModal>
        </>
    )
}

export { VideoCard };