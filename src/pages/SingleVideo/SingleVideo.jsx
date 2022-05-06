import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideoById } from "../../services/singleVideoServices";
import PlayStyles from "./SingleVideo.module.css";
import { Header } from "../../components/Header/Header";

const SingleVideo = () => {
    const { videoId } = useParams();
    const [singleVideo, setSingleVideo] = useState({});
    useEffect(() => {
        getVideoById(setSingleVideo, videoId)
    }, [videoId])
    const { _id, title, creator, thumbnail } = singleVideo

    return (
        <div>
            <Header />
            {singleVideo &&
                <div key={_id} className={`${PlayStyles["single-video-wrapper"]}`}>
                    <iframe 
                    title={title} 
                    src={`https://youtube.com/embed/${videoId}`} 
                    className={`${PlayStyles["video-iframe"]}`}
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'>
                    </iframe>
                    <div className={`${PlayStyles["video-icons-info"]}`}>
                        <div className={`${PlayStyles["video-icons"]}`}><span className={` material-icons material-icons-outlined`}>
                            watch_later
                        </span>
                            <span className={`material-icons`}>
                                favorite_border
                            </span>
                            <span class="material-icons">
                                playlist_add
                            </span></div>
                        <div className={`${PlayStyles["video-logo-info"]}`}>
                            <img className={`${PlayStyles["video-logo-img"]}`} src={thumbnail} alt="video-logo"></img>
                            <span>{creator}</span>
                        </div>
                    </div>
                    <h2 className={`${PlayStyles["video-title"]} `}>{title}</h2>
                </div>
            }
        </div>
    )
}

export { SingleVideo };