import VideosStyles from "../../pages/VideoListing/VideoListing.module.css";
const PlaylistModal = ({children,show,close}) => {

  return (
    <div className={`${VideosStyles["modal-wrapper"]}`}>
        {show &&
        <div>{children}
        <button onClick={close}>X</button></div>
        }
    </div>
  )
}

export {PlaylistModal};