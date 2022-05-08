import axios from "axios";
import { UPDATE_CURPLAYLIST, PLAYLISTS } from "../utilities/actions-types";

export const postPlaylists=async(playListName,videoActDispatch,eToken,setPlayListName)=>{
  try{
      const response=await axios.post("/api/user/playlists",{
        playlist: {title: playListName}
     },{headers:{authorization:eToken}});
      console.log(response);
      videoActDispatch({type:PLAYLISTS,payload:response.data.playlists});
      setPlayListName(()=>"")
  }catch(error){
      console.log(error);
  }
}

export const postVideoToPlaylist=async(videoObj,playlistId,videoActDispatch,eToken)=>{
    try{
        const response=await axios.post(`/api/user/playlists/${playlistId}`,
        {video:videoObj},
        {headers:{authorization:eToken}})
        console.log(response);
        videoActDispatch({type:UPDATE_CURPLAYLIST,payload:response.data.playlist})
    }catch(error){
        console.log(error);
    }
}

export const deletePlaylist=async(playlistId,eToken,videoActDispatch)=>{
    try{
        const response=await axios.delete(`/api/user/playlists/${playlistId}`,
        {headers:{authorization:eToken}})
        console.log(response);
        videoActDispatch({type:PLAYLISTS,payload:response.data.playlists})
    }catch(error){
        console.log(error);
    }
}

export const deleteVideoFromPlaylist=async(playlistId,videoId,eToken,videoActDispatch)=>{
    try{
        const response=await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
        {headers:{authorization:eToken}})
        console.log(response);
        videoActDispatch({type:UPDATE_CURPLAYLIST,payload:response.data.playlist})
    }catch(error){
        console.log(error);
    }
}