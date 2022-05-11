import { useVideoActions } from "../../context/VideoActionsContext";
import { postVideoToPlaylist } from "../../services/playListServices";
import { useAuth } from "../../context/AuthContext";
import VideoStyles from "../../pages/VideoListing/VideoListing.module.css";

const PlayListsBox = ({videoObj}) => {
    const {videoActStates:{playlists},videoActDispatch}=useVideoActions();
    const {eToken}=useAuth();
    const playListHandle=(playlist)=>{
           postVideoToPlaylist(videoObj,playlist._id,videoActDispatch,eToken) 
    }

  return (
    <div className={`${VideoStyles["playlists-wrapper"]}`}>
        {playlists.map((playlist)=>{
            return <div key={playlist._id} onClick={()=>playListHandle(playlist)} className={`${VideoStyles["playlist-title"]}`}>{playlist.title}</div>
        })}
    </div>
  )
}

export {PlayListsBox};

// className={listItem._id===e.target._id?`${VideosStyles["active"]}`:""}