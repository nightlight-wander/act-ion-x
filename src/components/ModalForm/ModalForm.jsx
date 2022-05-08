import { useRef ,useState} from "react";
import { useVideoActions } from "../../context/VideoActionsContext";
import { PLAYLISTS } from "../../utilities/actions-types";
import { postPlaylists } from "../../services/playListServices";
import { useAuth } from "../../context/AuthContext";

const ModalForm = () => {
    const {videoActDispatch}=useVideoActions();
    const {eToken}=useAuth();
    const [playListName,setPlayListName]=useState("");
    // useEffect(()=>{
    //     playlistCreateOnSubmit()
    // })
    const playlistCreate=async(e)=>{
        e.preventDefault();
        postPlaylists(playListName,videoActDispatch,eToken,setPlayListName);
    }
    
  return (
    <form >
       <div>
           <input type="text" placeholder="Create Playlist" required value={playListName} onChange={(e)=>setPlayListName(e.target.value)}></input>
           <button type="submit" onClick={(e)=>playlistCreate(e)}>Create</button>
       </div>
    </form>
  )
}

export {ModalForm};