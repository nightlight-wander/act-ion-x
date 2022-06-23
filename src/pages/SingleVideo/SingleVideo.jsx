import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideoById } from "../../services/singleVideoServices";
import PlayStyles from "./SingleVideo.module.css";
import { Header } from "../../components/Header/Header";
import { useAuth } from "../../context/AuthContext";
import { useVideoActions } from "../../context/VideoActionsContext";
import { addToHistory } from "../../services/historyServices";
import VideosStyles from "../VideoListing/VideoListing.module.css";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../services/watchLaterServices";

const SingleVideo = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { eToken } = useAuth();
  const {
    videoActStates: { history, watchLater },
    videoActDispatch,
  } = useVideoActions();
  const [singleVideo, setSingleVideo] = useState({});
  useEffect(() => {
    getVideoById(setSingleVideo, videoId);
  }, [videoId]);
  const { _id, title, creator, thumbnail } = singleVideo;

  const isVideoInHistory = () => {
    return history?.find((item) => item._id === _id);
  };

  const onWatchLater = (e) => {
    e.stopPropagation();
    eToken
      ? !isVideoFound(watchLater, singleVideo)
        ? addToWatchLater(singleVideo, eToken, videoActDispatch)
        : removeFromWatchLater(singleVideo, eToken, videoActDispatch)
      : navigate("/login");
  };
  const isVideoFound = (watchLater) => {
    return watchLater.find((videoItem) => videoItem._id === _id);
  };

  
  useEffect(() => {
    if (!isVideoInHistory() && Object.keys(singleVideo).length >= 1 && eToken)
      addToHistory(singleVideo, eToken, videoActDispatch);
    // eslint-disable-next-line
  }, [singleVideo]);

  return (
    <div>
      <Header />
      {singleVideo && (
        <div key={_id} className={`${PlayStyles["single-video-wrapper"]}`}>
          <iframe
            title={title}
            src={`https://youtube.com/embed/${videoId}`}
            className={`${PlayStyles["video-iframe"]}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className={`${PlayStyles["video-icons-info"]}`}>
            <div className={`${PlayStyles["video-icons"]}`}>
              <span
                className={` ${
                  isVideoFound(watchLater)
                    ? `${VideosStyles.activeIfNotFound}`
                    : ""
                } material-icons material-icons-outlined `}
                onClick={(e) => onWatchLater(e)}
              >
                watch_later
              </span>
              {/* <span className={`material-icons`}>
                                favorite_border
                            </span> */}
              {/* <span className="material-icons" onClick={() => modalHandle()}>
                playlist_add
              </span> */}
            </div>
            <div className={`${PlayStyles["video-logo-info"]}`}>
              <img
                className={`${PlayStyles["video-logo-img"]}`}
                src={thumbnail}
                alt="video-logo"
              ></img>
              <span>{creator}</span>
            </div>
          </div>
          <h2 className={`${PlayStyles["video-title"]} `}>{title}</h2>
        </div>
      )}
    </div>
  );
};

export { SingleVideo };
