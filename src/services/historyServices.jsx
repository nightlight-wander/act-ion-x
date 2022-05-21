import axios from "axios";
import { HISTORY } from "../utilities/actions-types";

export const addToHistory=async(singleVideo,eToken,videoActDispatch)=>{
    try{
        const response=await axios.post("/api/user/history",{video:singleVideo},{headers:{authorization:eToken}});
        videoActDispatch({type:HISTORY, payload:response.data.history})
    }catch(error){
        console.log(error);
    }
}

export const removeFromHistory=async(videoObj,eToken,videoActDispatch)=>{
    try{
        const response=await axios.delete(`/api/user/history/${videoObj._id}`,{headers:{authorization:eToken}});
        videoActDispatch({type:HISTORY,payload:response.data.history});
    }catch(error){
        console.log(error);
    }
}