import { Link } from "react-router-dom";
import { useVideoActions } from "../../context/VideoActionsContext";
import PlayListStyles from "../Playlists/Playlists.module.css";
import { Header } from "../../components/Header/Header";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { useAuth } from "../../context/AuthContext";
import { deletePlaylist } from "../../services/playListServices";

const Playlists = () => {
  const { videoActStates: { playlists }, videoActDispatch } = useVideoActions();
  const { eToken } = useAuth();
 
  return (
    <div>
      <Header />
      <div className={`${PlayListStyles["playlists-wrapper"]}`}>
        {playlists && playlists.map((playListObj) => {
          return (<div className={`${PlayListStyles["playlist-card"]}`} key={playListObj._id}>
            <Link to={`/playlists/${playListObj._id}`}>
              {(playListObj.videos?.length<1)?  
              <div className={`${PlayListStyles["empty-playlist"]}`}>
                <span className={`${PlayListStyles["play-icon"]} material-icons `}>
                  play_arrow
                </span>
                <span className={`${PlayListStyles["playlist-count"]}`}>0</span>
              </div>
              :(<div className={`${PlayListStyles["empty-playlist"]}`}>
             <img src={playListObj.videos[0]?.thumbnail} alt="playlist-video"></img>
             <span className={`${PlayListStyles["play-icon"]} material-icons`}>
                  play_arrow
                </span>
                <span className={`${PlayListStyles["playlist-count"]}`}>{playListObj.videos?.length}</span>
            </div>)} 
            </Link>
            <div className={`${PlayListStyles["playlist-title"]}`}>{playListObj.title}

              <span className="material-icons" onClick={() => deletePlaylist(playListObj._id, eToken, videoActDispatch)}>
                clear
              </span>

            </div>
          </div>)
        })}
      </div>
      <BottomNav />
    </div>
  )
}

export { Playlists }