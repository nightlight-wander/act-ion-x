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
    console.log("a");

    const onWatchLater = async (e, videoObj) => {
        e.stopPropagation();
        eToken ? !isVideoFound(watchLater, videoObj) ? addToWatchLater(videoObj, eToken, videoActDispatch) : removeFromWatchLater(videoObj, eToken, videoActDispatch) : navigate("/login");
    }
    const isVideoFound = (watchLater, selectedVideo) => {
        return watchLater.find(videoItem => videoItem._id === selectedVideo._id);
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
                <span className={` material-icons material-icons-outlined`} onClick={(e) => onWatchLater(e, videoObj)}>
                    watch_later
                </span>
                <span class="material-icons" onClick={() => setModal(true)}>
                    add_circle
                </span>
                <PlaylistModal show={modal} close={() => setModal(false)} className={`${VideosStyles["modal-wrapper"]}`}>
                    <ModalForm />
                    <PlayListsBox videoObj={videoObj} />
                </PlaylistModal>
            </div>

        </div>

    )
}

export { VideoCard };