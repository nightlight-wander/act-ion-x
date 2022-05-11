import { createContext,useContext,useReducer} from "react";
import { GET_CATEGORIES, GET_GENRES, GET_VIDEOS, IS_GENRES_SET, SELECT_GENRES, SET_CATEGORY } from "../utilities/actions-types";

const VideosContext=createContext();
const useVideos=()=>useContext(VideosContext);

const videoInitialStates={
    categories:[],
    genres:[],
    selectGenre:[],
    category:0,
    videos:[],
    isGenres:false
}

const videoReducerFunc=(state,action)=>{
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.payload
            }
        case SELECT_GENRES:{
            return{
                ...state,
                // selectGenre:(!state.selectGenre.includes(action.payload))?[...state.selectGenre,action.payload]:action.payload
                selectGenre:action.payload
            }
        }
        case  GET_VIDEOS:{
            return {
                ...state,
                videos:action.payload
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
        default:
            return state
        
    }

}

const VideosProvider=({children})=>{
    // const [categories,setCategories]=useState([]);
    // const [genres,setGenres]=useState([]);
    // const [selectGenre,setSelectGenre]=useState([]);
    // const [category,setCategory]=useState(0);
    // const [videos,setVideos]=useState([]);
    // const [isGenres,setIsGenres]=useState(false);
    const [videoStates,videoDispatch]=useReducer(videoReducerFunc,videoInitialStates)
    return (
        <VideosContext.Provider value={{videoStates,videoDispatch}}>
            {children}
        </VideosContext.Provider>
    )
}

export {useVideos,VideosProvider};