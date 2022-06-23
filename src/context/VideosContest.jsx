import { createContext,useContext,useReducer} from "react";
import { GET_CATEGORIES, GET_GENRES, GET_VIDEOS, GET_VIDEOS_BY_QUERY, IS_GENRES_SET, LOADER, SELECTED_GENRE,  SET_CATEGORY } from "../utilities/actions-types";

const VideosContext=createContext();
const useVideos=()=>useContext(VideosContext);

const videoInitialStates={
    categories:[],
    genres:[],
    category:0,
    videos:[],
    videosByQuery:null,
    isGenres:false,
    currentGenre:"",
    loader:false,
    toast:{text:"",mode:""}, 
}

const videoReducerFunc=(state,action)=>{
    switch(action.type){
        case LOADER:
            return{
                ...state,
                loader:action.payload 
            }
        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.payload
            }
        case  GET_VIDEOS:{
            return {
                ...state,
                videos:action.payload
            }
        }
        case GET_VIDEOS_BY_QUERY:{
            return {
                ...state,
                videosByQuery:action.payload
            }
        }
        case GET_GENRES:{
            return {
                ...state,
                genres:[...action.payload]
            }
        }
        case IS_GENRES_SET:{
            return {
                ...state,
                isGenres:action.payload
            }
        }
        case SET_CATEGORY:{
            return{
                ...state,
                category:action.payload
            }
        }
        case SELECTED_GENRE:{
            return {
                ...state,
                currentGenre:action.payload
            }
        }
        default:
            return state
    }

}

const VideosProvider=({children})=>{
    const [videoStates,videoDispatch]=useReducer(videoReducerFunc,videoInitialStates)
    return (
        <VideosContext.Provider value={{videoStates,videoDispatch}}>
            {children}
        </VideosContext.Provider>
    )
}

export {useVideos,VideosProvider};