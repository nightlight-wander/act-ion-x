import { createContext, useContext, useEffect, useReducer } from "react";
import { getHistory } from "../services/historyServices";
import { getPlaylists } from "../services/playListServices";
import { getWatchLater } from "../services/watchLaterServices";
import { UPDATE_CURPLAYLIST,  PLAYLISTS, WATCH_LATER, HISTORY} from "../utilities/actions-types";
import { useAuth } from "./AuthContext";
const VideoActionsContext = createContext();
const useVideoActions = () => useContext(VideoActionsContext);

const intialStates = {
    watchLater: [],
    history: [],
    likes: [],
    playlists: [],
    // curPlayList:{   _id:uuid(),
    //     listName:"Favourites",
    //     videos:[]
    // },
}

const videoActionsReducerFunc = (state, action) => {
    switch (action.type) {
        case WATCH_LATER:
            return {
                ...state,
                watchLater: action.payload 
            }
        case PLAYLISTS:
            return {
                ...state,
                playlists: action.payload
            }
        case UPDATE_CURPLAYLIST:
            return {
                ...state,
                playlists: state.playlists.map((playlist) =>
                    playlist._id === action.payload._id
                        ? { ...playlist, videos: action.payload.videos } : playlist)
            }
        case HISTORY:{
            return{
                ...state,
                history:action.payload
            }
        }
        default:
            return state
    }
}



const VideoActionsProvider = ({ children }) => {
    const [videoActStates, videoActDispatch] = useReducer(videoActionsReducerFunc, intialStates);
    const {eToken}=useAuth();

    useEffect(()=>{
        if(eToken){
            getWatchLater(eToken,videoActDispatch);
            getPlaylists(eToken,videoActDispatch);
            getHistory(eToken,videoActDispatch);
        }
    },[eToken])

    return (
        <VideoActionsContext.Provider value={{ videoActStates, videoActDispatch }}>
            {children}
        </VideoActionsContext.Provider>
    )
}

export { VideoActionsProvider, useVideoActions };