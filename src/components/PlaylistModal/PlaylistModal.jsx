import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
const PlaylistModal = ({children,show,close}) => {

  return (
    <div className={`${VideosStyles["modal-wrapper"]}`}>
        {show &&
        <div className={`${VideosStyles["modal-content-wrapper"]}`}>{children}
        <button onClick={close} className={`${VideosStyles["modal-close-btn"]}`}>X</button></div>
        }
    </div>
  )
}

export {PlaylistModal}; 