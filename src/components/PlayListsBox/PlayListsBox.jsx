import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import { ADD_IN_CURPLAYLIST, CUR_PLAYLIST, PLAYLISTS } from "../../utilities/actions-types";
import { postVideoToPlaylist } from "../../services/playListServices";
import { useAuth } from "../../context/AuthContext";

const PlayListsBox = ({videoObj}) => {
    const {videoActStates:{playlists},videoActDispatch}=useVideoActions();
    const {eToken}=useAuth();
    const playListHandle=(playlist)=>{
    //    const videoInPlaylist=playlist.videos.find((playVideo)=>playVideo._id===videoObj._id)
       console.log(videoObj)
           postVideoToPlaylist(videoObj,playlist._id,videoActDispatch,eToken) 
    }
  //   useEffect(()=>{
  //     getPlaylists(eToken,videoActDispatch);
  // },[])

  return (
    <div>
        {playlists.map((playlist)=>{
            return <div key={playlist._id} onClick={()=>playListHandle(playlist)} >{playlist.title}</div>
        })}
    </div>
  )
}

export {PlayListsBox};

// className={listItem._id===e.target._id?`${VideosStyles["active"]}`:""}