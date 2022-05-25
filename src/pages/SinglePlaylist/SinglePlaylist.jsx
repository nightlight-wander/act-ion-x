import { useParams,Link } from "react-router-dom";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Header } from "../../components/Header/Header";
import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import PlayListStyles from "../Playlists/Playlists.module.css";
import { deleteVideoFromPlaylist } from "../../services/playListServices";
import { useAuth } from "../../context/AuthContext"; 

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  const { videoActStates: { playlists }, videoActDispatch } = useVideoActions();
  const { eToken } = useAuth();
  const playListFound = playlists.find(item => item._id === playlistId)
  const playListVideos = playListFound?.videos;
  // console.log(playListFound)
  // console.log(playListVideos)
  return (
    <>
      <Header />
      <div className={`${PlayListStyles["playlists-wrapper"]}`}>
        {playListVideos?.map((videoObj) =>
          <div className={`${PlayListStyles["playlist-card"]}`} key={videoObj._id}>
            <div className={`${VideosStyles.videoWrapper}`}>
              <div className={`${VideosStyles.videoBackground}`}>
              <Link to={`/video/${videoObj._id}`}>
                <img src={videoObj.thumbnail} alt={videoObj.title} className={`${VideosStyles.videoImg}`}></img>
              </Link>
              </div>
              <div className={`${VideosStyles.videoTitle}`}><h2>{videoObj.title}</h2></div>
              <span className={`${VideosStyles.videoCreator}`}>{videoObj.creator}</span>
              <button className={`${VideosStyles["cross-box"]}`} onClick={() => deleteVideoFromPlaylist(playlistId, videoObj._id, eToken, videoActDispatch)}>
                <span className={`${VideosStyles["cross-icon"]}`}>×</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </>
  )
}

export { SinglePlaylist };