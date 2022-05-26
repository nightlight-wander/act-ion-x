import { useVideoActions } from "../../context/VideoActionsContext";
import {
  deleteVideoFromPlaylist,
  postVideoToPlaylist,
} from "../../services/playListServices";
import { useAuth } from "../../context/AuthContext";
import VideoStyles from "../../pages/VideoListing/VideoListing.module.css";

const PlayListsBox = ({ videoObj }) => {
  const {
    videoActStates: { playlists },
    videoActDispatch,
  } = useVideoActions();
  const { eToken } = useAuth();


  const playListHandle = (playlist) => {
    const isInPlaylist = playlist.videos.find(
      (item) => item._id === videoObj._id
    );
    !isInPlaylist
      ? postVideoToPlaylist(videoObj, playlist._id, videoActDispatch, eToken)
      : deleteVideoFromPlaylist(
          playlist._id,
          videoObj._id,
          eToken,
          videoActDispatch
        );
    // console.log(playlist);
  };

  return (
    <div className={`${VideoStyles["playlists-wrapper"]}`}>
      {playlists.map((playlist) => {
        return (
          <div
            key={playlist._id}
            
            className={`${VideoStyles["playlist-title"]}`}
          >
            <span className={`${VideoStyles["playlist-handle"]}`}>
              {!playlist.videos.find((item) => item._id === videoObj._id) ? (
                <span className="material-icons" onClick={() => playListHandle(playlist)}>playlist_add</span>
              ) : (
                <span className="material-icons" onClick={() => playListHandle(playlist)} >playlist_add_check</span>
              )}
              
            </span>
            <span>{playlist.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export { PlayListsBox };
