import axios from "axios";
import { WATCH_LATER } from "../utilities/actions-types";

export const addToWatchLater=async(videoObj,eToken,videoActDispatch)=>{
    console.log(videoObj)
  try{
      const response=await axios.post("/api/user/watchlater",{video:videoObj},{headers:{authorization:eToken}});
      console.log(response);
      videoActDispatch({type:WATCH_LATER,payload:response.data.watchlater})
  }catch(error){
      console.log(error);
  }
}

export const removeFromWatchLater=async(videoObj,eToken,videoActDispatch)=>{
    try{
        const response=await axios.delete(`/api/user/watchlater/${videoObj._id}`,{headers:{authorization:eToken}});
        videoActDispatch({type:WATCH_LATER,payload:response.data.watchlater})
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

export const getWatchLater=async(eToken,videoActDispatch)=>{
  try{
      const response=await axios.get("/api/user/watchlater",{headers:{authorization:eToken}});
      console.log(response);
      videoActDispatch({type:WATCH_LATER,payload:response.data.watchlater})
  }catch(error){
      console.log(error);
  }
}