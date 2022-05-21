import { useVideoActions } from "../../context/VideoActionsContext";
import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
import { Header } from "../../components/Header/Header";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import PlayListStyles from "../../pages/Playlists/Playlists.module.css";
import { removeFromHistory } from "../../services/historyServices";
import { useAuth } from "../../context/AuthContext";

const History = () => {
  const {
    videoActStates: { history },
  } = useVideoActions();
  const {eToken}=useAuth();
  const {videoActDispatch}=useVideoActions(); 

  return (
    <div>
      <Header />
      <div className={`${PlayListStyles["playlists-wrapper"]}`}>
        {history?.map((videoObj) => 
          <div className={`${PlayListStyles["playlist-card"]}`}>
            <div className={`${VideosStyles.videoWrapper}`}>
              <div className={`${VideosStyles.videoBackground}`}>
                <img
                  src={videoObj?.thumbnail}
                  alt={videoObj?.title}
                  className={`${VideosStyles.videoImg}`}
                ></img>
              </div>
              <div className={`${VideosStyles.videoTitle}`}>
                <h2>{videoObj?.title}</h2>
              </div>
              <span className={`${VideosStyles.videoCreator}`}>
                {videoObj?.creator}
              </span>
              <button className={`${VideosStyles["cross-box"]}`} onClick={() =>removeFromHistory(videoObj, eToken, videoActDispatch)}>
             <span className={`${VideosStyles["cross-icon"]}`}>×</span>
           </button> 
             </div>
           </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export { History };
