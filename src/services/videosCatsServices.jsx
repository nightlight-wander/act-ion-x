import axios from "axios";
import { GET_CATEGORIES,GET_VIDEOS } from "../utilities/actions-types";

export const fetchVideosByCat = () => async (videoDispatch,category,selectGenre,isGenres) => {
    try {
        const getCategories = axios.get("/api/categories");
        const getVideos = axios.get("/api/videos");
        const [{ data: { categories } }, { data: { videos } }] = await Promise.all([getCategories, getVideos]);
        const videosByCat = categories.map((catObj) => {
            return videos.filter((curVideoObj) => {
                return curVideoObj.category === catObj.category
            })
        })
        videoDispatch({type:GET_CATEGORIES,payload:categories})
        const videosByGenre = [...videosByCat[category]].filter(videoObj => selectGenre.includes(videoObj.genreName))
        isGenres === true ? videoDispatch({type:GET_VIDEOS,payload:videosByGenre}) :  videoDispatch({type:GET_VIDEOS,payload:videosByCat[category]})
    } catch (error) {
        console.log(error);
    }
}