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
  // console.log(playlists)
  return (
    <div>
      <Header />
      <div className={`${PlayListStyles["playlists-wrapper"]}`}>
        {playlists && playlists.map((playListObj) => {
          return (<div className={`${PlayListStyles["playlist-card"]}`} key={playListObj._id}>
            <Link to={`/playlists/${playListObj._id}`}>
              {/* {!(videos.length>0)?  */}
              <div className={`${PlayListStyles["empty-playlist"]}`}>
                <span className="material-icons">
                  play_arrow
                </span>
              </div>

              {/* :(<div>
             <img src={videoPlayImg.thumbnail}></img>
            </div>)} */}
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