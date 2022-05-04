import axios from "axios";

export const getVideoById=async(setSingleVideo,videoId)=>{
    try{
        const {data:{video}}=await axios.get(`/api/video/${videoId}`);
        setSingleVideo(()=>video);
    }catch(error){
        console.log(error);
    }
}