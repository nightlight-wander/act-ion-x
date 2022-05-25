import HeaderStyles from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState,useEffect } from "react";
import { useVideos } from "../../context/VideosContest";
import { GET_VIDEOS_BY_QUERY } from "../../utilities/actions-types";

const Header = () => {
  const { eToken } = useAuth();
  const [searchQuery,setSearchQuery]=useState("");
  const {videoStates:videos,videoDispatch}=useVideos();

  const debounce=(cb,delay=1000)=>{
    let timeOut;
    return (...args)=>{
      clearTimeout(timeOut);
      timeOut=setTimeout(()=>{
        console.log(...args)
        cb(...args)
      },delay)
    }
  }
  const updateDebounceText=debounce(text=>setSearchQuery(()=>text));
  useEffect(()=>{
    fetchVideosByQuery();
    // eslint-disable-next-line
  },[searchQuery])

  const fetchVideosByQuery=()=>{
    if(searchQuery!==""){
      const videosByQuery=videos.videos.filter((video)=>video.title.trim().toLowerCase().includes(searchQuery)||video.title.trim().toLowerCase().split().includes(searchQuery));
      videoDispatch({type:GET_VIDEOS_BY_QUERY,payload:[...videosByQuery]})
    }else{
      videoDispatch({type:GET_VIDEOS_BY_QUERY,payload:null})
    }
  }

  const headLinkStyles=({isActive}) => ({
    color: isActive ? `var(--blackl1)` : "",
    transform: isActive?`translateY(-3px)`:"",
  })


  return (
    <header className={`${HeaderStyles.header}`}>
      <div className={`${HeaderStyles["logo-head"]} flex-vCenter`} >
        <NavLink to="/" className={`${HeaderStyles["logo-name"]}`}>
          ACT-IONS
          <span className={`${HeaderStyles["logo-icon"]}`}></span>
        </NavLink>
      </div>
      <div className={`${HeaderStyles["search-bar"]}`}>
        <input type="text" className={`${HeaderStyles["search-input"]}`} placeholder="Search" aria-label="search" onChange={(e)=>updateDebounceText(e.target.value)}/>
        <button className={`${HeaderStyles["submit-btn"]}`}><span className=" material-icons material-icons-outlined search-submit">
          search</span></button>
      </div>
      <input type="checkbox" id="nav-toggle" className={`${HeaderStyles["nav-toggle"]}`}/>

      <div className={`${HeaderStyles["video-actions"]} flex-vCenter`}>
        
        <NavLink to="/playlists" className={`flex-col flex-vCenter`} style={headLinkStyles}>
          <span className={`material-icons ${HeaderStyles["icon"]}`}>
            playlist_add
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Playlist</span>
        </NavLink>
        <NavLink to="/watch-later" className={`flex-col flex-vCenter`} style={headLinkStyles}>
          <span className={`material-icons ${HeaderStyles["icon"]}`}>
            watch_later
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Watch Later</span>
        </NavLink>
        <NavLink to="/history" className={`flex-col flex-vCenter`} style={headLinkStyles}>
          <span className={`material-icons material-icons-outlined ${HeaderStyles["icon"]}`}>
            history
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>History</span>
        </NavLink>
        {/* <NavLink to="/liked" className={`flex-col flex-vCenter`} style={({isActive}) => ({
    color: isActive ? `var(--light-red)` : ""
  })}>
          <span class="material-icons material-icons-outlined">
            favorite_border
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Liked</span>
        </NavLink> */}
        {!eToken ? <NavLink to="/login" className={`flex-col flex-vCenter`} style={headLinkStyles}>
          <span className={`material-icons ${HeaderStyles["icon"]}`}>
            perm_identity
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Login</span>
        </NavLink> :
        <NavLink to="/profile" className={`flex-col flex-vCenter`} style={headLinkStyles}>
          <span className={`material-icons ${HeaderStyles["icon"]}`}>
            perm_identity
          </span>
          <span className={`${HeaderStyles["video-actions-title"]}`}>Profile</span>
        </NavLink>
        }
       
      </div>
      <label htmlFor="nav-toggle" className={`${HeaderStyles["nav-toggle-label"]}`}>
        <span></span>
      </label>

     
     
    </header>
  )
}

export { Header };